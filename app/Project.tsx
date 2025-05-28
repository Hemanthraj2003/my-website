"use client";
import React, { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import { projects, getProjectsByCategory } from "./data/projects";

const Project = () => {
  const [filter, setFilter] = useState<
    "all" | "web" | "mobile" | "desktop" | "fullstack"
  >("all");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "completed" | "in-progress" | "planned"
  >("all");

  const getFilteredProjects = () => {
    let filtered = projects;

    if (filter !== "all") {
      filtered = getProjectsByCategory(filter);
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((project) => project.status === statusFilter);
    }

    return filtered;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <div className="flex-1 p-5 md:px-8 md:py-6 fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-black gradient-text mb-4">
          My Projects
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          A showcase of my development journey and the projects I&apos;ve built
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium text-gray-400 mr-2 self-center">
            Category:
          </span>
          {["all", "web", "mobile", "desktop", "fullstack"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-black"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-primary"
              }`}
            >
              {category === "all"
                ? "All"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Status Filter */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium text-gray-400 mr-2 self-center">
            Status:
          </span>
          {["all", "completed", "in-progress", "planned"].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                statusFilter === status
                  ? "bg-primary text-black"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-primary"
              }`}
            >
              {status === "all"
                ? "All"
                : status
                    .replace("-", " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-300 mb-2">
            No projects found
          </h3>
          <p className="text-gray-400">
            Try adjusting your filters to see more projects.
          </p>
        </div>
      )}

      {/* Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-effect p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-primary">
            {projects.length}
          </div>
          <div className="text-sm text-gray-400">Total Projects</div>
        </div>
        <div className="glass-effect p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-green-400">
            {projects.filter((p) => p.status === "completed").length}
          </div>
          <div className="text-sm text-gray-400">Completed</div>
        </div>
        <div className="glass-effect p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-yellow-400">
            {projects.filter((p) => p.status === "in-progress").length}
          </div>
          <div className="text-sm text-gray-400">In Progress</div>
        </div>
        <div className="glass-effect p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-blue-400">
            {projects.filter((p) => p.status === "planned").length}
          </div>
          <div className="text-sm text-gray-400">Planned</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
