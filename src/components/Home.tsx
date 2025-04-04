import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import ProjectsGrid, { sampleProjects } from "../projects/ProjectsGrid";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  // Only show first 3 projects
  const featuredProjects = sampleProjects.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How It Works */}
      <HowItWorks />

      {/* Featured Projects */}
      <div className="py-24 bg-gray-900/60 backdrop-blur-sm relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-red-500/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-amber-500/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4">
          <ProjectsGrid
            title="Featured Projects"
            subtitle="Explore some of our most exciting opportunities"
            projects={featuredProjects}
          />

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-red-500 to-amber-400 hover:from-red-600 hover:to-amber-500 text-white glow-border">
              <Link to="/projects">
                View All Projects <FaArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
