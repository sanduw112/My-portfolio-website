function loadNavigation() {
    const navHTML = `
        <div id="header">
            <div class="container">
                <nav>
                    <div class="menu-toggle" id="menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul id="nav-menu">
                        <li><a href="home.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    
    // mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // to close mobile menu when clicking on a link
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; 
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                window.location.hash = targetId;
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', loadNavigation);