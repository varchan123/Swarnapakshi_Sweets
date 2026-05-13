export const hero = `
<section id="hero" class="section hero bg-dark">
  <div class="hero-animation-container">
    <canvas id="hero-canvas"></canvas>
  </div>
  <div class="hero-overlay"></div>
  
  <div class="ornate-border hero-border">
    <!-- Filigree Corners using SVG defs -->
    <svg class="corner-top-left" width="50" height="50"><use href="#filigree-corner"></use></svg>
    <svg class="corner-top-right" width="50" height="50" style="transform: scaleX(-1);"><use href="#filigree-corner"></use></svg>
    <svg class="corner-bottom-left" width="50" height="50" style="transform: scaleY(-1);"><use href="#filigree-corner"></use></svg>
    <svg class="corner-bottom-right" width="50" height="50" style="transform: scale(-1, -1);"><use href="#filigree-corner"></use></svg>
    
    <div class="hero-content flex flex-col items-center text-center">
      <div class="hero-logo-badge">
        <img src="/logo.jpg" alt="Swarnapakshi Sweets Logo Badge">
      </div>
      <h1 class="hero-title font-display text-white fade-in-section">
        WHERE EVERY BITE<br>TELLS A STORY
      </h1>
    </div>
    
    <div class="scroll-hint text-gold font-display fade-in-section" style="transition-delay: 500ms;">
      ABOUT US / SWARNAPAKSHI SWEETS
    </div>
  </div>
</section>
`;
