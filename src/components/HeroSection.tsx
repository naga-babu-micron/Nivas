import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[600px] flex items-center"
      style={{
        backgroundImage: "url('/images/hero-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Subtle left gradient overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(255,250,243,0.75) 0%, rgba(255,250,243,0.45) 45%, rgba(255,250,243,0) 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-20">
        <div className="max-w-[680px]">
          <h1
            className="text-[58px] font-bold leading-[1.2] capitalize mb-4"
            style={{
              fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
              color: "rgb(44, 84, 29)",
            }}
          >
            Farm Fresh{" "}
            <span style={{ display: "inline" }}>Mangoes</span>
            <br />
            Delivered to Your Door
          </h1>

          <h2
            className="text-[32px] font-normal leading-[1.3] capitalize mb-8"
            style={{
              fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
              color: "rgb(5, 5, 5)",
              letterSpacing: "1px",
            }}
          >
            Naturally ripened . Direct from farms .
            <br />
            No chemicals
          </h2>

          <Link
            href="/shop"
            className="inline-block rounded-[3px] text-white font-normal capitalize transition-opacity duration-300 hover:opacity-90"
            style={{
              fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
              backgroundColor: "rgb(244, 124, 44)",
              padding: "15px 40px",
              fontSize: "16px",
              letterSpacing: "3px",
              lineHeight: "16px",
            }}
          >
            Shop Fresh Mangoes
          </Link>
        </div>
      </div>
    </section>
  );
}
