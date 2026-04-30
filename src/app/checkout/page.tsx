"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/hooks/useCart";

type PaymentMethod = "card" | "gpay" | "paypal";

export default function CheckoutPage() {
  const { items, totalItems, totalPrice, clear } = useCart();
  const delivery = totalItems >= 3 ? 0 : 8;
  const total = totalPrice + delivery;

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [placed, setPlaced] = useState(false);

  function handlePlaceOrder(e: React.FormEvent) {
    e.preventDefault();
    // Simulate order placement
    clear();
    setPlaced(true);
  }

  if (placed) {
    return (
      <>
        <AnnouncementBar />
        <Header />
        <main id="content" className="flex-1">
          <section className="py-24 text-center" style={{ backgroundColor: "rgb(255, 250, 243)" }}>
            <div className="mx-auto max-w-lg px-6">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "rgb(116, 168, 74)" }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                  <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1
                className="text-4xl font-bold mb-4"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  color: "rgb(44, 84, 29)",
                }}
              >
                Order Placed!
              </h1>
              <p className="text-base mb-8" style={{ color: "rgb(88, 88, 88)" }}>
                Thank you for your order. You will receive a confirmation email shortly.
              </p>
              <Link
                href="/shop"
                className="inline-block rounded px-8 py-3 text-white font-semibold transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "rgb(244, 124, 44)",
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                Continue Shopping
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="content" className="flex-1">
        {/* Page hero */}
        <div
          className="w-full py-12 text-center"
          style={{ backgroundColor: "rgb(11, 31, 20)" }}
        >
          <h1
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}
          >
            Checkout
          </h1>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm" style={{ color: "rgb(255, 180, 60)" }}>
            <Link href="/cart" className="hover:underline">Cart</Link>
            <span>›</span>
            <span className="font-semibold text-white">Checkout</span>
            <span>›</span>
            <span>Confirmation</span>
          </div>
        </div>

        <section className="py-12" style={{ backgroundColor: "rgb(255, 250, 243)" }}>
          <form onSubmit={handlePlaceOrder} className="mx-auto max-w-6xl px-6">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Left: details + payment */}
              <div className="lg:col-span-3 space-y-6">
                {/* Contact */}
                <FormSection title="Contact Information">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="First Name" type="text" placeholder="John" required />
                    <Field label="Last Name" type="text" placeholder="Doe" required />
                  </div>
                  <Field label="Email Address" type="email" placeholder="john@example.com" required />
                  <Field label="Phone Number" type="tel" placeholder="+65 9XXX XXXX" required />
                </FormSection>

                {/* Shipping */}
                <FormSection title="Delivery Address">
                  <Field label="Street Address" type="text" placeholder="Blk 123, Street Name" required />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Unit Number" type="text" placeholder="#04-12" />
                    <Field label="Postal Code" type="text" placeholder="123456" required />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium" style={{ color: "rgb(88, 88, 88)" }}>
                      Delivery Notes (optional)
                    </label>
                    <textarea
                      rows={2}
                      className="border rounded px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[rgb(244,124,44)] resize-none"
                      style={{ borderColor: "rgb(200, 200, 200)" }}
                      placeholder="Any special delivery instructions?"
                    />
                  </div>
                </FormSection>

                {/* Payment */}
                <FormSection title="Payment Method">
                  {/* Method selector tabs */}
                  <div className="flex gap-3 mb-6">
                    <PaymentTab
                      method="card"
                      active={paymentMethod}
                      onSelect={setPaymentMethod}
                      label="Credit / Debit Card"
                      icon={
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 5v7h16V9H4zm0-3v1h16V6H4zm4 9h2v1H8v-1zm3 0h5v1h-5v-1z" />
                        </svg>
                      }
                    />
                    <PaymentTab
                      method="gpay"
                      active={paymentMethod}
                      onSelect={setPaymentMethod}
                      label="Google Pay"
                      icon={<GooglePayIcon />}
                    />
                    <PaymentTab
                      method="paypal"
                      active={paymentMethod}
                      onSelect={setPaymentMethod}
                      label="PayPal"
                      icon={<PayPalIcon />}
                    />
                  </div>

                  {/* Card form */}
                  {paymentMethod === "card" && (
                    <div className="space-y-4">
                      <Field label="Cardholder Name" type="text" placeholder="John Doe" required />
                      <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium" style={{ color: "rgb(88, 88, 88)" }}>
                          Card Number
                        </label>
                        <div
                          className="flex items-center border rounded px-4 py-2.5 gap-3 focus-within:ring-2 focus-within:ring-[rgb(244,124,44)]"
                          style={{ borderColor: "rgb(200, 200, 200)" }}
                        >
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            className="flex-1 text-sm outline-none bg-transparent"
                            onChange={(e) => {
                              const v = e.target.value.replace(/\D/g, "").slice(0, 16);
                              e.target.value = v.replace(/(.{4})/g, "$1 ").trim();
                            }}
                            required
                          />
                          <div className="flex gap-1 shrink-0">
                            <CardBrandIcon brand="visa" />
                            <CardBrandIcon brand="mastercard" />
                            <CardBrandIcon brand="amex" />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                          <label className="text-sm font-medium" style={{ color: "rgb(88, 88, 88)" }}>
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM / YY"
                            maxLength={7}
                            className="border rounded px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[rgb(244,124,44)]"
                            style={{ borderColor: "rgb(200, 200, 200)" }}
                            onChange={(e) => {
                              const v = e.target.value.replace(/\D/g, "").slice(0, 4);
                              e.target.value = v.length > 2 ? v.slice(0, 2) + " / " + v.slice(2) : v;
                            }}
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-sm font-medium" style={{ color: "rgb(88, 88, 88)" }}>
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            maxLength={4}
                            className="border rounded px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[rgb(244,124,44)]"
                            style={{ borderColor: "rgb(200, 200, 200)" }}
                            onChange={(e) => {
                              e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
                            }}
                            required
                          />
                        </div>
                      </div>
                      <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "rgb(88, 88, 88)" }}>
                        <input type="checkbox" className="accent-[rgb(244,124,44)]" />
                        Save card for future purchases
                      </label>
                    </div>
                  )}

                  {paymentMethod === "gpay" && (
                    <div className="text-center py-6 flex flex-col items-center gap-4">
                      <GooglePayIcon className="w-16 h-10" />
                      <p className="text-sm" style={{ color: "rgb(88, 88, 88)" }}>
                        Click &quot;Place Order&quot; below to complete your purchase securely with Google Pay.
                      </p>
                    </div>
                  )}

                  {paymentMethod === "paypal" && (
                    <div className="text-center py-6 flex flex-col items-center gap-4">
                      <PayPalIcon className="w-24 h-10" />
                      <p className="text-sm" style={{ color: "rgb(88, 88, 88)" }}>
                        Click &quot;Place Order&quot; below to complete your purchase via PayPal.
                      </p>
                    </div>
                  )}

                  {/* Security badges */}
                  <div className="mt-4 flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-green-600 shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <p className="text-xs" style={{ color: "rgb(88, 88, 88)" }}>
                      Your payment information is encrypted and processed securely. We never store your card details.
                    </p>
                  </div>
                </FormSection>
              </div>

              {/* Right: order summary */}
              <div className="lg:col-span-2">
                <div
                  className="rounded p-6 sticky top-28"
                  style={{ backgroundColor: "white", border: "1px solid rgba(0,0,0,0.08)" }}
                >
                  <h2
                    className="text-xl font-bold mb-5"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      color: "rgb(44, 84, 29)",
                    }}
                  >
                    Order Summary
                  </h2>

                  {/* Items */}
                  <div className="space-y-3 mb-5">
                    {items.length === 0 ? (
                      <p className="text-sm text-center py-4" style={{ color: "rgb(88, 88, 88)" }}>
                        Your cart is empty.{" "}
                        <Link href="/shop" className="underline hover:text-[rgb(244,124,44)]">
                          Shop now
                        </Link>
                      </p>
                    ) : (
                      items.map(({ product, quantity }) => (
                        <div key={product.id} className="flex items-center gap-3">
                          <div className="relative shrink-0">
                            <Image
                              src={product.image}
                              alt={product.imageAlt}
                              width={56}
                              height={56}
                              className="rounded object-cover"
                            />
                            <span
                              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                              style={{ backgroundColor: "rgb(88, 88, 88)" }}
                            >
                              {quantity}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className="text-sm font-semibold truncate"
                              style={{
                                fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                                color: "rgb(44, 84, 29)",
                              }}
                            >
                              {product.name}
                            </p>
                            <p className="text-xs" style={{ color: "rgb(88, 88, 88)" }}>{product.weight}</p>
                          </div>
                          <span className="text-sm font-bold shrink-0" style={{ color: "rgb(88, 88, 88)" }}>
                            ${(parseFloat(product.price.replace("$", "")) * quantity).toFixed(2)}
                          </span>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Divider */}
                  <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} className="pt-4 space-y-2 text-sm">
                    <div className="flex justify-between" style={{ color: "rgb(88, 88, 88)" }}>
                      <span>Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between" style={{ color: "rgb(88, 88, 88)" }}>
                      <span>Delivery</span>
                      <span className={delivery === 0 ? "text-green-600 font-medium" : ""}>
                        {delivery === 0 ? "Free" : `$${delivery.toFixed(2)}`}
                      </span>
                    </div>
                    <div
                      className="flex justify-between font-bold text-base pt-3"
                      style={{ borderTop: "1px solid rgba(0,0,0,0.1)", color: "rgb(44, 84, 29)" }}
                    >
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={items.length === 0}
                    className="mt-6 w-full rounded py-3.5 text-white font-semibold text-base transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: "rgb(244, 124, 44)",
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      letterSpacing: "1px",
                    }}
                  >
                    {paymentMethod === "gpay"
                      ? "Pay with Google Pay"
                      : paymentMethod === "paypal"
                      ? "Pay with PayPal"
                      : "Place Order"}
                  </button>

                  <p className="mt-3 text-center text-xs" style={{ color: "rgb(88, 88, 88)" }}>
                    🔒 Secure 256-bit SSL encryption
                  </p>

                  <Link
                    href="/cart"
                    className="mt-3 block text-center text-xs underline hover:text-[rgb(244,124,44)] transition-colors"
                    style={{ color: "rgb(88, 88, 88)" }}
                  >
                    ← Edit Cart
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

