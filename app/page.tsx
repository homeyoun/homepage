import Banner from "@/components/Banner";
import ProductSection from "@/components/ProductSection";
import RollingBanner from "@/components/RollingBanner";
import { DUMMY_BOUQE } from "@/dummy-bouqe";
import { DUMMY_FOLIAGEPLAN } from "@/dummy-foliagePlant";

export default function Home() {
  const bouqes = DUMMY_BOUQE;
  const foliage = DUMMY_FOLIAGEPLAN;
  return (
    <main className="select-none">
      <RollingBanner />
      <ProductSection
        subTitle="꽃선물 하고 싶은데 고민일때!"
        title="감동과 행복을 주는 꽃선물"
        products={bouqes}
      />
      <Banner
        ImgSrc="/images/banner/banner2.png"
        title=" 꽃다발을 내손으로 꽃다발 강의수강"
        subTitle="수준높은 강의를 손쉽게 만나보세요"
        bgColor="ivory"
        width={200}
        fontColor="gray"
      />
      <ProductSection
        subTitle="공기정화로 좋은 공기와 축하를 한번에!"
        title="개업식이나 집들이에 좋은식물"
        products={foliage}
      />
      <Banner
        ImgSrc="/images/banner/banner3.png"
        title=" 꽃다발을 일상으로 꽃 구독하기"
        subTitle="집에서 직접 싱싱한 꽃을 만나보세요"
        bgColor="green"
        width={200}
        fontColor="gray"
      />
    </main>
  );
}
