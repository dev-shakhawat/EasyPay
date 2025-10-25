import Banner from "@/src/sections/banner/Banner";
import Brands from "@/src/sections/brands/Brands";
import Features from "@/src/sections/features/Features";
import Howto from "@/src/sections/howto/Howto";
import NavBar from "@/src/components/common/NavBar";

export default function Home() {
  return (
    <>
      {/* navbar */}
      <NavBar />

      {/* banner */}
      <Banner />

      {/* features */}
      <Features />

      {/* brands */}
      <Brands />

      {/* how it work */}
      <Howto />
    </>
  );
}
