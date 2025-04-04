import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaTrophy, FaGlobeAmericas } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  { question: "What is TeamBuilder?", answer: "TeamBuilder is a platform that helps innovators find team members for their projects and allows talented individuals to discover exciting projects to join. We facilitate the connection between people with ideas and people with skills to bring those ideas to life." },
  { question: "How do I create a project?", answer: "To create a project, click on the 'Create Project' button on the homepage or in the navigation menu. You'll be prompted to fill out information about your project, including its title, description, category, and the roles you're looking to fill." },
  { question: "How do I apply for a role in a project?", answer: "On the project details page, you'll see a list of available roles. Simply click on the role you're interested in, and you'll be taken to an application form where you can describe your relevant skills and experience." },
  { question: "Is TeamBuilder free to use?", answer: "Yes, TeamBuilder is completely free to use for both project creators and team members. We believe in connecting talented people and enabling innovation without barriers." },
  { question: "How does project matching work?", answer: "Our platform matches projects and team members based on skills, interests, and project requirements. We use a combination of algorithms and user input to suggest the most suitable matches for both parties." },
  { question: "Can I work on multiple projects at once?", answer: "Absolutely! You can apply to and participate in as many projects as you'd like, as long as you can manage your commitments and deliver quality work to each team." },
  { question: "How do I communicate with my team?", answer: "Once you've joined a project, you'll gain access to the project's collaboration space, which includes chat, file sharing, and task management tools. This creates a centralized workspace for your team." },
  { question: "What happens if a project doesn't work out?", answer: "We understand that not all collaborations will be perfect matches. You're free to leave a project if it's not working out, but we encourage open communication to resolve any issues first. Your reputation on the platform won't be affected if you leave projects for legitimate reasons." }
];

export default function AboutPage() {
  const [showFAQ, setShowFAQ] = useState(false);
  const faqRef = useRef(null);

  const handleViewFAQs = () => {
    setShowFAQ(true);
    setTimeout(() => {
      faqRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="py-20 min-h-screen bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-amber-400">
              About TeamBuilder
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connecting passionate creators and turning ideas into reality
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="bg-gray-900/70 border border-gray-800 rounded-lg p-8 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-amber-400">Our Mission</h2>
          <p className="text-gray-300 mb-4">
            TeamBuilder was created with a simple mission: to help innovators find the right team members to bring their ideas to life.
          </p>
          <p className="text-gray-300">
            We believe that great ideas deserve to be developed, and that by connecting passionate individuals with complementary skills, we can help turn vision into reality.
          </p>
        </motion.div>

        {/* What Sets Us Apart */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center text-white">What Sets Us Apart</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard icon={<FaUsers />} title="Community First" description="We've built a thriving community of creators, developers, designers, and entrepreneurs who are all passionate about building great products." />
            <FeatureCard icon={<FaLightbulb />} title="Idea Incubation" description="We provide a platform where ideas can be shaped, tested, and developed with the right team members contributing their expertise." />
            <FeatureCard icon={<FaTrophy />} title="Success Stories" description="We celebrate the success of our members through monthly hackathons and startup spotlights, giving visibility to the best projects." />
            <FeatureCard icon={<FaGlobeAmericas />} title="Global Network" description="Connect with talent from around the world, bringing diverse perspectives and skills to your project." />
          </div>
        </motion.div>

        {/* FAQ Button */}
        <div className="text-center mb-16">
          <button
            onClick={handleViewFAQs}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-amber-400 hover:from-red-600 hover:to-amber-500 text-white rounded-md font-medium transition-colors inline-block"
          >
            View FAQs
          </button>
        </div>

        {/* FAQ Section - Hidden Until Button Clicked */}
        {showFAQ && (
          <motion.div
            ref={faqRef}
            id="faq"
            className="py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center text-white">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800 py-2">
                  <AccordionTrigger className="text-white text-left hover:text-amber-400 transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
      <div className="bg-gradient-to-br from-red-500 to-amber-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
