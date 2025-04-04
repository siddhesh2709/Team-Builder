import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiPlus, FiExternalLink, FiX, FiFilter, FiSliders } from 'react-icons/fi';

// Color palette from the provided image
const COLORS = {
  BLACK: '#0C0C0C',
  DARK_BROWN: '#481E14',
  RED_BROWN: '#9B3922',
  CORAL: '#F2613F',
};

// Sample project data
const projects = [
  {
    id: 1,
    title: "AI Shopping App",
    description: "AI shopping app redefines online shopping by combining advanced AI technology with engaging social features to deliver a personalized, intuitive, and interactive shopping experience.",
    category: "Artificial Intelligence",
    teamSize: 21,
    createdBy: "Suhail Ansari",
    datePosted: "December 15th",
    hasWebsite: true,
    location: "Remote",
    stage: "Development",
    roles: ["UI/UX Designer", "Frontend Developer", "Backend Developer", "Mobile App Tester/QA Spec", "AI/ML Engineers", "Cloud Engineer"],
    techStack: ["React", "Node.js", "TensorFlow", "AWS"]
  },
  {
    id: 2,
    title: "Echoes Of Warmth",
    description: "EOW is a non profit that is starting a blog site to spread knowledge in the fields of Technology, Business & Finance, Arts and Psych, Healthcare. Looking for professionals willing to write blogs.",
    category: "Nonprofits",
    teamSize: 15,
    createdBy: "Tejini Rajesh",
    datePosted: "January 3rd",
    hasWebsite: false,
    location: "San Francisco, CA",
    stage: "Ideation",
    roles: ["Content Writer - Tech", "Content Writer - Health", "Content Writer - Business", "Content Writer - Arts", "Content Writer - Psych"],
    compensation: "UNPAID",
    techStack: ["WordPress", "SEO", "Content Writing"]
  },
  {
    id: 3,
    title: "Platform for blackpreneurs everywhere",
    description: "I have a social platform to connect black entrepreneurs globally. The platform allows interaction, doing business and promoting their businesses to this wide community.",
    category: "Software",
    teamSize: 3,
    createdBy: "Lawrence Ansah-Addo",
    datePosted: "November 18th",
    hasWebsite: true,
    location: "Remote",
    stage: "MVP Stage",
    roles: ["UX Designer", "Frontend Developer", "Backend Engineer"],
    techStack: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 4,
    title: "AI-Powered Task Management",
    description: "Building a productivity app that uses AI to prioritize tasks and suggest optimal work times based on user habits and preferences.",
    category: "Productivity",
    teamSize: 3,
    createdBy: "Alex Chen",
    datePosted: "October 5th",
    hasWebsite: false,
    location: "Boston, MA",
    stage: "Development",
    roles: ["Backend Developer", "UX Designer", "ML Engineer"],
    techStack: ["React", "Python", "Machine Learning"]
  },
  {
    id: 5,
    title: "Sustainable Marketplace",
    description: "An e-commerce platform connecting eco-friendly product sellers with environmentally conscious consumers.",
    category: "E-commerce",
    teamSize: 2,
    createdBy: "Maya Johnson",
    datePosted: "September 12th",
    hasWebsite: false,
    location: "New York, NY",
    stage: "Completed",
    roles: ["Frontend Developer", "Marketing Specialist", "Content Writer"],
    techStack: ["Next.js", "Node.js", "MongoDB"]
  },
  {
    id: 6,
    title: "Local Events Discovery App",
    description: "Mobile app that helps users discover local events based on their interests and location, with social features.",
    category: "Social",
    teamSize: 4,
    createdBy: "Carlos Rodriguez",
    datePosted: "August 24th",
    hasWebsite: false,
    location: "Austin, TX",
    stage: "Ideation",
    roles: ["Mobile Developer", "UX/UI Designer", "Backend Engineer"],
    techStack: ["React Native", "Firebase", "Google Maps API"]
  }
];

