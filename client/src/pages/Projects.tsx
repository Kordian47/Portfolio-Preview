import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const allTags = ["Mechanical", "Electrical", "Controls", "Software", "Manufacturing"] as const;

export default function Projects() {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects =
    activeTags.length === 0
      ? projects
      : projects.filter((p) => p.tags.some((tag) => activeTags.includes(tag)));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Projects
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A collection of engineering projects spanning mechanical design, 
              electrical systems, controls, and software development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <p className="text-sm text-muted-foreground mb-3">Filter by category:</p>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors border ${
                    activeTags.includes(tag)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary/50"
                  }`}
                  data-testid={`filter-${tag.toLowerCase()}`}
                >
                  {tag}
                </button>
              ))}
              {activeTags.length > 0 && (
                <button
                  onClick={() => setActiveTags([])}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="filter-clear"
                >
                  Clear filters
                </button>
              )}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No projects match the selected filters.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}