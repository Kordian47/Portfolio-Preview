import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";

import heroImage from "@assets/garden-v2-final-pic_1768091711436.PNG";
import section1Image from "@assets/garden-v2-section1_1768091711437.png";
import finalImage from "@assets/garden-v2-final-pic_1768091711436.PNG";
import explodeVideo from "@assets/garden-v2-explode-animation.mp4";
import sectionCutBlue from "@assets/garden-v2-angled-section-cut-blue_1768091711436.png";
import v1SectionCut from "@assets/garden-v1-angled-section-cut_1768091711436.png";
import v2Collapse from "@assets/garden-v2-collapse-1_1768091711436.png";
import finalVideo from "@assets/Portfolio-Final-section-vid.mp4";
import wholeBreadboard from "@assets/garden-whole-breadboard_1768091711437.png";
import stepperCircuit from "@assets/garden-stepper-circuit_1768091711435.png";
import rtcCircuit from "@assets/garden-RTC-sim-circuit_1768091711435.png";
import opticalCircuit from "@assets/garden-optical-circuit_1768091711437.png";
import pumpCircuit from "@assets/garden-pump-control-circuit_1768091711437.png";

const tagColors: Record<string, string> = {
  Mechanical: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  Electrical: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  Controls: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  Software: "bg-violet-500/10 text-violet-400 border-violet-500/30",
};

// Layout + typography helpers
// NOTE: max-w-[1700px] is intentionally wide to reduce “empty sides” on 1080p/1440p monitors.
const PAGE = "mx-auto w-full max-w-[1700px] px-5 sm:px-8 lg:px-12";
const PAGE_NARROW = "mx-auto w-full max-w-[1100px] px-5 sm:px-8 lg:px-12";

// Brighter body copy (you asked for readability)
const BODY = "text-foreground/90 leading-relaxed";
const BODY_SOFT = "text-foreground/80 leading-relaxed";

