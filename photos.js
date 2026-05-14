// ================================================================
// HOUSE OF AMER HAVELI — Photo Configuration
// ================================================================
// Edit this file to add, remove, or change photos for any section.
// No need to touch the HTML file — just edit here and save!
// ================================================================

const PHOTOS = {

  // ── HERO BACKGROUND ──────────────────────────────────────────
  // The large background image behind the hero title
  hero: {
    url: 'photos/haveli.jpg',
  },

  // ── OUR STORY IMAGE ──────────────────────────────────────────
  // The image shown on the left side of the "Our Story" section
  story: {
    url: 'photos/important.jpg',
    alt: 'House of Amer Haveli',
  },

  // ── DINING BACKGROUND ────────────────────────────────────────
  // Subtle background image for the dark dining section
  dining: {
    url: 'photos/dining night.jpg',
  },

  // ── ROOMS ────────────────────────────────────────────────────
  // Add or remove room objects to change how many rooms appear.
  // Each room needs: tag, name, description, price, image, alt
  rooms: [
    {
      tag: 'Signature Suite',
      name: 'Maharaja Grand Suite',
      description: 'A palatial retreat with a private courtyard, teak-framed four-poster bed, and panoramic fort views.',
      price: 'From ₹28,000 / night',
      image: 'photos/bed premium.jpg',
      alt: 'Maharaja Suite',
    },
    {
      tag: 'Heritage Room',
      name: 'Sheesh Mahal Chamber',
      description: 'Inspired by the Palace of Mirrors — walls adorned with hand-set glass mosaics catching dawn light.',
      price: 'From ₹18,500 / night',
      image: 'photos/seiling.jpg',
      alt: 'Sheesh Mahal Room',
    },
    {
      tag: 'Luxury Suite',
      name: 'Zenana Courtyard Suite',
      description: 'Opening onto a fragrant jasmine courtyard, with hand-blocked textiles and a sunken marble bath.',
      price: 'From ₹22,000 / night',
      image: 'photos/bed.jpg',
      alt: 'Zenana Suite',
    },
    // ── To add a new room, copy the block below and fill in details ──
    // {
    //   tag:         'Royal Suite',
    //   name:        'Diwan-e-Khas Suite',
    //   description: 'Description of the room goes here.',
    //   price:       'From ₹XX,000 / night',
    //   image:       'https://your-image-url.jpg',
    //   alt:         'Room image description',
    // },
  ],

  // ── GALLERY ──────────────────────────────────────────────────
  // Add or remove objects to change gallery photos.
  // src      → thumbnail shown in gallery grid
  // fullSrc  → full-size image shown in lightbox when clicked
  // alt      → screen reader / SEO description
  // caption  → text shown on hover
  gallery: [
    {
      src: 'photos/haveli.jpg',
      fullSrc: 'photos/haveli.jpg',
      alt: 'House of Amer Haveli',
      caption: 'The Haveli',
    },
    {
      src: 'photos/best hall.jpg',
      fullSrc: 'photos/best hall.jpg',
      alt: 'Grand Hall',
      caption: 'Grand Durbar Hall',
    },
    {
      src: 'photos/night dining.jpg',
      fullSrc: 'photos/night dining.jpg',
      alt: 'Rooftop Area',
      caption: 'Rooftop Area',
    },
    {
      src: 'photos/view.jpg',
      fullSrc: 'photos/view.jpg',
      alt: 'Scenic View',
      caption: 'Aravalli Views',
    },
    {
      src: 'photos/dining.jpg',
      fullSrc: 'photos/dining.jpg',
      alt: 'Dining Area',
      caption: 'Royal Dining',
    },
    {
      src: 'photos/fort.jpg',
      fullSrc: 'photos/fort.jpg',
      alt: 'Amer Fort',
      caption: 'Amer Fort',
    },
    {
      src: 'photos/counter hall.jpg',
      fullSrc: 'photos/counter hall.jpg',
      alt: 'Haveli Reception',
      caption: 'Grand Reception',
    },
    {
      src: 'photos/evening view.jpg',
      fullSrc: 'photos/evening view.jpg',
      alt: 'Evening at Haveli',
      caption: 'Golden Hour',
    },
    // ── To add a new gallery photo, copy the block below ──
    // {
    //   src:     'photos/yourfile.jpg',
    //   fullSrc: 'photos/yourfile.jpg',
    //   alt:     'Description of photo',
    //   caption: 'Caption shown on hover',
    // },
  ],

};

// ================================================================
// !! DO NOT EDIT BELOW THIS LINE !!
// This code reads the config above and builds the page.
// ================================================================

document.addEventListener('DOMContentLoaded', () => {

  // Hero background
  const heroBg = document.getElementById('hero-bg');
  if (heroBg) heroBg.style.backgroundImage = `url('${PHOTOS.hero.url}')`;

  // Story image
  const storyImg = document.getElementById('story-img');
  if (storyImg) { storyImg.src = PHOTOS.story.url; storyImg.alt = PHOTOS.story.alt; }

  // Dining background
  const diningBg = document.getElementById('dining-bg');
  if (diningBg) diningBg.style.backgroundImage = `url('${PHOTOS.dining.url}')`;

  // Render rooms
  const roomsGrid = document.getElementById('rooms-grid');
  if (roomsGrid) {
    roomsGrid.innerHTML = PHOTOS.rooms.map(r => `
      <div class="room-card">
        <div class="room-img">
          <img src="${r.image}" alt="${r.alt}" loading="lazy">
          <div class="room-overlay"></div>
        </div>
        <div class="room-info">
          <div class="room-tag">${r.tag}</div>
          <h3>${r.name}</h3>
          <p>${r.description}</p>
          <div class="price">${r.price}</div>
        </div>
      </div>
    `).join('');
  }

  // Render gallery
  const galleryGrid = document.getElementById('gallery-grid');
  if (galleryGrid) {
    galleryGrid.innerHTML = PHOTOS.gallery.map(g => `
      <div class="gallery-item" data-src="${g.fullSrc}">
        <img src="${g.src}" alt="${g.alt}" loading="lazy">
        <div class="gallery-item-overlay"><span>${g.caption}</span></div>
      </div>
    `).join('');

    // Lightbox: attach events after rendering
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        lbImg.src = item.dataset.src || item.querySelector('img').src;
        lbImg.alt = item.querySelector('img').alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
  }

});
