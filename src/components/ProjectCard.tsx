import { useState } from "react";
import { FaUsers, FaCalendarAlt, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from "react-icons/fa";

export interface ProjectRole {
  title: string;
  compensation?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  teamSize: number;
  createdBy: string;
  datePosted: string;
  roles: ProjectRole[];
  website?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-colors h-full flex flex-col">
      {/* Header */}
      <div className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-xl text-white">{project.title}</h3>
            <span className="inline-block mt-1 bg-gray-800 text-xs px-2 py-1 rounded-full text-gray-300 border border-gray-700">
              {project.category}
            </span>
          </div>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white p-1"
            >
              <FaExternalLinkAlt className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pt-2 flex-grow">
        <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
          <div className="flex items-center">
            <FaUsers className="mr-1" />
            <span>Team Size: {project.teamSize}</span>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="mr-1" />
            <span>{project.datePosted}</span>
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-4">
          {expanded
            ? project.description
            : project.description.length > 150
              ? `${project.description.substring(0, 150)}...`
              : project.description
          }
        </p>

        {project.description.length > 150 && (
          <button
            className="text-gray-400 hover:text-white flex items-center text-sm bg-transparent border-none p-0 mb-2 cursor-pointer"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                <FaChevronUp className="mr-1" />
                Show less
              </>
            ) : (
              <>
                <FaChevronDown className="mr-1" />
                Read more
              </>
            )}
          </button>
        )}

        <div className="mt-4">
          <h4 className="font-semibold text-amber-400 mb-2 text-sm">Created by {project.createdBy}</h4>
        </div>
      </div>

      {/* Roles */}
      <div className="p-4 border-t border-gray-800">
        <h4 className="font-semibold text-white mb-3 text-sm">Apply for roles:</h4>
        <div className="space-y-2">
          {project.roles.map((role, index) => (
            <RoleButton key={index} role={role} />
          ))}
        </div>
      </div>
    </div>
  );
}

function RoleButton({ role }: { role: ProjectRole }) {
  return (
    <button
      className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded flex justify-between items-center transition-colors text-sm"
    >
      <span>{role.title}</span>
      {role.compensation && (
        <span className="bg-gray-900 text-xs px-2 py-0.5 rounded-full ml-auto text-gray-300">
          {role.compensation}
        </span>
      )}
    </button>
  );
}
