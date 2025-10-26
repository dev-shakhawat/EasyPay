import Banner from "@/src/sections/banner/Banner";
import Brands from "@/src/sections/brands/Brands";
import Features from "@/src/sections/features/Features";
import Howto from "@/src/sections/howto/Howto";
import NavBar from "@/src/components/common/NavBar";
import Security from "@/src/sections/security/Security";
import Pricing from "@/src/sections/pricing/Pricing";
import Testimonial from "@/src/sections/testimonial/Testimonial";
import CallToAction from "@/src/sections/callToAction/CallToAction";

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

      {/* security */}
      <Security/>

      {/* Pricing section */}
      <Pricing/>

      {/* testimonial section */}
      <Testimonial/>

      {/* CallToAction section */}
      <CallToAction/>
      
    </>
  );
}
