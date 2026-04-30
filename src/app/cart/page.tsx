"use client";

import Link from "next/link";
import Image from "next/image";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/hooks/useCart";

export default function CartPage() {
  const { items, totalItems, totalPrice, removeItem, updateQty } = useCart();

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="content" className="flex-1">
        {/* Page hero */}
        <div
          className="w-full py-16 text-center"
          style={{ backgroundColor: "rgb(11, 31, 20)" }}
        >
          <h1
            className="text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}
          >
            Your Cart
          </h1>
          <p className="mt-3 text-base" style={{ color: "rgb(255, 180, 60)" }}>
            {totalItems === 0 ? "Your cart is empty" : `${totalItems} item${totalItems !== 1 ? "s" : ""} in your cart`}
          </p>
        </div>

        <section className="py-12" style={{ backgroundColor: "rgb(255, 250, 243)" }}>
          <div className="mx-auto max-w-5xl px-6">
            {items.length === 0 ? (
              <div className="text-center py-20 flex flex-col items-center gap-6">
                <p className="text-xl" style={{ color: "rgb(88, 88, 88)" }}>
                  No items yet — time to pick some mangoes! 🥭
                </p>
                <Link
                  href="/shop"
                  className="inline-block rounded px-8 py-3 text-white font-semibold text-base transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "rgb(244, 124, 44)",
                    fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  }}
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart items */}
                <div className="lg:col-span-2 space-y-4">
                  <div
                    className="hidden md:grid grid-cols-[2fr_1fr_1fr_auto] gap-4 pb-2 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "rgb(88, 88, 88)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}
                  >
                    <span>Product</span>
                    <span className="text-center">Quantity</span>
                    <span className="text-right">Price</span>
                    <span />
                  </div>

                  {items.map(({ product, quantity }) => (
                    <div
                      key={product.id}
                      className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_auto] gap-4 items-center py-4"
                      style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
                    >
                      {/* Product info */}
                      <div className="flex items-center gap-4 w-full">
                        <Image
                          src={product.image}
                          alt={product.imageAlt}
                          width={72}
                          height={72}
                          className="rounded object-cover shrink-0"
                        />
                        <div>
                          <p
                            className="font-semibold text-sm"
                            style={{ fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif", color: "rgb(44, 84, 29)" }}
                          >
                            {product.name}
                          </p>
                          <p className="text-xs mt-0.5" style={{ color: "rgb(88, 88, 88)" }}>{product.weight}</p>
                          <p className="text-xs" style={{ color: "rgb(88, 88, 88)" }}>{product.pieces}</p>
                        </div>
                      </div>

                      {/* Qty */}
                      <div className="flex items-center justify-center">
                        <div className="flex items-center border" style={{ borderColor: "rgb(88, 88, 88)" }}>
                          <button
                            onClick={() => updateQty(product.id, quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors text-sm"
                          >
                            -
                          </button>
                          <span className="w-10 h-8 flex items-center justify-center border-x text-sm" style={{ borderColor: "rgb(88, 88, 88)" }}>
                            {quantity}
                          </span>
                          <button
                            onClick={() => updateQty(product.id, quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors text-sm"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-sm font-bold text-right" style={{ color: "rgb(88, 88, 88)" }}>
                        ${(parseFloat(product.price.replace("$", "")) * quantity).toFixed(2)}
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(product.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors text-lg leading-none"
                        aria-label="Remove item"
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  <div className="pt-4">
                    <Link
                      href="/shop"
                      className="text-sm underline hover:text-[rgb(244,124,44)] transition-colors"
                      style={{ color: "rgb(88, 88, 88)" }}
                    >
                      ← Continue Shopping
                    </Link>
                  </div>
                </div>

                {/* Order summary */}
                <div className="lg:col-span-1">
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
                    <div className="space-y-3 text-sm" style={{ color: "rgb(88, 88, 88)" }}>
                      <div className="flex justify-between">
                        <span>Subtotal ({totalItems} items)</span>
                        <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery</span>
                        <span className="text-green-600 font-medium">
                          {totalItems >= 3 ? "Free" : "$8.00"}
                        </span>
                      </div>
                      {totalItems < 3 && (
                        <p className="text-xs text-green-600">
                          Add {3 - totalItems} more box{3 - totalItems !== 1 ? "es" : ""} for free delivery!
                        </p>
                      )}
                      <div
                        className="flex justify-between font-bold text-base pt-3"
                        style={{ borderTop: "1px solid rgba(0,0,0,0.1)", color: "rgb(44, 84, 29)" }}
                      >
                        <span>Total</span>
                        <span>${(totalPrice + (totalItems >= 3 ? 0 : 8)).toFixed(2)}</span>
                      </div>
                    </div>

                    <Link
                      href="/checkout"
                      className="mt-6 block w-full text-center rounded py-3 text-white font-semibold text-base transition-opacity hover:opacity-90"
                      style={{
                        backgroundColor: "rgb(244, 124, 44)",
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                        letterSpacing: "1px",
                      }}
                    >
                      Proceed to Checkout
                    </Link>

                    <p className="mt-3 text-center text-xs" style={{ color: "rgb(88, 88, 88)" }}>
                      Secure checkout · SSL encrypted
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
