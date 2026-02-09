// Gestion d'erreurs globale
function handleError(error, context) {
  console.error(`Erreur dans ${context}:`, error);
  const errorMsg = document.createElement('div');
  errorMsg.className = 'error-message';
  errorMsg.textContent = `Une erreur s'est produite. Veuillez réessayer.`;
  errorMsg.setAttribute('role', 'alert');
  document.body.appendChild(errorMsg);
  setTimeout(() => errorMsg.remove(), 5000);
}

async function loadConfig(){
  try {
    const res = await fetch('config.json');
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const cfg = await res.json();
  document.title = cfg.seo.title || document.title;
  document.querySelector('meta[name=description]').setAttribute('content', cfg.seo.description);
  document.getElementById('hero-title').textContent = cfg.hero.title;
  document.getElementById('hero-subtitle').textContent = cfg.hero.subtitle;
  const badges = document.getElementById('badges');
  cfg.hero.badges.forEach(b => {
    const span = document.createElement('span');
    span.className = 'badge';
    span.textContent = b;
    badges.appendChild(span);
  });
  const sGrid = document.getElementById('services-grid');
  cfg.services.forEach(s => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `<h3>${s.title}</h3><p>${s.text}</p>`;
    sGrid.appendChild(card);
  });
  const pGrid = document.getElementById('projects-grid');
  cfg.projects.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    const pageLink = p.page ? `<p><a class="link" href="${p.page}">Voir le projet</a></p>` : '';
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.tagline}</p>
      <ul class="tag-cloud small">${p.tags.map(t=>`<li>${t}</li>`).join('')}</ul>
      ${pageLink}
    `;
    if (p.page) {
      card.addEventListener('click', (e) => {
        if (!e.target.closest('a')) window.location.href = p.page;
      });
    }
    pGrid.appendChild(card);
  });
  const stack = document.getElementById('stack');
  cfg.stack.forEach(t => { const li=document.createElement('li'); li.textContent=t; stack.appendChild(li); });
  const stats = document.getElementById('stats');
  cfg.stats.forEach(s => { const el=document.createElement('div'); el.className='stat'; el.innerHTML=`<div class="big">${s.value}</div><div>${s.label}</div>`; stats.appendChild(el); });
  const kpiCards = document.getElementById('kpi-cards');
  cfg.kpis.forEach(k => { const el=document.createElement('div'); el.className='kpi'; el.innerHTML=`<div class="value">${k.value}</div><div class="label">${k.label}</div>`; kpiCards.appendChild(el); });
  const c = document.getElementById('contact-channels');
  cfg.contact.channels.forEach(ch => { const li=document.createElement('li'); li.textContent=ch; c.appendChild(li); });
  const cv = document.getElementById('download-cv');
  if (cfg.cv) { cv.href = cfg.cv; cv.style.display='inline'; }

  return cfg;
  } catch (error) {
    handleError(error, 'loadConfig');
    return null;
  }
}
function setupUI(){
  const key='szcz-theme';
  const current = localStorage.getItem(key) || 'dark';
  if(current==='light'){ document.documentElement.classList.add('light'); }
  document.getElementById('themeToggle').addEventListener('click',()=>{
    document.documentElement.classList.toggle('light');
    const isLight = document.documentElement.classList.contains('light');
    localStorage.setItem(key, isLight ? 'light':'dark');
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('backToTop').addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
  const btn = document.querySelector('.nav-toggle');
  const list = document.querySelector('.nav-list');
  btn.addEventListener('click', ()=>{
    const isOpen = list.classList.contains('open');
    list.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(!isOpen));
  });

  // Fermer le menu mobile au clic sur un lien
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        list.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
  // Validation et soumission du formulaire de contact via Firebase
  const form = document.getElementById('contact-form');

  const showValidationError = (message) => {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.textContent = message;
    errorDiv.setAttribute('role', 'alert');
    errorDiv.setAttribute('aria-live', 'assertive');

    const existingError = form.querySelector('.form-error');
    if (existingError) existingError.remove();

    form.insertBefore(errorDiv, form.firstChild);
    setTimeout(() => errorDiv.remove(), 5000);
  };

  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Validation
    if (!name || name.trim().length < 2) {
      showValidationError('Veuillez entrer un nom valide (minimum 2 caractères)');
      document.getElementById('contact-name').focus();
      return;
    }
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      showValidationError('Veuillez entrer une adresse e-mail valide');
      document.getElementById('contact-email').focus();
      return;
    }
    if (!message || message.trim().length < 10) {
      showValidationError('Veuillez entrer un message d\'au moins 10 caractères');
      document.getElementById('contact-message').focus();
      return;
    }

    // Désactiver le bouton pendant l'envoi
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours...';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim()
        })
      });

      if (response.ok) {
        form.querySelector('.form-ok').hidden = false;
        setTimeout(() => form.querySelector('.form-ok').hidden = true, 5000);
        form.reset();
      } else {
        const data = await response.json();
        showValidationError(data.error || 'Erreur lors de l\'envoi. Veuillez réessayer.');
      }
    } catch {
      // Fallback mailto si le backend est indisponible
      const subject = encodeURIComponent('Contact depuis SZCZ Softwares');
      const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:dev@szczsoftwares.fr?subject=${subject}&body=${body}`;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Envoyer';
    }
  });

  // Animations au scroll avec Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

  // Animation des compteurs de stats
  const animateCounter = (element) => {
    const target = element.textContent;
    const isNumber = /^\d+\+?$/.test(target);
    if (!isNumber) return;

    const value = parseInt(target);
    const duration = 2000;
    const increment = value / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + (target.includes('+') ? '+' : '');
      }
    }, 16);
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bigElements = entry.target.querySelectorAll('.big, .value');
        bigElements.forEach(el => animateCounter(el));
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.getElementById('expertise');
  const aboutSection = document.getElementById('a-propos');
  if (statsSection) statsObserver.observe(statsSection);
  if (aboutSection) statsObserver.observe(aboutSection);

  // Copie de l'email au clic
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.textContent && target.textContent.includes('@')) {
      const email = target.textContent.match(/[\w.]+@[\w.]+\.\w+/);
      if (email) {
        e.preventDefault();
        navigator.clipboard.writeText(email[0]).then(() => {
          const tooltip = document.createElement('span');
          tooltip.className = 'copy-tooltip';
          tooltip.textContent = 'E-mail copié !';
          target.style.position = 'relative';
          target.appendChild(tooltip);
          setTimeout(() => tooltip.remove(), 2000);
        }).catch(() => {
          window.location.href = `mailto:${email[0]}`;
        });
      }
    }
  });
}

loadConfig().then(config => {
  if (config) setupUI();
});
