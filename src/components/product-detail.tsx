"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/store-provider";
import { formatPrice, type Product } from "@/lib/products";

export function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  function addToBag() {
    addItem(product.id, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  }

  return (
    <div className="product-detail-page page-wrap">
      <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/shop">Shop</Link><span>/</span><span>{product.name}</span></div>
      <div className="product-detail">
        <div className="detail-gallery">
          {product.images.map((image, index) => (
            <div className="detail-image" key={image}>
              <Image src={image} alt={`${product.name}, view ${index + 1}`} fill sizes="(max-width: 800px) 100vw, 55vw" priority={index === 0} unoptimized />
            </div>
          ))}
        </div>
        <div className="detail-info">
          <p className="eyebrow">{product.category} / Forme essentials</p>
          <h1>{product.name}</h1>
          <p className="detail-color">{product.color}</p>
          <p className="detail-price">{formatPrice(product.price)}</p>
          <p className="detail-description">{product.description}</p>
          <div className="detail-divider" />
          <div className="quantity-row">
            <span>Quantity</span>
            <div className="quantity-control">
              <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((current) => Math.max(1, current - 1))}>−</button>
              <span aria-live="polite">{quantity}</span>
              <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((current) => current + 1)}>+</button>
            </div>
          </div>
          <button className="button button-dark add-to-bag" type="button" onClick={addToBag}>{added ? "Added to your bag ✓" : "Add to bag"} <span>{formatPrice(product.price * quantity)}</span></button>
          {added && <p className="inline-success" role="status">Added to your demo bag. <Link href="/cart">View bag</Link></p>}
          <div className="detail-perks">
            <p><span>↗</span> Complimentary shipping over $150</p>
            <p><span>↗</span> Thoughtfully made, made to last</p>
          </div>
          <div className="detail-divider" />
          <h2 className="detail-subheading">Details & care</h2>
          <ul className="detail-list">{product.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          <p className="sample-note">This is a sample product in a demonstration store. No real order will be placed.</p>
        </div>
      </div>
    </div>
  );
}
