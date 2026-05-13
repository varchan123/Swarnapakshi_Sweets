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
// Use threshold:0 so even 1px of the element triggers it — critical for tall mobile sections
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -80px 0px', // trigger slightly before fully in view
  threshold: 0
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // stop watching once visible
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-section').forEach((section) => {
  observer.observe(section);
});

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

  // Close menu when a link is clicked
  const mobileLinks = mobileNavOverlay.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      mobileNavOverlay.classList.remove('active');
      document.body.style.overflow = '';
      if (whatsappFloat) {
        whatsappFloat.style.display = 'flex';
      }
    });
  });
}

// 4. Menu Filtering Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const sweetCards = document.querySelectorAll('.sweet-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all
    filterBtns.forEach(b => b.classList.remove('active'));
    // Add to clicked
    btn.classList.add('active');
    
    const filterValue = btn.getAttribute('data-filter');
    
    sweetCards.forEach(card => {
      if (card.getAttribute('data-category') === filterValue) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// 5. Hero Canvas Animation Loop
const canvas = document.getElementById('hero-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  const frameCount = 80;
  const images = [];
  let imagesLoaded = 0;
  
  // Preload images
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    // Assuming filenames are zero-padded: hero element animation_000.jpg
    const zeroPaddedIndex = i.toString().padStart(3, '0');
    img.src = `/hero_frames/hero element animation_${zeroPaddedIndex}.jpg`;
    img.onload = () => {
      imagesLoaded++;
      if (imagesLoaded === frameCount) {
        startAnimation();
      }
    };
    images.push(img);
  }

  let currentFrame = 0;
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function startAnimation() {
    setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const img = images[currentFrame];
      
      // Calculate object-cover style drawing
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      
      currentFrame = (currentFrame + 1) % frameCount;
    }, 1000 / 24); // 24 FPS
  }
}
