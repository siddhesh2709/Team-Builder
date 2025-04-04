import { useState } from "react";
import { sampleProjects } from "./ProjectsGrid";
import ProjectCard from "./ProjectCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FaSearch, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

// Categories for filtering
const categories = [
  "All",
  "Artificial Intelligence",
  "Software",
  "Productivity",
  "E-commerce",
  "Social",
  "Nonprofits"
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on search term and category
  const filteredProjects = sampleProjects.filter(project => {
    const matchesSearch = searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-12 pb-20 w-full bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-amber-400">
              Discover Projects
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Find exciting projects to join or create your own to build your dream team
          </p>

          {/* Create Project Button */}
          <div className="mb-8">
            <Link
              to="/create-project"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-amber-400 hover:from-red-600 hover:to-amber-500 text-white rounded-md font-medium transition-colors"
            >
              <FaPlus className="mr-2" /> Create New Project
            </Link>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-1/3">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer px-3 py-1 text-sm ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-red-500 to-amber-400 text-white border-transparent"
                      : "bg-transparent hover:bg-gray-800 text-gray-300 border-gray-700"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="h-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-900/30 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">No projects found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria, or{" "}
              <Link to="/create-project" className="text-amber-400 hover:underline">
                create a new project
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
