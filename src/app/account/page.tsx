import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AccountPage() {
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
            My Account
          </h1>
          <p className="mt-3 text-base" style={{ color: "rgb(255, 180, 60)" }}>
            Manage your orders and profile
          </p>
        </div>

        <section className="py-16" style={{ backgroundColor: "rgb(255, 250, 243)" }}>
          <div className="mx-auto max-w-4xl px-6 grid md:grid-cols-2 gap-8">
            {/* Login */}
            <div
              className="p-8 rounded bg-white"
              style={{ border: "1px solid rgba(0,0,0,0.08)" }}
            >
              <h2
                className="text-2xl font-bold mb-6"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  color: "rgb(44, 84, 29)",
                }}
              >
                Login
              </h2>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium" style={{ color: "rgb(88, 88, 88)" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="border rounded px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[rgb(244,124,44)]"
                    style={{ borderColor: "rgb(200, 200, 200)" }}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium" style={{ color: "rgb(88, 88, 88)" }}>
                    Password
                  </label>
                  <input
                    type="password"
                    className="border rounded px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[rgb(244,124,44)]"
                    style={{ borderColor: "rgb(200, 200, 200)" }}
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />
                </div>
                <div className="flex items-center justify-between text-sm" style={{ color: "rgb(88, 88, 88)" }}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-[rgb(244,124,44)]" />
                    Remember me
                  </label>
                  <a href="#" className="hover:text-[rgb(244,124,44)] transition-colors">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="rounded px-8 py-3 text-white font-semibold text-base transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "rgb(244, 124, 44)",
                    fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  }}
                >
                  Log In
                </button>
              </form>
            </div>

            {/* Register */}
            <div
              className="p-8 rounded bg-white"
              style={{ border: "1px solid rgba(0,0,0,0.08)" }}
            >
              <h2
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  color: "rgb(44, 84, 29)",
                }}
              >
                New Customer
              </h2>
              <p className="text-sm mb-6" style={{ color: "rgb(88, 88, 88)" }}>
                Create an account to track your orders, manage your profile, and enjoy faster checkout.
              </p>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium" style={{ color: "rgb(88, 88, 88)" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="border rounded px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[rgb(244,124,44)]"
                    style={{ borderColor: "rgb(200, 200, 200)" }}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium" style={{ color: "rgb(88, 88, 88)" }}>
                    Password
                  </label>
                  <input
                    type="password"
                    className="border rounded px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[rgb(244,124,44)]"
                    style={{ borderColor: "rgb(200, 200, 200)" }}
                    placeholder="Create a password"
                    autoComplete="new-password"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded px-8 py-3 font-semibold text-base transition-colors hover:bg-gray-100"
                  style={{
                    color: "rgb(44, 84, 29)",
                    border: "2px solid rgb(44, 84, 29)",
                    fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  }}
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
