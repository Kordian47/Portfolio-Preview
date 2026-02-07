import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { projects } from "@/data/projects";

const tagColors: Record<string, string> = {
  Mechanical: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  Electrical: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  Controls: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  Software: "bg-violet-500/10 text-violet-400 border-violet-500/30",
};

const projectDetails: Record<string, { problem: string; solution: string; result: string }> = {
  "automated-garden-watering": {
    problem: "Indoor plants require consistent watering schedules that are difficult to maintain manually, leading to over or under-watering and inconsistent growth conditions.",
    solution: "Designed and developed an automated irrigation prototype featuring stepper-motor-controlled flow distribution, microcontrollers, real-time clock modules, and environmental sensors. Implemented soil moisture, temperature, and humidity feedback with fan-controlled airflow for microclimate regulation.",
    result: "Reduced manual watering to zero while maintaining consistent soil moisture across all plants. The modular design allows for scalable, precise irrigation across multiple plant zones with programmable grow lights and irrigation cycles.",
  },
  "hobby-rocketry": {
    problem: "High-power hobby rockets require precision-engineered fin cans and rail guide systems that can withstand significant aerodynamic forces while remaining lightweight and reusable.",
    solution: "Designed, modeled, and 3D-printed fin cans using SOLIDWORKS and Fusion 360. Conducted stress tests on PLA, PETG, and carbon fiber nylon to evaluate durability and performance under load. Engineered a fly-away rail guide carriage compatible with multiple rocket body diameters.",
    result: "Developed reusable launch systems with improved stability and compatibility across multiple rocket configurations. Explored potential commercialization by consulting with distributors on hobbyist market demand.",
  },
  "cnc-automation-fixtures": {
    problem: "Automated CNC-loading robot arms require precise calibration fixtures to ensure accurate part placement and consistent machining results.",
    solution: "Designed and 3D-printed custom calibration fixtures specifically for the robot arm system, incorporating precision alignment features and repeatable positioning mechanisms.",
    result: "Improved system accuracy and reduced setup time by 30%, enabling faster production runs and more reliable automated operation.",
  },
  "laser-engraver-enclosure": {
    problem: "Laser engraving operations require proper enclosures for operator safety, fume extraction, and consistent work positioning.",
    solution: "Built custom enclosures and fixtures for the laser engraver, incorporating safety interlocks, ventilation pathways, and precision work-holding fixtures.",
    result: "Enhanced precision, operator safety, and improved workflow efficiency by 45% through better material handling and reduced setup time.",
  },
  "beam-deflection-calculator": {
    problem:
      "Hand calculations of beam shear, moment, slope, and deflection are time-consuming, error-prone, and impractical for complex or mixed loading conditions.",
    solution:
      "Developed a numerical beam analysis tool using Euler–Bernoulli beam theory, static equilibrium, LU decomposition, and numerical integration to compute shear, moment, slope, and deflection for arbitrary loading scenarios.",
    result:
      "Produced physically correct response diagrams that match analytical solutions in shape and magnitude, while remaining extensible to more complex structural analysis problems.",
  },
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const details = id ? projectDetails[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <Link href="/projects">
            <button className="text-primary hover:underline">
              ← Back to Projects
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/projects">
              <button
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                data-testid="button-back-projects"
              >
                <ArrowLeft size={18} />
                Back to Projects
              </button>
            </Link>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-xs font-medium border rounded ${tagColors[tag]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-display text-4xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="aspect-video bg-card border border-border rounded-lg mb-12 overflow-hidden blueprint-grid flex items-center justify-center">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-muted-foreground font-mono text-sm">
                  [Project Documentation / Images]
                </span>
              )}
            </div>

            {details && (
              <div className="space-y-12">
                <section>
                  <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-8 h-px bg-primary" />
                    Problem
                  </h2>
                  <p className="text-muted-foreground leading-relaxed pl-11">
                    {details.problem}
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-8 h-px bg-primary" />
                    Solution
                  </h2>
                  <p className="text-muted-foreground leading-relaxed pl-11">
                    {details.solution}
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-8 h-px bg-primary" />
                    Result
                  </h2>
                  <p className="text-muted-foreground leading-relaxed pl-11">
                    {details.result}
                  </p>
                </section>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
