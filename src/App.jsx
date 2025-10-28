// src/App.jsx

import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Navbar stays at the top */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow container mx-auto px-4 py-6 mt-14 ">
        <Outlet />
      </main>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
