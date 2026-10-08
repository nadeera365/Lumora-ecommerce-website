import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';

const p = (n) => `/images/products/${n}.jpg`;
// To use your own banner photos, put them in public/images/banners and list them in `images`.
const slides = [
  { tone: 'rose', title: 'New for women', text: 'Dresses, knitwear, sandals and accessories for the new season.', cta: 'Shop women', to: '/?gender=Women',
    images: [p('women-striped-beach-dress'), p('women-knit-beanie-pom-pom-blue'), p('women-sandal-heels-white-pink')] },
  { tone: 'teal', title: 'New for men', text: 'Hoodies, chinos and trainers built for everyday wear.', cta: 'Shop men', to: '/?gender=Men',
    images: [p('men-cozy-fleece-hoodie-light-teal'), p('men-chino-pants-beige'), p('men-athletic-shoes-white')] },
  { tone: 'sand', title: 'Everyday basics', text: 'Tees, polos and socks that go with everything.', cta: 'Shop clothing', to: '/?category=Clothing',
    images: [p('adults-plain-cotton-tshirt-2-pack-teal'), p('athletic-cotton-socks-6-pairs'), p('men-golf-polo-t-shirt-gray')] },
  { tone: 'ink', title: 'Finish the look', text: 'Sunglasses, earrings and sunhats to go with anything.', cta: 'Shop accessories', to: '/?category=Accessories',
    images: [p('round-sunglasses-gold'), p('crystal-zirconia-stud-earrings-pink'), p('straw-sunhat')] },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (i) => setIndex((i + slides.length) % slides.length);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Featured offers"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hero-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((s, i) => (
          <div key={s.title} className={`hero-slide tone-${s.tone}`} aria-hidden={i !== index}>
            <div className="hero-copy">
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <Link className="hero-cta" to={s.to} tabIndex={i === index ? 0 : -1}>{s.cta}</Link>
            </div>
            <div className="hero-art">{s.images.map((src) => <img key={src} src={src} alt="" />)}</div>
          </div>
        ))}
      </div>
      <button className="hero-arrow prev" aria-label="Previous slide" onClick={() => go(index - 1)}>‹</button>
      <button className="hero-arrow next" aria-label="Next slide" onClick={() => go(index + 1)}>›</button>
      <div className="hero-dots">
        {slides.map((s, i) => (
          <button key={s.title} className={i === index ? 'active' : ''} aria-label={`Go to slide ${i + 1}`} onClick={() => go(i)} />
        ))}
      </div>
    </section>
  );
}
