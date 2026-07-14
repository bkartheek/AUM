// Cosmic bodies dataset
const cosmicBodies = [
  {
    id: 1,
    name: "Sun",
    type: "star",
    description: "The star at the center of the Solar System. It is a nearly perfect sphere of hot plasma.",
    mass: "1.989 × 10^30 kg",
    distance: "0 km (Center)"
  },
  {
    id: 2,
    name: "Earth",
    type: "planet",
    description: "Our home planet. The third planet from the Sun and the only astronomical object known to harbor life.",
    mass: "5.972 × 10^24 kg",
    distance: "149.6 Million km"
  },
  {
    id: 3,
    name: "Orion Nebula",
    type: "nebula",
    description: "A diffuse nebula situated in the Milky Way, south of Orion's Belt. It is one of the brightest nebulae.",
    mass: "Approx. 2,000 Suns",
    distance: "1,344 Light Years"
  },
  {
    id: 4,
    name: "Jupiter",
    type: "planet",
    description: "The fifth planet from the Sun and the largest in the Solar System. It is a gas giant.",
    mass: "1.898 × 10^27 kg",
    distance: "778.5 Million km"
  }
];

// DOM references
const grid = document.getElementById('universe-grid');
const searchInput = document.getElementById('search-input');
const tabs = document.querySelectorAll('.filter-tab');

let activeTypeFilter = 'all';

// Render dynamic card items to page
function render() {
  const query = searchInput.value.toLowerCase().trim();
  grid.innerHTML = '';
  
  const filtered = cosmicBodies.filter(b => {
    const typeMatch = activeTypeFilter === 'all' || b.type === activeTypeFilter;
    const searchMatch = !query || 
      b.name.toLowerCase().includes(query) || 
      b.description.toLowerCase().includes(query) || 
      b.type.toLowerCase().includes(query);
    return typeMatch && searchMatch;
  });
  
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        No cosmic bodies matched your query.
      </div>
    `;
    return;
  }
  
  filtered.forEach(b => {
    const card = document.createElement('div');
    card.className = 'cosmic-card';
    card.innerHTML = `
      <div class="cosmic-meta">
        <span class="cosmic-tag">${b.type}</span>
      </div>
      <h2 class="cosmic-name">${b.name}</h2>
      <p class="cosmic-desc">${b.description}</p>
      <div class="cosmic-stats">
        <span><strong>Mass:</strong> ${b.mass}</span>
        <span><strong>Distance from Sun:</strong> ${b.distance}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Filter Tab Click Handlers
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeTypeFilter = tab.getAttribute('data-type');
    render();
  });
});

// Search Input Listener
searchInput.addEventListener('input', render);

// Initial render call
render();
