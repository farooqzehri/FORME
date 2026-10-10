import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link className="product-image-link" href={`/products/${product.id}`} aria-label={`View ${product.name}`}>
        <div className="product-image">
          <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 25vw" unoptimized />
          {product.bestseller && <span className="product-badge">Bestseller</span>}
          <span className="quick-view">Discover <span aria-hidden="true">↗</span></span>
        </div>
      </Link>
      <div className="product-meta">
        <div>
          <Link href={`/products/${product.id}`} className="product-name">{product.name}</Link>
          <p>{product.color}</p>
        </div>
        <span className="product-price">{formatPrice(product.price)}</span>
      </div>
    </article>
  );
}

export function ProductGrid({ products, emptyMessage = "No pieces found. Try another search." }: {
  products: Product[];
  emptyMessage?: string;
}) {
  if (products.length === 0) return <div className="empty-products">{emptyMessage}</div>;
  return <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>;
}
