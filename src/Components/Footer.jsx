import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Add mapping between link text and section ids
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="w-full" style={{ backgroundColor: "#FDD7CD" }}>
      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-900">
          {/* Brand and description */}
          <div>
            <h1 className="text-xl font-extrabold text-pink-600 tracking-wide cursor-pointer">
              Manisha
            </h1>
            <p className="max-w-[410px] mt-6 text-gray-900">
              Build your dream projects and showcase your portfolio with elegant and clean UI sections.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
              Quick Links
            </h3>
            <ul className="text-sm space-y-1">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.id}`}
                    className="text-gray-900 hover:text-pink-500 transition cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us - Social Icons */}
          <div>
            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
              Follow Us
            </h3>
            <div className="flex gap-6 text-2xl">
              <a
                href="mailto:manishapeiris513@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-pink-500 transition"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/manisha-peiris-89a7292b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-pink-500 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/ManishaPeiris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-pink-500 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom text */}
        <p className="py-4 text-center text-sm md:text-base text-gray-900/80">
          Copyright 2025 © Manisha Peiris. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
