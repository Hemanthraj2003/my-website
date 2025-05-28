"use client";
import React, { useState } from 'react';
import { ExternalLink, GitHub, ChevronDown, ChevronUp } from 'react-feather';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'planned':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web':
        return '🌐';
      case 'mobile':
        return '📱';
      case 'desktop':
        return '💻';
      case 'fullstack':
        return '🚀';
      default:
        return '⚡';
    }
  };

  return (
    <div className="glass-effect p-6 rounded-2xl hover-lift group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{getCategoryIcon(project.category)}</span>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                {project.status.replace('-', ' ')}
              </span>
              <span className="text-xs text-gray-400 capitalize">
                {project.category}
              </span>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-primary transition-all duration-300"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GitHub size={18} />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-primary transition-all duration-300"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Expand/Collapse Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 font-medium"
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Show less details' : 'Show more details'}
      >
        {isExpanded ? 'Show Less' : 'Show More'}
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-6 space-y-4 animate-fadeIn">
          <div>
            <h4 className="text-lg font-semibold text-primary mb-2">About This Project</h4>
            <p className="text-gray-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary mb-2">Key Features</h4>
            <ul className="space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <span className="text-primary mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">Challenges Overcome</h4>
              <ul className="space-y-1">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="text-yellow-400 mt-1">⚡</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.learnings && project.learnings.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">What I Learned</h4>
              <ul className="space-y-1">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="text-blue-400 mt-1">💡</span>
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
