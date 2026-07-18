// select mantras dataset from the four Vedas
const mantras = [
  {
    id: 1,
    veda: "rigveda",
    reference: "Rigveda 3.62.10",
    sanskrit: "तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥",
    translation: "We meditate on the glorious splendor of the Divine Vivifier. May he inspire and illuminate our minds."
  },
  {
    id: 2,
    veda: "yajurveda",
    reference: "Yajurveda 3.60",
    sanskrit: "त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् ॥",
    translation: "We worship the three-eyed one who is fragrant and nourishes all. May he liberate us from death, even as a cucumber is severed from its vine, but not from immortality."
  },
  {
    id: 3,
    veda: "samaveda",
    reference: "Samaveda 1.1.1",
    sanskrit: "अग्न आ याहि वीतये गृणानो हव्यदातये । नि होता सत्सि बर्हिषि ॥",
    translation: "O Agni, come hither to our feast, praised for the donor of offerings. Sit down as priest upon our altar grass."
  },
  {
    id: 4,
    veda: "atharvaveda",
    reference: "Atharvaveda 1.6.1",
    sanskrit: "शं नो देवीरभिष्टय आपो भवन्तु पीतये । शं योरभि स्रवन्तु नः ॥",
    translation: "May the divine waters be gracious to us for our helper, and serve us for our drink. May they flow health and strength to us."
  }
];

// DOM references
const mantraGrid = document.getElementById('mantra-grid');
const searchInput = document.getElementById('search-input');
const filterTabs = document.querySelectorAll('.filter-tab');

let activeVedaFilter = 'all';

// Audio synthesis function utilizing browser Web Speech API
function speakSanskrit(text) {
  if ('speechSynthesis' in window) {
    // Cancel any ongoing speeches
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN'; // Sanskrit text reads naturally with Hindi/Indian phonetic packages
    utterance.rate = 0.85; // Slow rate for clear phonetic enunciations
    utterance.pitch = 1.0;
    
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Web Speech API is not supported in this browser.");
  }
}

// Render dynamic card items to page
function renderCards() {
  const query = searchInput.value.toLowerCase().trim();
  mantraGrid.innerHTML = '';
  
  const filtered = mantras.filter(m => {
    const vedaMatch = activeVedaFilter === 'all' || m.veda === activeVedaFilter;
    const searchMatch = !query || 
      m.sanskrit.toLowerCase().includes(query) || 
      m.translation.toLowerCase().includes(query) || 
      m.reference.toLowerCase().includes(query);
    return vedaMatch && searchMatch;
  });
  
  if (filtered.length === 0) {
    mantraGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        No mantras matched your query. Try different keywords.
      </div>
    `;
    return;
  }
  
  filtered.forEach(m => {
    const card = document.createElement('div');
    card.className = 'mantra-card';
    card.innerHTML = `
      <div class="mantra-meta">
        <span class="veda-tag">${m.veda}</span>
        <span class="mantra-ref">${m.reference}</span>
      </div>
      <div class="mantra-sanskrit">${m.sanskrit}</div>
      <div class="mantra-translation">${m.translation}</div>
      <button class="listen-btn" onclick="speakSanskrit('${m.sanskrit.replace(/'/g, "\\'")}')">
        <!-- SVG Play/Sound Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
        </svg>
        Listen Pronunciation
      </button>
    `;
    mantraGrid.appendChild(card);
  });
}

// Filter Tab Click Handlers
filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeVedaFilter = tab.getAttribute('data-veda');
    renderCards();
  });
});

// Search Input Listener
searchInput.addEventListener('input', renderCards);

// Expose speakSanskrit globally for raw button clicks
window.speakSanskrit = speakSanskrit;

// Initial render call
renderCards();
