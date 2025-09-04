import Image, { StaticImageData } from "next/image";
import React from "react";
import { ExternalLink, Mail, Phone } from "react-feather";

interface ContactDetailsProps {
  name: string;
  id: string;
  username: string;
  imgsrc: StaticImageData;
  url?: string;
  type?: "email" | "phone" | "social" | "website";
}
const ContactDetails: React.FC<ContactDetailsProps> = ({
  name,
  id,
  username,
  imgsrc,
  url,
  type = "social",
}) => {
  const getContactUrl = () => {
    if (url) return url;

    // Generate URLs based on contact type and id
    switch (type) {
      case "email":
        return `mailto:${id}`;
      case "phone":
        return `tel:${id}`;
      case "social":
        // Handle different social platforms
        if (name.toLowerCase().includes("linkedin")) {
          return id.startsWith("http") ? id : `https://${id}`;
        }
        if (name.toLowerCase().includes("github")) {
          return id.startsWith("http") ? id : id;
        }
        if (name.toLowerCase().includes("instagram")) {
          return id.startsWith("http") ? id : id;
        }
        if (name.toLowerCase().includes("whatsapp")) {
          const phoneNumber = id.replace(/[^\d]/g, "");
          return `https://wa.me/${phoneNumber}`;
        }
        if (name.toLowerCase().includes("discord")) {
          return `https://discord.com/users/${id}`;
        }
        return id.startsWith("http") ? id : `https://${id}`;
      default:
        return id.startsWith("http") ? id : `https://${id}`;
    }
  };

  const shouldOpenInNewTab = () => {
    return type === "social" || type === "website";
  };

  const getActionIcon = () => {
    switch (type) {
      case "email":
        return <Mail size={16} className="text-primary" />;
      case "phone":
        return <Phone size={16} className="text-primary" />;
      default:
        return <ExternalLink size={16} className="text-primary" />;
    }
  };

  const getActionText = () => {
    switch (type) {
      case "email":
        return "Send Email";
      case "phone":
        return "Call Now";
      default:
        return "Visit Profile";
    }
  };
  const contactUrl = getContactUrl();
  const openInNewTab = shouldOpenInNewTab();

  return (
    <a
      href={contactUrl}
      target={openInNewTab ? "_blank" : "_self"}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className="block glass-effect hover:bg-white/15 h-[92px] md:h-36 rounded-2xl p-4 transition-all duration-300 hover-lift group cursor-pointer contact-hover-scale contact-card-glow"
      aria-label={`${getActionText()} - ${name}: ${username}`}
    >
      <div className="flex h-full">
        {/* Platform Icon */}
        <div className="flex-shrink-0 relative">
          <div className="absolute inset-0 bg-primary/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Image
            src={imgsrc}
            alt={`${name} platform icon`}
            className="relative rounded-xl w-[60px] h-[60px] md:w-[100px] md:h-[100px] object-cover border-2 border-transparent group-hover:border-primary/30 transition-all duration-300"
            width={100}
            height={100}
          />
          {/* Action Icon Overlay */}
          <div className="absolute -bottom-1 -right-1 bg-primary/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 icon-pulse">
            {getActionIcon()}
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex-1 ps-4 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-sm md:text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-300 flex items-center gap-2">
              {name}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {getActionIcon()}
              </span>
            </h3>
            <p className="text-xs md:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
              <span className="text-gray-400">User:</span>{" "}
              <span className="font-semibold">{username}</span>
            </p>
          </div>

          {/* Contact ID Display */}
          <div className="bg-black/30 group-hover:bg-black/50 rounded-lg px-3 py-2 mt-2 transition-all duration-300">
            <div className="flex items-center justify-between">
              <span
                className="truncate flex-1 text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                title={id}
              >
                {id}
              </span>

              {/* Action Indicator */}
              <div className="flex items-center gap-2 text-primary opacity-60 group-hover:opacity-100 transition-all duration-300 slide-in-right">
                <span className="text-xs font-medium hidden md:inline">
                  {getActionText()}
                </span>
                <div className="transform group-hover:translate-x-1 transition-transform duration-300 icon-pulse">
                  {getActionIcon()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </a>
  );
};

export default ContactDetails;
