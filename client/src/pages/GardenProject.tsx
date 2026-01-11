import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
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

export default function GardenProject() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Garden Irrigation System"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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

            <div className="flex items-center gap-4 mb-4">
              <span className="text-muted-foreground text-sm font-medium">
                Team Project
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-primary font-mono text-sm">
                May 2025 - June 2025
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 max-w-3xl">
              Automated Multi-Zone Garden Irrigation System
            </h1>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
              Iterative prototype — current focus on Version 3 reliability,
              sealing, and fluid isolation
            </p>

            <div className="flex flex-wrap gap-2">
              {["Mechanical", "Electrical", "Controls", "Software"].map(
                (tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-xs font-medium border rounded ${tagColors[tag]}`}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Project Overview
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                Automated indoor irrigation system for multi-zone plant watering
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                Uses a single motorized mechanical distribution hub in place of
                per-zone solenoid valves
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                Soil-moisture feedback enables adaptive, zone-specific watering
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Section 1: System Overview & Design Intent */}
      <section className="py-16 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-primary text-sm mb-2">Section 1</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-10">
              System Overview & Design Intent
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-3">
                    Design Objective
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Conventional multi-zone irrigation systems rely on dedicated
                    solenoid valves per zone, increasing cost, wiring
                    complexity, and system footprint. This approach scales
                    poorly for compact indoor growing environments where
                    adaptability and modularity are critical.
                  </p>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-foreground mb-3">
                    Core Idea / Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Instead of per-zone solenoid valves, this system uses a
                    single-actuator mechanical distribution hub that
                    sequentially routes water to multiple zones. Hardware count
                    is reduced while maintaining zone-specific control through
                    scheduling logic and soil-moisture feedback.
                  </p>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-foreground mb-3">
                    Outcome
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The prototype demonstrated automated, sensor-driven
                    irrigation across multiple zones using minimal actuation
                    hardware. The system reduced complexity and cost while
                    remaining modular and manufacturable using 3D-printed and
                    off-the-shelf components.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={section1Image}
                  alt="Full system overview"
                  className="rounded-lg border border-border w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: High Level System Model */}
      <section className="py-16 border-b border-border bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-primary text-sm mb-2">Section 2</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">
              High Level System Model
            </h2>
            <h3 className="text-lg text-muted-foreground mb-10">
              Black-Box System Model
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-display font-semibold text-foreground mb-4">
                  Inputs
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                    Water supply (pressure & flow)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                    Electrical power
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                    Soil moisture sensor signals
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                    Time / schedule (RTC or software-based timing)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                    User-defined settings (thresholds, schedules)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                    Environmental disturbances (plant uptake, evaporation)
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-display font-semibold text-foreground mb-4">
                  Processes
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                    Measure soil moisture
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                    Evaluate watering demand
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                    Select irrigation zone and regulate water routing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                    Calibrate and control actuator position
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                    Enforce timing and safety constraints
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-display font-semibold text-foreground mb-4">
                  Outputs
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                    Regulated water delivery to zones
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                    System state feedback
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                    Log and report system state
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              This black-box model represents the irrigation system at a
              functional level. External inputs—including water supply,
              electrical power, timing, and soil-moisture measurements—are
              processed by control logic that determines watering demand and
              routes flow through a compact distribution hub. The system outputs
              regulated water delivery to individual zones along with system
              state feedback.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Functions, Parameters, Constraints */}
      <section className="py-16 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-primary text-sm mb-2">Section 3</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-10">
              System Functions, Parameters and Constraints
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-display font-semibold text-foreground mb-4">
                  Functions
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mt-2 shrink-0" />
                    Track time and scheduling state
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mt-2 shrink-0" />
                    Sense soil conditions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mt-2 shrink-0" />
                    Evaluate watering demand
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mt-2 shrink-0" />
                    Select irrigation zone
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mt-2 shrink-0" />
                    Regulate flow rate during irrigation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mt-2 shrink-0" />
                    Distribute water to selected zones
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mt-2 shrink-0" />
                    Report system state
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-display font-semibold text-foreground mb-4">
                  Parameters
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-amber-400 rounded-full mt-2 shrink-0" />
                    Soil moisture thresholds per zone
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-amber-400 rounded-full mt-2 shrink-0" />
                    Watering duration per cycle
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-amber-400 rounded-full mt-2 shrink-0" />
                    Flow rate per outlet
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-amber-400 rounded-full mt-2 shrink-0" />
                    Number of zones
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-amber-400 rounded-full mt-2 shrink-0" />
                    Scheduling intervals (timing and frequency)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-amber-400 rounded-full mt-2 shrink-0" />
                    Actuator speed & positioning resolution
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-display font-semibold text-foreground mb-4">
                  Constraints
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-rose-400 rounded-full mt-2 shrink-0" />
                    Pump pressure & flow capacity
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-rose-400 rounded-full mt-2 shrink-0" />
                    Electrical power availability
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-rose-400 rounded-full mt-2 shrink-0" />
                    Indoor space constraints
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-rose-400 rounded-full mt-2 shrink-0" />
                    Budget limitations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-rose-400 rounded-full mt-2 shrink-0" />
                    Water isolation from printed structural components
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-rose-400 rounded-full mt-2 shrink-0" />
                    Leak prevention & safety requirements
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: System Architecture */}
      <section className="py-16 border-b border-border bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-primary text-sm mb-2">Section 4</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">
              System Architecture
            </h2>
            <p className="text-muted-foreground mb-10">
              Structural, not functional
            </p>

            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <h3 className="font-display font-semibold text-foreground text-center mb-8">
                Overall System Architecture
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-mono text-primary mb-2">
                    Subsystems
                  </h4>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="font-medium text-foreground min-w-[140px]">
                      Water path (physical):
                    </span>
                    <span className="text-muted-foreground">
                      reservoir → pump → distribution hub → zone hoses → plants
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-medium text-foreground min-w-[140px]">
                      Signal path (control):
                    </span>
                    <span className="text-muted-foreground">
                      sensors + clock → controller → actuators (pump and hub
                      motor)
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-medium text-foreground min-w-[140px]">
                      Power path:
                    </span>
                    <span className="text-muted-foreground">
                      battery/PSU → controller + drivers + actuators
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Final System Implementation */}
      <section className="py-16 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-primary text-sm mb-2">Section 5</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-10">
              Final System Implementation
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <img
                  src={finalImage}
                  alt="Final system implementation"
                  className="rounded-lg border border-border w-full"
                />
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  This project demonstrates mechanical system synthesis,
                  iterative prototyping, and cross-domain integration of
                  hardware, electronics, and embedded control.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-foreground min-w-[120px]">
                      Status:
                    </span>
                    <span className="text-muted-foreground">
                      Functional prototype meeting initial design requirements
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-foreground min-w-[120px]">
                      Current focus:
                    </span>
                    <span className="text-muted-foreground">
                      Compact mechanical distribution with single-actuator
                      control
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-medium text-foreground min-w-[120px]">
                      Next iteration:
                    </span>
                    <span className="text-muted-foreground">
                      Fluid-isolated components to improve reliability
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="font-display font-semibold text-foreground mb-4">
                Final Video
              </h3>
              <div className="aspect-video bg-card border border-border rounded-lg overflow-hidden">
                <video
                  src={finalVideo}
                  controls
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold text-foreground mb-4">
                Achieved Outcomes
              </h3>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  Reduced actuation hardware from N solenoids to a single motor
                  through mechanical routing
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  Enabled per-zone watering schedules with live soil-moisture
                  feedback
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  Designed for fabrication using 3D printing and off-the-shelf
                  hardware only
                </li>
              </ul>
              <p className="text-muted-foreground">
                This prototype validates the core system concept and informs the
                ongoing V3 redesign.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Distribution Hub Sub-System */}
      <section className="py-16 border-b border-border bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-primary text-sm mb-2">Section 6</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-10">
              Distribution Hub Sub-System
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-3">
                    Purpose
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The distribution hub routes water from a single supply to
                    multiple plant zones using a single actuator, enabling
                    compact packaging, reduced cost, and simplified control
                    relative to multi-valve architectures. It serves as the
                    mechanical interface between the pump and downstream
                    irrigation lines while enforcing controlled, sequential
                    water delivery.
                  </p>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-foreground mb-3">
                    Design Requirements
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                      Route water to multiple outlets using one motor
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                      Minimize footprint for indoor use
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                      Prevent cross-flow between zones
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                      Be manufacturable without CNC machining
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                      Be compatible with low-cost hobby pumps
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                      Isolate water from printed components
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-foreground mb-3">
                    Final Implementation (Current)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                      One motor replaces multiple solenoids
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                      Compact cylindrical form factor
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                      Modular outlet count
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                      Designed using printed parts and off-the-shelf hardware
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-square bg-card border border-border rounded-lg overflow-hidden">
                  <video
                    src={explodeVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
                <img
                  src={sectionCutBlue}
                  alt="Distribution hub section cut"
                  className="rounded-lg border border-border w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Distribution Hub Iterations */}
      <section className="py-16 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-primary text-sm mb-2">Section 7</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-10">
              Distribution Hub Sub-System — Iterations
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <img
                  src={v1SectionCut}
                  alt="Iteration 1 section cut"
                  className="rounded-lg border border-border w-full aspect-square object-contain bg-card mb-4"
                />
                <h3 className="font-display font-semibold text-foreground mb-2">
                  Iteration 1 — Concept Validation
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  This initial iteration explored a simple mechanical routing
                  concept to validate the single-actuator approach for multi-zone
                  water distribution.
                </p>
              </div>

              <div>
                <img
                  src={v2Collapse}
                  alt="Iteration 2 collapsed view"
                  className="rounded-lg border border-border w-full aspect-square object-contain bg-card mb-4"
                />
                <h3 className="font-display font-semibold text-foreground mb-2">
                  Iteration 2 — System Integration
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The second iteration focused on integrating the distribution
                  hub with the full system, improving sealing and mechanical
                  robustness.
                </p>
              </div>

              <div>
                <div className="rounded-lg border border-border w-full aspect-square bg-card mb-4 flex items-center justify-center p-6">
                  <div className="text-center">
                    <p className="font-mono text-primary text-sm mb-2">
                      PLANNED
                    </p>
                    <p className="text-muted-foreground text-sm">
                      V3 Dry Switching Architecture
                    </p>
                  </div>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  Iteration 3 — Dry Switching Architecture (Planned)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The next iteration eliminates rotating wetted interfaces by
                  decoupling mechanical switching from fluid sealing. A dry
                  mechanical switching mechanism sequentially connects a main
                  supply hose to individual zone lines, eliminating direct water
                  contact with moving printed components. This approach is
                  intended to reduce leakage risk, improve long-term reliability,
                  and relax sealing tolerances by isolating fluid interfaces to
                  static components.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 8: Electrical & Sensing Subsystem */}
      <section className="py-16 border-b border-border bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-primary text-sm mb-2">Section 8</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-10">
              Electrical & Sensing Subsystem
            </h2>

            <div className="mb-12">
              <img
                src={wholeBreadboard}
                alt="Complete breadboard layout"
                className="rounded-lg border border-border w-full max-w-4xl mx-auto"
              />
            </div>

            <div className="space-y-12">
              {/* Stepper Motor Control */}
              <div>
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Stepper Motor Control (Open-Loop Actuator)
                </h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The distribution hub is driven by a stepper motor operating
                      in open-loop control, meaning absolute position is not
                      inherently known after power loss or reset. The controller
                      cannot infer hub alignment without an external reference,
                      necessitating absolute position calibration at startup.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Motor drive is implemented using an A4988 or DRV8825 stepper
                      driver, with microstepping enabled to reduce vibration and
                      improve positional smoothness during zone transitions.
                    </p>
                  </div>
                  <img
                    src={stepperCircuit}
                    alt="Stepper motor circuit"
                    className="rounded-lg border border-border w-full"
                  />
                </div>
              </div>

              {/* Optical Calibration */}
              <div>
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Optical Interrupter Sensor — Homing & Re-Zeroing
                </h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      An optical interrupter sensor provides homing and absolute
                      position reference for the distribution hub. A rotating
                      calibration arm (visible in the exploded CAD images) passes
                      through the sensor at a known angular position.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      At startup, the motor advances until the sensor is
                      triggered, establishing a repeatable zero reference. This
                      ensures consistent zone alignment after power loss or
                      system reset.
                    </p>
                  </div>
                  <img
                    src={opticalCircuit}
                    alt="Optical sensor circuit"
                    className="rounded-lg border border-border w-full"
                  />
                </div>
              </div>

              {/* RTC Simulation */}
              <div>
                <h3 className="font-display font-semibold text-foreground mb-4">
                  RTC Simulation Circuit
                </h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <p className="text-muted-foreground leading-relaxed">
                    During development and testing, push-button inputs simulate
                    RTC (Real-Time Clock) trigger events. This allows scheduled
                    watering logic to be exercised deterministically without
                    waiting for real-time intervals, accelerating validation and
                    debugging.
                  </p>
                  <img
                    src={rtcCircuit}
                    alt="RTC simulation circuit"
                    className="rounded-lg border border-border w-full"
                  />
                </div>
              </div>

              {/* Pump Control */}
              <div>
                <h3 className="font-display font-semibold text-foreground mb-4">
                  DC Pump Control Circuit
                </h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <p className="text-muted-foreground leading-relaxed">
                    The DC pump is switched using a logic-level N-channel MOSFET
                    (IRLZ44N), allowing the microcontroller to control the
                    inductive pump load directly. A flyback diode (1N5408) is
                    placed across the pump terminals to suppress inductive
                    voltage spikes during turn-off and protect the switching
                    device.
                  </p>
                  <img
                    src={pumpCircuit}
                    alt="Pump control circuit"
                    className="rounded-lg border border-border w-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
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
