document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#menu');

  if (navToggle && menu) {
    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      const nextState = !isExpanded;

      menu.classList.toggle('is-active', nextState);
      menu.classList.toggle('hidden', !nextState);
      navToggle.setAttribute('aria-expanded', nextState);
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          menu.classList.remove('is-active');
          menu.classList.add('hidden');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        menu.classList.remove('is-active');
        menu.classList.add('hidden');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const heroImage = document.querySelector('#hero-image');

  if (heroImage) {
    const heroImages = [
      'assets/img/dra-luciana1.jpeg',
      'assets/img/dra-luciana2.jpeg'
    ];
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    heroImage.src = heroImages[randomIndex];
  }

  const dentistSelector = document.querySelector('#dentist-selector');
  const calendlyContainer = document.querySelector('#calendly-container');
  const dentistCalendlyUrls = {
    luciana: 'https://calendly.com/dralucianaabreu/60min',
    marina: 'https://calendly.com/clinicadraluciana/dra-marina/30min',
    pedro: 'https://calendly.com/clinicadraluciana/dr-pedro/30min'
  };

  const updateCalendlyWidget = (dentistKey) => {
    if (!calendlyContainer) {
      return;
    }

    const selectedUrl = dentistCalendlyUrls[dentistKey];

    if (!selectedUrl) {
      return;
    }

    if (window.Calendly && typeof window.Calendly.initInlineWidget === 'function') {
      calendlyContainer.innerHTML = '';
      window.Calendly.initInlineWidget({
        url: selectedUrl,
        parentElement: calendlyContainer,
        prefill: {},
        utm: {}
      });
    } else {
      const inlineWidget = calendlyContainer.querySelector('.calendly-inline-widget');
      if (inlineWidget) {
        inlineWidget.setAttribute('data-url', selectedUrl);
      }
    }
  };

  if (dentistSelector) {
    updateCalendlyWidget(dentistSelector.value);

    dentistSelector.addEventListener('change', (event) => {
      updateCalendlyWidget(event.target.value);
    });
  }
});
