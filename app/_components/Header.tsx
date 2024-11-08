'use client';
import { useState } from 'react';
import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <div className="hidden md:block">
          <Navigation />
        </div>
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="md:hidden z-20"
            aria-label="Toggle Menu"
          >
            <span className="text-3xl">☰</span>
          </button>
        )}
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white text-primary-900 shadow-lg transform transition-transform duration-300 z-10 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-2xl"
          aria-label="Close Menu"
        >
          ✕
        </button>
        <Navigation />
      </div>

      {/* Overlay to close the sidebar */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-0"
        />
      )}
    </header>
  );
}

export default Header;
