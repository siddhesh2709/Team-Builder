import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaTrophy, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaUsers className="text-amber-400 text-2xl" />,
    title: "Be Part of Meaningful Startups",
    description: "Build or join teams, transform ideas into reality, and achieve success with like-minded action-takers!"
  },
  {
    icon: <FaLightbulb className="text-red-400 text-2xl" />,
    title: "Monthly Hackathons",
    description: "Compete against other teams, secure top spots on the leaderboard, and win prizes together!"
  },
  {
    icon: <FaTrophy className="text-amber-400 text-2xl" />,
    title: "STARTUP SPOTLIGHT",
    description: "Top teams each quarter get a chance to pitch to investors and receive valuable feedback!"
  },
  {
    icon: <FaHeadset className="text-red-400 text-2xl" />,
    title: "Get Help Throughout the Project",
    description: "Coaches assist your team with getting started, completing the project, and bringing your startup to market!"
  }
];

// Framer motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Features() {
  return (
    <div className="py-24 bg-gray-900/60 backdrop-blur-sm relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,75,75,0.1),transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,187,0,0.1),transparent_40%)]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative z-10">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-amber-300">
              What you get access to
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            You don't need any prior connections, the journey starts from here!
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors glow-border"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
