import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductsGrid } from "@/components/ProductsGrid";

export default function ShopPage() {
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
            Our Mango Shop
          </h1>
          <p className="mt-3 text-base" style={{ color: "rgb(255, 180, 60)" }}>
            Fresh varieties, delivered to your door
          </p>
        </div>

        {/* Filter bar */}
        <div
          className="border-b"
          style={{ backgroundColor: "rgb(255, 250, 243)", borderColor: "rgba(0,0,0,0.08)" }}
        >
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <p className="text-sm" style={{ color: "rgb(88, 88, 88)" }}>
              Showing all 7 products
            </p>
            <div className="flex items-center gap-2">
              <label
                htmlFor="sort"
                className="text-sm"
                style={{ color: "rgb(88, 88, 88)" }}
              >
                Sort by:
              </label>
              <select
                id="sort"
                className="text-sm border rounded px-3 py-1.5 outline-none focus:ring-2 focus:ring-[rgb(244,124,44)]"
                style={{ borderColor: "rgb(88, 88, 88)", color: "rgb(88, 88, 88)" }}
              >
                <option>Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name A–Z</option>
              </select>
            </div>
          </div>
        </div>

        <ProductsGrid title="All Mangoes" />
      </main>
      <Footer />
    </>
  );
}