// ——————————————————————————————
// Sub-components
// ——————————————————————————————

function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded p-6 bg-white space-y-4"
      style={{ border: "1px solid rgba(0,0,0,0.08)" }}
    >
      <h2
        className="text-xl font-bold"
        style={{
          fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
          color: "rgb(44, 84, 29)",
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

interface FieldProps {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

function Field({ label, type, placeholder, required }: FieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium" style={{ color: "rgb(88, 88, 88)" }}>
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="border rounded px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[rgb(244,124,44)]"
        style={{ borderColor: "rgb(200, 200, 200)" }}
      />
    </div>
  );
}

interface PaymentTabProps {
  method: PaymentMethod;
  active: PaymentMethod;
  onSelect: (m: PaymentMethod) => void;
  label: string;
  icon: React.ReactNode;
}

function PaymentTab({ method, active, onSelect, label, icon }: PaymentTabProps) {
  const isActive = method === active;
  return (
    <button
      type="button"
      onClick={() => onSelect(method)}
      className="flex-1 flex flex-col items-center gap-1.5 py-3 px-2 rounded border-2 transition-all text-xs font-medium"
      style={{
        borderColor: isActive ? "rgb(244, 124, 44)" : "rgb(200, 200, 200)",
        backgroundColor: isActive ? "rgba(244, 124, 44, 0.06)" : "white",
        color: isActive ? "rgb(244, 124, 44)" : "rgb(88, 88, 88)",
      }}
    >
      {icon}
      <span className="leading-tight text-center">{label}</span>
    </button>
  );
}

function CardBrandIcon({ brand }: { brand: "visa" | "mastercard" | "amex" }) {
  if (brand === "visa") {
    return (
      <svg viewBox="0 0 48 16" className="h-4 w-auto" aria-label="Visa">
        <text y="13" fontSize="14" fontWeight="bold" fill="#1A1F71" fontFamily="Arial">VISA</text>
      </svg>
    );
  }
  if (brand === "mastercard") {
    return (
      <svg viewBox="0 0 38 24" className="h-4 w-auto" aria-label="Mastercard">
        <circle cx="13" cy="12" r="10" fill="#EB001B" />
        <circle cx="25" cy="12" r="10" fill="#F79E1B" />
        <path d="M19 5.2a10 10 0 010 13.6A10 10 0 0119 5.2z" fill="#FF5F00" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 50 16" className="h-4 w-auto" aria-label="Amex">
      <text y="13" fontSize="11" fontWeight="bold" fill="#2E77BC" fontFamily="Arial">AMEX</text>
    </svg>
  );
}

function GooglePayIcon({ className = "w-12 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 40" className={className} aria-label="Google Pay">
      <text y="28" fontSize="22" fontWeight="500" fill="#3C4043" fontFamily="Arial, sans-serif">G</text>
      <text x="18" y="28" fontSize="22" fontWeight="500" fill="#4285F4" fontFamily="Arial, sans-serif">P</text>
      <text x="32" y="28" fontSize="22" fontWeight="500" fill="#34A853" fontFamily="Arial, sans-serif">a</text>
      <text x="46" y="28" fontSize="22" fontWeight="500" fill="#FBBC05" fontFamily="Arial, sans-serif">y</text>
    </svg>
  );
}

function PayPalIcon({ className = "w-20 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={className} aria-label="PayPal">
      <text y="28" fontSize="22" fontWeight="bold" fill="#003087" fontFamily="Arial, sans-serif">Pay</text>
      <text x="46" y="28" fontSize="22" fontWeight="bold" fill="#009CDE" fontFamily="Arial, sans-serif">Pal</text>
    </svg>
  );
}
