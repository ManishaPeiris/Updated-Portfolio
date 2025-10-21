import React from "react";
import techwoxLogo from "/src/images/Company-Logo.jpg"; // replace with your company logo

const experiences = [
  {
    company: "TechWox Solutions (Pvt) Ltd",
    role: "Frontend Developer Intern (Completed)",
    period: "April 2025 - October 2025",
    description: [
      "Developed responsive frontend components using HTML, CSS, JavaScript, React, Vite, and Tailwind CSS.",
      "Integrated 3D visual experiences with Three.js to enhance interactivity and user engagement.",
      "Collaborated with backend developers to integrate APIs and dynamic content.",
      "Participated in team meetings and contributed to project planning and code reviews.",
      "Learned best practices in frontend development and version control using GitHub and Jira.",
    ],
    logo: techwoxLogo,
    serviceLetter: "/src/documents/TechWox-Service-Letter.pdf", // path to your PDF
  },
];

const Experiences = () => {
  return (
    <section
      className="w-full min-h-screen py-16 px-6 md:px-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/src/images/Experiences-bg.jpg')" }}
    >
      {/* Overlay for readability */}
      <div className="w-full h-full bg-gray-900 bg-opacity-30">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">My Experience</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Here is an overview of my professional experience, including my internship at TechWox Solutions.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg p-6 flex-1 bg-white bg-opacity-90 transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Company Logo */}
              <div className="w-20 h-20 mb-4 mx-auto">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Company Info */}
              <h3 className="text-2xl font-bold text-gray-800 text-center">{exp.company}</h3>
              <p className="text-pink-600 text-center font-semibold">{exp.role}</p>
              <p className="text-gray-500 text-center mb-4">{exp.period}</p>

              {/* Description */}
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {/* View Service Letter Button */}
              {exp.serviceLetter && (
                <div className="text-center">
                  <a
                    href={exp.serviceLetter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-700 transition-all"
                  >
                    View Service Letter
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
