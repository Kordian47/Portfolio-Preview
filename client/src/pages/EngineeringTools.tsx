import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Wrench, Calculator, ArrowRight, Loader2 } from "lucide-react";

const PAGE = "mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-10";

interface BeamResult {
  max_deflection: number;
  max_moment: number;
  reaction_forces: { R_a: number; R_b: number };
  x: number[];
  deflection: number[];
}

export default function EngineeringTools() {
  const [length, setLength] = useState("10");
  const [load, setLoad] = useState("1000");
  const [E, setE] = useState("200000000000");
  const [I, setI] = useState("0.0001");
  const [result, setResult] = useState<BeamResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/beam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          length: parseFloat(length),
          load: parseFloat(load),
          E: parseFloat(E),
          I: parseFloat(I),
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => null);
        throw new Error(errData?.detail || `Server error (${res.status})`);
      }

      const data: BeamResult = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || "Failed to connect to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="h-16" />

      <section className="py-16 border-b border-border">
        <div className={PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Wrench className="text-primary" size={28} />
              <p className="font-mono text-primary text-sm">Engineering Tools</p>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Interactive Calculators
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mb-12">
              Backend-powered engineering tools for structural analysis. Results are computed server-side using Python.
            </p>

            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
              <div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Calculator className="text-cyan-400" size={22} />
                    <h2 className="font-display text-xl font-bold text-foreground">
                      Simply Supported Beam
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm text-foreground/70 mb-1.5" htmlFor="length">
                        Beam Length (m)
                      </label>
                      <input
                        id="length"
                        data-testid="input-beam-length"
                        type="number"
                        step="any"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-cyan-500 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-foreground/70 mb-1.5" htmlFor="load">
                        Uniform Load (N/m)
                      </label>
                      <input
                        id="load"
                        data-testid="input-beam-load"
                        type="number"
                        step="any"
                        value={load}
                        onChange={(e) => setLoad(e.target.value)}
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-cyan-500 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-foreground/70 mb-1.5" htmlFor="modulus">
                        Young's Modulus, E (Pa)
                      </label>
                      <input
                        id="modulus"
                        data-testid="input-beam-E"
                        type="number"
                        step="any"
                        value={E}
                        onChange={(e) => setE(e.target.value)}
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-cyan-500 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-foreground/70 mb-1.5" htmlFor="inertia">
                        Moment of Inertia, I (m^4)
                      </label>
                      <input
                        id="inertia"
                        data-testid="input-beam-I"
                        type="number"
                        step="any"
                        value={I}
                        onChange={(e) => setI(e.target.value)}
                        className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-cyan-500 transition-colors"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      data-testid="button-calculate-beam"
                      className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white font-medium py-3 rounded-lg transition-colors"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Computing...
                        </>
                      ) : (
                        <>
                          Calculate
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </form>

                  {error && (
                    <div
                      data-testid="text-beam-error"
                      className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
                    >
                      {error}
                    </div>
                  )}
                </div>
              </div>

              <div>
                {result ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="bg-card border border-border rounded-2xl p-8">
                      <h3 className="font-display font-bold text-foreground text-lg mb-6">
                        Results
                      </h3>

                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-background border border-border rounded-xl p-4">
                          <p className="text-xs text-foreground/50 mb-1 font-mono">Max Deflection</p>
                          <p data-testid="text-max-deflection" className="text-2xl font-bold text-cyan-400">
                            {result.max_deflection.toExponential(4)}
                          </p>
                          <p className="text-xs text-foreground/40 mt-1">meters</p>
                        </div>

                        <div className="bg-background border border-border rounded-xl p-4">
                          <p className="text-xs text-foreground/50 mb-1 font-mono">Max Moment</p>
                          <p data-testid="text-max-moment" className="text-2xl font-bold text-amber-400">
                            {result.max_moment.toFixed(2)}
                          </p>
                          <p className="text-xs text-foreground/40 mt-1">N*m</p>
                        </div>
                      </div>

                      <div className="bg-background border border-border rounded-xl p-4 mb-6">
                        <p className="text-xs text-foreground/50 mb-3 font-mono">Reaction Forces</p>
                        <div className="flex gap-8">
                          <div>
                            <span className="text-foreground/60 text-sm">R_A = </span>
                            <span data-testid="text-reaction-a" className="text-foreground font-semibold">
                              {result.reaction_forces.R_a.toFixed(2)} N
                            </span>
                          </div>
                          <div>
                            <span className="text-foreground/60 text-sm">R_B = </span>
                            <span data-testid="text-reaction-b" className="text-foreground font-semibold">
                              {result.reaction_forces.R_b.toFixed(2)} N
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-foreground/50 mb-3 font-mono">
                          Deflection Profile ({result.x.length} points)
                        </p>
                        <div className="bg-background border border-border rounded-xl p-4 relative h-48">
                          <svg viewBox="0 0 500 180" className="w-full h-full" preserveAspectRatio="none">
                            {(() => {
                              const maxX = Math.max(...result.x);
                              const minD = Math.min(...result.deflection);
                              const maxD = Math.max(...result.deflection);
                              const range = maxD - minD || 1;
                              const points = result.x
                                .map((xi, i) => {
                                  const px = (xi / maxX) * 490 + 5;
                                  const py = 170 - ((result.deflection[i] - minD) / range) * 160;
                                  return `${px},${py}`;
                                })
                                .join(" ");

                              return (
                                <>
                                  <line x1="5" y1="10" x2="5" y2="170" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
                                  <line x1="5" y1="170" x2="495" y2="170" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
                                  <polyline
                                    fill="none"
                                    stroke="rgb(34,211,238)"
                                    strokeWidth="2"
                                    points={points}
                                  />
                                </>
                              );
                            })()}
                          </svg>
                          <div className="absolute bottom-2 left-4 text-[10px] text-foreground/30">0</div>
                          <div className="absolute bottom-2 right-4 text-[10px] text-foreground/30">{result.x[result.x.length - 1]}m</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-full flex items-center justify-center border border-dashed border-border rounded-2xl min-h-[400px]">
                    <div className="text-center text-foreground/40">
                      <Calculator size={48} className="mx-auto mb-4 opacity-30" />
                      <p className="font-display text-lg">Results will appear here</p>
                      <p className="text-sm mt-1">Enter beam parameters and click Calculate</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
