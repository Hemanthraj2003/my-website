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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="flex flex-col font-mono min-h-screen px-6 py-3 md:px-12 lg:px-24 xl:px-32 md:py-8 lg:py-12">
        <Navbar tab={tab} setTab={setTab} />

        <main className="flex-1 overflow-y-auto" role="main">
          {tab === "About-Me" && <AboutME />}
          {tab === "Skills" && <Skills />}
          {tab === "Project" && <Project />}
          {tab === "Contacts" && <Contacts />}
        </main>

        {/* Footer */}
        <footer className="mt-8 py-4 text-center text-gray-400 text-sm border-t border-gray-700">
          <p>
            © 2024 Hemanth Raj. Built with{" "}
            <span className="text-primary">Next.js</span> and{" "}
            <span className="text-primary">TypeScript</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
