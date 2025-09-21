document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#menu');

  if (navToggle && menu) {
    navToggle.addEventListener('click', function() {
      // Alterna a classe 'is-active' no menu
      menu.classList.toggle('is-active');

      // Atualiza o atributo aria-expanded para acessibilidade
      const isExpanded = menu.classList.contains('is-active');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });
  }
});