"use client";
import AboutME from "./AboutME";
import Navbar from "./navbar";
// import Skills from "./Skills";
export default function Home() {
  return (
    <div className="flex flex-col font-mono h-screen  px-6 py-3 md:px-18 lg:px-44 xl:px-52  md:py-8 lg:py-16 md:overflow-hidden">
      <Navbar />
      <AboutME />
      {/* <Skills /> */}
    </div>
  );
}
