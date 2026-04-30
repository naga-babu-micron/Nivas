import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const pages: Record<string, { title: string; content: React.ReactNode }> = {
  "privacy-policy": {
    title: "Privacy Policy",
    content: (
      <div className="prose max-w-none space-y-4 text-base leading-relaxed" style={{ color: "rgb(88, 88, 88)" }}>
        <p>Last updated: May 2026</p>
        <h3 className="text-xl font-bold" style={{ color: "rgb(44, 84, 29)", fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}>1. Information We Collect</h3>
        <p>We collect information you provide directly, such as your name, email address, phone number, and delivery address when you place an order or contact us.</p>
        <h3 className="text-xl font-bold" style={{ color: "rgb(44, 84, 29)", fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}>2. How We Use Your Information</h3>
        <p>Your information is used solely to process your orders, communicate about deliveries, and improve our service. We do not sell or share your data with third parties except as required to fulfil your order.</p>
        <h3 className="text-xl font-bold" style={{ color: "rgb(44, 84, 29)", fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}>3. Data Security</h3>
        <p>We implement appropriate security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</p>
        <h3 className="text-xl font-bold" style={{ color: "rgb(44, 84, 29)", fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}>4. Contact Us</h3>
        <p>For any privacy concerns, please email us at <a href="mailto:nivafoodssg@gmail.com" className="underline hover:text-[rgb(244,124,44)]">nivafoodssg@gmail.com</a>.</p>
      </div>
    ),
  },
  "terms-conditions": {
    title: "Terms & Conditions",
    content: (
      <div className="space-y-4 text-base leading-relaxed" style={{ color: "rgb(88, 88, 88)" }}>
        <p>Last updated: May 2026</p>
        <h3 className="text-xl font-bold" style={{ color: "rgb(44, 84, 29)", fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}>1. Orders</h3>
        <p>All orders are subject to availability. Prices are listed in Singapore Dollars (SGD) and are inclusive of GST where applicable.</p>
        <h3 className="text-xl font-bold" style={{ color: "rgb(44, 84, 29)", fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}>2. Minimum Orders</h3>
        <p>Free home delivery applies to orders of 3 or more boxes. A delivery fee of $8 applies to smaller orders.</p>
        <h3 className="text-xl font-bold" style={{ color: "rgb(44, 84, 29)", fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}>3. Product Quality</h3>
        <p>All mangoes are naturally ripened and sourced directly from farms. Due to the nature of fresh produce, slight variations in size and appearance may occur.</p>
        <h3 className="text-xl font-bold" style={{ color: "rgb(44, 84, 29)", fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}>4. Governing Law</h3>
        <p>These terms are governed by the laws of Singapore.</p>
      </div>
    ),
  },
  "shipping-details": {
    title: "Shipping Details",
    content: (
      <div className="space-y-4 text-base leading-relaxed" style={{ color: "rgb(88, 88, 88)" }}>
        <h3 className="text-xl font-bold" style={{ color: "rgb(44, 84, 29)", fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}>Delivery Schedule</h3>
        <p>We deliver on selected dates. Current delivery dates are announced in our announcement bar. Orders placed before the cutoff date will be included in the next delivery run.</p>
        <h3 className="text-xl font-bold" style={{ color: "rgb(44, 84, 29)", fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}>Free Delivery</h3>
        <p>Orders of 3 or more boxes qualify for free home delivery within Singapore.</p>
        <h3 className="text-xl font-bold" style={{ color: "rgb(44, 84, 29)", fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}>Delivery Areas</h3>
        <p>We currently deliver to all residential and commercial addresses within Singapore (excluding restricted zones).</p>
        <h3 className="text-xl font-bold" style={{ color: "rgb(44, 84, 29)", fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}>Packaging</h3>
        <p>Mangoes are hygienically packed in ventilated boxes to ensure they arrive fresh and undamaged.</p>
      </div>
    ),
  },
  "refund-police": {
    title: "Refund Policy",
    content: (
      <div className="space-y-4 text-base leading-relaxed" style={{ color: "rgb(88, 88, 88)" }}>
        <h3 className="text-xl font-bold" style={{ color: "rgb(44, 84, 29)", fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}>Our Policy</h3>
        <p>We take great pride in the quality of our mangoes. If you receive damaged or substandard produce, please contact us within 24 hours of delivery with photos.</p>
        <h3 className="text-xl font-bold" style={{ color: "rgb(44, 84, 29)", fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}>Eligibility</h3>
        <p>Refunds or replacements are offered for genuine quality issues. As mangoes are perishable, we do not accept returns for change of mind.</p>
        <h3 className="text-xl font-bold" style={{ color: "rgb(44, 84, 29)", fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}>How to Request</h3>
        <p>Email <a href="mailto:nivafoodssg@gmail.com" className="underline hover:text-[rgb(244,124,44)]">nivafoodssg@gmail.com</a> or call <a href="tel:+6593835114" className="underline hover:text-[rgb(244,124,44)]">+65 93835114</a> with your order details and photos within 24 hours of delivery.</p>
      </div>
    ),
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) {
    return (
      <>
        <AnnouncementBar />
        <Header />
        <main className="flex-1 py-24 text-center" style={{ backgroundColor: "rgb(255, 250, 243)" }}>
          <h1 className="text-3xl font-bold" style={{ color: "rgb(44, 84, 29)", fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}>
            Page not found
          </h1>
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
        <div className="w-full py-16 text-center" style={{ backgroundColor: "rgb(11, 31, 20)" }}>
          <h1
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}
          >
            {page.title}
          </h1>
        </div>
        <section className="py-12" style={{ backgroundColor: "rgb(255, 250, 243)" }}>
          <div className="mx-auto max-w-3xl px-6">{page.content}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
