import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pia7ych",   // Your Service ID
        "template_85pepda",  // Your Template ID
        formRef.current,
        "tIDY6JMdH0bHqrkxS"  // Your Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          setIsSent(true);
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          alert(`Something went wrong: ${error.text || error.message}`);
        }
      );
  };

  return (
    <section
      className="w-full py-16 px-6 md:px-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/src/images/Projects-bg.jpg')" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - Animated Image */}
        <div className="flex justify-center">
          <img
            src="/src/images/Contact.png"
            alt="Contact"
            className="rounded-xl shadow-lg w-full object-cover max-h-[500px] transform transition-transform duration-500 hover:scale-105 animate-pulse-slow"
          />
        </div>

        {/* Right side - Contact Form */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Feel free to reach out for collaborations or just to say hi! Fill out the form below and I will get back to you as soon as possible.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"  // ✅ Must match EmailJS template
                id="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-pink-500 bg-white bg-opacity-80 outline-none text-gray-800 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email" // ✅ Must match EmailJS template
                id="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-pink-500 bg-white bg-opacity-80 outline-none text-gray-800 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                name="message" // ✅ Must match EmailJS template
                id="message"
                rows="5"
                required
                placeholder="Your Message"
                className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-pink-500 bg-white bg-opacity-80 outline-none text-gray-800 transition-colors"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-500 transition"
            >
              Send Message
            </button>
          </form>

          {isSent && (
            <p className="mt-4 text-green-600 font-semibold">
              ✅ Message sent successfully!
            </p>
          )}
        </div>
      </div>

      {/* Custom animation */}
      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
