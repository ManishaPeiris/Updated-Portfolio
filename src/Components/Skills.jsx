import React, { useState } from "react";

// Example skills data with logos
const skills = [
  { 
    name: "React", 
    description: "Frontend library for building dynamic UIs.",
    logo: "/src/images/react-logo.png",
  },
  { 
    name: "Tailwind CSS", 
    description: "Utility-first CSS framework.",
    logo: "/src/images/tailwind-logo.png",
  },
  { 
    name: "JavaScript", 
    description: "Interactive behavior for web applications.",
    logo: "/src/images/javascript-logo.png",
  },
  { 
    name: "HTML", 
    description: "Markup language for creating web pages.",
    logo: "/src/images/html-logo.png",
  },
  { 
    name: "CSS", 
    description: "Styling and layout for web applications.",
    logo: "/src/images/css-logo.png",
  },
  { 
    name: "Version Control & Project Management", 
    description: "Experienced with version control using GitHub and project management with Jira.",
    logo: "/src/images/github-logo.png",
  },
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSkill = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="w-full min-h-screen py-16 px-6 md:px-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/src/images/Skills-bg.jpg')" }}
    >
      {/* Title and description */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Here are some of the skills I have acquired and mastered over time. 
          I enjoy applying these skills to create modern and efficient web applications.
        </p>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            onClick={() => toggleSkill(index)} // mobile fix
            className={`bg-white rounded-xl shadow-md p-6 transition-transform transform cursor-pointer
                        hover:scale-105 hover:bg-gradient-to-r hover:from-pink-100 hover:to-pink-200
                        ${activeIndex === index ? "scale-105 bg-gradient-to-r from-pink-200 to-pink-200" : ""}`}
          >
            <img 
              src={skill.logo} 
              alt={`${skill.name} logo`} 
              className="w-14 h-14 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{skill.name}</h3>
            <p className="text-gray-600 text-center">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
