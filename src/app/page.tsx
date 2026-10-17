import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/product-card";
import { categories, products } from "@/lib/products";

export default function Home() {
  const featured = products.filter((product) => product.featured).slice(0, 4);
  const bestsellers = products.filter((product) => product.bestseller).slice(0, 4);

  return (
    <>
      <section className="hero">
       
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-kicker">A quieter kind of everyday</p>
          <h1>Make room<br />for what matters.</h1>
          <p>Thoughtful objects and enduring forms, chosen for the way you live.</p>
          <Link className="button button-light" href="/shop">Explore the collection <span aria-hidden="true">↗</span></Link>
        </div>
        <span className="hero-caption">THE SLOW LIVING EDIT · NO. 01</span>
        <span className="hero-index">01 <span /> 03</span>
      </section>

      <section className="intro-section section-wrap">
        <p className="eyebrow">Objects for living, beautifully</p>
        <h2>Considered by design.<br /><em>Made to feel like home.</em></h2>
        <p className="intro-copy">We believe good design is lived with. Discover enduring pieces, made with care and selected to bring a little more meaning to the everyday.</p>
      </section>

      <section className="category-section section-wrap">
        <div className="section-heading">
          <div><p className="eyebrow">Find your feeling</p><h2>Shop by category</h2></div>
          <Link className="text-link" href="/shop">View everything <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link className="category-card" href={`/shop?category=${category.name}`} key={category.name}>
              <div className={`category-image category-image-${index + 1}`}>
                <Image src={category.image} alt="" fill sizes="(max-width: 640px) 50vw, 25vw" unoptimized />
              </div>
              <div className="category-info"><div><h3>{category.name}</h3><p>{category.note}</p></div><span aria-hidden="true">↗</span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="products-section section-wrap">
        <div className="section-heading">
          <div><p className="eyebrow">The pieces we come back to</p><h2>Considered favourites</h2></div>
          <Link className="text-link" href="/shop">Shop all pieces <span aria-hidden="true">↗</span></Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="editorial">
        <div className="editorial-image">
          <Image src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=90" alt="Warm, natural textures in a calm living space" fill sizes="(max-width: 800px) 100vw, 50vw" unoptimized />
        </div>
        <div className="editorial-copy">
          <p className="eyebrow">A little less, a little better</p>
          <h2>Good things take<br /><em>their time.</em></h2>
          <p>We partner with small makers who care about how things are made. Natural materials, honest forms, and pieces worth keeping close.</p>
          <Link className="text-link" href="/shop">Meet your new favourite <span aria-hidden="true">↗</span></Link>
          <span className="editorial-number">FORME / 2026</span>
        </div>
      </section>

      <section className="products-section section-wrap bestseller-section">
        <div className="section-heading">
          <div><p className="eyebrow">Well-loved, for good reason</p><h2>Most wanted</h2></div>
          <Link className="text-link" href="/shop">Discover the collection <span aria-hidden="true">↗</span></Link>
        </div>
        <ProductGrid products={bestsellers} />
      </section>

      <section className="service-strip">
        <div><span>01</span><h3>Made with intention</h3><p>Materials chosen to age beautifully.</p></div>
        <div><span>02</span><h3>Considered delivery</h3><p>Complimentary shipping over $150.</p></div>
        <div><span>03</span><h3>Here to help</h3><p>Thoughtful advice, whenever you need it.</p></div>
      </section>
    </>
  );
}
