import React from "react";
import construction from "./assets/construct.svg";
import Image from "next/image";
const Project = () => {
  return (
    <div className="flex flex-col min-w-full min-h-full items-center mt-8 md:mt-20">
      <Image
        src={construction}
        height={300}
        alt="under construction"
        color="white"
      />
      <div className="font-black text-primary text-[16px] md:text-3xl">
        This page is under construction
      </div>
    </div>
  );
};

export default Project;
