// src/App.jsx
import React from "react";

// src/data.js







function App() {

  const projects = [
    {
      id: 1,
      imgUrl: "/password.jpg",
      title: "Password Checker",
      description: "Check the strength of your password in real-time.",
      link: "/password-checker", // ya github link
    },
    {
      id: 2,
      imgUrl: "/buttonEffect.jpg",
      title: "Button Effects",
      description: "Interactive buttons with cool hover effects.",
      link: "/button-effects",
    },
    {
      id: 3,
      imgUrl: "/slider.jpg",
      title: "Image Slider",
      description: "Responsive image carousel with smooth animations.",
      link: "/slider",
    },
    {
      id: 4,
      imgUrl: "/calculator.jpg",
      title: "Calculator",
      description: "A basic calculator built using React.",
      link: "/calculator",
    },
    {
      id: 5,
      imgUrl: "/authentication.jpg",
      title: "Authentication",
      description: "A authentication system with login and signup.",
      link: "/login",
    },
     {
      id: 6,
      imgUrl: "/authentication.jpg",
      title: "Accordian",
      description: "Accordian component built using React.",
      link: "/accordian",
    },
     {
      id: 7,
      imgUrl: "/authentication.jpg",
      title: "Temperature Calculator",
      description: "A temperature calculator built using React.",
      link: "/temp-calc",
    },
     {
      id: 8,
      imgUrl: "/authentication.jpg",
      title: "Tip Calculator",
      description: "A tip calculator built using React.",
      link: "/tip-calc",
    },
     {
      id: 9,
      imgUrl: "/authentication.jpg",
      title: "Toast Notification",
      description: "A toast notification built using React.",
      link: "/toast",
    },
     {
      id: 9,
      imgUrl: "/authentication.jpg",
      title: "Lorem Ipsum Generator",
      description: "A project to generate random lorem ipsum with tag or without tag.",
      link: "/lorem",
    },
    {
      id: 10,
      imgUrl: "/authentication.jpg",
      title: "Age Calculator",
      description: "A project to calculate age.",
      link: "/age-calc",
    },
    {
      id: 11,
      imgUrl: "/authentication.jpg",
      title: "Background Changer",
      description: "A project to change the background.",
      link: "/bgchanger",
    },
     {
      id: 12,
      imgUrl: "/authentication.jpg",
      title: "Password Generator",
      description: "A project to generate random password.",
      link: "/pswgen",
    },
    {
      id: 13,
      imgUrl: "/authentication.jpg",
      title: "BMI Calculator",
      description: "A project to calculate BMI.",
      link: "/bmicalc",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Mini Projects</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="h-[200px] ">
              <img src={project.imgUrl} alt={project.imgUrl.toLocaleLowerCase()} className="h-full w-full rounded object-cover " />
            </div>
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              target="_blank"
            >
              Open Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
