const menu = document.querySelector('.menu');
const navigation = document.querySelector('nav');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(section => observer.observe(section));
  document.documentElement.classList.add('motion');
}
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('.detail').forEach(button => button.addEventListener('click', () => {
  const card = button.closest('.project');
  document.querySelector('#dialog-title').textContent = card.querySelector('h3').textContent;
  document.querySelector('#dialog-description').textContent = card.querySelector('p').textContent;
  dialog.showModal();
}));
document.querySelectorAll('.close, .close-bottom').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
