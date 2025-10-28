// import React from 'react'

// const Home = () => {
//     return (
//         <section className='relative top-14'>
           
//             <section className="bg-gradient-to-br from-purple-100 to-indigo-200 py-16 text-center sm:px-0 p-3">
//   <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700 mb-4">
//     Hi, I'm ✨ Javed Akhtar
//   </h1>
//   <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
//    I build small but smart React projects 💡
//   </p>
//   <div className="mt-6 flex justify-center gap-4">
//     <a
//       href="/projects"
//       className="px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
//     >
//       Explore Works
//     </a>
//       <a href="https://github.com/Javed-Shekh777" target="_blank" className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50">GitHub</a>

//   </div>
// </section>

//             <section className="py-10 px-4 max-w-5xl mx-auto">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Projects</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                     {/* Example Card */}
//                     <div className="bg-white shadow rounded-lg p-4 hover:shadow-xl transition">
//                         <h3 className="text-lg font-bold text-indigo-600">BMI Calculator</h3>
//                         <p className="text-sm text-gray-600 mb-2">Calculate your Body Mass Index easily.</p>
//                         <a href="/bmi" className="text-indigo-500 text-sm hover:underline">Try it →</a>
//                     </div>
//                     {/* Repeat for other projects */}
//                 </div>
//             </section>
//             <section className="py-10 px-4 bg-white">
//                 <div className="max-w-3xl mx-auto text-center">
//                     <h2 className="text-xl font-semibold text-gray-800 mb-4">About Me</h2>
//                     <p className="text-gray-600">
//                         I'm a frontend developer passionate about building clean and functional mini apps using React and Tailwind CSS. This site showcases my experiments and learning journey.
//                     </p>
//                 </div>
//             </section>

//         </section>

//     )
// }

// export default Home


import React from 'react';

const Home = () => {
  return (
    <section className="relative top-14">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100 to-indigo-200 py-16 text-center sm:px-0 p-3">
        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700 mb-4">
          Hi, I'm ✨ Javed Akhtar
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          I build small but smart React projects 💡
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/projects"
            className="px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Explore Works
          </a>
          <a
            href="https://github.com/Javed-Shekh777"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10 px-4 max-w-4xl mx-auto text-center">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">🧰 Tech Stack I Use</h2>
  <p className="text-gray-600 mb-6">
    These are the core technologies I’ve used to build my projects and tools.
  </p>
  <div className="flex flex-wrap justify-center gap-3">
    <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full">React</span>
    <span className="bg-pink-100 text-pink-700 px-4 py-1 rounded-full">Vite</span>
    <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full">Tailwind CSS</span>
    <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full">JavaScript (ES6+)</span>
    <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">React DOM</span>
    <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full">React Icons</span>
    <span className="bg-gray-300 text-black px-4 py-1 rounded-full">LocalStorage Auth</span>
  </div>
</section>


      {/* Featured Projects */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-4 hover:shadow-xl transition">
            <h3 className="text-lg font-bold text-indigo-600">BMI Calculator</h3>
            <p className="text-sm text-gray-600 mb-2">Calculate your Body Mass Index easily.</p>
            <a href="/bmicalc" className="text-indigo-500 text-sm hover:underline">Try it →</a>
          </div>
          <div className="bg-white shadow rounded-lg p-4 hover:shadow-xl transition">
            <h3 className="text-lg font-bold text-indigo-600">Password Generator</h3>
            <p className="text-sm text-gray-600 mb-2">Generate secure passwords with custom options.</p>
            <a href="/pswgen" className="text-indigo-500 text-sm hover:underline">Try it →</a>
          </div>
          <div className="bg-white shadow rounded-lg p-4 hover:shadow-xl transition">
            <h3 className="text-lg font-bold text-indigo-600">Age Calculator</h3>
            <p className="text-sm text-gray-600 mb-2">Find your exact age in seconds.</p>
            <a href="/age-calc" className="text-indigo-500 text-sm hover:underline">Try it →</a>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600">
            I'm a frontend developer passionate about building clean and functional mini apps using React and Tailwind CSS. This site showcases my experiments and learning journey.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-10 px-4 text-center">
        <blockquote className="italic text-gray-600 text-lg max-w-xl mx-auto">
          “Code is poetry. Every function tells a story.”
        </blockquote>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-4 bg-indigo-50">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your name" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Your email" className="w-full p-2 border rounded" />
            <textarea placeholder="Your message" className="w-full p-2 border rounded h-24"></textarea>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Send</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        Made with ❤️ using React + Tailwind | © 2025 Javed Akhtar
      </footer>
    </section>
  );
};

export default Home;


