import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <div className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-amber-300">
                How does it work?
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              TeamBuilder makes it easy to build your team or find exciting projects to join
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Unorganized teaming up */}
          <motion.div
            className="rounded-xl overflow-hidden bg-gray-800/30 p-6 border border-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-2">Unorganized teaming up</h3>
              <p className="text-gray-400">Challenges with traditional team formation</p>
            </div>

            <div className="space-y-4 mt-6">
              <div className="bg-gray-900/80 rounded-lg p-4 flex items-start">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center mr-3">
                  <span className="text-xs text-gray-300">1</span>
                </div>
                <div>
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold text-red-400">Fragmented conversations</span> across multiple platforms and DMs
                  </p>
                </div>
              </div>

              <div className="bg-gray-900/80 rounded-lg p-4 flex items-start">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center mr-3">
                  <span className="text-xs text-gray-300">2</span>
                </div>
                <div>
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold text-red-400">Unclear expectations</span> about roles, responsibilities, and project scope
                  </p>
                </div>
              </div>

              <div className="bg-gray-900/80 rounded-lg p-4 flex items-start">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center mr-3">
                  <span className="text-xs text-gray-300">3</span>
                </div>
                <div>
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold text-red-400">High abandonment rate</span> due to lack of commitment and structure
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Organized teaming up */}
          <motion.div
            className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 border border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-2">Organized teaming up</h3>
              <p className="text-gray-400">TeamBuilder's structured approach</p>
            </div>

            <div className="relative mt-6">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-amber-400"></div>

              <div className="relative flex mb-8">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-amber-400 flex-shrink-0 flex items-center justify-center mr-4 z-10">
                  <FaArrowRight className="text-white text-xs" />
                </div>
                <div className="bg-gray-800/80 rounded-lg p-4 flex-grow">
                  <h4 className="font-semibold text-amber-400 mb-1">Clear Project Cards</h4>
                  <p className="text-sm text-gray-300">
                    Detailed project descriptions with specific roles needed and clear expectations
                  </p>
                </div>
              </div>

              <div className="relative flex mb-8">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-amber-400 flex-shrink-0 flex items-center justify-center mr-4 z-10">
                  <FaArrowRight className="text-white text-xs" />
                </div>
                <div className="bg-gray-800/80 rounded-lg p-4 flex-grow">
                  <h4 className="font-semibold text-amber-400 mb-1">Skill-Based Matching</h4>
                  <p className="text-sm text-gray-300">
                    Apply with your skills and get matched to projects where you'll make the most impact
                  </p>
                </div>
              </div>

              <div className="relative flex">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-amber-400 flex-shrink-0 flex items-center justify-center mr-4 z-10">
                  <FaArrowRight className="text-white text-xs" />
                </div>
                <div className="bg-gray-800/80 rounded-lg p-4 flex-grow">
                  <h4 className="font-semibold text-amber-400 mb-1">Integrated Collaboration</h4>
                  <p className="text-sm text-gray-300">
                    From team formation to project execution in one seamless platform
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section - Finding team members */}
        <motion.div
          className="mt-24 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-amber-300">
                  Finding team members?
                </span>
              </h2>
              <p className="text-xl text-white mb-2">Never been so easy!</p>
              <div className="space-y-4 mt-8">
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">No more asking for more details about a project.</h3>
                  <p className="text-gray-400 text-sm">Still not enough? Just expand the card.</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Want to join a startup?</h3>
                  <p className="text-gray-400 text-sm">Pick a role!</p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-400 rounded-lg blur opacity-25"></div>
                <div className="relative bg-gray-900 rounded-lg p-2">
                  <img
                    src="https://ext.same-assets.com/3825999884/1182782763.webp"
                    alt="Project card interface"
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
