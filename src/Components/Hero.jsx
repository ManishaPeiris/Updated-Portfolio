import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import myImage from "../images/My-Image.jpg"; // <-- replace with your image

const Hero = () => {
  return (
    <section
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/src/images/Hero-bg.jpg')" }}
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Left Content */}
        <div className="text-left space-y-4 md:space-y-6 max-w-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Hello, I’m <span className="text-pink-600">Manisha</span>
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-700">
            <Typewriter
              words={["Frontend Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
          <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
            I’m a passionate frontend developer who loves creating clean, modern, and user-friendly web experiences. 
            I’m currently an undergraduate student pursuing a BSc (Hons) in Computer Science and have completed an internship 
            as a Frontend Developer at TechWox Solutions (Pvt) Ltd.
          </p>
        </div>

        {/* Right Image with Animation */}
        <div className="mt-6 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
          <motion.div
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-4 border-pink-400 shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [0, -15, 0], // floating effect
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <img
              src={myImage}
              alt="Manisha"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
