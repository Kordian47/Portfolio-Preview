import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Wrench } from "lucide-react";
import type { Artifact } from "@/data/artifacts";

interface ArtifactModalProps {
  artifact: Artifact;
  onClose: () => void;
}

export function ArtifactModal({ artifact, onClose }: ArtifactModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
        data-testid="modal-backdrop"
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl z-10"
          onClick={(e) => e.stopPropagation()}
          data-testid={`modal-artifact-${artifact.id}`}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-card/95 backdrop-blur-md border-b border-border">
            <h2 className="font-display text-xl font-bold text-foreground pr-8">
              {artifact.title}
            </h2>
            <button
              onClick={onClose}
              className="absolute right-4 top-4 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-primary/50 transition-colors"
              data-testid="button-close-modal"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          <div className="px-6 py-6 space-y-6">
            {artifact.images.length > 0 && (
              <div className="grid gap-3">
                {artifact.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${artifact.title} image ${i + 1}`}
                    className="w-full rounded-xl border border-border object-cover"
                  />
                ))}
              </div>
            )}

            <div>
              <p className="text-foreground/85 leading-relaxed">
                {artifact.description}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Wrench size={14} className="text-cyan-400" />
                <p className="text-xs font-mono text-foreground/50 uppercase tracking-wider">
                  Tools & Materials
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {artifact.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs font-medium border rounded bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-background border border-border rounded-xl p-4">
              <p className="text-xs font-mono text-primary mb-2 uppercase tracking-wider">
                Takeaway
              </p>
              <p className="text-foreground/80 text-sm leading-relaxed italic">
                {artifact.takeaway}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
