// Function to inject Navbar
function injectNavbar() {
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg fixed-top glass-effect">
        <div class="container">
            <a class="navbar-brand fw-bold text-gradient" href="/">Nhat Nguyen</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#topics">Topics</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/antialberteinstein/cs-notes" target="_blank">GitHub</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

// Function to inject Footer
function injectFooter() {
    const footerHTML = `
    <footer class="py-4 text-center text-muted border-top border-dark mt-5">
        <div class="container">
            <p class="mb-0">&copy; 2026 Nhat Nguyen. Built with ❤️ and Code.</p>
        </div>
    </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    injectNavbar();
    injectFooter();
});
