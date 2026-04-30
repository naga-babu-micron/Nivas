"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { type Product } from "@/types/products";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  function handleAddToCart() {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <li className="flex flex-col relative" style={{ color: "rgb(88, 88, 88)" }}>
      {/* Image + Sale badge */}
      <div className="relative">
        <Link href={`/product/${product.slug}`} className="block relative">
          {product.outOfStock && (
            <span
              className="absolute top-3 left-3 z-10 rounded-sm px-2 py-0.5 text-xs font-medium text-white"
              style={{ backgroundColor: "rgb(88, 88, 88)" }}
            >
              Out of stock
            </span>
          )}
          <Image
            src={product.image}
            alt={product.imageAlt}
            width={353}
            height={353}
            className="w-full aspect-square object-cover block"
            style={{ marginBottom: "13.6px" }}
          />
        </Link>
        {/* Sale badge */}
        <span
          className="absolute top-3 right-3 z-10 rounded-sm px-2 py-0.5 text-xs font-semibold"
          style={{ backgroundColor: "rgb(116, 168, 74)", color: "white" }}
        >
          Sale!
        </span>
      </div>

      {/* Product info */}
      <div className="flex flex-col flex-1">
        <Link
          href={`/product/${product.slug}`}
          className="font-semibold text-base hover:text-[rgb(244,124,44)] transition-colors"
          style={{ fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}
        >
          <h2 className="text-base font-semibold">{product.name}</h2>
        </Link>

        {/* Price */}
        <div
          className="text-sm font-bold mt-1"
          style={{ color: "rgb(88, 88, 88)", marginBottom: "7.65px" }}
        >
          {product.price}{" "}
          <span className="font-normal text-xs">/ per box</span>
        </div>

        {/* Weight & pieces */}
        <div className="text-sm mb-3" style={{ color: "rgb(88, 88, 88)" }}>
          <p>{product.weight}</p>
          {product.minimumOrder && <p>{product.minimumOrder}</p>}
          <p>{product.pieces}</p>
        </div>

        {/* Quantity selector + Add to Cart */}
        <div className="mt-auto flex flex-col gap-2">
          <div className="flex items-center">
            <div
              className="flex items-center border"
              style={{ borderColor: "rgb(88, 88, 88)" }}
            >
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-8 h-[34px] flex items-center justify-center text-sm hover:bg-gray-100 transition-colors"
                aria-label="Minus Quantity"
                disabled={product.outOfStock}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                className="w-10 h-[34px] text-center text-sm border-x outline-none"
                style={{ borderColor: "rgb(88, 88, 88)" }}
                min="1"
                readOnly={product.outOfStock}
              />
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-8 h-[34px] flex items-center justify-center text-sm hover:bg-gray-100 transition-colors"
                aria-label="Plus Quantity"
                disabled={product.outOfStock}
              >
                +
              </button>
            </div>
          </div>

          <button
            disabled={product.outOfStock}
            onClick={handleAddToCart}
            className={cn(
              "w-full py-2.5 text-sm font-medium uppercase tracking-wider text-white transition-all duration-200",
              product.outOfStock
                ? "opacity-50 cursor-not-allowed"
                : "hover:opacity-90 active:scale-95",
              added && "bg-green-600",
            )}
            style={{
              backgroundColor: added
                ? undefined
                : product.outOfStock
                ? "rgb(88, 88, 88)"
                : "rgb(244, 124, 44)",
              fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
              letterSpacing: "1px",
            }}
          >
            {product.outOfStock ? "Out of Stock" : added ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </li>
  );
}
