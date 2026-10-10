"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/store-provider";
import { formatPrice, products } from "@/lib/products";

export default function CartPage() {
  const { items, subtotal, setQuantity, removeItem, hydrated } = useCart();

  if (!hydrated) {
    return <div className="page-wrap cart-page"><div className="loading-state" role="status">Loading your bag…</div></div>;
  }

  const cartItems = items.flatMap((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return product ? [{ ...item, product }] : [];
  });

  return (
    <div className="page-wrap cart-page">
      <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Your bag</span></div>
      <div className="cart-heading"><div><p className="eyebrow">A good choice</p><h1>Your bag <span>({items.reduce((count, item) => count + item.quantity, 0)})</span></h1></div><Link className="text-link" href="/shop">Continue shopping <span aria-hidden="true">↗</span></Link></div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-mark" aria-hidden="true">○</div>
          <h2>Your bag is taking a little breather.</h2>
          <p>There’s nothing here just yet. Let’s find something you’ll love living with.</p>
          <Link className="button button-dark" href="/shop">Explore the collection <span aria-hidden="true">↗</span></Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            <div className="cart-table-head"><span>Product</span><span>Quantity</span><span>Total</span></div>
            {cartItems.map(({ id, quantity, product }) => (
              <article className="cart-item" key={id}>
                <Link className="cart-item-image" href={`/products/${product.id}`}>
                  <Image src={product.image} alt={product.name} fill sizes="120px" unoptimized />
                </Link>
                <div className="cart-item-info">
                  <p className="eyebrow">{product.category}</p>
                  <Link href={`/products/${product.id}`} className="cart-item-name">{product.name}</Link>
                  <p>{product.color}</p>
                  <span className="cart-mobile-price">{formatPrice(product.price * quantity)}</span>
                  <button className="remove-link" type="button" onClick={() => removeItem(id)}>Remove</button>
                </div>
                <div className="quantity-control cart-quantity">
                  <button type="button" aria-label={`Decrease ${product.name} quantity`} onClick={() => setQuantity(id, quantity - 1)}>−</button>
                  <span aria-live="polite">{quantity}</span>
                  <button type="button" aria-label={`Increase ${product.name} quantity`} onClick={() => setQuantity(id, quantity + 1)}>+</button>
                </div>
                <strong className="cart-line-total">{formatPrice(product.price * quantity)}</strong>
              </article>
            ))}
          </div>
          <aside className="order-summary">
            <h2>Order summary</h2>
            <div className="summary-line"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            <div className="summary-line"><span>Shipping</span><span className="summary-muted">Calculated at checkout</span></div>
            <div className="summary-line"><span>Taxes</span><span className="summary-muted">Calculated at checkout</span></div>
            <div className="summary-divider" />
            <div className="summary-line summary-total"><span>Estimated total</span><strong>{formatPrice(subtotal)}</strong></div>
            <p className="summary-shipping">Complimentary shipping on orders over $150.</p>
            <Link className="button button-dark full-button" href="/checkout">Continue to sample checkout <span aria-hidden="true">→</span></Link>
            <p className="summary-demo">Demo flow only. No real payment or order processing.</p>
          </aside>
        </div>
      )}
    </div>
  );
}
