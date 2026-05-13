import { navbar } from './sections/navbar.js';
import { hero } from './sections/hero.js';
import { story } from './sections/story.js';
import { sweets } from './sections/sweets.js';
import { gallery } from './sections/gallery.js';
import { occasions } from './sections/occasions.js';
import { promise } from './sections/promise.js';
import { testimonials } from './sections/testimonials.js';
import { contact } from './sections/contact.js';
import { footer } from './sections/footer.js';

// 1. Render all sections into the DOM
document.querySelector('#app').innerHTML = `
  ${navbar}
  ${hero}
  ${story}
  ${sweets}
  ${gallery}
  ${occasions}
  ${promise}
  ${testimonials}
  ${contact}
  ${footer}
  <a href="https://wa.me/917395943676?text=Hi%20Swarnapakshi!%20I'd%20like%20to%20place%20an%20order." class="whatsapp-float" target="_blank">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
    Order Now
  </a>
`;

// 2. Intersection Observer for Fade-in effects
// threshold:0 so even 1px triggers it — critical for tall mobile sections
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -80px 0px',
  threshold: 0
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));

// 3. Hamburger Menu Logic
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
const whatsappFloat = document.querySelector('.whatsapp-float');

if (mobileMenuBtn && mobileNavOverlay) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileNavOverlay.classList.toggle('active');
    const isActive = mobileNavOverlay.classList.contains('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
    if (whatsappFloat) {
      whatsappFloat.style.display = isActive ? 'none' : 'flex';
    }
  });

  const mobileLinks = mobileNavOverlay.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      mobileNavOverlay.classList.remove('active');
      document.body.style.overflow = '';
      if (whatsappFloat) whatsappFloat.style.display = 'flex';
    });
  });
}

// 4. Menu Filtering Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const sweetCards = document.querySelectorAll('.sweet-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterValue = btn.getAttribute('data-filter');
    sweetCards.forEach(card => {
      card.style.display = card.getAttribute('data-category') === filterValue ? 'block' : 'none';
    });
  });
});

// 5. Video source swap for mobile vs desktop
// The <source media> attribute is not live-responsive, so we handle it via JS
const heroVideo = document.getElementById('hero-video');
if (heroVideo) {
  const isMobile = window.innerWidth <= 768;
  const src = isMobile
    ? '/hero element mobile.mp4'
    : '/hero element laptop.mp4';
  heroVideo.src = src;
  heroVideo.load();
  heroVideo.play().catch(() => {}); // suppress autoplay policy errors silently
}
