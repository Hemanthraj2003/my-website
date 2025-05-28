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
    <div className="flex-1 flex flex-col gap-8 p-5 md:px-8 md:py-6 fade-in">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-black gradient-text mb-4">
          Technical Skills
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Technologies and frameworks I work with to bring ideas to life
        </p>
      </div>

      {/* Programming Languages */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
          <h3 className="text-2xl font-bold text-primary">
            Programming Languages
          </h3>
        </div>
        <Carousel>
          <SkillCard name="JavaScript" rating={4.2} imgsrc={JS} />
          <SkillCard name="TypeScript" rating={3.1} imgsrc={TS} />
          <SkillCard name="Java" rating={3.5} imgsrc={JAVA} />
          <SkillCard name="Python" rating={3.5} imgsrc={PY} />
          <SkillCard name="C" rating={3.1} imgsrc={C} />
          <SkillCard name="HTML/CSS" rating={4.5} imgsrc={HTML} />
        </Carousel>
      </div>

      {/* Frameworks & Libraries */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
          <h3 className="text-2xl font-bold text-primary">
            Frameworks & Libraries
          </h3>
        </div>
        <Carousel>
          <SkillCard name="ReactJS" rating={4.2} imgsrc={RJS} />
          <SkillCard name="NextJS" rating={3.2} imgsrc={NJS} />
          <SkillCard name="ExpressJS" rating={4.1} imgsrc={EJS} />
          <SkillCard name="NodeJS" rating={4} imgsrc={NODE} />
          <SkillCard name="React Native" rating={3.9} imgsrc={RJS} />
          <SkillCard name="ElectronJS" rating={3.5} imgsrc={ELE} />
          <SkillCard name="Bootstrap" rating={4.2} imgsrc={BOOT} />
          <SkillCard name="TailwindCSS" rating={4.2} imgsrc={TAIL} />
        </Carousel>
      </div>

      {/* Skills Summary */}
      <div className="glass-effect p-6 rounded-2xl mt-8">
        <h3 className="text-xl font-bold gradient-text mb-4">
          Skills Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🎨</div>
            <h4 className="font-semibold text-primary mb-2">
              Frontend Development
            </h4>
            <p className="text-sm text-gray-300">
              Creating responsive, interactive user interfaces with modern
              frameworks
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⚙️</div>
            <h4 className="font-semibold text-primary mb-2">
              Backend Development
            </h4>
            <p className="text-sm text-gray-300">
              Building robust APIs and server-side applications with Node.js and
              Express
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📱</div>
            <h4 className="font-semibold text-primary mb-2">
              Mobile Development
            </h4>
            <p className="text-sm text-gray-300">
              Developing cross-platform mobile applications with React Native
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
