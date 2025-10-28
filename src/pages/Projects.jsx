import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { MdHome, MdWork } from 'react-icons/md';
import { Link } from 'react-router-dom'; // Optional if using React Router

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


const Projects = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12 px-4">
  {projects.map((project) => (
    <div
      key={project.id}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
    >
      {/* Image Section */}
      <div className="h-48 overflow-hidden">
        <img
          src={project.imgUrl}
          alt={project.title.toLowerCase()}
          className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col justify-between h-[calc(100%-192px)]">
        <h2 className="text-xl font-bold text-indigo-700 mb-2">{project.title}</h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block text-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Open Project
        </a>
      </div>
    </div>
  ))}
</div>

  )
}

export default Projects
