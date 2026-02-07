import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";

// Asset imports
import heroImage from "@assets/projects/beam-deflection-hero1.png";
import inputSheetImage from "@assets/projects/beam-deflection-input-sheet.png";
import codeFlowImage from "@assets/projects/beam-deflection-code-flow.png";
import loadDistImage from "@assets/projects/beam-deflection-load-distribution.png";
import responseDiagramsImage from "@assets/projects/beam-deflection-response-diagrams.png";
import maxValuesImage from "@assets/projects/beam-deflection-max-values.png";

const tagColors: Record<string, string> = {
  Mechanical: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  Software: "bg-violet-500/10 text-violet-400 border-violet-500/30",
};

// Layout + typography helpers
const PAGE = "mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-10";
const BODY = "text-foreground/85 leading-relaxed";
const BODY_SOFT = "text-foreground/75 leading-relaxed";

export default function BeamDeflectionCalculator() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <div className="h-16" />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Beam Deflection Calculator"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        </div>

        <div className="relative z-10">
          <div className={`${PAGE} pt-16 pb-10`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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

              <div className="flex items-center gap-4 mb-3">
                <span className="text-foreground/70 text-sm font-medium">
                  Class Project
                </span>
                <span className="text-foreground/40">•</span>
                <span className="text-primary font-mono text-sm">
                  Nov 2025 – Dec 2025
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3 max-w-3xl">
                Beam Deflection Calculator
              </h1>

              <p className={`${BODY_SOFT} text-lg mb-5 max-w-2xl`}>
                Numerical structural analysis tool for arbitrary beam loading
              </p>

              <div className="flex flex-wrap gap-2">
                {["Mechanical", "Software"].map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-xs font-medium border rounded ${tagColors[tag]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Section 1: Project Overview (inside hero) */}
              <div className="mt-8 max-w-3xl">
                <div className="rounded-xl border border-border bg-background/35 backdrop-blur-md p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    Project Overview
                  </h2>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      Problem: Hand beam calculations are slow, error-prone, and not scalable
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      Goal: Build a numerical tool to compute shear, moment, slope, deflection for arbitrary loading
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      Outcome: Tool produces physically correct diagrams and max values without closed-form solutions
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* subtle fade spacer */}
          <div className="h-8" />
        </div>
      </section>

      {/* Section 2: Abstract & Motivation */}
      <section className="py-16 border-b border-border">
        <div className={PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-primary text-sm mb-2">Section 2</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              Abstract & Motivation
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="font-display font-semibold text-foreground mb-3">Problem</h3>
                <p className={`${BODY} mb-6`}>
                  Hand-calculating shear, bending moment, slope, and deflection for beams is time-consuming and error-prone, 
                  especially when evaluating multiple loading configurations. While closed-form solutions exist for simple cases, 
                  real design problems often involve mixed loading, varying geometry, and non-trivial boundary conditions.
                </p>
              </div>
              
              <div>
                <h3 className="font-display font-semibold text-foreground mb-3">Solution & Outcome</h3>
                <p className={`${BODY} mb-6`}>
                  This project develops a numerical beam analysis tool capable of computing shear, bending moment, slope, and 
                  deflection diagrams for beams subjected to arbitrary point loads and uniform distributed loads. By using 
                  numerical methods rather than closed-form equations, the tool scales naturally with problem complexity and 
                  provides immediate visual feedback for design iteration.
                </p>
                <p className={BODY}>
                  The result is a flexible python based analysis tool that reproduces classical beam theory behavior while 
                  remaining extensible to more advanced structural modeling.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: System Overview (Inputs -> Outputs) */}
      <section className="py-16 border-b border-border bg-card/30">
        <div className={PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-primary text-sm mb-2">Section 3</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-10">
              System Overview (Inputs → Outputs)
            </h2>

            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center mb-12">
               <div className="space-y-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-display font-semibold text-foreground mb-3">Inputs</h3>
                    <ul className="space-y-2 text-foreground/75 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                        Beam geometry: length, width, height
                      </li>
                      <li className="flex items-start gap-2">
                         <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                         Material properties: Young’s modulus
                      </li>
                      <li className="flex items-start gap-2">
                         <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                         Support conditions: fixed–free or fixed–roller
                      </li>
                      <li className="flex items-start gap-2">
                         <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                         Loading conditions: Arbitrary point loads & Uniform distributed loads (UDLs)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-display font-semibold text-foreground mb-3">Outputs</h3>
                    <ul className="space-y-2 text-foreground/75 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                        Shear force diagram, V(x)
                      </li>
                      <li className="flex items-start gap-2">
                         <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                         Bending moment diagram, M(x)
                      </li>
                      <li className="flex items-start gap-2">
                         <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                         Slope diagram, θ(x)
                      </li>
                      <li className="flex items-start gap-2">
                         <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                         Deflection diagram, y(x)
                      </li>
                      <li className="flex items-start gap-2">
                         <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                         Maximum values and corresponding locations for each response
                      </li>
                    </ul>
                  </div>
               </div>

               <div>
                 <figure>
                   <img
                     src={inputSheetImage}
                     alt="Excel input sheet interface"
                     className="rounded-xl border border-border w-full shadow-lg"
                   />
                   <figcaption className="mt-3 text-center text-sm text-foreground/50 italic">
                     Input Interface Structure
                   </figcaption>
                 </figure>
               </div>
            </div>
            
            <p className={`${BODY} text-center max-w-3xl mx-auto`}>
              This structure allows rapid evaluation of multiple design cases without manual re-derivation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Numerical Methods & Governing Theory */}
      <section className="py-16 border-b border-border">
        <div className={PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-primary text-sm mb-2">Section 4</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-10">
              Numerical Methods & Governing Theory
            </h2>
            
            <p className={`${BODY} mb-10 max-w-4xl`}>
              The calculator follows classical Euler–Bernoulli beam theory while relying entirely on numerical integration rather than closed-form solutions.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                 <h3 className="font-display font-semibold text-foreground text-lg">Load Construction</h3>
                 <p className={BODY_SOFT}>
                   All user-defined loads (point loads and UDLs) are first combined into a single unified load function q(x).
                   Loads are stored and processed using structured data representations, enabling arbitrary placement and magnitude without special-case logic.
                 </p>
              </div>

              <div className="space-y-3">
                 <h3 className="font-display font-semibold text-foreground text-lg">Reaction Forces</h3>
                 <p className={BODY_SOFT}>
                   Unknown reaction forces are computed using static equilibrium:
                 </p>
                 <ul className="list-disc pl-5 text-foreground/75 space-y-1 text-sm">
                   <li>Sum of forces = 0</li>
                   <li>Sum of moments = 0</li>
                 </ul>
                 <p className={BODY_SOFT}>
                   This yields a 2×2 linear system, which is solved using LU decomposition for numerical stability and generality.
                 </p>
              </div>

              <div className="space-y-3">
                 <h3 className="font-display font-semibold text-foreground text-lg">Integration Chain</h3>
                 <p className={BODY_SOFT}>
                   Once the load function is defined, the structural response is computed via successive numerical integration:
                 </p>
                 <p className="font-mono text-primary text-sm bg-primary/10 p-2 rounded text-center my-2">
                   q(x) → V(x) → M(x) → θ(x) → y(x)
                 </p>
                 <ul className="list-disc pl-5 text-foreground/75 space-y-1 text-sm">
                   <li>Integration is performed using the trapezoidal rule</li>
                   <li>Material stiffness E and second moment of area I are incorporated at the curvature stage</li>
                   <li>Boundary conditions are applied based on known fixed-end constraints</li>
                 </ul>
                 <p className={BODY_SOFT + " mt-2"}>
                   This approach mirrors the physical relationships between load, internal forces, and deformation.
                 </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Code Flow & Architecture */}
      <section className="py-16 border-b border-border bg-card/30">
        <div className={PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-primary text-sm mb-2">Section 5</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-10">
              Code Flow & Architecture
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className={`${BODY} mb-6`}>
                  The software follows a deterministic, modular pipeline:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-foreground/85 font-medium">
                  <li>Read and validate user inputs from excel</li>
                  <li>Process and combine applied loads</li>
                  <li>Solve for reaction forces via LU decomposition</li>
                  <li>Construct the unified load function q(x)</li>
                  <li>
                    Perform numerical integration to obtain:
                    <ul className="list-disc pl-5 font-normal text-foreground/70 mt-1">
                      <li>Shear</li>
                      <li>Moment</li>
                      <li>Slope</li>
                      <li>Deflection</li>
                    </ul>
                  </li>
                  <li>Apply boundary conditions</li>
                  <li>Generate plots</li>
                  <li>Locate maximum values using a discrete 1D grid search</li>
                </ol>
                <p className={`${BODY_SOFT} mt-6`}>
                  This structure makes the tool easy to extend, debug, and adapt to more complex beam configurations.
                </p>
              </div>

              <div>
                <img
                  src={codeFlowImage}
                  alt="Code flow diagram"
                  className="rounded-xl border border-border w-full shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Results */}
      <section className="py-16 border-b border-border">
        <div className={PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-primary text-sm mb-2">Section 6</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-10">
              Results
            </h2>

            <p className={`${BODY} mb-12 max-w-4xl`}>
               The calculator produces smooth, continuous response diagrams that behave exactly as predicted by beam theory:
               Shear force changes discontinuously at point loads, bending moment is the integral of shear, slope reflects 
               beam curvature and stiffness, and deflection accumulates smoothly from slope. 
               For tested cases, the numerical results matched analytical solutions in both shape and magnitude.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <img
                  src={loadDistImage}
                  alt="Load distribution graph"
                  className="rounded-xl border border-border w-full aspect-[4/3] object-cover"
                />
                <p className="text-sm text-foreground/60">Load Distribution</p>
              </div>
              
              <div className="space-y-3">
                <img
                  src={responseDiagramsImage}
                  alt="Response diagrams"
                  className="rounded-xl border border-border w-full aspect-[4/3] object-cover"
                />
                <p className="text-sm text-foreground/60">Shear, Moment, Slope, Deflection</p>
              </div>

              <div className="space-y-3">
                <img
                  src={maxValuesImage}
                  alt="Max values table"
                  className="rounded-xl border border-border w-full aspect-[4/3] object-cover"
                />
                <p className="text-sm text-foreground/60">Computed Maximum Values</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Validation */}
      <section className="py-16 border-b border-border bg-card/30">
        <div className={PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-primary text-sm mb-2">Section 7</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-10">
              Validation
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
               <div>
                  <h3 className="font-display font-semibold text-foreground mb-3">Analytical Comparison</h3>
                  <p className={BODY_SOFT}>
                    Shear, slope, and deflection diagrams were verified against hand-calculated solutions.
                    Numerical results matched expected analytical behavior across all tested cases.
                  </p>
                  
                  <h3 className="font-display font-semibold text-foreground mb-3 mt-6">Observed Issue</h3>
                  <p className={BODY_SOFT}>
                    A minor discontinuity was observed at x=0 in the bending moment diagram. The issue is isolated to 
                    initial boundary handling and does not affect downstream slope or deflection accuracy.
                  </p>
               </div>
               
               <div>
                  <h3 className="font-display font-semibold text-foreground mb-3">Planned Physical Validation</h3>
                  <p className={BODY_SOFT}>
                    To further strengthen validation, a physical beam test is planned:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-foreground/75 text-sm">
                    <li>Fixed-free beam configuration</li>
                    <li>Known applied loads</li>
                    <li>Measured deflection using physical instrumentation</li>
                    <li>Comparison against numerical predictions</li>
                  </ul>
                  <p className={BODY_SOFT + " mt-4"}>
                     This experiment will provide real-world confirmation of model accuracy and quantify prediction error.
                  </p>
               </div>
            </div>

            <div className="mt-12 bg-card border border-border rounded-xl p-6">
               <h3 className="font-display font-semibold text-foreground mb-3">Limitations & Assumptions</h3>
               <ul className="flex flex-wrap gap-4 text-foreground/75 text-sm">
                 <li className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                   Euler–Bernoulli beam assumptions (small deflection, linear elasticity)
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                   Constant cross-section along beam length
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                   Discretization resolution affects numerical smoothness
                 </li>
                 <li className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                   Limited support types in current implementation
                 </li>
               </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 8: Detailed Numerical Methods (Blank as requested) */}
      <section className="py-16 border-b border-border">
        <div className={PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-primary text-sm mb-2">Section 8</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-10">
              Detailed Numerical Methods & Implementation
            </h2>
            <div className="h-32 flex items-center justify-center border border-dashed border-border rounded-xl">
               <span className="text-foreground/40 italic">Section content intentionally left blank</span>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Section 9: Future Implementations */}
      <section className="py-16 border-b border-border bg-card/30">
        <div className={PAGE}>
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <p className="font-mono text-primary text-sm mb-2">Section 9</p>
             <h2 className="font-display text-2xl font-bold text-foreground mb-8">
               Future Implementations
             </h2>
             
             <p className={`${BODY} mb-6`}>
               The current tool serves as a robust foundation for these expansions:
             </p>

             <div className="grid md:grid-cols-2 gap-4">
               {[
                 "Additional support types and multiple supports",
                 "Arbitrary distributed load functions",
                 "Variable and non-uniform cross-sections",
                 "Applied moments and torsional loading",
                 "3D beam behavior",
                 "Stress concentration modeling",
                 "Fatigue and life-cycle prediction",
                 "Failure and safety factor evaluation"
               ].map((item) => (
                 <div key={item} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background/40">
                   <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shrink-0" />
                   <span className="text-foreground/80">{item}</span>
                 </div>
               ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* Section 10: Conclusion */}
      <section className="py-16 border-b border-border">
        <div className={PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <p className="font-mono text-primary text-sm mb-2">Section 10</p>
             <h2 className="font-display text-2xl font-bold text-foreground mb-8">
               Conclusion
             </h2>
             
             <div className="max-w-4xl space-y-6">
               <p className={BODY}>
                 This project demonstrates that simple numerical methods can accurately reproduce classical beam theory 
                 without relying on closed-form solutions. By combining static equilibrium, LU decomposition, and numerical 
                 integration, the calculator provides a scalable and extensible framework for structural analysis.
               </p>
               
               <p className={BODY}>
                 Beyond academic application, the project reflects a practical engineering workflow: translating theory into a usable 
                 tool capable of supporting real design decisions.
               </p>
             </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer spacer */}
      <div className="h-24" />
    </div>
  );
}
