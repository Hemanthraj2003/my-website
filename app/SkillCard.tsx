"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface SkillCardProps {
  name: string;
  rating: number;
  imgsrc: StaticImageData;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, rating, imgsrc }) => {
  return (
    <div className="flex flex-col md:flex-row flex-shrink-0 flex-grow-0 justify-between items-center bg-white/5 hover:bg-white/10 w-64 md:w-[280px] md:h-36 h-[200px] py-4 md:py-0 md:pb-0 md:px-4 rounded-2xl ms-3 md:ms-0 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative">
        <Image
          src={imgsrc}
          alt={`${name} technology logo`}
          height={120}
          width={120}
          className="object-contain"
          priority={false}
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="text-primary font-black text-center">{name}</div>
        <div className="text-sm">
          Level: <span className="text-primary font-semibold">{rating}/5</span>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < Math.floor(rating)
                  ? "bg-primary"
                  : i < rating
                  ? "bg-primary/50"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
