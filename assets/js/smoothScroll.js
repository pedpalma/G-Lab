export function initSmoothScroll() {
  const header = document.getElementById('header');

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');

      /* Ignora links sem destino ou que apontam para # (topo) */
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      /* Calcula posição descontando a altura do header sticky */
      const headerHeight = header ? header.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}
