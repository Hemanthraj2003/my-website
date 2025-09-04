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
    <div className="flex-1 p-5 md:px-8 md:py-6 fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-black gradient-text mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          Let&apos;s connect! Feel free to reach out through any of these
          platforms
        </p>
        <div className="glass-effect p-6 rounded-2xl max-w-2xl mx-auto">
          <p className="text-gray-300 leading-relaxed">
            I&apos;m always open to discussing new opportunities, collaborating
            on interesting projects, or just having a chat about technology and
            development. Whether you&apos;re looking for a developer, have a
            project idea, or want to connect professionally, don&apos;t hesitate
            to reach out!
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <ContactDetails
          name="Email"
          imgsrc={Email}
          username="Hemanth Raj"
          id="hemanth3raj@gmail.com"
          type="email"
        />
        <ContactDetails
          name="LinkedIn"
          imgsrc={Linkedin}
          username="hemanth-raj-6667b6273"
          id="www.linkedin.com/in/hemanth-raj-6667b6273"
          url="https://www.linkedin.com/in/hemanth-raj-6667b6273"
          type="social"
        />
        <ContactDetails
          name="GitHub"
          imgsrc={GitHub}
          username="@Hemanthraj2003"
          id="https://github.com/Hemanthraj2003"
          url="https://github.com/Hemanthraj2003"
          type="social"
        />
        <ContactDetails
          name="Instagram"
          imgsrc={Insta}
          username="@hemanth15raj"
          id="https://www.instagram.com/hemanth15raj"
          url="https://www.instagram.com/hemanth15raj"
          type="social"
        />
        <ContactDetails
          name="WhatsApp"
          imgsrc={WhatsApp}
          username="Hemanth Raj"
          id="+91-8197839253"
          type="phone"
        />
        <ContactDetails
          name="Discord"
          imgsrc={Discord}
          username="noobmaster06616"
          id="noobmaster06616"
          url="https://discord.com/users/noobmaster06616"
          type="social"
        />
      </div>

      {/* Quick Contact Section */}
      <div className="glass-effect p-8 rounded-2xl">
        <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-6 text-center">
          Quick Contact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Quick Contact */}
          <a
            href="mailto:hemanth3raj@gmail.com"
            className="group p-6 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 hover-lift text-center block"
            aria-label="Send email to Hemanth Raj"
          >
            <h4 className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors duration-300 mb-2">
              Email
            </h4>
            <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 mb-4">
              Best for professional inquiries and detailed discussions
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 group-hover:bg-primary/30 text-primary rounded-lg transition-all duration-300 transform group-hover:scale-105">
              <span className="text-sm font-medium">Send Email</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </div>
          </a>

          {/* LinkedIn Quick Contact */}
          <a
            href="https://www.linkedin.com/in/hemanth-raj-6667b6273"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 hover-lift text-center block"
            aria-label="Connect with Hemanth Raj on LinkedIn"
          >
            <h4 className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors duration-300 mb-2">
              LinkedIn
            </h4>
            <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 mb-4">
              Connect professionally and view my experience
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 group-hover:bg-primary/30 text-primary rounded-lg transition-all duration-300 transform group-hover:scale-105">
              <span className="text-sm font-medium">Connect</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </div>
          </a>

          {/* WhatsApp Quick Contact */}
          <a
            href="https://wa.me/918197839253"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 hover-lift text-center block"
            aria-label="Message Hemanth Raj on WhatsApp"
          >
            <h4 className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors duration-300 mb-2">
              WhatsApp
            </h4>
            <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 mb-4">
              Quick messages and instant communication
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 group-hover:bg-primary/30 text-primary rounded-lg transition-all duration-300 transform group-hover:scale-105">
              <span className="text-sm font-medium">Message</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
