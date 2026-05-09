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

  const heroTitle = document.querySelector('#hero-title');
  const heroDescription = document.querySelector('#hero-description');

  if (heroTitle && heroDescription) {
    const heroTitles = [
      'Sorriso saudável, experiência acolhedora.',
      'Cuidado personalizado para seu sorriso.',
      'Tecnologia e carinho em cada consulta.',
      'Sorriso confiante, atendimento humanizado.',
      'Saúde bucal com excelência e dedicação.'
    ];

    const heroDescriptions = [
      'Consultas sem pressa, explicações claras e tecnologia de ponta para cuidar do seu sorriso com carinho e confiança.',
      'Atendimento acolhedor, diagnósticos precisos e tratamentos modernos para um sorriso radiante e saudável.',
      'Profissionais qualificados, equipamentos de ponta e um ambiente tranquilo para cuidar da sua saúde bucal.',
      'Consultas personalizadas, tecnologia avançada e cuidado humanizado para transformar seu sorriso.',
      'Experiência odontológica completa, com foco na prevenção, estética e bem-estar do paciente.'
    ];

    const randomIndex = Math.floor(Math.random() * heroTitles.length);
    heroTitle.textContent = heroTitles[randomIndex];
    heroDescription.textContent = heroDescriptions[randomIndex];
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
