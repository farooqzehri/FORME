"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { useCart } from "@/components/store-provider";
import { formatPrice, products } from "@/lib/products";

type FormValues = { email: string; firstName: string; lastName: string; address: string; city: string; postalCode: string; country: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, hydrated, clearCart } = useCart();
  const [errors, setErrors] = useState<FormErrors>({});
  const [formError, setFormError] = useState("");

  const cartItems = items.flatMap((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return product ? [{ ...item, product }] : [];
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries()) as FormValues;
    const nextErrors: FormErrors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email ?? "")) nextErrors.email = "Enter a valid email address.";
    if (!values.firstName?.trim()) nextErrors.firstName = "Enter your first name.";
    if (!values.lastName?.trim()) nextErrors.lastName = "Enter your last name.";
    if (!values.address?.trim()) nextErrors.address = "Enter your street address.";
    if (!values.city?.trim()) nextErrors.city = "Enter your city.";
    if (!values.postalCode?.trim()) nextErrors.postalCode = "Enter your postal code.";
    if (!values.country) nextErrors.country = "Choose a country.";
    setErrors(nextErrors);
    setFormError("");
    if (Object.keys(nextErrors).length > 0) {
      setFormError("Please check the highlighted fields to continue.");
      return;
    }
    if (cartItems.length === 0) {
      setFormError("Your demo bag is empty. Add a piece before continuing.");
      return;
    }
    clearCart();
    router.push("/order-confirmation");
  }

  if (!hydrated) return <div className="page-wrap"><div className="loading-state" role="status">Preparing sample checkout…</div></div>;

  if (cartItems.length === 0) {
    return (
      <div className="page-wrap checkout-empty">
        <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Checkout</span></div>
        <div className="empty-cart checkout-empty-state"><p className="eyebrow">Sample checkout</p><h1>Your bag is empty.</h1><p>Add a piece to your demo bag before continuing to checkout.</p><Link className="button button-dark" href="/shop">Explore the collection <span>↗</span></Link></div>
      </div>
    );
  }

  const field = (name: keyof FormValues, label: string, type = "text", wide = false) => (
    <label className={`form-field${wide ? " form-field-wide" : ""}`}>
      <span>{label}</span>
      <input name={name} type={type} autoComplete={name === "postalCode" ? "postal-code" : name} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${name}-error` : undefined} />
      {errors[name] && <span className="field-error" id={`${name}-error`}>{errors[name]}</span>}
    </label>
  );

  return (
    <div className="page-wrap checkout-page">
      <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/cart">Your bag</Link><span>/</span><span>Sample checkout</span></div>
      <div className="checkout-heading"><p className="eyebrow">A demonstration flow</p><h1>Checkout</h1><p>No payment details are requested. Your information is not sent or stored.</p></div>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit} noValidate>
          <section className="checkout-section">
            <div className="checkout-section-heading"><span>01</span><div><h2>Contact</h2><p>Where can we send your sample confirmation?</p></div></div>
            {field("email", "Email address", "email", true)}
          </section>
          <section className="checkout-section">
            <div className="checkout-section-heading"><span>02</span><div><h2>Shipping address</h2><p>For the purposes of this demo only.</p></div></div>
            <div className="form-grid">
              {field("firstName", "First name")}
              {field("lastName", "Last name")}
              {field("address", "Street address", "text", true)}
              {field("city", "City")}
              {field("postalCode", "Postal code")}
              <label className="form-field form-field-wide">
                <span>Country / region</span>
                <select name="country" defaultValue="" aria-invalid={Boolean(errors.country)} aria-describedby={errors.country ? "country-error" : undefined}>
                  <option value="" disabled>Select a country</option><option value="US">United States</option><option value="CA">Canada</option><option value="GB">United Kingdom</option><option value="AU">Australia</option><option value="other">Other</option>
                </select>
                {errors.country && <span className="field-error" id="country-error">{errors.country}</span>}
              </label>
            </div>
          </section>
          <div className="checkout-safe-note"><span aria-hidden="true">⌑</span><p><strong>Just a sample.</strong> This form does not submit, store, or transmit your details, and no payment is collected.</p></div>
          {formError && <p className="form-error" role="alert">{formError}</p>}
          <button className="button button-dark full-button place-order" type="submit">Complete sample order <span aria-hidden="true">→</span></button>
          <Link className="back-to-cart" href="/cart">← Return to bag</Link>
        </form>
        <aside className="checkout-summary">
          <h2>Your sample order</h2>
          <div className="checkout-summary-items">
            {cartItems.map(({ id, quantity, product }) => (
              <div className="checkout-summary-item" key={id}>
                <div className="checkout-summary-image"><Image src={product.image} alt="" fill sizes="64px" unoptimized /><span>{quantity}</span></div>
                <div><p>{product.name}</p><span>{product.color}</span></div>
                <strong>{formatPrice(product.price * quantity)}</strong>
              </div>
            ))}
          </div>
          <div className="summary-line"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          <div className="summary-line"><span>Shipping</span><span className="summary-muted">Complimentary</span></div>
          <div className="summary-line"><span>Taxes</span><span className="summary-muted">—</span></div>
          <div className="summary-divider" />
          <div className="summary-line summary-total"><span>Total</span><strong>{formatPrice(subtotal)}</strong></div>
          <p className="summary-demo">Portfolio concept by HAXUDIO Digital Solutions. No real order will be placed.</p>
        </aside>
      </div>
    </div>
  );
}
