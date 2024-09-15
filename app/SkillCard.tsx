"use client";
import Image from "next/image";
import React from "react";

interface SkillCardProps {
  name: string;
  rating: number;
  imgsrc: any;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, rating, imgsrc }) => {
  console.log(imgsrc);
  return (
    <div className="flex flex-col md:flex-row flex-shrink-0 flex-grow-0 justify-between items-center  md:border md:border-white/50 w-64 md:w-[280px] md:h-36 h-[200px] py-4 md:py-0 md:pb-0 md:px-4 rounded-2xl ms-3 md:ms-0">
      <Image src={imgsrc} alt={`${name} logo`} height={120} />
      <div className="flex flex-col gap-2 items-center">
        <div className="text-primary font-black">{name}</div>
        <div>
          Level: <span className="text-primary">{rating}/5</span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
