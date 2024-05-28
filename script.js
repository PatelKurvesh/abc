document.addEventListener("DOMContentLoaded", function() {
    // Load menu content by default
    loadContent('menu');

    // Add click event listeners to navigation links
    document.getElementById('menu').addEventListener('click', function() {
        loadContent('menu');
    });

    document.getElementById('combo').addEventListener('click', function() {
        loadContent('combo');
    });

    document.getElementById('contact').addEventListener('click', function() {
        loadContent('contact');
    });

    document.getElementById('location').addEventListener('click', function() {
        loadContent('location');
    });
});

function loadContent(page) {
    // You can load content dynamically here based on the page parameter
    let contentDiv = document.getElementById('content');
    switch (page) {
        case 'menu':
            contentDiv.innerHTML = "<h2>Menu</h2><p>Menu items go here...</p>";
            break;
        case 'combo':
            contentDiv.innerHTML = "<h2>Combo</h2><p>Combo items go here...</p>";
            break;
        case 'contact':
            contentDiv.innerHTML = "<h2>Contact</h2><p>Contact information goes here...</p>";
            break;
        case 'location':
            contentDiv.innerHTML = "<h2>Location</h2><p>Location details go here...</p>";
            break;
        default:
            contentDiv.innerHTML = "<h2>Page not found</h2>";
            break;
    }
}
function loadContent(page) {
    let contentDiv = document.getElementById('content');
    switch (page) {
        case 'menu':
            contentDiv.innerHTML = "<h2>Menu</h2><p>Menu items go here...</p>";
            break;
        case 'contact':
            contentDiv.innerHTML = "<h2>Contact</h2><p>Contact information goes here...</p>";
            break;
        case 'location':
            contentDiv.innerHTML = "<h2>Location</h2><p>Location details go here...</p>";
            break;
        default:
            contentDiv.innerHTML = "<h2>Page not found</h2>";
            break;
    }
}

function loadComboContent() {
    let contentDiv = document.getElementById('content');
    let comboHTML = "<h2>Combos</h2>";
    for (let i = 1; i <= 8; i++) {
        comboHTML += `
            <div class="combo-box">
                <img src="combo${i}.jpg" alt="Combo ${i}">
                <h3>Combo ${i}</h3>
                <p>Description for Combo ${i} goes here...</p>
            </div>
        `;
    }
    contentDiv.innerHTML = comboHTML;
}
