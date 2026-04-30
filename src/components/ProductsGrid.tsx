import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { products } from "@/types/products";

interface ProductsGridProps {
  title: string;
  subtitle?: string;
  showShopNow?: boolean;
  limit?: number;
}

export function ProductsGrid({
  title,
  subtitle,
  showShopNow = false,
  limit,
}: ProductsGridProps) {
  const displayProducts = limit ? products.slice(0, limit) : products;

  return (
    <section
      className="w-full py-12"
      style={{ backgroundColor: "rgb(255, 250, 243)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          className="text-4xl font-bold text-center mb-2 capitalize"
          style={{
            fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
            color: "rgb(44, 84, 29)",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-center text-base mb-8 text-gray-500">{subtitle}</p>
        )}

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 list-none p-0 m-0 mt-8"
        >
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>

        {showShopNow && (
          <div className="mt-10 flex justify-end">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-[3px] px-8 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "rgb(244, 124, 44)",
                fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                letterSpacing: "1px",
              }}
            >
              Shop now →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
