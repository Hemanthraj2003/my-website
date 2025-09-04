"use client";
import Image from "next/image";
import React from "react";
import profilePic from "./new.png";

const AboutME = () => {
  return (
    <div className="flex-1 p-5 md:px-24 md:py-12 md:mt-4 flex flex-col gap-10 justify-evenly fade-in">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-black gradient-text mb-4">
          Full Stack Developer
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Crafting digital experiences with passion and precision
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-28 items-center">
        <div className="flex-none md:w-[30%] flex justify-center items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src={profilePic}
              alt="Hemanth Raj - Full Stack Developer"
              width={300}
              height={300}
              className="relative rounded-full border-4 border-primary/20 hover:border-primary/40 transition-all duration-300"
              priority
            />
          </div>
        </div>
        <div className="sm:text-lg text-sm space-y-6">
          <div className="glass-effect p-6 rounded-2xl hover-lift">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-gray-300">Hi, I&apos;m </span>
              <span className="gradient-text">Hemanth Raj N</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-300">Age:</span>
                <span className="font-semibold text-primary">20</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-300">Born:</span>
                <span className="font-semibold text-primary">15 Nov 2003</span>
              </div>

              <div className="flex items-start gap-3 md:col-span-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <span className="text-gray-300">Location:</span>
                  <span className="font-semibold text-primary ml-2">
                    H.V Halli, R.R Nagar, Bangalore
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 md:col-span-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <span className="text-gray-300">Education:</span>
                  <span className="font-semibold text-primary ml-2">
                    MCA at Bangalore Institute of Technology
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="glass-effect p-8 rounded-2xl hover-lift">
        <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
          About Me
        </h3>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p className="text-lg">
            I am a passionate{" "}
            <span className="text-primary font-semibold">
              20-year-old developer
            </span>{" "}
            specializing in{" "}
            <span className="text-primary font-semibold">
              full-stack development
            </span>{" "}
            and{" "}
            <span className="text-primary font-semibold">
              Android applications
            </span>
            .
          </p>

          <p>
            My coding journey began in{" "}
            <span className="text-primary font-semibold">2020</span>, and since
            then I&apos;ve built a strong foundation in both front-end and
            back-end technologies. I love creating dynamic, user-friendly
            applications that solve real-world problems.
          </p>

          <p>
            When I&apos;m not coding, you&apos;ll find me immersed in FPS games
            or watching anime. These diverse interests continually inspire my
            creativity and help me approach development challenges from unique
            perspectives.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              Full Stack Development
            </span>
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              Android Development
            </span>
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              UI/UX Design
            </span>
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              Problem Solving
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutME;
