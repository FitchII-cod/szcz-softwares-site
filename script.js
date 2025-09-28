async function loadConfig(){
  const res = await fetch('config.json');
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
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.tagline}</p>
      <ul class="tag-cloud small">${p.tags.map(t=>`<li>${t}</li>`).join('')}</ul>
      ${p.link ? `<p><a class="link" href="${p.link}" target="_blank" rel="noopener">Voir</a></p>` : ''}
    `;
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
    const open = list.style.display === 'block';
    list.style.display = open ? 'none':'block'; btn.setAttribute('aria-expanded', String(!open));
  });
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', ()=>{ form.querySelector('.form-ok').hidden=false; });
}
loadConfig().then(setupUI);
