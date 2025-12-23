const items = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.2 }
);

items.forEach(item => observer.observe(item));

/* FADE-IN AO SCROLL */
const reveals = document.querySelectorAll('.reveal');

const observerCatalogo = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observerCatalogo.observe(el));

/* DETALHE DO PRODUTO */
const cards = document.querySelectorAll('.product-card');
const detailSection = document.getElementById('produto-detalhe');
const gallery = document.getElementById('detail-gallery');
const title = document.getElementById('detail-title');
const instaBtn = document.getElementById('detail-instagram');
const backBtn = document.querySelector('.back-btn');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const images = JSON.parse(card.dataset.images);
    title.textContent = card.dataset.title;
    instaBtn.href = card.dataset.instagram;
    gallery.innerHTML = '';

    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      gallery.appendChild(img);
    });

    detailSection.classList.add('active');
    detailSection.scrollIntoView({ behavior: 'smooth' });
  });
});

backBtn.addEventListener('click', () => {
  detailSection.classList.remove('active');
  document.getElementById('catalogo')
    .scrollIntoView({ behavior: 'smooth' });
});

/* SETAS – SCROLL ALINHADO POR CARD */
const row = document.querySelector('.product-row');
const cardWidth = 270; // largura + gap

document.querySelector('.scroll-btn.left').onclick = () => {
  row.scrollBy({ left: -cardWidth, behavior: 'smooth' });
};

document.querySelector('.scroll-btn.right').onclick = () => {
  row.scrollBy({ left: cardWidth, behavior: 'smooth' });
};
