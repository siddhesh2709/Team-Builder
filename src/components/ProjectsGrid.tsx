import { motion } from "framer-motion";
import ProjectCard, { Project } from "./ProjectCard";

// Sample projects data
export const sampleProjects: Project[] = [
  {
    id: "1",
    title: "AI Shopping App",
    description: "AI shopping app redefines online shopping by combining advanced AI technology with engaging social features to deliver a personalized, intuitive, and interactive shopping experience.",
    category: "Artificial Intelligence",
    teamSize: 21,
    createdBy: "Suhail Ansari",
    datePosted: "December 15th",
    roles: [
      { title: "UI/UX Designer" },
      { title: "Frontend AND BACK DEVELOPER" },
      { title: "Mobile App Tester/QA Spec" },
      { title: "AI/ML Engineers" },
      { title: "Cloud Engineer" }
    ],
    website: "#"
  },
  {
    id: "2",
    title: "Echoes Of Warmth",
    description: "EOW is a non profit that is starting a blog site to spread knowledge in the fields of Technology, Business & Finance, Arts and Psych, Healthcare. Looking for professionals willing to write blogs.",
    category: "Nonprofits",
    teamSize: 15,
    createdBy: "Tejini Rajesh",
    datePosted: "January 3rd",
    roles: [
      { title: "Content Writer - Tech", compensation: "UNPAID" },
      { title: "Content Writer - Health", compensation: "UNPAID" },
      { title: "Content Writer - Business", compensation: "UNPAID" },
      { title: "Content Writer - Arts", compensation: "UNPAID" },
      { title: "Content Writer - Psych", compensation: "UNPAID" }
    ]
  },
  {
    id: "3",
    title: "Platform for blackpreneurs everywhere",
    description: "I have a social platform to connect black entrepreneurs globally. The platform allows interaction, doing business and promoting their businesses to this wide community.",
    category: "Software",
    teamSize: 3,
    createdBy: "Lawrence Ansah-Addo",
    datePosted: "November 18th",
    roles: [
      { title: "UX Designer" },
      { title: "Frontend Developer" },
      { title: "Backend Engineer" }
    ],
    website: "#"
  },
  {
    id: "4",
    title: "AI-Powered Task Management",
    description: "Building a productivity app that uses AI to prioritize tasks and suggest optimal work times based on user habits and preferences.",
    category: "Productivity",
    teamSize: 3,
    createdBy: "Alex Chen",
    datePosted: "October 5th",
    roles: [
      { title: "Backend Developer" },
      { title: "UX Designer" },
      { title: "ML Engineer" }
    ]
  },
  {
    id: "5",
    title: "Sustainable Marketplace",
    description: "An e-commerce platform connecting eco-friendly product sellers with environmentally conscious consumers.",
    category: "E-commerce",
    teamSize: 2,
    createdBy: "Maya Johnson",
    datePosted: "September 12th",
    roles: [
      { title: "Frontend Developer" },
      { title: "Marketing Specialist" },
      { title: "Content Writer" }
    ]
  },
  {
    id: "6",
    title: "Local Events Discovery App",
    description: "Mobile app that helps users discover local events based on their interests and location, with social features.",
    category: "Social",
    teamSize: 4,
    createdBy: "Carlos Rodriguez",
    datePosted: "August 24th",
    roles: [
      { title: "Mobile Developer" },
      { title: "UX/UI Designer" },
      { title: "Backend Engineer" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

interface ProjectsGridProps {
  projects?: Project[];
  title?: string;
  subtitle?: string;
}

export default function ProjectsGrid({ projects = sampleProjects, title, subtitle }: ProjectsGridProps) {
  return (
    <div className="py-12">
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-amber-300">
                {title}
              </span>
            </motion.h2>
          )}

          {subtitle && (
            <motion.p
              className="text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
