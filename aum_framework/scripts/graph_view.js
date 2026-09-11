// scripts/graph_view.js
// Simple Express server that visualises the knowledge‑graph stored by aum_embed.js

const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

// No static assets needed (Cytoscape loads from CDN)
// app.use('/static', express.static(path.join(__dirname, '..', 'node_modules', 'vis-network', 'dist')));

// Main UI page
app.get('/', (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <title>AUM Knowledge Graph</title>
        <script src="https://unpkg.com/cytoscape@3.28.1/dist/cytoscape.min.js"></script>
        <script src="https://unpkg.com/cytoscape-cose-bilkent@4.0.0/cytoscape-cose-bilkent.min.js"></script>
        <style>
          body { font-family: 'Inter', sans-serif; margin:0; padding:0; background:#fafafa; color:#333; transition: background 0.3s, color 0.3s; }
          #graph { width:100%; height:90vh; border:none; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.15); background: linear-gradient(135deg, #f5f7fa, #c3cfe2); }
          body.dark { background:#1e1e1e; color:#e0e0e0; }
          body.dark #graph { background: linear-gradient(135deg, #2c3e50, #4a607c); }

        </style>
      </head>
      <body>
        <h2 style="text-align:center;">🧠 AUM Interaction Knowledge Graph</h2>
          <div id="clock" style="position:absolute; top:10px; right:10px; font-weight:bold; font-size:1.2rem; color:#333;"></div>
          <button id="zoom-in" style="position:absolute; top:10px; left:10px; font-size:1rem;">+</button>
          <button id="zoom-out" style="position:absolute; top:40px; left:10px; font-size:1rem;">-</button>
          <button id="theme-toggle" style="position:absolute; top:70px; left:10px; font-size:0.9rem; background:none; border:none; cursor:pointer;">🌓</button>
          <div id="stats" style="position:absolute; top:70px; left:10px; font-weight:normal; font-size:1rem; color:#555;"></div>
          <div id="lastUpdate" style="position:absolute; top:100px; left:10px; font-weight:normal; font-size:0.9rem; color:#777;"></div>
          <div id="details" style="position:absolute; top:130px; left:10px; width:260px; padding:8px; background:#f9f9f9; border:1px solid #ccc; font-size:0.9rem; color:#333; overflow:auto;"></div>

        <div id="graph" style="margin-top:40px;"></div>
        <script>
          // Clock update
          const updateClock = () => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString();
            document.getElementById('clock').textContent = timeStr;
          };
          setInterval(updateClock, 1000);
          updateClock();

          // Incremental graph update (preserves layout)
          const existingNodeIds = new Set();
          const existingEdgeIds = new Set();
          const loadGraph = () => {
            fetch('/api/graph')
              .then(r=>r.json())
              .then(data=>{
                if (typeof cytoscape === 'undefined') {
                  console.error('Cytoscape library not loaded');
                  return;
                }
                const container = document.getElementById('graph');
                if (!window.cy) {
                  // First load – create Cytoscape instance with empty elements
                  window.cy = cytoscape({
                    container: container,
                    elements: [],
                    style: [
                      { selector: 'node', style: {
                          'label': 'data(label)',
                           'background-fill': 'linear-gradient',
                           'background-gradient-stop-colors': ['#4A90E2', '#2C3E50'],
                           'background-gradient-direction': 'to-bottom',
                          'shape': 'round-rectangle',
                          'width': 'label',
                          'height': 40,
                          'padding': '10px',
                          'border-width': 2,
                          'border-color': '#2C3E50',
                          'color': '#fff',
                          'font-size': '12px',
                          'text-valign': 'center',
                          'text-halign': 'center',
                          'text-wrap': 'wrap',
                          'text-max-width': 80,
                          'shadow-blur': 10,
                          'shadow-color': '#000',
                          'shadow-offset-x': 2,
                          'shadow-offset-y': 2,
                          'shadow-opacity': 0.5
                        },
                       {
                         selector: 'node:hover',
                         style: {
                           'background-fill': 'linear-gradient',
                           'background-gradient-stop-colors': ['#FFD700', '#FF8C00'],
                           'background-gradient-direction': 'to-bottom',
                           'border-color': '#fff',
                           'shadow-blur': 15,
                           'shadow-color': '#ffae42'
                         }
                       },
                      { selector: 'edge', style: {
                          'width': 2,
                          'line-color': '#A0A0A0',
                          'target-arrow-shape': 'triangle',
                          'target-arrow-color': '#A0A0A0',
                          'curve-style': 'bezier',
                          'opacity': 0.8
                        } }
                    ],
                    window.cy.layout({ name: 'cose-bilkent', animate: true, animationDuration: 500, idealEdgeLength: 150, nodeRepulsion: 4000, gravity: 0.25, numIter: 2500, randomize: true, fit: false }).run();
                  });
                  // Zoom controls
                document.getElementById('zoom-in').addEventListener('click',()=>{
                  const zoom = window.cy.zoom();
                  window.cy.zoom({ level: zoom * 1.2, renderedPosition: { x: window.innerWidth/2, y: window.innerHeight/2 } });
                });
                document.getElementById('zoom-out').addEventListener('click',()=>{
                  const zoom = window.cy.zoom();
                  window.cy.zoom({ level: zoom / 1.2, renderedPosition: { x: window.innerWidth/2, y: window.innerHeight/2 } });
                });
                // Click listener for node details
                  window.cy.on('tap', 'node', function (evt) {
                    const node = evt.target;
                    document.getElementById('details').innerHTML = '<strong>Node ' + node.id() + '</strong><br/>' + node.data('title');
                  });
                }
                const nodes = window.cy.nodes();
                const edges = window.cy.edges();
                data.nodes.forEach(n => {
                  if (!existingNodeIds.has(n.id)) {
                    window.cy.add({
                      group: 'nodes',
                      data: {
                        id: n.id,
                        label: n.label,
                        title: n.title
                      }
                    });
                    existingNodeIds.add(n.id);
                  }
                });
                data.edges.forEach(e => {
                  const edgeId = e.from + '->' + e.to;
                  if (!existingEdgeIds.has(edgeId)) {
                    window.cy.add({
                      group: 'edges',
                      data: {
                        id: edgeId,
                        source: e.from,
                        target: e.to
                      }
                    });
                    existingEdgeIds.add(edgeId);
                  }
                });
                console.log('Graph updated – nodes', window.cy.nodes().length, 'edges', window.cy.edges().length);
                document.getElementById('stats').textContent = 'Nodes: ' + window.cy.nodes().length + ' | Edges: ' + window.cy.edges().length;
                const now = new Date();
                document.getElementById('lastUpdate').textContent = 'Last update: ' + now.toLocaleTimeString();
                // Apply physics layout with animation
                window.cy.layout({
                  name: 'cose-bilkent',
                  animate: true,
                  animationDuration: 500,
                  idealEdgeLength: 150,
                  nodeRepulsion: 4000,
                  gravity: 0.25,
                  numIter: 2500,
                  randomize: true,
                  fit: false,
                  refresh: 30,
                  maxSimulationTime: 1500
                }).run();
              })
              .catch(err=>{ console.error('Failed to load graph', err); });
          };
          loadGraph();
          setInterval(loadGraph, 5000);
        </script>
      </body>
    </html>
  `);
});

// API endpoint that reads the SQLite metadata and converts it to vis‑network format
app.get('/api/graph', (req, res) => {
  const dbPath = path.join(process.env.HOME, '.aum', 'embedding', 'meta.sqlite');
  const db = new sqlite3.Database(dbPath);
  db.all('SELECT * FROM entries ORDER BY timestamp ASC', (err, rows) => {
    if (err) {
      res.status(500).json({error: err.message});
      return;
    }
    const nodes = rows.map(r => ({
      id: r.id,
      label: r.project ? r.project.split('/').pop() : 'proj',
      title: `<b>Intent:</b> ${r.intent || ''}<br/><b>Model:</b> ${r.model || ''}<br/><b>Time:</b> ${r.timestamp}`,
      shape: 'box',
      color: '#FFD580'
    }));
    const edges = [];
    for (let i = 1; i < rows.length; i++) {
      edges.push({ from: rows[i-1].id, to: rows[i].id, arrows: 'to' });
    }
    res.json({nodes, edges});
  });
});

app.listen(PORT, () => console.log(`🔗 AUM Knowledge Graph UI → http://localhost:${PORT}`));
