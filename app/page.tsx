"use client";
import { useState } from "react";
import AboutME from "./AboutME";
import Contacts from "./Contacts";
import Navbar from "./navbar";
import Skills from "./Skills";
import Project from "./Project";
export default function Home() {
  const [tab, setTab] = useState("About-Me");
  return (
    <div className="flex flex-col font-mono h-screen  px-6 py-3 md:px-18 lg:px-44 xl:px-52  md:py-8 lg:py-16 md:overflow-hidden">
      <Navbar tab={tab} setTab={setTab} />
      {tab === "About-Me" && <AboutME />}
      {tab === "Skills" && <Skills />}
      {tab === "Project" && <Project />}
      {tab === "Contacts" && <Contacts />}
    </div>
  );
}
