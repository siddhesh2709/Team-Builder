import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Basic components
const Navbar = () => (
  <header className="fixed w-full top-0 z-50 bg-black border-b border-gray-800">
    <div className="container mx-auto flex justify-between items-center p-4">
      <Link to="/" className="text-2xl font-bold text-gradient">
        TeamBuilder
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link to="/projects" className="text-white hover:text-amber-400">Projects</Link>
        <Link to="/about" className="text-white hover:text-amber-400">About</Link>
        <Link to="/faq" className="text-white hover:text-amber-400">FAQ</Link>
      </nav>
      <div className="flex gap-2">
        <button className="px-4 py-2 border border-gray-700 rounded text-white">Login</button>
        <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-amber-400 rounded text-white">Sign Up</button>
      </div>
    </div>
  </header>
);

// Simple home page
const Home = () => (
  <div className="pt-20 pb-10 px-4 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      <span className="text-gradient">
        Find your Team Members
      </span><br/>
      <span className="text-white">and Grow your</span>
      <span className="text-gradient"> Startup Idea</span>
    </h1>
    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
      Connect with passionate teammates who share your vision. Build projects together, collaborate effectively, and turn ideas into reality.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link to="/projects" className="px-6 py-3 bg-gradient-to-r from-red-500 to-amber-400 rounded text-white">Browse Projects</Link>
      <Link to="/create-project" className="px-6 py-3 border border-gray-700 rounded text-white">Create a Project</Link>
    </div>
  </div>
);

// Simple projects page
const Projects = () => (
  <div className="pt-20 pb-10 px-4">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">
        <span className="text-gradient">
          Discover Projects
        </span>
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
        Find exciting projects to join or create your own to build your dream team
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample project cards */}
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-700">
            <h3 className="text-xl font-bold text-white mb-2">Sample Project {i}</h3>
            <p className="text-gray-400 mb-4">This is a sample project description to demonstrate the layout.</p>
            <div className="border-t border-gray-800 pt-3 mt-4">
              <h4 className="text-sm font-semibold text-white mb-2">Apply for roles:</h4>
              <button className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700 hover:bg-gray-700">
                Developer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Simple 404 page
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <h1 className="text-4xl font-bold mb-4 text-gradient">
      404 - Page Not Found
    </h1>
    <p className="text-gray-400 mb-8">
      Sorry, the page you're looking for doesn't exist.
    </p>
    <Link
      to="/"
      className="px-4 py-2 bg-gradient-to-r from-red-500 to-amber-400 rounded text-white"
    >
      Go back home
    </Link>
  </div>
);

// Main layout
const Layout = ({ children }) => (
  <div className="min-h-screen bg-black text-white flex flex-col">
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>© {new Date().getFullYear()} TeamBuilder. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

// App component
const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

// Get the root element and render
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}

// Remove loader
const loader = document.getElementById('initial-loader');
if (loader && loader.parentNode) {
  loader.parentNode.removeChild(loader);
}

// Render app
ReactDOM.render(<App />, rootElement);
