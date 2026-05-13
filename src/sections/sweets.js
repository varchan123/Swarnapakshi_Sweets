export const sweets = `
<section id="sweets" class="section sweets bg-dark">
  <div class="container fade-in-section">
    <div class="ornate-border">
      <svg class="corner-top-left" width="50" height="50"><use href="#filigree-corner"></use></svg>
      <svg class="corner-top-right" width="50" height="50" style="transform: scaleX(-1);"><use href="#filigree-corner"></use></svg>
      <svg class="corner-bottom-left" width="50" height="50" style="transform: scaleY(-1);"><use href="#filigree-corner"></use></svg>
      <svg class="corner-bottom-right" width="50" height="50" style="transform: scale(-1, -1);"><use href="#filigree-corner"></use></svg>

      <div class="section-header text-center">
        <h2 class="font-display text-white">OUR SWEETS</h2>
        <h3 class="font-subhead text-gold sub-heading" style="font-style: italic;">A Taste of Tradition</h3>
      </div>
      
      <div class="filter-strip flex justify-center font-display text-gold">
        <button class="filter-btn active" data-filter="ladoos">LADOOS</button>
        <span class="divider">|</span>
        <button class="filter-btn" data-filter="barfis">BARFIS</button>
        <span class="divider">|</span>
        <button class="filter-btn" data-filter="halwa">HALWA</button>
        <span class="divider">|</span>
        <button class="filter-btn" data-filter="snacks">SNACKS</button>
        <span class="divider">|</span>
        <button class="filter-btn" data-filter="seasonal">SEASONAL</button>
      </div>

      <div class="sweets-grid">
        <!-- LADOOS -->
        <div class="sweet-card polaroid-style hover-glow" data-category="ladoos">
          <div class="card-img">
            <img loading="lazy" src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=300&q=50" alt="Motichoor Ladoo">
          </div>
          <div class="card-content text-center">
            <h4 class="font-subhead">Motichoor Ladoo</h4>
            <p class="font-body">Melt-in-mouth pearls of besan with rich ghee.</p>
            <p class="price font-display text-gold">From ₹350</p>
          </div>
        </div>
        
        <div class="sweet-card polaroid-style hover-glow" data-category="ladoos">
          <div class="card-img">
            <img loading="lazy" src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=300&q=50" alt="Besan Ladoo">
          </div>
          <div class="card-content text-center">
            <h4 class="font-subhead">Besan Ladoo</h4>
            <p class="font-body">Roasted gram flour blended with pure ghee and nuts.</p>
            <p class="price font-display text-gold">From ₹320</p>
          </div>
        </div>

        <div class="sweet-card polaroid-style hover-glow" data-category="ladoos">
          <div class="card-img">
            <img loading="lazy" src="https://images.pexels.com/photos/13063302/pexels-photo-13063302.jpeg?auto=compress&cs=tinysrgb&w=300&q=50" alt="Boondi Ladoo">
          </div>
          <div class="card-content text-center">
            <h4 class="font-subhead">Boondi Ladoo</h4>
            <p class="font-body">Traditional sweet pearls soaked in sugar syrup.</p>
            <p class="price font-display text-gold">From ₹300</p>
          </div>
        </div>

        <!-- BARFIS (hidden by default) -->
        <div class="sweet-card polaroid-style hover-glow" data-category="barfis" style="display:none">
          <div class="card-img">
            <img loading="lazy" src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=300&q=50" alt="Kaju Katli">
          </div>
          <div class="card-content text-center">
            <h4 class="font-subhead">Kaju Katli</h4>
            <p class="font-body">Premium cashew fudge with silver varq.</p>
            <p class="price font-display text-gold">From ₹1200</p>
          </div>
        </div>
        
        <div class="sweet-card polaroid-style hover-glow" data-category="barfis">
          <div class="card-img">
            <img loading="lazy" src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=300&q=50" alt="Pista Barfi">
          </div>
          <div class="card-content text-center">
            <h4 class="font-subhead">Pista Barfi</h4>
            <p class="font-body">Rich pistachio fudge infused with saffron.</p>
            <p class="price font-display text-gold">From ₹1400</p>
          </div>
        </div>

        <div class="sweet-card polaroid-style hover-glow" data-category="barfis">
          <div class="card-img">
            <img loading="lazy" src="https://images.pexels.com/photos/13063302/pexels-photo-13063302.jpeg?auto=compress&cs=tinysrgb&w=300&q=50" alt="Coconut Barfi">
          </div>
          <div class="card-content text-center">
            <h4 class="font-subhead">Coconut Barfi</h4>
            <p class="font-body">Freshly grated coconut in a sweet milk base.</p>
            <p class="price font-display text-gold">From ₹450</p>
          </div>
        </div>

        <!-- HALWA (hidden by default) -->
        <div class="sweet-card polaroid-style hover-glow" data-category="halwa" style="display:none">
          <div class="card-img">
            <img loading="lazy" src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=300&q=50" alt="Ghee Mysore Pak">
          </div>
          <div class="card-content text-center">
            <h4 class="font-subhead">Ghee Mysore Pak</h4>
            <p class="font-body">The royal classic with an abundance of ghee.</p>
            <p class="price font-display text-gold">From ₹800</p>
          </div>
        </div>

        <div class="sweet-card polaroid-style hover-glow" data-category="halwa">
          <div class="card-img">
            <img loading="lazy" src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=300&q=50" alt="Badam Halwa">
          </div>
          <div class="card-content text-center">
            <h4 class="font-subhead">Badam Halwa</h4>
            <p class="font-body">Rich almond and saffron delicacy.</p>
            <p class="price font-display text-gold">From ₹1500</p>
          </div>
        </div>

        <div class="sweet-card polaroid-style hover-glow" data-category="halwa">
          <div class="card-img">
            <img loading="lazy" src="https://images.pexels.com/photos/13063302/pexels-photo-13063302.jpeg?auto=compress&cs=tinysrgb&w=300&q=50" alt="Wheat Halwa">
          </div>
          <div class="card-content text-center">
            <h4 class="font-subhead">Wheat Halwa</h4>
            <p class="font-body">Authentic Tirunelveli style glossy wheat halwa.</p>
            <p class="price font-display text-gold">From ₹650</p>
          </div>
        </div>

        <!-- SNACKS (hidden by default) -->
        <div class="sweet-card polaroid-style hover-glow" data-category="snacks" style="display:none">
          <div class="card-img">
            <img loading="lazy" src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=300&q=50" alt="Madras Mixture">
          </div>
          <div class="card-content text-center">
            <h4 class="font-subhead">Madras Mixture</h4>
            <p class="font-body">Crispy, spicy traditional evening snack.</p>
            <p class="price font-display text-gold">From ₹450</p>
          </div>
        </div>

        <div class="sweet-card polaroid-style hover-glow" data-category="snacks">
          <div class="card-img">
            <img loading="lazy" src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=300&q=50" alt="Murukku">
          </div>
          <div class="card-content text-center">
            <h4 class="font-subhead">Butter Murukku</h4>
            <p class="font-body">Melt-in-mouth crunchy rice flour twists.</p>
            <p class="price font-display text-gold">From ₹400</p>
          </div>
        </div>

        <div class="sweet-card polaroid-style hover-glow" data-category="snacks">
          <div class="card-img">
            <img loading="lazy" src="https://images.pexels.com/photos/13063302/pexels-photo-13063302.jpeg?auto=compress&cs=tinysrgb&w=300&q=50" alt="Ribbon Pakoda">
          </div>
          <div class="card-content text-center">
            <h4 class="font-subhead">Ribbon Pakoda</h4>
            <p class="font-body">Crispy gram flour ribbons with a hint of spice.</p>
            <p class="price font-display text-gold">From ₹380</p>
          </div>
        </div>

        <!-- SEASONAL (hidden by default) -->
        <div class="sweet-card polaroid-style hover-glow" data-category="seasonal" style="display:none">
          <div class="card-img">
            <img loading="lazy" src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=300&q=50" alt="Mini Jangiri">
          </div>
          <div class="card-content text-center">
            <h4 class="font-subhead">Mini Jangiri</h4>
            <p class="font-body">Intricate, syrup-soaked urad dal spirals.</p>
            <p class="price font-display text-gold">From ₹600</p>
          </div>
        </div>

        <div class="sweet-card polaroid-style hover-glow" data-category="seasonal">
          <div class="card-img">
            <img loading="lazy" src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=300&q=50" alt="Sweet Somas">
          </div>
          <div class="card-content text-center">
            <h4 class="font-subhead">Sweet Somas</h4>
            <p class="font-body">Crispy pastry filled with roasted gram and coconut.</p>
            <p class="price font-display text-gold">From ₹500</p>
          </div>
        </div>

        <div class="sweet-card polaroid-style hover-glow" data-category="seasonal">
          <div class="card-img">
            <img loading="lazy" src="https://images.pexels.com/photos/13063302/pexels-photo-13063302.jpeg?auto=compress&cs=tinysrgb&w=300&q=50" alt="Athirasam">
          </div>
          <div class="card-content text-center">
            <h4 class="font-subhead">Athirasam</h4>
            <p class="font-body">Traditional jaggery and rice flour deep-fried sweet.</p>
            <p class="price font-display text-gold">From ₹450</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
