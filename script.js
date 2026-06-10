// Dynamic Sports Database
const dynamicSportsDatabase = {
    wembanyama: {
        name: "Victor Wembanyama",
        league: "NBA",
        status: "Active - San Antonio Spurs",
        log: "Averaging dominant blocks and points updates for Season 2025-2026."
    },
    sorsby: {
        name: "Brendan Sorsby",
        league: "NCAA Football",
        status: "Active - Quarterback",
        log: "Tracking core offensive analytics and recent passing stats."
    },
    jordan: {
        name: "Michael Jordan",
        league: "NBA (Classic)",
        status: "Retired - Hall of Fame",
        log: "Historical archive loaded: 6x NBA Champion, 5x MVP."
    }
};

// Archive Search Function
function runArchiveSearch() {
    const searchInput = document.getElementById('dbSearch').value.toLowerCase().trim();
    const successPanel = document.getElementById('searchSuccess');
    const errorPanel = document.getElementById('searchError');
    
    // Reset display states
    successPanel.style.display = 'none';
    errorPanel.style.display = 'none';
    
    let foundKey = null;
    
    // Flexible keyword matching
    if (searchInput.includes('wemby') || searchInput.includes('victor') || searchInput.includes('wembanyama')) {
        foundKey = 'wembanyama';
    } else if (searchInput.includes('sorsby') || searchInput.includes('brendan')) {
        foundKey = 'sorsby';
    } else if (searchInput.includes('jordan') || searchInput.includes('michael') || searchInput.includes('mj')) {
        foundKey = 'jordan';
    }
    
    // Update UI elements based on search result
    if (foundKey && dynamicSportsDatabase[foundKey]) {
        const record = dynamicSportsDatabase[foundKey];
        document.getElementById('resName').textContent = record.name;
        document.getElementById('resLeague').textContent = record.league;
        document.getElementById('resStatus').textContent = record.status;
        document.getElementById('resLog').textContent = record.log;
        
        successPanel.style.display = 'block';
    } else if (searchInput !== "") {
        errorPanel.style.display = 'block';
    }
}
