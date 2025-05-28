"use client";
import React, { Dispatch, SetStateAction } from "react";
interface NavbarProps {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}
const Navbar: React.FC<NavbarProps> = ({ tab, setTab }) => {
  const handleDownloadResume = () => {
    setTab("About-Me");
    const link = document.createElement("a");
    link.href = "/Presentation1.pptx";
    link.download = "Hemanth_Raj_Resume.pptx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className="flex flex-col md:flex-row justify-between items-center glass-effect p-4 rounded-2xl mb-6"
      role="navigation"
      aria-label="Main navigation"
    >
      <button
        onClick={handleDownloadResume}
        className="group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
        aria-label="Download resume and go to About Me section"
      >
        <h1 className="text-[2.1rem] md:text-[2.5rem] font-black gradient-text group-hover:scale-105 transition-all duration-300">
          Hemanth Raj
        </h1>
        <p className="text-xs text-gray-400 group-hover:text-primary transition-colors duration-300">
          Click to download resume
        </p>
      </button>
      <div className="grid grid-cols-4 gap-2 sm:gap-8 font-bold text-sm md:text-lg text-center py-4 sm:py-0">
        {[
          { key: "About-Me", label: "About" },
          { key: "Skills", label: "Skills" },
          { key: "Project", label: "Projects" },
          { key: "Contacts", label: "Contact" },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${
              tab === key
                ? "bg-primary text-black font-bold"
                : "text-gray-300 hover:text-primary hover:bg-primary/10"
            }`}
            aria-label={`Navigate to ${label} section`}
            aria-current={tab === key ? "page" : undefined}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