export default function GardenProject() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero + Overview (combined; hero image continues under overview) */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Garden Irrigation System"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />
        </div>

        <div className="relative z-10">
          {/* Space under navbar is handled HERE (not with a spacer div) */}
          <div className={`${PAGE} pt-24 pb-14`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/projects">
                <button
                  className="mb-7 flex items-center gap-2 text-foreground/70 transition-colors hover:text-primary"
                  data-testid="button-back-projects"
                >
                  <ArrowLeft size={18} />
                  Back to Projects
                </button>
              </Link>

              <div className="mb-4 flex items-center gap-4">
                <span className="text-sm font-medium text-foreground/70">
                  Team Project
                </span>
                <span className="text-foreground/40">•</span>
                <span className="font-mono text-sm text-primary">
                  May 2025 - June 2025
                </span>
              </div>

              <h1 className="mb-4 max-w-4xl font-display text-4xl font-bold text-foreground md:text-5xl">
                Automated Multi-Zone Garden Irrigation System
              </h1>

              <p className={`${BODY_SOFT} mb-6 max-w-3xl text-lg`}>
                Iterative prototype — current focus on Version 3 reliability,
                sealing, and fluid isolation
              </p>

              <div className="flex flex-wrap gap-2">
                {["Mechanical", "Electrical", "Controls", "Software"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className={`rounded border px-3 py-1 text-xs font-medium ${tagColors[tag]}`}
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>

              {/* Project Overview inside hero */}
              <div className="mt-9 max-w-4xl">
                <div className="rounded-2xl border border-border bg-background/35 p-7 backdrop-blur-md">
                  <h2 className="mb-4 font-display text-xl font-bold text-foreground">
                    Project Overview
                  </h2>
                  <ul className="space-y-3 text-foreground/85">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Automated indoor irrigation system for multi-zone plant
                      watering
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Uses a single motorized distribution hub instead of
                      multiple solenoid valves
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Soil-moisture feedback enables adaptive, zone-specific
                      watering
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

      {/* Section 1: System Overview & Design Intent */}
      <section className="border-b border-border py-16">
        <div className={PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-2 font-mono text-sm text-primary">Section 1</p>
            <h2 className="mb-10 font-display text-2xl font-bold text-foreground">
              System Overview & Design Intent
            </h2>

            {/* bigger image + wider layout */}
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1.55fr]">
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 font-display font-semibold text-foreground">
                    Design Objective
                  </h3>
                  <p className={BODY}>
                    Conventional multi-zone irrigation systems rely on
                    individual solenoid valves per zone, increasing cost, wiring
                    complexity, and system footprint. These systems are poorly
                    suited for compact indoor growing environments where
                    scalability and adaptability are critical.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-display font-semibold text-foreground">
                    Core Idea / Solution
                  </h3>
                  <p className={BODY}>
                    Rather than using per-zone solenoid valves, this system
                    employs a single-actuator mechanical distribution hub that
                    sequentially routes water to multiple zones. This approach
                    reduces hardware count while maintaining precise,
                    zone-specific control through scheduling and sensor
                    feedback.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-display font-semibold text-foreground">
                    Outcome
                  </h3>
                  <p className={BODY}>
                    The final prototype successfully demonstrated automated,
                    sensor-driven irrigation across multiple zones using minimal
                    actuation hardware. The system reduced complexity and cost
                    while remaining modular and manufacturable using 3D printing
                    and off-the-shelf components.
                  </p>
                </div>
              </div>

              <div>
                <img
                  src={section1Image}
                  alt="Full system overview"
                  className="w-full rounded-2xl border border-border shadow-sm"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: High Level System Model */}
      <section className="border-b border-border bg-card/30 py-16">
        <div className={PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-2 font-mono text-sm text-primary">Section 2</p>
            <h2 className="mb-3 font-display text-2xl font-bold text-foreground">
              High Level System Model
            </h2>
            <h3 className="mb-8 text-lg text-foreground/60">
              Black-Box System Model
            </h3>

            {/* Boxes with arrows */}
            <div className="mb-4 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h4 className="mb-4 font-display font-semibold text-foreground">
                  Inputs
                </h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {[
                    "Water supply (pressure & flow)",
                    "Electrical power",
                    "Soil moisture sensor signals",
                    "Time / schedule (RTC or software timing)",
                    "User-defined settings (thresholds, schedules)",
                    "Environmental disturbances (plant uptake, evaporation)",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden items-center justify-center text-foreground/35 md:flex">
                <ArrowRight />
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h4 className="mb-4 font-display font-semibold text-foreground">
                  Processes
                </h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {[
                    "Measure soil moisture",
                    "Evaluate watering demand",
                    "Select irrigation zone & regulate water distribution",
                    "Calibrate and control actuator position",
                    "Enforce timing and safety constraints",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden items-center justify-center text-foreground/35 md:flex">
                <ArrowRight />
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h4 className="mb-4 font-display font-semibold text-foreground">
                  Outputs
                </h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {[
                    "Regulated water delivery to zones",
                    "System state feedback",
                    "Log and report system state",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* tight spacing under boxes */}
            <p className={`${BODY} max-w-6xl`}>
              This black-box model represents the garden irrigation system at a
              functional level. External inputs such as water supply, electrical
              power, time, and soil moisture measurements are processed by
              control logic that determines watering demand and routes flow
              through a compact distribution hub. The system outputs regulated
              water delivery to individual zones while maintaining target soil
              moisture levels and providing system state feedback.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Functions, Parameters, Constraints */}
      <section className="border-b border-border py-16">
        <div className={PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-2 font-mono text-sm text-primary">Section 3</p>
            <h2 className="mb-10 font-display text-2xl font-bold text-foreground">
              System Functions, Parameters and Constraints
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h4 className="mb-4 font-display font-semibold text-foreground">
                  Functions
                </h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {[
                    "Track time and scheduling state",
                    "Sense soil conditions",
                    "Evaluate watering demand",
                    "Select irrigation zone",
                    "Regulate water flow",
                    "Distribute water to selected zones",
                    "Report system state",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h4 className="mb-4 font-display font-semibold text-foreground">
                  Parameters
                </h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {[
                    "Soil moisture thresholds per zone",
                    "Watering duration per cycle",
                    "Flow rate per outlet",
                    "Number of zones",
                    "Scheduling intervals (time & frequency)",
                    "Actuator speed & positioning resolution",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h4 className="mb-4 font-display font-semibold text-foreground">
                  Constraints
                </h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {[
                    "Pump pressure & flow capacity",
                    "Electrical power availability",
                    "Indoor space constraints",
                    "Budget limitations",
                    "Water isolation from printed parts",
                    "Leak prevention & safety requirements",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: System Architecture (placeholder) */}
      <section className="border-b border-border bg-card/30 py-16">
        <div className={PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-2 font-mono text-sm text-primary">Section 4</p>
            <div className="mb-8 flex flex-wrap items-baseline gap-3">
              <h2 className="font-display text-2xl font-bold text-foreground">
                System Architecture
              </h2>
              <span className="text-sm text-foreground/60">
                (structural, not functional)
              </span>
            </div>

            <div className="rounded-2xl border border-border bg-card p-10">
              <h3 className="mb-6 text-center font-display font-semibold text-foreground">
                Overall System Architecture
              </h3>
              <p className={`${BODY_SOFT} mx-auto max-w-5xl text-center`}>
                Placeholder. Next step: export your architecture diagram as a
                PNG, import it, and drop it here full-width.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Final System Implementation */}
      <section className="border-b border-border py-16">
        <div className={PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-2 font-mono text-sm text-primary">Section 5</p>
            <h2 className="mb-10 font-display text-2xl font-bold text-foreground">
              Final System Implementation
            </h2>

            <div className="mb-12 grid items-start gap-12 lg:grid-cols-2">
              <div>
                <img
                  src={finalImage}
                  alt="Final system implementation"
                  className="w-full rounded-2xl border border-border"
                />
              </div>

              <div className="space-y-6">
                <p className={BODY}>
                  This project demonstrates mechanical system synthesis,
                  iterative prototyping, and cross-domain integration of
                  hardware, electronics, and embedded control.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="min-w-[120px] font-medium text-foreground">
                      Status:
                    </span>
                    <span className={BODY_SOFT}>
                      Functional prototype meeting initial design requirements.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="min-w-[120px] font-medium text-foreground">
                      Current focus:
                    </span>
                    <span className={BODY_SOFT}>
                      Compact mechanical distribution and single-actuator
                      control.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="min-w-[120px] font-medium text-foreground">
                      Next iteration:
                    </span>
                    <span className={BODY_SOFT}>
                      Fluid-isolated components to improve reliability.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="mb-4 font-display font-semibold text-foreground">
                Final Video
              </h3>
              <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-card">
                <video
                  src={finalVideo}
                  controls
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-display font-semibold text-foreground">
                Achieved Outcomes
              </h3>
              <ul className="mb-6 space-y-3 text-foreground/85">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Reduced actuation hardware from N solenoids to a single motor
                  via mechanical routing
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Enabled per-zone watering schedules with live soil-moisture
                  feedback
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Designed for fabrication using 3D printing and off-the-shelf
                  hardware only
                </li>
              </ul>
              <p className={BODY_SOFT}>
                This prototype validates the core system concept and informs the
                ongoing V3 redesign.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Distribution Hub Sub-System */}
      <section className="border-b border-border bg-card/30 py-16">
        <div className={PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-2 font-mono text-sm text-primary">Section 6</p>
            <h2 className="mb-10 font-display text-2xl font-bold text-foreground">
              Distribution Hub Sub-System
            </h2>

            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 font-display font-semibold text-foreground">
                    Purpose
                  </h3>
                  <p className={BODY}>
                    The distribution hub routes water from a single supply to
                    multiple plant zones using a single actuator, enabling
                    compact packaging, reduced cost, and simplified control
                    compared to multi-valve systems. It serves as the mechanical
                    interface between the pump and downstream irrigation lines
                    while enforcing controlled, sequential water delivery.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-display font-semibold text-foreground">
                    Design Requirements
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {[
                      "Route water to multiple outlets using one motor",
                      "Minimize footprint for indoor use",
                      "Prevent cross-flow between zones",
                      "Be manufacturable without CNC machining",
                      "Be compatible with low-cost hobby pumps",
                      "Isolate water from printed components",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-display font-semibold text-foreground">
                    Final Implementation (Current)
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {[
                      "One motor replaces multiple solenoids",
                      "Compact cylindrical form factor",
                      "Modular outlet count",
                      "Designed for printed parts + off-the-shelf hardware",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <figure className="space-y-2">
                  <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-card">
                    <video
                      src={explodeVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <figcaption className="text-sm text-foreground/65">
                    Exploded CAD view of the distribution hub assembly (stack-up
                    + sealing interfaces).
                  </figcaption>
                </figure>

                <figure className="space-y-2">
                  <img
                    src={sectionCutBlue}
                    alt="Distribution hub section cut"
                    className="w-full rounded-2xl border border-border"
                  />
                  <figcaption className="text-sm text-foreground/65">
                    Section cut highlighting the internal flow path (blue) and
                    routed outlet geometry.
                  </figcaption>
                </figure>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Distribution Hub Iterations */}
      <section className="border-b border-border py-16">
        <div className={PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-2 font-mono text-sm text-primary">Section 7</p>
            <h2 className="mb-10 font-display text-2xl font-bold text-foreground">
              Distribution Hub Sub-System — Iterations
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <img
                  src={v1SectionCut}
                  alt="Iteration 1 section cut"
                  className="mb-4 aspect-square w-full rounded-2xl border border-border bg-card object-contain"
                />
                <h3 className="mb-2 font-display font-semibold text-foreground">
                  Iteration 1 — Concept Validation
                </h3>
                <p className={`${BODY_SOFT} text-sm`}>
                  This initial iteration explored a simple mechanical routing
                  concept to validate the single-actuator approach for multi-zone
                  water distribution.
                </p>
              </div>

              <div>
                <img
                  src={v2Collapse}
                  alt="Iteration 2 collapsed view"
                  className="mb-4 aspect-square w-full rounded-2xl border border-border bg-card object-contain"
                />
                <h3 className="mb-2 font-display font-semibold text-foreground">
                  Iteration 2 — System Integration
                </h3>
                <p className={`${BODY_SOFT} text-sm`}>
                  The second iteration focused on integrating the distribution
                  hub with the full system, improving sealing and mechanical
                  robustness.
                </p>
              </div>

              <div>
                <div className="mb-4 flex aspect-square w-full items-center justify-center rounded-2xl border border-border bg-card p-6">
                  <div className="text-center">
                    <p className="mb-2 font-mono text-sm text-primary">PLANNED</p>
                    <p className="text-sm text-foreground/75">
                      V3 Dry Switching Architecture
                    </p>
                  </div>
                </div>
                <h3 className="mb-2 font-display font-semibold text-foreground">
                  Iteration 3 — Dry Switching Architecture (Planned)
                </h3>
                <p className={`${BODY_SOFT} text-sm`}>
                  The next iteration shifts away from rotating wetted interfaces
                  entirely by decoupling mechanical switching from fluid sealing.
                  The proposed architecture uses a dry mechanical switching
                  mechanism to sequentially connect a main supply hose to
                  individual zone hoses, eliminating direct water contact with
                  moving printed components. This approach is intended to reduce
                  leakage risk, improve long-term reliability, and relax
                  tolerance requirements by isolating fluid sealing to static
                  interfaces.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 8: Electrical & Sensing Subsystem */}
      <section className="border-b border-border bg-card/30 py-16">
        <div className={PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-2 font-mono text-sm text-primary">Section 8</p>
            <h2 className="mb-10 font-display text-2xl font-bold text-foreground">
              Electrical & Sensing Subsystem
            </h2>

            <div className="mb-12">
              <img
                src={wholeBreadboard}
                alt="Complete breadboard layout"
                className="mx-auto w-full max-w-6xl rounded-2xl border border-border brightness-90 contrast-95"
              />
            </div>

            <div className="space-y-12">
              {/* Stepper Motor Control */}
              <div>
                <h3 className="mb-4 font-display font-semibold text-foreground">
                  Stepper Motor Control (Open-Loop Actuator)
                </h3>
                <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="space-y-4">
                    <p className={BODY}>
                      The stepper motor is an open-loop actuator, meaning it
                      does not inherently know its absolute position. After
                      power loss or system reset, the controller cannot
                      determine which zone the distribution hub is aligned with.
                      This necessitates absolute position calibration at startup.
                    </p>
                    <p className={BODY}>
                      The stepper driver circuit uses an A4988 or DRV8825 driver
                      module, with microstepping configured for smooth motion
                      and reduced vibration during zone transitions.
                    </p>
                  </div>
                  <img
                    src={stepperCircuit}
                    alt="Stepper motor circuit"
                    className="w-full rounded-2xl border border-border"
                  />
                </div>
              </div>

              {/* Optical Calibration */}
              <div>
                <h3 className="mb-4 font-display font-semibold text-foreground">
                  Optical Interrupter Sensor — Homing & Re-Zeroing
                </h3>
                <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="space-y-4">
                    <p className={BODY}>
                      An optical interrupter sensor is used for homing and
                      absolute position calibration. A rotating calibration arm
                      (visible in the exploded CAD images) passes through the
                      sensor slot at a known reference position.
                    </p>
                    <p className={BODY}>
                      At startup, the motor rotates until the optical sensor
                      detects the calibration arm, establishing the zero
                      reference. This enables repeatable zone alignment after
                      power loss or system reboot.
                    </p>
                  </div>
                  <img
                    src={opticalCircuit}
                    alt="Optical sensor circuit"
                    className="w-full rounded-2xl border border-border"
                  />
                </div>
              </div>

              {/* RTC Simulation */}
              <div>
                <h3 className="mb-4 font-display font-semibold text-foreground">
                  RTC Simulation Circuit
                </h3>
                <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                  <p className={BODY}>
                    For development and testing, buttons simulate RTC (Real-Time
                    Clock) triggers, allowing manual testing of scheduled
                    watering cycles without waiting for actual time intervals.
                  </p>
                  <img
                    src={rtcCircuit}
                    alt="RTC simulation circuit"
                    className="w-full rounded-2xl border border-border"
                  />
                </div>
              </div>

              {/* Pump Control */}
              <div>
                <h3 className="mb-4 font-display font-semibold text-foreground">
                  DC Pump Control Circuit
                </h3>
                <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                  <p className={BODY}>
                    The DC pump is controlled via a logic-level MOSFET
                    (IRLZ44N), enabling the microcontroller to switch the
                    higher-current pump load. A flyback diode (1N5408) protects
                    against voltage spikes when the pump is switched off.
                  </p>
                  <img
                    src={pumpCircuit}
                    alt="Pump control circuit"
                    className="w-full rounded-2xl border border-border"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className={`${PAGE} text-center`}>
          <Link href="/projects">
            <button className="text-primary hover:underline">
              ← Back to All Projects
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
}
