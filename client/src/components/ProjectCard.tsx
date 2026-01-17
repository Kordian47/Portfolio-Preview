import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: ("Mechanical" | "Electrical" | "Controls" | "Software" | "Manufacturing")[];
  featured?: boolean;
  result?: string;

  // If true, this project should appear on /projects and in Featured sections.
  // If omitted/false, treat it as hidden (draft).
  published?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const tagColors: Record<string, string> = {
  Mechanical: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  Electrical: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  Controls: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  Software: "bg-violet-500/10 text-violet-400 border-violet-500/30",
  Manufacturing: "bg-rose-500/10 text-rose-400 border-rose-500/30",
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/projects/${project.id}`}>
        <div
          className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300 cursor-pointer h-full flex flex-col glow-cyan hover:glow-cyan"
          data-testid={`card-project-${project.id}`}
        >
          <div className="aspect-video bg-muted relative overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground font-mono text-sm blueprint-grid">
                <span className="opacity-50">[Project Image]</span>
              </div>
            )}

            {project.featured && (
              <span className="absolute top-3 right-3 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded">
                Featured
              </span>
            )}
          </div>

          <div className="p-5 flex flex-col flex-1">
            <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 py-1 text-xs font-medium border rounded ${tagColors[tag]}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.result && (
              <p className="text-sm text-muted-foreground mb-4">
                <span className="font-medium text-foreground">Result:</span> {project.result}
              </p>
            )}

            <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              View project <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
