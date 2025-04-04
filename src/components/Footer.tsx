import { Link } from 'react-router-dom';
import { FaDiscord, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900/70 backdrop-blur-md border-t border-gray-800 relative overflow-hidden">
      {/* Gradient orbs for visual effect */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute w-full h-full bg-gradient-to-br from-red-500 to-red-600 rounded-full opacity-70"></div>
                <div className="absolute w-full h-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-5 h-5 text-white" fill="currentColor">
                    <path d="M30,50 C40,40 50,60 70,50" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none"/>
                    <path d="M30,50 C40,60 50,40 70,50" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none"/>
                  </svg>
                </div>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">
                TeamBuilder
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              TeamBuilder connects passionate people with great ideas. Build your team, find your next project, and turn vision into reality.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaDiscord size={20} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Browse Projects
                </Link>
              </li>
              <li>
                <Link to="/create-project" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Create Project
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white text-sm transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} TeamBuilder. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 md:mt-0">
            Made with ❤️ for creators and innovators
          </p>
        </div>
      </div>
    </footer>
  );
}
