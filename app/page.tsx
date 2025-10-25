import Banner from "@/src/sections/banner/Banner";
import Brands from "@/src/sections/brands/Brands";
import Features from "@/src/sections/features/Features";
import NavBar from "@/src/sections/nav/NavBar"; 

export default function Home() {
  return (
    <>
      {/* navbar */}
      <NavBar />

      {/* banner */}
      <Banner/>

      {/* features */}
      <Features/>

      {/* brands */}
      <Brands/>

    </>
  );
}