// Project card component with expandable details
const ProjectCard = ({ project, activeFilters = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  // This effect will expand the card if it matches an active filter
  useEffect(() => {
    // If there are active filters and this project matches one of them, expand the card
    if (activeFilters.length > 0) {
      const shouldExpand = activeFilters.some(filter => {
        switch (filter.type) {
          case 'category':
            return project.category === filter.value;
          case 'location':
            return project.location === filter.value;
          case 'stage':
            return project.stage === filter.value;
          case 'teamSize':
            return project.teamSize.toString() === filter.value;
          default:
            return false;
        }
      });

      if (shouldExpand) {
        setIsExpanded(true);
      } else {
        // Only collapse if there are active filters but none match this card
        setIsExpanded(false);
        if (showApplyForm) {
          setShowApplyForm(false);
        }
      }
    }
  }, [activeFilters, project]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setShowApplyForm(false);
    }
  };

  const handleApply = (role) => {
    setSelectedRole(role);
    setShowApplyForm(true);
  };

  // Apply animation when matching filters
  const cardVariants = {
    expanded: {
      scale: 1.02,
      boxShadow: `0 8px 32px rgba(${parseInt(COLORS.CORAL.slice(1, 3), 16)}, ${parseInt(COLORS.CORAL.slice(3, 5), 16)}, ${parseInt(COLORS.CORAL.slice(5, 7), 16)}, 0.2)`,
      transition: { duration: 0.3 }
    },
    collapsed: {
      scale: 1,
      boxShadow: 'none',
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg shadow-xl overflow-hidden border-2 h-full w-full"
      style={{
        borderColor: isExpanded ? COLORS.CORAL : 'rgba(255,255,255,0.1)',
        background: `linear-gradient(135deg, ${COLORS.BLACK} 0%, ${COLORS.DARK_BROWN} 100%)`,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        ...cardVariants[isExpanded ? 'expanded' : 'collapsed']
      }}
      transition={{ duration: 0.3 }}
      whileHover={{
        borderColor: `rgba(${parseInt(COLORS.CORAL.slice(1, 3), 16)}, ${parseInt(COLORS.CORAL.slice(3, 5), 16)}, ${parseInt(COLORS.CORAL.slice(5, 7), 16)}, 0.5)`,
      }}
    >
      <div className="p-5 relative">
        {project.stage && (
          <div className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-semibold"
               style={{ backgroundColor: COLORS.CORAL, color: 'white' }}>
            {project.stage}
          </div>
        )}

        {project.compensation && (
          <div className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-semibold"
               style={{ backgroundColor: COLORS.RED_BROWN, color: 'white' }}>
            {project.compensation}
          </div>
        )}

        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold" style={{ color: COLORS.CORAL }}>
            {project.title}
          </h3>
          <div className="flex flex-col text-right">
            <span className="text-xs text-gray-400">Team Size: {project.teamSize}</span>
            <span className="text-xs text-gray-400">{project.datePosted}</span>
          </div>
        </div>

        <div className="mb-3">
          <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold mr-2"
                style={{ backgroundColor: COLORS.RED_BROWN, color: 'white' }}>
            {project.category}
          </span>
          <span className="text-sm text-gray-400">Created by {project.createdBy}</span>
        </div>

        <p className="text-gray-300 mb-4">{project.description}</p>

        {project.techStack && (
          <div className="mb-4 flex flex-wrap gap-1">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-block rounded-full px-2 py-1 text-xs"
                style={{
                  backgroundColor: 'rgba(155, 57, 34, 0.3)',
                  color: 'white',
                  border: `1px solid ${COLORS.RED_BROWN}`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center">
          {project.hasWebsite && (
            <a
              href="#"
              className="text-sm flex items-center"
              style={{ color: COLORS.CORAL }}
              onClick={(e) => e.preventDefault()}
            >
              <FiExternalLink className="mr-1" />
              Visit our website
            </a>
          )}

          <button
            onClick={toggleExpand}
            className="flex items-center justify-center text-white rounded-full w-8 h-8"
            style={{
              background: `linear-gradient(135deg, ${COLORS.RED_BROWN} 0%, ${COLORS.CORAL} 100%)`,
              boxShadow: `0 4px 10px rgba(${parseInt(COLORS.RED_BROWN.slice(1, 3), 16)}, ${parseInt(COLORS.RED_BROWN.slice(3, 5), 16)}, ${parseInt(COLORS.RED_BROWN.slice(5, 7), 16)}, 0.4)`
            }}
          >
            {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <motion.div
          className="px-5 pt-2 pb-4 border-t border-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-white font-semibold mb-3 flex items-center">
            <span
              className="inline-block w-2 h-4 mr-2 rounded-sm"
              style={{ backgroundColor: COLORS.CORAL }}
            ></span>
            Roles Available:
          </h4>

          <div className="space-y-2 mb-4">
            {project.roles.map((role, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center rounded-lg p-3"
                style={{ backgroundColor: 'rgba(72, 30, 20, 0.4)' }}
              >
                <span className="text-gray-200">{role}</span>
                <button
                  onClick={() => handleApply(role)}
                  className="text-sm text-white px-3 py-1 rounded-md"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.RED_BROWN} 0%, ${COLORS.CORAL} 100%)`,
                    boxShadow: `0 2px 6px rgba(${parseInt(COLORS.CORAL.slice(1, 3), 16)}, ${parseInt(COLORS.CORAL.slice(3, 5), 16)}, ${parseInt(COLORS.CORAL.slice(5, 7), 16)}, 0.3)`
                  }}
                >
                  Apply
                </button>
              </div>
            ))}
          </div>

          {showApplyForm && (
            <div
              className="mt-4 p-4 rounded-lg"
              style={{ backgroundColor: 'rgba(72, 30, 20, 0.4)' }}
            >
              <h4 className="text-white font-semibold mb-2">Apply for {selectedRole}</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
                    style={{
                      backgroundColor: 'rgba(12, 12, 12, 0.6)',
                      borderColor: COLORS.RED_BROWN,
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Your Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
                    style={{
                      backgroundColor: 'rgba(12, 12, 12, 0.6)',
                      borderColor: COLORS.RED_BROWN,
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Why are you a good fit?</label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-opacity-50 h-24"
                    style={{
                      backgroundColor: 'rgba(12, 12, 12, 0.6)',
                      borderColor: COLORS.RED_BROWN,
                    }}
                  ></textarea>
                </div>
                <button
                  className="w-full text-white py-2 rounded-md font-medium"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.RED_BROWN} 0%, ${COLORS.CORAL} 100%)`,
                  }}
                >
                  Submit Application
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

// Project creation form component
const ProjectCreationForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        className="bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        style={{
          background: `linear-gradient(135deg, ${COLORS.BLACK} 0%, ${COLORS.DARK_BROWN} 100%)`,
          border: `2px solid ${COLORS.RED_BROWN}`
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white">Create New Project</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Project Title</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{
                  backgroundColor: 'rgba(12, 12, 12, 0.6)',
                  borderColor: COLORS.RED_BROWN,
                }}
                placeholder="Enter a catchy title for your project"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Category</label>
              <select
                className="w-full px-3 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{
                  backgroundColor: 'rgba(12, 12, 12, 0.6)',
                  borderColor: COLORS.RED_BROWN,
                }}
              >
                <option value="">Select a category</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Productivity">Productivity</option>
                <option value="Nonprofits">Nonprofits</option>
                <option value="Software">Software</option>
                <option value="Social">Social</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Description</label>
              <textarea
                className="w-full px-3 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-opacity-50 h-32"
                style={{
                  backgroundColor: 'rgba(12, 12, 12, 0.6)',
                  borderColor: COLORS.RED_BROWN,
                }}
                placeholder="Describe your project in detail"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Required Roles</label>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-opacity-50"
                    style={{
                      backgroundColor: 'rgba(12, 12, 12, 0.6)',
                      borderColor: COLORS.RED_BROWN,
                    }}
                    placeholder="e.g. Frontend Developer"
                  />
                  <button className="p-2 rounded-md text-white" style={{ backgroundColor: COLORS.RED_BROWN }}>
                    <FiPlus className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                className="w-full text-white py-3 rounded-md font-medium"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.RED_BROWN} 0%, ${COLORS.CORAL} 100%)`,
                }}
              >
                Create Project
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Main projects page component
const BasicProjectPage = () => {
  const [showCreationForm, setShowCreationForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [showOnlyMyProjects, setShowOnlyMyProjects] = useState(false);
  const [locationFilter, setLocationFilter] = useState('');
  const [teamSizeFilter, setTeamSizeFilter] = useState('');
  const [stageFilter, setStageFilter] = useState('');
  const [sortOption, setSortOption] = useState('');

  // Arrays to store active filters for pill display
  const [activeFilters, setActiveFilters] = useState([]);

  const addActiveFilter = (type, value) => {
    // Remove any existing filter of the same type
    const newFilters = activeFilters.filter(filter => filter.type !== type);
    // Add the new filter if it has a value
    if (value) {
      newFilters.push({ type, value });
    }
    setActiveFilters(newFilters);
  };

  const removeFilter = (type) => {
    setActiveFilters(activeFilters.filter(filter => filter.type !== type));

    // Reset the corresponding state
    switch (type) {
      case 'category':
        setCategoryFilter('');
        break;
      case 'location':
        setLocationFilter('');
        break;
      case 'teamSize':
        setTeamSizeFilter('');
        break;
      case 'stage':
        setStageFilter('');
        break;
      case 'myProjects':
        setShowOnlyMyProjects(false);
        break;
      default:
        break;
    }
  };

  const handleCategoryChange = (value) => {
    setCategoryFilter(value);
    addActiveFilter('category', value);
  };

  const handleLocationChange = (value) => {
    setLocationFilter(value);
    addActiveFilter('location', value);
  };

  const handleTeamSizeChange = (value) => {
    setTeamSizeFilter(value);
    addActiveFilter('teamSize', value);
  };

  const handleStageChange = (value) => {
    setStageFilter(value);
    addActiveFilter('stage', value);
  };

  const toggleMyProjects = () => {
    const newValue = !showOnlyMyProjects;
    setShowOnlyMyProjects(newValue);
    if (newValue) {
      addActiveFilter('myProjects', 'My Projects');
    } else {
      removeFilter('myProjects');
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === '' || project.category === categoryFilter;
    const matchesLocation = locationFilter === '' || (project.location && project.location === locationFilter);
    const matchesTeamSize = teamSizeFilter === '' || (project.teamSize && project.teamSize.toString() === teamSizeFilter);
    const matchesStage = stageFilter === '' || (project.stage && project.stage === stageFilter);
    // For demo purposes only - in a real app, this would check against user's bookmarked/owned projects
    const matchesMyProjects = !showOnlyMyProjects || [1, 3, 5].includes(project.id);

    return matchesSearch && matchesCategory && matchesLocation && matchesTeamSize && matchesStage && matchesMyProjects;
  });

  // Get unique categories from projects
  const categories = [...new Set(projects.map(project => project.category))];

  // Get other filter options
  const locations = [...new Set(projects.map(project => project.location || '').filter(Boolean))];
  const teamSizes = [...new Set(projects.map(project => project.teamSize?.toString() || '').filter(Boolean))];
  const stages = [...new Set(projects.map(project => project.stage || '').filter(Boolean))];

  return (
    <div className="min-h-screen pb-20" style={{ background: COLORS.BLACK, color: 'white' }}>
      {/* Hero section with custom background effects */}
      <div className="relative pt-24 pb-20 mb-10">
        <div className="absolute inset-0" style={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(12, 12, 12, 0.7)' }}></div>
        <div className="absolute -top-20 left-0 right-0 h-[600px] overflow-hidden opacity-30 -z-10">
          <div className="w-full h-full"
               style={{
                 background: `radial-gradient(ellipse at center, ${COLORS.RED_BROWN}40 0%, transparent 60%), radial-gradient(ellipse at 20% 40%, ${COLORS.CORAL}30 0%, transparent 70%)`
               }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: COLORS.CORAL }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Discover & Join Amazing Projects
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Connect with innovators, showcase your skills, and build your next big thing with the perfect team
            </motion.p>
            <motion.button
              onClick={() => setShowCreationForm(true)}
              className="px-8 py-3 rounded-md font-medium shadow-lg transform transition-transform hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${COLORS.RED_BROWN} 0%, ${COLORS.CORAL} 100%)`,
                color: 'white',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              Create Your Project
            </motion.button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* New Filter Bar Design */}
        <div className="mb-8 py-4 border-y border-gray-800">
          <div className="flex flex-wrap items-center gap-3">
            <div className="font-medium text-gray-300 mr-2">Filter by:</div>

            {/* My Projects Button */}
            <button
              className={`px-4 py-2 rounded-md text-white transition-colors ${showOnlyMyProjects ? 'bg-opacity-100' : 'bg-opacity-50'}`}
              style={{
                backgroundColor: showOnlyMyProjects ? COLORS.CORAL : 'rgba(155, 57, 34, 0.6)',
                border: `1px solid ${showOnlyMyProjects ? COLORS.CORAL : COLORS.RED_BROWN}`
              }}
              onClick={toggleMyProjects}
            >
              MY PROJECTS
            </button>

            {/* Search input */}
            <div className="relative flex-1 mx-2 max-w-md">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-opacity-50"
                style={{
                  backgroundColor: 'rgba(12, 12, 12, 0.8)',
                  border: `1px solid ${COLORS.RED_BROWN}`,
                  color: 'white'
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <select
                className="appearance-none px-4 py-2 pr-8 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-opacity-50"
                style={{
                  backgroundColor: 'rgba(12, 12, 12, 0.8)',
                  border: `1px solid ${categoryFilter ? COLORS.CORAL : COLORS.RED_BROWN}`
                }}
                value={categoryFilter}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                <option value="">CATEGORY</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <FiChevronDown className="text-gray-400" />
              </div>
            </div>

            {/* Location Dropdown */}
            <div className="relative">
              <select
                className="appearance-none px-4 py-2 pr-8 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-opacity-50"
                style={{
                  backgroundColor: 'rgba(12, 12, 12, 0.8)',
                  border: `1px solid ${locationFilter ? COLORS.CORAL : COLORS.RED_BROWN}`
                }}
                value={locationFilter}
                onChange={(e) => handleLocationChange(e.target.value)}
              >
                <option value="">LOCATION</option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <FiChevronDown className="text-gray-400" />
              </div>
            </div>

            {/* Team Size Dropdown */}
            <div className="relative">
              <select
                className="appearance-none px-4 py-2 pr-8 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-opacity-50"
                style={{
                  backgroundColor: 'rgba(12, 12, 12, 0.8)',
                  border: `1px solid ${teamSizeFilter ? COLORS.CORAL : COLORS.RED_BROWN}`
                }}
                value={teamSizeFilter}
                onChange={(e) => handleTeamSizeChange(e.target.value)}
              >
                <option value="">TEAM SIZE</option>
                {teamSizes.map((size, index) => (
                  <option key={index} value={size}>{size}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <FiChevronDown className="text-gray-400" />
              </div>
            </div>

            {/* Stage Dropdown */}
            <div className="relative">
              <select
                className="appearance-none px-4 py-2 pr-8 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-opacity-50"
                style={{
                  backgroundColor: 'rgba(12, 12, 12, 0.8)',
                  border: `1px solid ${stageFilter ? COLORS.CORAL : COLORS.RED_BROWN}`
                }}
                value={stageFilter}
                onChange={(e) => handleStageChange(e.target.value)}
              >
                <option value="">STAGE</option>
                {stages.map((stage, index) => (
                  <option key={index} value={stage}>{stage}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <FiChevronDown className="text-gray-400" />
              </div>
            </div>

            {/* Sort By Option */}
            <div className="relative">
              <select
                className="appearance-none px-4 py-2 pr-8 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-opacity-50"
                style={{
                  backgroundColor: 'rgba(12, 12, 12, 0.8)',
                  border: `1px solid ${COLORS.RED_BROWN}`
                }}
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="">Sort By</option>
                <option value="date">Date</option>
                <option value="popularity">Popularity</option>
                <option value="name">Name</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <FiChevronDown className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Active Filters Pills */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {activeFilters.map((filter, index) => (
                <div
                  key={index}
                  className="flex items-center bg-opacity-30 px-3 py-1 rounded-full"
                  style={{ backgroundColor: COLORS.RED_BROWN }}
                >
                  <span className="text-sm text-white">{filter.value}</span>
                  <button
                    className="ml-2 text-white hover:text-red-300"
                    onClick={() => removeFilter(filter.type)}
                  >
                    <FiX size={14} />
                  </button>
                </div>
              ))}

              {activeFilters.length > 1 && (
                <button
                  className="text-sm text-gray-400 hover:text-white"
                  onClick={() => {
                    setActiveFilters([]);
                    setCategoryFilter('');
                    setLocationFilter('');
                    setTeamSizeFilter('');
                    setStageFilter('');
                    setShowOnlyMyProjects(false);
                    setSearchTerm('');
                  }}
                >
                  Clear all
                </button>
              )}
            </div>
          )}

          {/* Projects count message */}
          <div className="mt-4 text-gray-400 text-sm">
            Projects matching filters: {filteredProjects.length}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} activeFilters={activeFilters} />
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl text-gray-400 mb-4">No projects match your filters</h3>
            <button
              className="px-4 py-2 rounded-md text-white"
              style={{ backgroundColor: COLORS.RED_BROWN }}
              onClick={() => {
                setActiveFilters([]);
                setCategoryFilter('');
                setLocationFilter('');
                setTeamSizeFilter('');
                setStageFilter('');
                setShowOnlyMyProjects(false);
                setSearchTerm('');
              }}
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Show the creation form if state is true */}
        {showCreationForm && (
          <ProjectCreationForm onClose={() => setShowCreationForm(false)} />
        )}
      </div>
    </div>
  );
};

export default BasicProjectPage;