import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

// Logo component with TeamBuilder handshake animation
const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="relative w-12 h-12">
        <img
          src="/icon.svg"
          alt="TeamBuilder Logo"
          className="w-full h-full"
        />
      </div>
      <motion.span
        className="font-bold text-xl bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        TeamBuilder
      </motion.span>
    </Link>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-gray-950 to-gray-900 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/projects" className="text-gray-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium">
            Projects
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium">
            About
          </Link>
          <Link to="/faq" className="text-gray-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium">
            FAQ
          </Link>

          <div className="flex gap-2 ml-4">
            <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-white">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-red-500 to-amber-400 hover:from-red-600 hover:to-amber-500 text-white">
              Sign Up
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <motion.div
          className="bg-black/95 md:hidden py-4 border-t border-gray-800"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto flex flex-col gap-2 px-4">
            <Link
              to="/projects"
              className="text-gray-300 hover:text-white transition-colors px-3 py-3 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors px-3 py-3 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/faq"
              className="text-gray-300 hover:text-white transition-colors px-3 py-3 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>

            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                Login
              </Button>
              <Button className="bg-gradient-to-r from-red-500 to-amber-400 hover:from-red-600 hover:to-amber-500 text-white">
                Sign Up
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
