function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const navLinks = document.querySelectorAll('.nav-link');
    const textElements = document.querySelectorAll('.sidebar-text');

    const isExpanding = !sidebar.classList.contains('w-64');

    if (isExpanding) {
        sidebar.classList.replace('w-20', 'w-64');

        navLinks.forEach(link => {
            link.classList.add('px-3', 'gap-3');
            link.classList.remove('justify-center', 'px-0');
        });

        setTimeout(() => {
            textElements.forEach(el => el.classList.remove('hidden'));
        }, 100);

    } else {
        sidebar.classList.replace('w-64', 'w-20');

        textElements.forEach(el => el.classList.add('hidden'));

        navLinks.forEach(link => {
            link.classList.remove('px-3', 'gap-3');
            link.classList.add('justify-center', 'px-0');
        });
    }
}