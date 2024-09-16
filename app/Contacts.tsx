import React from "react";
import ContactDetails from "./ContactDetails";
import Email from "./assets/gmail.png";
import Linkedin from "./assets/linkden.jpg";
import Insta from "./assets/insta.webp";
import GitHub from "./assets/github.png";
import Discord from "./assets/discord.jpg";
import WhatsApp from "./assets/whatsapp.png";

const Contacts = () => {
  return (
    <div className="py-11 min-w-full grid grid-cols-1 md:grid-cols-2 gap-6 ">
      <ContactDetails
        name="E-mail"
        imgsrc={Email}
        username="Hemanth Raj"
        id="hemanth3raj@gmail.com"
      />
      <ContactDetails
        name="Linkedin"
        imgsrc={Linkedin}
        username="hemanth-raj-6667b6273"
        id="www.linkedin.com/in/hemanth-raj-6667b6273"
      />
      <ContactDetails
        name="Instagram"
        imgsrc={Insta}
        username="@hemanth15raj"
        id="https://www.instagram.com/hemanth15raj"
      />
      <ContactDetails
        name="GitHub"
        imgsrc={GitHub}
        username="@Hemanthraj2003"
        id="https://github.com/Hemanthraj2003"
      />
      <ContactDetails
        name="Discord"
        imgsrc={Discord}
        username="noobmaster06616"
        id="noobmaster06616"
      />
      <ContactDetails
        name="WhatsApp"
        imgsrc={WhatsApp}
        username="Hemanth Raj"
        id="+91-8197839253"
      />
    </div>
  );
};

export default Contacts;
