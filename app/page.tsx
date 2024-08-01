import Banner from "@/components/Banner";
import BouquetSection from "@/components/BouquetSection";
import Nav from "@/components/Nav";
import RollingBanner from "@/components/RollingBanner";

export default function Home() {
  return (
    <main>
      <RollingBanner />
      <BouquetSection />
      <Banner />
    </main>
  );
}
