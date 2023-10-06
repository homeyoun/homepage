import RollingBanner from "./components/RollingBanner";
import SubMenu from "./components/SubMenu";

export default function Home() {
  const images = [
    "/image/RollingBanner/z01_img24.jpg",
    "/image/RollingBanner/z01_img46.jpg",
    "/image/RollingBanner/z01_img25.jpg",
    "/image/RollingBanner/z01_img36.jpg",
    "/image/RollingBanner/z01_img34.jpg",
    "/image/RollingBanner/z01_img07.jpg",
    "/image/RollingBanner/z01_img42.jpg",
    "/image/RollingBanner/z01_img44.jpg",
    "/image/RollingBanner/z01_img43.jpg",
  ];
  return (
    <main className="h-[10000px]">
      <RollingBanner images={images} interval={3000} />
      <SubMenu />
    </main>
  );
}
