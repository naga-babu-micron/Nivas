import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductsGrid } from "@/components/ProductsGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { PremiumSection } from "@/components/PremiumSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="content">
        <HeroSection />
        <ProductsGrid
          title="Our Best-Selling Mangoes"
          limit={6}
        />
        <WhyChooseUs />
        <ProductsGrid
          title="Explore Our Mango varieties"
          showShopNow
        />
        <PremiumSection />
      </main>
      <Footer />
    </>
  );
}
