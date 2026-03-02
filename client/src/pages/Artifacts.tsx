import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Hammer } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ArtifactModal } from "@/components/ArtifactModal";
import { artifacts, type Artifact } from "@/data/artifacts";

const PAGE = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10";

export default function Artifacts() {
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="h-16" />

      <main className="pt-12 pb-20">
        <div className={PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link href="/projects">
              <button
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors mb-6"
                data-testid="button-back-projects"
              >
                <ArrowLeft size={18} />
                Back to Projects
              </button>
            </Link>

            <div className="flex items-center gap-3 mb-3">
              <Hammer className="text-primary" size={28} />
              <p className="font-mono text-primary text-sm">Collection</p>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Engineering Artifacts
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl">
              A collection of smaller fabrication builds and rapid engineering
              solutions — jigs, fixtures, tooling aids, and quick-turn prototypes
              that support larger projects or solve standalone problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artifacts.map((artifact, i) => (
              <motion.div
                key={artifact.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedArtifact(artifact)}
                data-testid={`card-artifact-${artifact.id}`}
              >
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    {artifact.images.length > 0 ? (
                      <img
                        src={artifact.images[0]}
                        alt={artifact.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground font-mono text-sm blueprint-grid">
                        <span className="opacity-50">[Artifact Image]</span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {artifact.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {artifact.shortDescription}
                    </p>
                    <span className="mt-4 text-primary text-sm font-medium group-hover:underline">
                      View details
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {selectedArtifact && (
        <ArtifactModal
          artifact={selectedArtifact}
          onClose={() => setSelectedArtifact(null)}
        />
      )}
    </div>
  );
}
