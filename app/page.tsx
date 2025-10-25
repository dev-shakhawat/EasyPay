import Banner from "@/src/sections/banner/Banner";
import NavBar from "@/src/sections/nav/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* navbar */}
      <NavBar />

      {/* banner */}
      <Banner/>
    </>
  );
}
