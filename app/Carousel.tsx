import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

interface CarouselProps {
  children: React.ReactNode;
  itemsToShowMd?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  itemsToShowMd = 3,
}) => {
  const [curr, setCurr] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isMd, setIsMd] = useState(false);
  const skillArray = React.Children.toArray(children);

  useEffect(() => {
    const handleResize = () => {
      const isMd = window.innerWidth >= 768;
      setIsMd(isMd);
      setItemsPerView(isMd ? itemsToShowMd : 1);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [itemsToShowMd]);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? 0 : curr - 1));
  };

  const next = () => {
    setCurr((curr) =>
      curr === skillArray.length - itemsPerView
        ? skillArray.length - itemsPerView
        : curr + 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex gap-0 md:gap-4 transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${
            (curr * (isMd ? 105 : 100)) / itemsPerView
          }%)`,
        }}
      >
        {skillArray.map((child, index) => (
          <div
            key={index}
            className="min-w-full md:min-w-[calc(100%/var(--items-per-view))] flex-shrink-0 flex-grow-0 flex justify-center md:justify-start"
            style={{ "--items-per-view": itemsPerView } as React.CSSProperties}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="flex justify-between md:justify-evenly items-center md:min-w-full absolute inset-0 md:relative md:p-4  md:visible">
        <button
          onClick={prev}
          className="p-2 md:bg-white/5 md:hover:bg-white text-accent rounded-[100px]"
        >
          <ChevronLeft size={isMd ? 25 : 48} />
        </button>
        <button
          onClick={next}
          className="p-2 md:bg-white/5 md:hover:bg-white text-accent rounded-[100px]"
        >
          <ChevronRight size={isMd ? 25 : 48} />
        </button>
      </div>
    </div>
  );
};
