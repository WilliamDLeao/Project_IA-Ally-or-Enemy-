// Scroll logic
const mainnav  = document.getElementById('mainnav');
const fpill    = document.getElementById('fpill');
let heroBottom = document.querySelector('.hero').getBoundingClientRect().bottom + window.scrollY;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  
  // Toggle scrolled class (your existing behavior)
  mainnav.classList.toggle('scrolled', y > 20);
  
  // Toggle fpill visibility
  const showFpill = y > heroBottom * 0.55;
  fpill.classList.toggle('show', showFpill);
  
  // Toggle header collapsed state when fpill shows
  mainnav.classList.toggle('collapsed', showFpill);
  
}, { passive: true });

// Recalculate heroBottom on resize to ensure accuracy
window.addEventListener('resize', () => {
  heroBottom = document.querySelector('.hero').getBoundingClientRect().bottom + window.scrollY;
});

// Intersection observer for reveals
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));