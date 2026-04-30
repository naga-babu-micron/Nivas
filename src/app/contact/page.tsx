import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
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
            Contact Us
          </h1>
          <p className="mt-3 text-base" style={{ color: "rgb(255, 180, 60)" }}>
            We&apos;d love to hear from you
          </p>
        </div>

        <section className="py-16" style={{ backgroundColor: "rgb(255, 250, 243)" }}>
          <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2
                className="text-3xl font-bold mb-6"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  color: "rgb(44, 84, 29)",
                }}
              >
                Get in Touch
              </h2>
              <div className="space-y-4 text-base" style={{ color: "rgb(88, 88, 88)" }}>
                <div>
                  <p className="font-semibold" style={{ color: "rgb(44, 84, 29)" }}>Address</p>
                  <p>Niva Foods Pte Ltd</p>
                  <p>Blk 206B, Compassvale Lane</p>
                  <p>#08-95, Singapore 542206</p>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: "rgb(44, 84, 29)" }}>Email</p>
                  <a
                    href="mailto:nivafoodssg@gmail.com"
                    className="hover:text-[rgb(244,124,44)] transition-colors"
                  >
                    nivafoodssg@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: "rgb(44, 84, 29)" }}>Phone</p>
                  <a
                    href="tel:+6593835114"
                    className="hover:text-[rgb(244,124,44)] transition-colors"
                  >
                    +65 93835114
                  </a>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: "rgb(44, 84, 29)" }}>Hours</p>
                  <p>Monday – Saturday: 9 AM – 6 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <form className="flex flex-col gap-4">
              <h2
                className="text-3xl font-bold mb-2"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  color: "rgb(44, 84, 29)",
                }}
              >
                Send a Message
              </h2>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium" style={{ color: "rgb(88, 88, 88)" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  className="border rounded px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[rgb(244,124,44)]"
                  style={{ borderColor: "rgb(200, 200, 200)" }}
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium" style={{ color: "rgb(88, 88, 88)" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  className="border rounded px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[rgb(244,124,44)]"
                  style={{ borderColor: "rgb(200, 200, 200)" }}
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium" style={{ color: "rgb(88, 88, 88)" }}>
                  Subject
                </label>
                <input
                  type="text"
                  className="border rounded px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[rgb(244,124,44)]"
                  style={{ borderColor: "rgb(200, 200, 200)" }}
                  placeholder="Order inquiry, feedback, etc."
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium" style={{ color: "rgb(88, 88, 88)" }}>
                  Message
                </label>
                <textarea
                  rows={5}
                  className="border rounded px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[rgb(244,124,44)] resize-none"
                  style={{ borderColor: "rgb(200, 200, 200)" }}
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="rounded px-8 py-3 text-white font-semibold text-base transition-opacity hover:opacity-90 active:scale-95"
                style={{
                  backgroundColor: "rgb(244, 124, 44)",
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  letterSpacing: "1px",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
