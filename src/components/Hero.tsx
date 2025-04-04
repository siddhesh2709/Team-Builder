import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaUsers, FaLightbulb } from "react-icons/fa";

// Particle animation component for Gemini-like effect
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles with random animations */}
      {Array.from({ length: 40 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 rounded-full bg-red-500/20"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            x: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Gold particles */}
      {Array.from({ length: 40 }).map((_, index) => (
        <motion.div
          key={`gold-${index}`}
          className="absolute w-1 h-1 rounded-full bg-amber-400/20"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            x: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Larger glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/5 blur-xl" />
      <div className="absolute top-2/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-amber-400/10 to-amber-500/5 blur-xl" />
      <div className="absolute bottom-1/4 left-1/3 w-36 h-36 rounded-full bg-gradient-to-r from-red-400/10 to-amber-500/5 blur-xl" />
    </div>
  );
};

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/0 via-gray-900/70 to-gray-900 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl"
        >
          <div className="mb-6 flex justify-center">
            <motion.span
              className="inline-block font-mono text-sm tracking-wider py-1 px-4 rounded-full bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-amber-400 border border-amber-600/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              TEAMBUILDER.NET
            </motion.span>
          </div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="inline-block pb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600">
                Find your Team
              </span>{" "}
              <br className="md:hidden" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500">
                Members
              </span>
            </span>
            <span className="block text-white mt-2">and</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-amber-400 to-red-600 mt-2">
              <TypeAnimation
                sequence={[
                  'Grow your Startup',
                  2000,
                  'Build your Dreams',
                  2000,
                  'Launch your Project',
                  2000
                ]}
                speed={50}
                repeat={Infinity}
                className="inline-block"
              />
            </span>
          </motion.h1>

          <motion.div
            className="relative py-2 px-4 rounded-full bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 mb-10 max-w-max mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Pulsing dot */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <motion.div
                className="absolute w-2 h-2 rounded-full bg-green-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            <p className="text-gray-300 text-sm pl-6">
              <span className="font-semibold text-white mr-1">68,500+</span>
              active team builders have joined our community
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-red-500 to-amber-400 hover:from-red-600 hover:to-amber-500 text-white border-0 shadow-lg shadow-red-500/20">
              <Link to="/projects">
                Browse Projects <FaArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800 text-white backdrop-blur-sm">
              <Link to="/create-project">
                Create a Project <FaLightbulb className="ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Team user avatars */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full ring-2 ring-gray-900 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-700"
                >
                  <FaUsers className={`text-${i % 2 === 0 ? 'red' : 'amber'}-400`} />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Glass card with features */}
        <motion.div
          className="mt-4 rounded-xl overflow-hidden relative w-full max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-950/80 backdrop-blur-md rounded-xl p-8 relative z-10 border border-gray-800/50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-amber-300">
                Join the revolution in team building
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative backdrop-blur-sm rounded-lg p-6 border border-gray-800/50 overflow-hidden group hover:border-red-500/30 transition-all duration-300">
                  {/* Red glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur"></div>

                  <div className="relative">
                    <h3 className="font-semibold text-red-400 mb-4 flex items-center text-xl">
                      <span className="bg-red-400/20 p-1.5 rounded-lg mr-3 text-2xl">💡</span>
                      I have an idea
                    </h3>
                    <ol className="space-y-3 text-gray-300 pl-2">
                      <li className="flex items-start">
                        <span className="font-bold text-red-400 mr-2 mt-0.5">1.</span>
                        <span>Create a detailed project card</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-red-400 mr-2 mt-0.5">2.</span>
                        <span>Select qualified team members with specialized roles</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-red-400 mr-2 mt-0.5">3.</span>
                        <span>Turn your vision into a funded startup together</span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="relative backdrop-blur-sm rounded-lg p-6 border border-gray-800/50 overflow-hidden group hover:border-amber-500/30 transition-all duration-300">
                  {/* Gold glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg blur"></div>

                  <div className="relative">
                    <h3 className="font-semibold text-amber-400 mb-4 flex items-center text-xl">
                      <span className="bg-amber-400/20 p-1.5 rounded-lg mr-3 text-2xl">🤝</span>
                      I want to join a project
                    </h3>
                    <ol className="space-y-3 text-gray-300 pl-2">
                      <li className="flex items-start">
                        <span className="font-bold text-amber-400 mr-2 mt-0.5">1.</span>
                        <span>Browse interesting projects matching your skills</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-amber-400 mr-2 mt-0.5">2.</span>
                        <span>Apply to your favorite team with your expertise</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-amber-400 mr-2 mt-0.5">3.</span>
                        <span>Make an impact in your new team from day one</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
