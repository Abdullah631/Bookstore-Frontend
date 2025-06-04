document.addEventListener('DOMContentLoaded', function () {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
    let isSidebarOpen = window.innerWidth > 768;
    function toggleSidebar() {
        isSidebarOpen = !isSidebarOpen;

        if (window.innerWidth <= 768) {
            if (isSidebarOpen) {
                body.classList.add('sidebar-open');
                overlay.style.display = 'block';
            } else {
                body.classList.remove('sidebar-open');
                overlay.style.display = 'none';
            }
        } else {
            body.classList.toggle('sidebar-collapsed');
        }
    }
    function handleResize() {
        if (window.innerWidth <= 768) {
            body.classList.remove('sidebar-open', 'sidebar-collapsed');
            overlay.style.display = 'none';
            isSidebarOpen = false;
        } else {
            body.classList.remove('sidebar-open');
            overlay.style.display = 'none';
            body.classList.remove('sidebar-collapsed');
            isSidebarOpen = true;
        }
    }
    sidebarToggle.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);
    window.addEventListener('resize', handleResize);
    handleResize();
    const togglePassword = document.querySelector('.toggle-password');
    if (togglePassword) {
        togglePassword.addEventListener('click', function () {
            const password = document.getElementById('password');
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.querySelector('i').classList.toggle('fa-eye-slash');
        });
    }
    const logoutBtn = document.querySelector('.btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (e) {
            if (!confirm('Are you sure you want to logout?')) {
                e.preventDefault();
            }
        });
    }
});