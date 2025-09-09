import React, { useState } from "react";

const projects = [
  {
    name: "Calculator App",
    description:
      "A responsive and interactive web-based calculator built using HTML, CSS, and JavaScript. It supports basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator features a clean, modern design, mobile-friendly layout, and smooth background animation for an enhanced user experience.",
    liveView: "https://courageous-halva-57b401.netlify.app/",
    image: "/src/images/Project 10.png",
  },
  {
    name: "Weather App",
    description:
      "Built a weather forecast web app using React.js and the OpenWeather API. Implemented real-time city-based search with dynamic weather icons, temperature, humidity, and wind speed display. Optimized API integration and state management for fast updates, while ensuring a clean, responsive UI with accurate Celsius-based data visualization.",
    liveView: "https://cool-duckanoo-0a1c7b.netlify.app/",
    image: "/src/images/Project 9.png",
  },
  {
    name: "Pomodoro Timer",
    description:
      "Developed a Pomodoro Timer web app with customizable work and break sessions. Integrated dynamic background videos, dark/light mode toggle, and audio notifications, while optimizing state management in React for smooth real-time updates.",
    liveView: "https://gregarious-stardust-08f572.netlify.app/",
    image: "/src/images/Project 8.png",
  },
  {
    name: "Disney Characters",
    description:
      "Developed a Disney+ inspired web app featuring a hero carousel and character detail pages. Optimized the mobile carousel by refining CSS and applying efficient state management in React for smooth performance.",
    liveView: "https://disney-mu-black.vercel.app/",
    image: "/src/images/Project 1.png",
  },
  {
    name: "Coffee Website",
    description:
      "Built a fully responsive website with Hero, About Us, History, Category, and Footer sections. Fixed overlapping issues on smaller screens using Tailwind CSS utilities and media queries to ensure seamless viewing across devices.",
    liveView: "https://coffee-website-theta-olive.vercel.app/",
    image: "/src/images/Project 3.png",
  },
  {
    name: "GlowPost",
    description:
      "Created a website with Hero, Features, Customer Reviews, and Footer sections, and improved performance by fixing animation-related loading issues using hardware-accelerated CSS.",
    liveView: "https://glow-post-website.vercel.app/",
    image: "/src/images/Project 2.png",
  },
  {
    name: "FurniCraft",
    description:
      "Designed landing, category, and product view pages with 360° rotation and color change features. Resolved JavaScript conflicts and dynamic filtering issues through script optimization and effective DOM management.",
    liveView: "https://furnicraft-website.netlify.app/",
    image: "/src/images/Project 4.png",
  },
  {
    name: "XTRA Beauty",
    description:
      "Developed multiple sections including a hero carousel, improving performance by optimizing images and implementing lazy loading to reduce page load time.",
    liveView: "https://astounding-klepon-4e9e42.netlify.app/",
    image: "/src/images/Project 5.png",
  },
  {
    name: "Veloura",
    description:
      "Built the main slides of a hero carousel and ensured consistency across devices using responsive design techniques.",
    liveView: "https://veloura-website.netlify.app/",
    image: "/src/images/Project 6.png",
  },
  {
    name: "Fruit Store",
    description:
      "Developed a fruit-themed landing page using React and Tailwind CSS, featuring a clean layout and fully responsive design for seamless user experience across devices.",
    liveView: "https://fruit-store-website.netlify.app/",
    image: "/src/images/Project 7.png",
  },
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const projectsPerPage = 2;
  const startIndex = currentPage * projectsPerPage;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  return (
    <section
      className="w-full min-h-screen py-16 px-6 md:px-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/src/images/Projects-bg.jpg')" }}
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Here are some of the projects I have built. Each project highlights my
          skills in frontend development, responsive design, and optimization.
        </p>
      </div>

      {/* Projects list */}
      <div className="space-y-20">
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              (startIndex + index) % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Project Image */}
            <div className="md:w-1/2">
              <img
                src={project.image}
                alt={project.name}
                className="w-full rounded-2xl shadow-lg transition-transform transform hover:scale-105"
              />
            </div>

            {/* Project Details */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.liveView}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-600 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-700 transition"
              >
                Live View
              </a>
            </div>
          </div>
        ))}
      </div>

     {/* Prev / Next buttons */}
      <div className="flex justify-center mt-12 gap-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="px-6 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition disabled:bg-transparent disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          &#8592; Prev
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="px-6 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition disabled:bg-transparent disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          Next &#8594;
        </button>
      </div>

    </section>
  );
};

export default Projects;
