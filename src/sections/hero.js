export const hero = `
<section id="hero" class="section hero bg-dark">
  <div class="hero-video-container">
    <video
      id="hero-video"
      autoplay
      loop
      muted
      playsinline
      class="hero-video"
    >
      <!-- Mobile-first: browser picks the first source it supports based on media -->
      <source src="/hero element mobile.mp4" type="video/mp4" media="(max-width: 768px)">
      <source src="/hero element laptop.mp4" type="video/mp4">
    </video>
  </div>
  <div class="hero-overlay"></div>
  
  <div class="ornate-border hero-border">
    <svg class="corner-top-left" width="50" height="50"><use href="#filigree-corner"></use></svg>
    <svg class="corner-top-right" width="50" height="50" style="transform: scaleX(-1);"><use href="#filigree-corner"></use></svg>
    <svg class="corner-bottom-left" width="50" height="50" style="transform: scaleY(-1);"><use href="#filigree-corner"></use></svg>
    <svg class="corner-bottom-right" width="50" height="50" style="transform: scale(-1, -1);"><use href="#filigree-corner"></use></svg>
    
    <div class="hero-content flex flex-col items-center text-center">
      <div class="hero-logo-badge">
        <img src="/logo.jpg" alt="Swarnapakshi Sweets Logo">
      </div>
      <h1 class="hero-title font-display text-white fade-in-section">
        WHERE EVERY BITE<br>TELLS A STORY
      </h1>
    </div>
  </div>
</section>
`;
