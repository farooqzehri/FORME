import Link from "next/link";

export default function OrderConfirmationPage() {
  return (
    <div className="page-wrap confirmation-page">
      <div className="confirmation-card">
        <span className="confirmation-mark" aria-hidden="true">✓</span>
        <p className="eyebrow">Sample flow complete</p>
        <h1>That’s a wrap.</h1>
        <p className="confirmation-copy">You’ve completed the FORME demo checkout. No order was placed, no payment was collected, and no personal information was stored.</p>
        <div className="sample-reference"><span>REFERENCE</span><strong>DEMO-FORME-001</strong></div>
        <p className="confirmation-notice">This confirmation is a visual demonstration only—not a real order confirmation.</p>
        <Link className="button button-dark" href="/shop">Return to the collection <span aria-hidden="true">↗</span></Link>
        <Link className="confirmation-home" href="/">Back to home</Link>
      </div>
    </div>
  );
}
