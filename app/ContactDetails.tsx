import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Copy } from "react-feather";
interface DeatilsProps {
  name: string;
  id: string;
  username: string;
  imgsrc: StaticImageData;
}
const ContactDetails: React.FC<DeatilsProps> = ({
  name,
  id,
  username,
  imgsrc,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(id);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500); // Reset "Copied!" message after 1.5 seconds
      } else {
        // Fallback for browsers that don't support Clipboard API
        const textArea = document.createElement("textarea");
        textArea.value = id;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
      }
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  };
  return (
    <div className="flex bg-white/5 hover:bg-white/10 h-[92px] md:h-36 rounded-3xl p-4 transition-all duration-500">
      <Image
        src={imgsrc}
        alt={name}
        className="rounded-xl w-[60px] h-[60px] md:w-[114px] md:h-[114px]"
      />
      <div className="ps-3 min-w-[80%] flex flex-col justify-evenly h-full">
        <div className="text-[12px] md:text-xl text-primary">{name}</div>
        <div className="text-[11px] md:text-xl ">
          User-ID: <span className="font-black text-primary">{username}</span>
        </div>
        <div className="text-[12px] md:text-xl flex items-center bg-black px-1 justify-between md:me-3">
          <span className="truncate overflow-hidden w-[70%] text-[10px] md:text-[18px] text-ellipsis font-thin text-white/50">
            {id}
          </span>
          <div
            className="flex font-black bg-white/15 hover:bg-white/30 hover:text-primary px-2 py-[5px] me-[-4px] items-center transition-all duration-500"
            onClick={handleCopy}
          >
            <button onClick={handleCopy} className="ml-2">
              <Copy size={18} className="hover:text-primary" />
            </button>

            {isCopied ? (
              <span className="ml-2 text-green-500 text-xs">Copied!</span>
            ) : (
              <span className="ml-2 text-green-500 text-xs">Copy</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
