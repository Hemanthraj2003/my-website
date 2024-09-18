"use client";
import React, { Dispatch, SetStateAction } from "react";
interface NavbarProps {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}
const Navbar: React.FC<NavbarProps> = ({ tab, setTab }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between  items-center">
      <button
        onClick={() => {
          setTab("About-Me");
          const link = document.createElement("a");
          link.href = "/Presentation1.pptx"; // Path to your file in the 'public' folder
          link.download = "presentation.pptx"; // Filename for the downloaded file
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      >
        <div className="text-[2.1rem] hover:text-[2.2rem] font-black text-primary hover:text-secondary hover:cursor-pointer transition-all duration-700">
          Hemanth Raj
        </div>
      </button>
      <div className="grid grid-cols-4 gap-2 sm:gap-20 font-black text-sm md:text-xl text-center py-4 sm:py-0">
        <button onClick={() => setTab("About-Me")}>
          <div
            className={`${
              tab === "About-Me"
                ? "text-primary"
                : "hover:text-primary/70 hover:cursor-pointer transition-all duration-700"
            }`}
          >
            About-Me
          </div>
        </button>
        <button onClick={() => setTab("Skills")}>
          <div
            className={`${
              tab === "Skills"
                ? "text-primary"
                : "hover:text-primary/70 hover:cursor-pointer transition-all duration-700"
            }`}
          >
            Skills
          </div>
        </button>
        <button onClick={() => setTab("Project")}>
          <div
            className={`${
              tab === "Project"
                ? "text-primary"
                : "hover:text-primary/70 hover:cursor-pointer transition-all duration-700"
            }`}
          >
            Project
          </div>
        </button>
        <button onClick={() => setTab("Contacts")}>
          <div
            className={`${
              tab === "Contacts"
                ? "text-primary"
                : "hover:text-primary/70 hover:cursor-pointer transition-all duration-700"
            }`}
          >
            Contacts
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
