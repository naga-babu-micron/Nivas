import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
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
            About Niva Foods
          </h1>
          <p className="mt-3 text-base" style={{ color: "rgb(255, 180, 60)" }}>
            Our Story &amp; Mission
          </p>
        </div>

        {/* Story section */}
        <section className="py-16" style={{ backgroundColor: "rgb(255, 250, 243)" }}>
          <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl font-bold mb-5"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  color: "rgb(44, 84, 29)",
                }}
              >
                Farm Fresh, Delivered with Love
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgb(88, 88, 88)" }}>
                Niva Foods was born out of a simple belief — that everyone deserves access to
                naturally ripened, chemical-free mangoes sourced directly from trusted farms.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgb(88, 88, 88)" }}>
                We work closely with mango farmers across India to bring you the finest varieties
                — Alphonso, Banganapalli, Kesar, Payri, Imampasanth and more — shipped fresh to
                your doorstep in Singapore.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgb(88, 88, 88)" }}>
                No middlemen. No artificial ripening. Just pure, authentic mango goodness.
              </p>
            </div>
            <div className="rounded overflow-hidden">
              <Image
                src="/images/hero-bg.webp"
                alt="Fresh mangoes"
                width={600}
                height={400}
                className="w-full h-72 object-cover rounded"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16" style={{ backgroundColor: "rgb(253, 245, 245)" }}>
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2
              className="text-4xl font-bold mb-10"
              style={{
                fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                color: "rgb(44, 84, 29)",
              }}
            >
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "100% Natural", body: "Every mango is naturally ripened without any artificial chemicals or carbide." },
                { title: "Direct from Farm", body: "We partner directly with farmers to ensure freshness and fair compensation." },
                { title: "Fast & Fresh", body: "Delivered within days of harvest so you get the best taste possible." },
              ].map((v) => (
                <div key={v.title} className="p-6 bg-white rounded shadow-sm text-left">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      color: "rgb(44, 84, 29)",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgb(88, 88, 88)" }}>{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
