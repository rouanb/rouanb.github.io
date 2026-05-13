(() => {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.getElementById('nav-menu');

    toggle.addEventListener('click', () => {
        const open = menu.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Abrir menú');
        });
    });

    document.getElementById('year').textContent = new Date().getFullYear();

    const revealTargets = document.querySelectorAll('.section-title, .project-card, .about-text, .about-card, .contact-info li, .hero-title, .hero-desc, .hero-cta');
    revealTargets.forEach(el => el.classList.add('reveal'));

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealTargets.forEach(el => io.observe(el));

})();
