import React from "react";
import SkillCard from "./SkillCard";
import JS from "./assets/js.png";
import TS from "./assets/ts.svg";
import JAVA from "./assets/java.jpg";
import PY from "./assets/python.png";
import C from "./assets/C.png";
import HTML from "./assets/html-css.png";
import RJS from "./assets/react.png";
import NJS from "./assets/next.jpg";
import EJS from "./assets/express.png";
import NODE from "./assets/node.png";
import ELE from "./assets/electron.png";
import BOOT from "./assets/boot.png";
import TAIL from "./assets/tailwind.png";
// import MERN from "./assets/mern.png";
// import NextType from "./assets/Next+typescript.png";
// import ReactNodeFire from "./assets/native+firebase.png";
import { Carousel } from "./Carousel";

const Skills: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col gap-3 p-4 mt-3 md:mt-8">
      <div className="font-black text-xl text-accent">
        Programing Languages:
      </div>
      <Carousel>
        <SkillCard name="JavaScript" rating={4.2} imgsrc={JS} />
        <SkillCard name="TypeScript" rating={3.1} imgsrc={TS} />
        <SkillCard name="Java" rating={3.5} imgsrc={JAVA} />
        <SkillCard name="Python" rating={3.5} imgsrc={PY} />
        <SkillCard name="C" rating={3.1} imgsrc={C} />
        <SkillCard name="HTML/CSS" rating={4.5} imgsrc={HTML} />
      </Carousel>
      <div className="font-black text-xl text-accent">FrameWorks:</div>
      <Carousel>
        <SkillCard name="ReactJS" rating={4.2} imgsrc={RJS} />
        <SkillCard name="NextJS" rating={3.2} imgsrc={NJS} />
        <SkillCard name="ExpressJS" rating={4.1} imgsrc={EJS} />
        <SkillCard name="NodeJS" rating={4} imgsrc={NODE} />
        <SkillCard name="React-Native" rating={3.9} imgsrc={RJS} />
        <SkillCard name="ElectronJS" rating={3.5} imgsrc={ELE} />
        <SkillCard name="BootStrap" rating={4.2} imgsrc={BOOT} />
        <SkillCard name="TailWindCSS" rating={4.2} imgsrc={TAIL} />
      </Carousel>
      {/* <div>Developement Stack:</div>
      <div className="flex flex-row overflow-x-auto gap-1">
        <SkillCard name="MERN" imgsrc={MERN} />
        <SkillCard name="NextJS+TypeScript" imgsrc={NextType} />
        <SkillCard name="Android-app" imgsrc={ReactNodeFire} />
      </div> */}
    </div>
  );
};

export default Skills;
