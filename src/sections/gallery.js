export const gallery = `
<section id="gallery" class="section gallery bg-dark">
  <div class="container fade-in-section">
    <div class="section-header text-center relative">
      <h2 class="font-display text-white">GALLERY</h2>
      <div class="title-flourish bg-gold mx-auto"></div>
      
      <!-- Lotus decorative anchor -->
      <div class="lotus-anchor absolute">
        <svg width="80" height="80"><use href="#lotus-motif"></use></svg>
      </div>
    </div>

    <div class="gallery-grid">
      <div class="gallery-column">
        <div class="gallery-item polaroid-style rotate-left">
          <img src="/pics/3.jpg" alt="Our Sweets">
          <div class="gallery-caption font-script">Our Sweets</div>
        </div>
        <div class="gallery-item polaroid-style rotate-right">
          <img src="/pics/1.jpg" alt="Making of">
          <div class="gallery-caption font-script">Handcrafted Daily</div>
        </div>
      </div>
      
      <div class="gallery-column mt-lg">
        <div class="gallery-item polaroid-style rotate-right">
          <img src="/pics/4.png" alt="Festivals">
          <div class="gallery-caption font-script">Festive Moments</div>
        </div>
        <div class="gallery-item polaroid-style rotate-left">
          <img src="/pics/2.jpg" alt="Packaging">
          <div class="gallery-caption font-script">Perfect for Gifting</div>
        </div>
      </div>
    </div>

    <div class="text-center cta-container mt-4">
      <button class="btn-outline">Load More</button>
    </div>
  </div>
</section>
`;
