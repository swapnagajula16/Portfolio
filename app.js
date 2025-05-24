document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById('check');
    const sidebar = document.querySelector('.sidebar_menu');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            sidebar.style.left = '0';
        } else {
            sidebar.style.left = '-300px';
        }
    });

    // Close sidebar when a menu link is clicked (for mobile view)
    document.querySelectorAll('.sidebar_menu .menu a').forEach(link => {
        link.addEventListener('click', () => {
            checkbox.checked = false;
            sidebar.style.left = '-300px';
        });
    });
});
