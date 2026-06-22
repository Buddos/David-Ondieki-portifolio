window.addEventListener('DOMContentLoaded', () => {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'skills.html', label: 'Skills' },
    { href: 'leadership.html', label: 'Leadership' },
    { href: 'contact.html', label: 'Contact' }
  ];

  const activePage = window.location.pathname.split('/').pop() || 'index.html';

  const header = document.querySelector('.site-header');
  const footer = document.querySelector('.site-footer');

  if (header) {
    header.innerHTML = `
      <nav>
        <div class="brand"><a href="index.html" style="display:flex;align-items:center;text-decoration:none;color:inherit;"><i class="fas fa-dna"></i><span style="margin-left:10px;">David Ondieki</span></a></div>
        <button class="nav-toggle" aria-label="Toggle navigation">☰</button>
        <div class="nav-links">
          ${pages.map(page => `<a href="${page.href}">${page.label}</a>`).join('')}
        </div>
      </nav>
    `;

    const navLinks = header.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      if (link.getAttribute('href') === activePage || (activePage === '' && link.getAttribute('href') === 'index.html')) {
        link.classList.add('active');
      }
    });

    const toggle = header.querySelector('.nav-toggle');
    const navList = header.querySelector('.nav-links');

    toggle.addEventListener('click', () => {
      navList.classList.toggle('open');
    });
  }

  if (footer) {
    footer.innerHTML = `
      <span>© 2026 David Ondieki</span>
      <span>Built for leadership, healthcare, and innovation.</span>
    `;
  }
});
