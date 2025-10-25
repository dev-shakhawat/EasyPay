import Banner from "@/src/sections/banner/Banner";
import Features from "@/src/sections/features/Features";
import NavBar from "@/src/sections/nav/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* navbar */}
      <NavBar />

      {/* banner */}
      <Banner/>

      {/* features */}
      <Features/>
    </>
  );
}
