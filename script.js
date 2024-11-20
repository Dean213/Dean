// Smooth scrolling naar secties bij klikken op een menu-item
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamische achtergrond verandering op scroll voor de navigatiebalk
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(256, 0, 0, 0)';
    } else {
        nav.style.backgroundColor = 'rgba(256, 0, 0, 0)';
    }
});