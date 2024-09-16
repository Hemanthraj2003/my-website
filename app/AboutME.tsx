"use client";
import Image from "next/image";
import React from "react";
import profilePic from "./new.png";

const AboutME = () => {
  return (
    <div className="flex-1 p-5 md:px-24 md:py-12 md:mt-4 flex flex-col gap-10 justify-evenly cursor-pointer ">
      <div className="flex flex-col md:flex-row gap-12 md:gap-28  ">
        <div className="flex-none md:w-[30%] justify-center items-center">
          <Image
            src={profilePic}
            alt="profile-picture"
            width={300}
            height={300}
          />
        </div>
        <div className="sm:text-lg text-sm ">
          <span>HI,</span>
          <div>
            I&apos;m{" "}
            <span className="font-black  text-primary hover:text-secondary hover:text-[22px] transition-all duration-500">
              Hemanth Raj N
            </span>
            ,
          </div>
          <div className="pt-4 hover:text-[22px] transition-all duration-500">
            Age:
            <span className="font-black  text-primary hover:text-secondary">
              {" "}
              20
            </span>
            ,
          </div>
          <div className="pt-4 hover:text-[22px] transition-all duration-500">
            D.O.B:
            <span className="font-black  text-primary hover:text-secondary">
              {" "}
              15-nov-2003
            </span>
            ,
          </div>
          <div className="pt-4 hover:text-[22px] transition-all duration-500">
            Address: <br />
            <span className="font-black  text-primary hover:text-secondary">
              H.V Halli, R.R Nagar, Banglore
            </span>
          </div>
          <div className="pt-4 hover:text-[20px] transition-all duration-500">
            Qualification: <br />
            currently doing my{" "}
            <span className="font-black  text-primary hover:text-secondary">
              MCA at Banglore Institute of Technology
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-xl text-primary hover:text-secondary font-black pb-2">
          About Me:
        </div>
        <p className="text-justify">
          I am a 20-year-old{" "}
          <span className="text-primary hover:text-secondary">
            full-stack developer
          </span>{" "}
          and{" "}
          <span className="text-primary hover:text-secondary">
            Android Application developer
          </span>{" "}
          with a passion for coding that began in 2020. I have a strong
          foundation in both front-end and back-end technologies, enabling me to
          build dynamic, user-friendly applications. Outside of development, I
          enjoy immersing myself in FPS games and anime, continually drawing
          inspiration from my diverse interests to fuel my creativity in the
          tech world.
        </p>
      </div>
    </div>
  );
};

export default AboutME;
