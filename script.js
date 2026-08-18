const nav = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const revealEls = document.querySelectorAll('.reveal');
const counters = document.querySelectorAll('[data-count]');
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const form = document.getElementById('quote-form');
const formResponse = document.querySelector('.form-response');

const cursor = document.querySelector('.custom-cursor');
const ring = document.querySelector('.cursor-ring');

if (cursor && ring && !window.matchMedia('(pointer: coarse)').matches) {
  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  function animateCursor() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  document.addEventListener('click', (event) => {
    const ripple = document.createElement('div');
    ripple.className = 'cursor-ring cursor-click';
    ripple.style.left = `${event.clientX}px`;
    ripple.style.top = `${event.clientY}px`;
    document.body.appendChild(ripple);

    setTimeout(() => ripple.remove(), 450);
  });

  document.querySelectorAll('a, button, input, select, textarea, .interactive').forEach((element) => {
    element.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });

    element.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });
}

const setHeaderState = () => {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', setHeaderState);
setHeaderState();

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealEls.forEach((el) => revealObserver.observe(el));

const animateCounter = (el) => {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  let start = 0;
  const duration = 1500;
  const startTime = performance.now();

  const tick = (time) => {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = target * progress;
    const rounded = target < 10 ? current.toFixed(1) : Math.round(current);
    el.textContent = suffix ? `${rounded}${suffix}` : `${rounded}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = suffix ? `${target}${suffix}` : `${target}`;
    }
  };

  requestAnimationFrame(tick);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

counters.forEach((counter) => counterObserver.observe(counter));

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    portfolioItems.forEach((item) => {
      const matches = target === 'all' || item.dataset.category === target;
      item.classList.toggle('hidden', !matches);
    });
  });
});

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim();

    formResponse.textContent = name
      ? `Thank you, ${name}! Our RR EVENT team will contact you shortly.`
      : 'Thank you! Our RR EVENT team will contact you shortly.';

    form.reset();
  });
}

// Floating Rose & Heart Animation
const floatingContainer = document.querySelector('.floating-elements');
const floatingSymbols = ['🌹', '🌿', '🍃', '❤️'];

function createFloatingElement() {
  if (!floatingContainer) return;
  
  const item = document.createElement('span');
  item.className = 'float-item';
  item.textContent = floatingSymbols[Math.floor(Math.random() * floatingSymbols.length)];
  
  item.style.left = Math.random() * 100 + 'vw';
  item.style.fontSize = (12 + Math.random() * 10) + 'px';
  item.style.animationDuration = (8 + Math.random() * 7) + 's';
  item.style.animationDelay = (Math.random() * 2) + 's';
  
  floatingContainer.appendChild(item);
  
  setTimeout(() => {
    item.remove();
  }, 17000);
}

setInterval(createFloatingElement, 900);
