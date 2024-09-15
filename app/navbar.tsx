import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between  items-center">
      <div className="text-[2.1rem] font-black text-primary">Hemanth Raj</div>
      <div className="grid grid-cols-4 gap-2 sm:gap-20 font-black text-sm md:text-xl text-center py-4 sm:py-0">
        <button>
          <div className="hover:text-primary/70 hover:cursor-pointer">
            About-Me
          </div>
        </button>{" "}
        <button>
          <div className="hover:text-primary/70 hover:cursor-pointer">
            Skills
          </div>
        </button>
        <button>
          <div className="hover:text-primary/70 hover:cursor-pointer">
            Project
          </div>
        </button>
        <button>
          <div className="hover:text-primary/70 hover:cursor-pointer">
            Contacts
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
