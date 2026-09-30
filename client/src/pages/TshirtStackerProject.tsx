import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { ProjectSidebar } from "@/components/ProjectSidebar";

const root = "/projects/tshirt-stacker/";
const img = (name: string) => `${root}${name}`;
const PAGE = "mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:pl-[230px] md:pr-6 lg:pl-64 lg:pr-10";
const BODY = "text-foreground/85 leading-relaxed";
const SOFT = "text-foreground/75 leading-relaxed";
const tagColors: Record<string, string> = {
  Mechanical: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  Electrical: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  Controls: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  Software: "bg-violet-500/10 text-violet-400 border-violet-500/30",
  Manufacturing: "bg-rose-500/10 text-rose-300 border-rose-400/30",
};
const sections = [
  ["section-1", "System Overview & Design Intent"],
  ["section-2", "Requirements & Constraints"],
  ["section-3", "How It Works"],
  ["section-4", "System Architecture"],
  ["section-5", "Frame & Stacking Platform Subsystem"],
  ["section-6", "Shuttling Conveyor Subsystem"],
  ["section-7", "Motion & Timing Analysis"],
  ["section-8", "Electronics & Controls"],
  ["section-9", "Integration, Risks & Validation"],
  ["section-10", "Status & Timeline"],
  ["section-11", "Team & Lessons Learned"],
].map(([id, title], i) => ({ id, number: `Section ${i + 1}`, title }));

function BulletList({ items, className = "" }: { items: string[]; className?: string }) {
  return <ul className={`space-y-2 text-foreground/75 text-sm ${className}`}>
    {items.map((item) => <li key={item} className="flex items-start gap-2"><span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />{item}</li>)}
  </ul>;
}

function Panel({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return <div className={`bg-card border border-border rounded-xl p-6 ${className}`}><h3 className="font-display font-semibold text-foreground mb-4">{title}</h3>{children}</div>;
}

function DataTable({ headers, rows }: { headers: string[]; rows: (string | ReactNode)[][] }) {
  return <div className="overflow-x-auto rounded-xl border border-border bg-card">
    <table className="w-full min-w-[620px] border-collapse text-left text-sm">
      <thead className="bg-background/60 text-foreground/60"><tr>{headers.map((h) => <th key={h} className="border-b border-border px-4 py-3 font-mono text-xs font-medium uppercase tracking-wider">{h}</th>)}</tr></thead>
      <tbody>{rows.map((row, i) => <tr key={i} className="border-b border-border/70 last:border-0">{row.map((cell, j) => <td key={j} className={`px-4 py-3 align-top text-foreground/80 ${String(cell).startsWith("**") ? "font-semibold text-foreground" : ""}`}>{typeof cell === "string" && cell.startsWith("**") ? cell.slice(2) : cell}</td>)}</tr>)}</tbody>
    </table>
  </div>;
}

function Figure({ file, caption, alt, className = "" }: { file: string; caption: string; alt: string; className?: string }) {
  return <figure className={`overflow-hidden rounded-xl border border-border bg-white shadow-lg ${className}`}>
    <a href={img(file)} target="_blank" rel="noreferrer" aria-label={`Open ${caption} at full size`} className="block cursor-zoom-in">
      <img src={img(file)} alt={alt} loading="lazy" decoding="async" className="block h-auto w-full object-contain" />
    </a>
    <figcaption className="border-t border-slate-200 bg-white px-4 py-3 text-center text-sm text-slate-700">{caption}</figcaption>
  </figure>;
}

function Section({ id, n, title, children, tinted = false }: { id: string; n: number; title: string; children: ReactNode; tinted?: boolean }) {
  return <section id={id} className={`scroll-mt-20 py-16 border-b border-border ${tinted ? "bg-card/30" : ""}`}>
    <div className={PAGE}><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <p className="font-mono text-primary text-sm mb-2">Section {n}</p>
      <h2 className="font-display text-2xl font-bold text-foreground mb-9">{title}</h2>
      {children}
    </motion.div></div>
  </section>;
}

function StatusRows({ rows }: { rows: [string, string][] }) {
  return <div className="space-y-3">{rows.map(([label, text]) => <div key={label} className="flex flex-col gap-1 sm:flex-row sm:gap-3"><span className="font-medium text-foreground sm:min-w-[140px]">{label}:</span><span className={SOFT}>{text}</span></div>)}</div>;
}

export default function TshirtStackerProject() {
  const tags = ["Mechanical", "Electrical", "Controls", "Software", "Manufacturing"];
  return <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
    <Navbar />
    <ProjectSidebar sections={sections} initiallyOpen={typeof window !== "undefined" && window.innerWidth >= 768} collapseOnMobileSelect />
    <div className="h-16" />

    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-background">
        <img src={img("hero-system-iso.png")} alt="" className="h-full w-full object-cover opacity-40 brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className={`${PAGE} pt-16 pb-10`}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/projects" className="mb-6 flex items-center gap-2 text-foreground/70 transition-colors hover:text-primary" data-testid="button-back-projects"><ArrowLeft size={18} />Back to Projects</Link>
            <div className="mb-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="text-sm font-medium text-foreground/70">Team Project</span><span className="text-foreground/40">•</span>
              <span className="text-sm font-medium text-foreground/70">Senior Capstone</span><span className="text-foreground/40">•</span>
              <span className="font-mono text-sm text-primary">January 2026 - December 2026</span>
            </div>
            <h1 className="mb-3 max-w-3xl font-display text-4xl font-bold text-foreground md:text-5xl">Automated T-Shirt Stacker</h1>
            <p className={`${SOFT} mb-5 max-w-2xl text-lg`}>Senior capstone for a screen-printing shop. A shuttle conveyor catches garments off the dryer and lays them onto a self-lowering stack. Currently in fabrication.</p>
            <div className="flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className={`rounded border px-3 py-1 text-xs font-medium ${tagColors[tag]}`}>{tag}</span>)}</div>
            <div className="mt-8 max-w-3xl rounded-xl border border-border bg-background/45 p-6 backdrop-blur-md">
              <h2 className="mb-4 font-display text-xl font-bold text-foreground">Project Overview</h2>
              <BulletList className="space-y-3 text-foreground/80" items={[
                "Built for Headwaters Studio, a screen-printing shop in Red Lodge, MT",
                "Catches each garment leaving the dryer and builds a neat, stable stack with minimal operator involvement",
                "Targets up to 200 garments/hour, youth S to adult 2XL, shirts and sweatshirts",
                "Team of four: Kordian Cebulla, Audrey Ingraham, Katelyn Rutten, Nathanael Wilson. Advisor: Adam Michalson",
              ]} />
            </div>
          </motion.div>
        </div><div className="h-8" />
      </div>
    </section>

    <Section id="section-1" n={1} title="System Overview & Design Intent">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1.4fr]">
        <div className="space-y-7">
          <div><h3 className="mb-3 font-display font-semibold">The Problem</h3><p className={BODY}>Freshly printed and dried garments drop off the end of the dryer conveyor into a basket. An operator has to keep pulling them out and stacking them by hand. That caps throughput, produces inconsistent stacks, and ties up a person at the dryer exit.</p></div>
          <div><h3 className="mb-3 font-display font-semibold">Core Idea / Solution</h3><p className={BODY}>A shuttle conveyor slides under the dryer exit to catch each garment, carries it over the stack, then pulls back while its belt runs forward. Because the shuttle moves backward at the same speed its belt moves forward, the garment is laid flat onto the stack with no relative motion, instead of being dropped. A lift platform steps down as the stack grows so the placement height stays constant, and a stack light and alarm call the operator when the stack is full.</p></div>
          <div><h3 className="mb-3 font-display font-semibold">Outcome (so far)</h3><p className={BODY}>The design passed its Critical Design Review in spring 2026 and is now being fabricated. The prototype rolls out in November 2026 and will be tested against the requirements before handoff to the sponsor at the December Design Fair.</p></div>
        </div>
        <Figure file="system-iso-rear.png" alt="Rear isometric CAD view of the automated T-shirt stacking machine" caption="System assembly, rear isometric view" />
      </div>
    </Section>

    <Section id="section-2" n={2} title="Requirements & Constraints" tinted>
      <div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[["200", "garments per hour (max)"], ["S → 2XL", "youth to adult, shirts & sweatshirts"], ["24 in", "maximum stack height"], ["$9,000", "total system budget"]].map(([value, label]) => <div key={label} className="rounded-xl border border-border bg-card p-5"><div className="font-display text-2xl font-bold text-primary sm:text-3xl">{value}</div><p className="mt-2 text-xs leading-relaxed text-foreground/60 sm:text-sm">{label}</p></div>)}
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <Panel title="Functional Requirements"><BulletList items={["Transfer garments from the dryer conveyor into organized stacks", "Throughput of up to 200 garments/hour", "Detect and signal a completed stack", "Fault detection with audible and visual alarms"]} /></Panel>
        <Panel title="Performance Targets"><BulletList items={["Stack alignment ±1 in, repeatability ±0.5 in", "Stable stacks: no tipping or misalignment", "Near-continuous operation", "Handle variation in garment size, weight, fabric, and feed rate"]} /></Panel>
        <Panel title="Constraints"><BulletList items={["Footprint of about 2.4 m × 1.2 m", "$9,000 total budget", "Integrates with the existing dryer, with no permanent modification", "Semi-autonomous operation with a simple UI", "OSHA-compliant, reliable under continuous use, easy to maintain"]} /></Panel>
      </div>
    </Section>

    <Section id="section-3" n={3} title="How It Works">
      <div className="mb-9 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-stretch">
        {[
          ["01", "Detect", "An infrared break-beam sees a garment leaving the dryer belt."],
          ["02", "Catch", "The shuttle conveyor translates under the dryer exit to receive the garment, then carries it forward over the stack."],
          ["03", "Place", "The shuttle retracts while its belt conveys forward, laying the garment flat instead of dropping it."],
          ["04", "Lower & Alert", "A second break-beam monitors stack height. The platform steps down as the stack grows, and a stack light and alarm signal when it's full."],
        ].map(([num, title, text], i) => <div key={num} className="contents">
          <div className="rounded-xl border border-border bg-card p-5"><span className="font-mono text-sm text-primary">{num} / STEP</span><h3 className="my-2 font-display font-semibold">{title}</h3><p className="text-sm leading-relaxed text-foreground/70">{text}</p></div>
          {i < 3 && <div className="hidden items-center justify-center text-primary/60 md:flex"><ArrowRight size={20} /></div>}
        </div>)}
      </div>
      <Figure file="placement-sequence.png" alt="Sketch of shuttle travel and garment placement sequence" caption="Placement sequence sketch: the shuttle receives the garment, travels over the stack, then retracts while conveying forward to lay it flat." />
    </Section>

    <Section id="section-4" n={4} title="System Architecture" tinted>
      <h3 className="mb-6 text-lg text-foreground/60">Controller-centric block diagram</h3>
      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
        <Panel title="Inputs / Sensors"><BulletList items={["Garment detection: IR break-beam", "Stack height: IR break-beam (closed-loop height control)", "Shuttle home / position: Hall-effect sensors", "Platform down position: Hall-effect + limit switch", "Operator panel: LCD, rotary/push encoder, Cycle Start, Pause, Home, Reset", "E-stop and overload / fault inputs"]} /></Panel>
        <div className="hidden items-center justify-center text-foreground/35 md:flex"><ArrowRight /></div>
        <Panel title="Controller: Arduino Mega"><BulletList items={["Sequence control", "Motion control (shuttle and lift)", "Stack-height logic", "Fault detection", "Throughput monitoring", "Menu selection, manual jog, and auto mode"]} /></Panel>
        <div className="hidden items-center justify-center text-foreground/35 md:flex"><ArrowRight /></div>
        <Panel title="Outputs / Actuators"><BulletList items={["Shuttle belt drive: NEMA 23 stepper", "Shuttle translation: NEMA 23 stepper (forward / back)", "Platform lift: NEMA 34 stepper with brake", "Garment clamp: 2 servos", "Stack light and audio alarm"]} /></Panel>
      </div>
      <div className="mt-5 rounded-lg border border-primary/20 bg-primary/5 px-5 py-4 text-sm text-foreground/75"><span className="font-semibold text-primary">Power & Safety: </span>120 VAC in, stepped down to 36 / 24 / 5 V. A safety relay cuts motor power on E-stop, which is a hardware stop, not just a software command.</div>
    </Section>

    <Section id="section-5" n={5} title="Frame & Stacking Platform Subsystem">
      <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <div><h3 className="mb-2 font-display font-semibold">Purpose</h3><p className={BODY}>Hold the stack at a constant placement height by lowering the platform as garments are added, and give the machine a rigid, stable base that wraps around the dryer's conveyor legs without permanent installation.</p></div>
          <div><h3 className="mb-2 font-display font-semibold">Design</h3><BulletList items={["Frame: 3030 aluminum extrusion, chosen for weight and cost", "Platform: 1012 cold-rolled steel tubing, mounted to 3060 extrusion masts for a higher moment of inertia", "Guidance: HGR20 linear rails and bearing blocks", "Drive: belt drive powered by a NEMA 34 stepper with an 80 N·m holding brake for power loss"]} /></div>
        </div>
        <div className="space-y-5"><Figure file="frame.png" alt="CAD render of 3030 aluminum extrusion machine frame" caption="3030 aluminum extrusion frame" /><Figure file="lift-platform.png" alt="CAD render of lift platform carriage on its masts" caption="Lift platform carriage on 3060 masts" /></div>
      </div>
      <div className="mt-9 space-y-3"><h3 className="font-display font-semibold">Analysis Results</h3><DataTable headers={["Check", "Method / Load case", "Result"]} rows={[
        ["Platform deflection", "Euler–Bernoulli beam, 75 lb dead weight + 150 lb garments", "< 0.1 in"],
        ["Frame deflection", "1,000 lb distributed load", "< 0.12 in"],
        ["Linear bearing capacity", "HGR20 blocks", "6,240 lb static / 3,990 lb dynamic; no risk of separation or lock-up"],
        ["Fasteners", "M6 class 8.8 bolts; steel-into-aluminum bearing", "No failure or hole elongation"],
        ["Machine “walking”", "400 lb machine, 50 lb shuttle at 271.9 in/s² (27.9 in/s peak in 0.1 s)", "Stays put"],
        ["Lift speed", "Full-stack lift target", "< 10 s, motor within safe RPM limits"],
        ["Shaft torsion (E-stop)", "Brake engagement at power loss; 4340 steel shaft", "Max shear stress well below yield"],
        ["Belts, bushings, keys", "Worst case: power failure + emergency brake", "Adequate factor of safety"],
      ]} /></div>
      <div className="mt-8 grid gap-5 md:grid-cols-3"><Figure file="lift-mast.png" alt="Lift mast and carriage CAD render" caption="Lift mast and carriage" /><Figure file="lift-drive.png" alt="NEMA 34 lift drive and belt transmission" caption="NEMA 34 lift drive with brake and belt transmission" /><Figure file="lift-speed-curve.png" alt="Lift motor speed versus torque graph" caption="Lift motor speed vs. torque check" /></div>
      <div className="mt-9"><h3 className="mb-2 font-display font-semibold">Alternatives Considered</h3><p className={SOFT}>A scissor lift and a lead screw were both rejected. Scissor lifts have a nonlinear force profile, and their pivots introduce backlash: if the first tier tilts even slightly, the platform can wobble more than an inch. A lead screw is slower than a belt drive for the required lift speed.</p></div>
    </Section>

    <Section id="section-6" n={6} title="Shuttling Conveyor Subsystem" tinted>
      <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <div><h3 className="mb-2 font-display font-semibold">Purpose</h3><p className={BODY}>Receive each garment as it rolls off the dryer, carry it over the stack, and deposit it flat. Translating and conveying at the same time is what makes controlled placement possible.</p></div>
          <div><h3 className="mb-2 font-display font-semibold">How it works</h3><p className={BODY}>The shuttle translates forward from under the dryer conveyor as a garment rolls off, continues forward until it's over the stacking platform, then retracts toward the dryer while its belt conveys forward, depositing the garment on the stack.</p></div>
          <div><h3 className="mb-2 font-display font-semibold">Design</h3><BulletList items={["Two independent drives: belt conveying (NEMA 23) and shuttle translation (NEMA 23, belt and pulley)", "Rollers: crowning, live vs. dead axle, and buy vs. make were each evaluated", "Belt tensioning built into the roller mounts", "Garment clamp: two servos sized for an assumed 1.25 lb upward resistance, with a high factor of safety so thick garments won't stall or overheat them", "Motor sizing: load inertia, acceleration torque, and required speed were calculated for each drive, then checked against the motor torque curves"]} /></div>
        </div>
        <Figure file="shuttle-conveyor.png" alt="CAD assembly of shuttling conveyor" caption="Shuttling conveyor assembly" />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2"><Figure file="shuttle-assembly.png" alt="Shuttle assembly on translation rails" caption="Shuttle on its translation rails" /><Figure file="belt-drive.png" alt="Conveyor belt drive CAD detail" caption="Conveyor belt drive" /><Figure file="roller.png" alt="Conveyor roller CAD detail" caption="Conveyor roller" /><Figure file="belt-tensioner.png" alt="Belt tensioning mount CAD detail" caption="Belt tensioning mount" /></div>
    </Section>

    <Section id="section-7" n={7} title="Motion & Timing Analysis">
      <h3 className="mb-7 text-lg text-foreground/60">Built from a custom cycle-timing and motor-sizing calculator</h3>
      <div className="mb-7"><h3 className="mb-2 font-display font-semibold">Cycle Budget</h3><p className={BODY}>200 garments/hour leaves an <strong className="text-foreground">18-second cycle</strong> per garment. Each cycle was split into five motion phases in a spreadsheet calculator driven by the real geometry (shirt length, shuttle length, sensor offsets, clearances) and the dryer belt speed.</p></div>
      <p className="mb-2 text-xs text-foreground/60 sm:hidden">Scroll to view all phases →</p>
      <div className="mb-6 overflow-x-auto rounded-xl border border-border">
        <div className="flex min-h-28 min-w-[620px] bg-card">
          {[["Feed", "10.83 s", 10.83], ["Pull", "3.00 s", 3], ["Readjust", "1.50 s", 1.5], ["Deposit", "2.00 s", 2], ["Reset", "~0 s", 0.35], ["Buffer", "0.67 s", 0.67]].map(([name, time, width], i) => <div key={String(name)} style={{ flexGrow: Number(width), flexBasis: 0 }} className={`flex min-w-[72px] flex-col justify-center border-r border-border p-3 last:border-0 ${i === 5 ? "bg-primary/10" : ""}`}><span className="font-mono text-[10px] text-primary">0{i + 1}</span><span className="mt-1 text-xs font-semibold text-foreground sm:text-sm">{name}</span><span className="mt-1 text-[11px] text-foreground/60">{time}</span></div>)}
        </div>
      </div>
      <div className="mb-8"><DataTable headers={["Phase", "What happens", "Time"]} rows={[
        ["1 · Feed", "Garment travels from the dryer's IR sensor to the hand-off position; set by the dryer belt speed (~2 in/s over 17 in)", "10.83 s"],
        ["2 · Pull", "Shuttle pulls the garment off the dryer over 39 in: accelerate at 20 in/s² to a 27.2 in/s peak, decelerate, then creep at 5 in/s into the limit switch", "3.00 s"],
        ["3 · Readjust", "Shuttle belt runs ~5 in to bring the hanging garment flat onto the shuttle", "1.50 s"],
        ["4 · Deposit", "Belt conveys forward while the shuttle retracts; after a 0.4 s lead-in the two speeds are matched at 22.5 in/s so the garment is laid down with no relative motion", "2.00 s"],
        ["5 · Reset", "Shuttle is already at its idle position after Phase 4", "~0 s"],
        ["Buffer", "Margin left in the 18 s cycle for tuning after the build", "0.67 s"],
      ]} /></div>
      <div className="mb-10"><Figure file="cycle-timing-calculator.png" alt="Spreadsheet-based cycle timing calculator with geometry and motion profile inputs" caption="Cycle-timing calculator: global geometry inputs, phase durations, and the Phase 2 shuttle velocity and acceleration profiles." /></div>
      <div className="mb-5"><h3 className="mb-2 font-display font-semibold">Motor Sizing: Shuttle Translation</h3><p className={`${BODY} mb-5`}>The same calculator converts each phase's peak acceleration and speed into required motor torque and RPM, including shuttle inertia (50 lb), a lumped friction allowance, 90% drive efficiency, and a 1.5 safety factor. Four placement strategies were compared:</p><DataTable headers={["Strategy", "Accel (in/s²)", "Peak speed (in/s)", "Required torque", "Motor speed"]} rows={[
        ["No-Flip (Hang)", "20", "27.2", "190 oz-in", "260 rpm"], ["No-Flip (Clamp)", "20", "27.2", "190 oz-in", "260 rpm"], ["Flip (Clamp)", "30", "34.7", "246 oz-in", "331 rpm"], ["Flip (Hang)", "50", "45.3", "356 oz-in", "433 rpm"],
      ]} /></div>
      <p className={`${SOFT} mb-8`}>Each operating point was plotted on the pull-out torque curve of the selected NEMA 23 stepper (Oriental Motor PKP268D42 at 24 VDC, 4.2 A/phase). The No-Flip cases sit well inside the curve. Flip (Hang), the most aggressive profile, lands at the edge of the motor's pull-out limit, which is what makes the calculator useful: it shows which placement strategies the chosen motor can actually support before anything is built.</p>
      <Figure file="shuttle-motor-sizing.png" alt="Shuttle motor torque and speed requirements plotted against a NEMA 23 pull-out torque curve" caption="Torque and speed requirements for four placement strategies, plotted against the NEMA 23 pull-out torque curve." />
      <div className="mt-6 grid gap-5 md:grid-cols-2"><Figure file="deposit-phase-calculator.png" alt="Phase 4 deposit speed-matched velocity profiles" caption="Phase 4 deposit: speed-matched belt and translation velocity profiles" /><Figure file="shuttle-velocity-profile.png" alt="Comparison of shuttle velocity profiles" caption="Shuttle velocity profile comparison" /></div>
    </Section>

    <Section id="section-8" n={8} title="Electronics & Controls" tinted>
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6 rounded-xl border border-border bg-background/30 p-6">
          <div><h3 className="mb-2 font-display font-semibold">Purpose</h3><p className={BODY}>Run the full catch → place → lower sequence autonomously while keeping high-power motion hardware electrically isolated and safe to service.</p></div>
          <div><h3 className="mb-2 font-display font-semibold">Final Implementation</h3><BulletList items={["Controller: Arduino Mega, chosen for its I/O count across sensors, drivers, UI, and alarms", "Motors & drivers: DM542 / DM860T stepper drivers; NEMA 23 steppers for the shuttle, a braked NEMA 34 with planetary gearbox for the lift", "I/O: IRLZ44N logic-level MOSFETs and PC817 optocouplers for isolated switching", "Sensors: IR break-beams (garment detection, stack height), Hall-effect sensors (homing), limit switch, DS18B20 temperature sensors", "Operator interface: LCD, rotary/push encoder, Cycle Start, Pause, Home, Reset, E-stop", "Safety: hardware E-stop through a safety relay and contactor that cuts motor power"]} /></div>
        </div>
        <Figure file="system-schematic.png" alt="Complete electrical system schematic showing power, safety, UI, drivers, sensors, controller and alarms" caption="Complete system circuit: power conversion, safety relay and E-stop, UI, motors and drivers, sensors, controller, and alarms" />
      </div>
      <div className="mt-9"><h3 className="mb-3 font-display font-semibold">Current Budget</h3><DataTable headers={["Load", "Basis", "Equivalent current at 36 V"]} rows={[
        ["Stepper drivers", "4.2 + 4.2 + 6 A at 36 V max setting", "14.4 A"], ["Light beacon", "24 V × 2 A", "1.5 A"], ["E-brake", "24 V × 2 A", "1.5 A"], ["Servo", "6 V × 1 A", "0.2 A"], ["Smaller electronics", "est. 10–30 W", "0.9 A"], ["**Theoretical max", "", "**18.5 A"], ["Realistic high draw", "", "12.54 A (vs. 16.6 A supply rating)"],
      ]} /></div>
      <div className="my-10"><h3 className="mb-3 font-display font-semibold">Enclosures & Wire Management</h3><p className={`${BODY} mb-6`}>Electronics are split into three main enclosures: power supply and switch, main electronics and controller, and user interface. Around the machine, 3D-printed junction boxes hold terminal blocks at the major wiring points where cable runs branch off to motors and sensors. Wiring uses an Altech terminal block system, Igus Chainflex and SOOW cable in drag chain and sleeving, and PG-series cable glands, all documented in a wire schedule so the machine can be built and serviced by someone other than the designer.</p>
        <div className="grid gap-5 md:grid-cols-3"><Figure file="enclosure-power.png" alt="Power supply and switch enclosure CAD render" caption="Power supply & switch enclosure" /><Figure file="enclosure-main-controller.png" alt="Main electronics and controller enclosure CAD render" caption="Main electronics & controller enclosure" /><Figure file="enclosure-user-interface.png" alt="User interface enclosure CAD render" caption="User interface enclosure" /></div>
        <h4 className="mb-5 mt-9 font-display font-semibold text-foreground">3D-printed junction boxes</h4>
        <div className="grid gap-5 md:grid-cols-3"><Figure file="junction-box-frame.png" alt="Terminal-block junction box mounted on frame" caption="Terminal-block junction box on the frame" /><Figure file="junction-box-shuttle.png" alt="Terminal-block junction box on shuttle" caption="Junction box on the shuttle" /><Figure file="junction-box-lift.png" alt="Terminal-block junction box at lift mast" caption="Junction box at the lift mast" /></div>
      </div>
      <Panel title="My Role"><p className={BODY}>I owned the electronics and controls subsystem: component selection, the system schematic, the current budget, wiring design, the wire schedule, and BOM coordination across about 23 vendors. I also designed every 3D-printed part on the machine, including the enclosures, the terminal-block junction boxes, and the sensor mounts.</p></Panel>
    </Section>

    <Section id="section-9" n={9} title="Integration, Risks & Validation">
      <div className="mb-8 grid gap-5 md:grid-cols-2">
        <Panel title="Physical Integration"><BulletList items={["Frame wraps around the dryer conveyor legs to prevent movement, with no permanent installation", "Shuttle aligned laterally with the dryer belt, with enough clearance under the dryer for a smooth transfer"]} /></Panel>
        <Panel title="Functional Integration"><BulletList items={["Garment detection triggers the translate + convey sequence", "Shuttle speed initially matched to the dryer, with tuning to improve transfer", "Break-beam sensing gives closed-loop control of stack height"]} /></Panel>
      </div>
      <div className="mb-8"><h3 className="mb-4 font-display font-semibold">Key Risks & Mitigation (FMEA)</h3><DataTable headers={["Failure mode", "RPN", "Mitigation"]} rows={[
        ["Electrical failure", "216", "Environmental protection, correct component ratings, fusing, wire management"], ["Debris / lint interference", "162", "Shields on guides, planned cleaning intervals"], ["Shuttle collision / height error", "144", "Break-beam sensing with clear line of sight, control-logic safeguards"], ["Garment misplacement / falling", "100", "Secondary sensing, controlled conveyor motion"], ["Structural / fastener failure", "100–120", "FEA-informed design, locking fasteners, weld inspection"],
      ]} /></div>
      <h3 className="mb-4 font-display font-semibold">Validation Plan</h3>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[
        ["Functional", "Full sequence, from detection to transfer to placement to stack adjustment"],
        ["Performance", "Throughput against the 200/hr target; tune shuttle speed relative to the dryer"],
        ["Stack Quality", "Alignment and stability; failure = collapse or tipping"],
        ["Reliability", "Continuous running in lint and dust; watch for jams, sensor faults, and drift"],
      ].map(([title, text]) => <Panel key={title} title={title}><p className="text-sm leading-relaxed text-foreground/70">{text}</p></Panel>)}</div>
      <p className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground/80"><span className="font-semibold text-primary">Success criteria: </span>meets the 200 garments/hour target, stable stacks with no toppling, and minimal operator intervention.</p>
    </Section>

    <Section id="section-10" n={10} title="Status & Timeline" tinted>
      <div className="mb-9 rounded-xl border border-border bg-card p-6"><StatusRows rows={[
        ["Status", "Mid-fabrication (as of late September 2026)"],
        ["Current focus", "Frame and lift assembly, shuttle machining, electronics enclosures and wiring"],
        ["Next", "Prototype rollout in November, testing against requirements, then handoff at the December Design Fair"],
      ]} /></div>
      <h3 className="mb-5 font-display font-semibold">Timeline</h3>
      <div className="mb-9 grid gap-3 md:grid-cols-5">
        {[
          ["Spring 2026", "Requirements, preliminary and critical design reviews, parts ordered", "complete"],
          ["Sep–Oct 2026", "Fabrication and assembly", "current"],
          ["Nov 3–5", "Prototype rollout", "upcoming"],
          ["November", "Testing against requirements", "upcoming"],
          ["Dec 10", "Design Fair and sponsor handoff", "upcoming"],
        ].map(([date, task, state], i) => <div key={date} className={`relative rounded-xl border p-4 ${state === "current" ? "border-primary/50 bg-primary/10" : "border-border bg-card"}`}>
          <div className={`mb-3 flex h-7 w-7 items-center justify-center rounded-full font-mono text-xs ${state === "current" ? "bg-primary text-primary-foreground" : state === "complete" ? "bg-primary/15 text-primary" : "bg-background text-foreground/50"}`}>{state === "complete" ? "✓" : `0${i + 1}`}</div>
          <p className={`font-mono text-xs ${state === "current" ? "text-primary" : "text-foreground/55"}`}>{date}</p><p className="mt-2 text-sm leading-relaxed text-foreground/80">{task}</p>{state === "current" && <p className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-primary">Current</p>}
        </div>)}
      </div>
      <h3 className="mb-4 font-display font-semibold">Subsystem Status</h3>
      <DataTable headers={["Subsystem", "Status"]} rows={[
        ["Frame & lift platform", "Aluminum extrusion cuts complete; assembly underway"],
        ["Shuttle conveyor", "Material ordered, machining next"],
        ["Electronics & enclosures", "Enclosures and mounts printing, wiring instructions in progress"],
        ["Control software", "Begins after electrical assembly"],
      ]} />
    </Section>

    <Section id="section-11" n={11} title="Team & Lessons Learned">
      <div className="grid gap-5 md:grid-cols-2">
        <Panel title="Working as a Team"><BulletList items={[
          "Project management: Gantt chart, rotating team leader, and weekly memos to the sponsor and advisor",
          "Working with a client: The sponsor is off campus, so the shop's needs were written into Level 1 requirements signed by the sponsor, the advisor, and all four team members",
          "Teamwork: Ownership split by subsystem, with deliberate effort on the mechanical–electrical interfaces",
          "Coordination: Parts sourced from about 23 vendors through the advisor, tracked in one shared BOM",
        ]} /></Panel>
        <Panel title="Lessons Learned"><BulletList items={[
          "Record and share design decisions more often, so everyone builds from the same design",
          "One organized file structure with revision control for CAD, drawings, and analysis",
          "Set an agenda for every meeting, with clear goals rather than open-ended discussion",
          "Ask for help early; a quick question beats days spent stuck",
        ]} /></Panel>
      </div>
      <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-foreground/55">Thanks to Paul Otsu and Headwaters Studio for sponsoring the project, and to our advisor, Adam Michalson.</p>
    </Section>

    <footer className="border-t border-border py-10"><div className={`${PAGE} text-center`}><Link href="/projects" className="text-primary hover:underline">← Back to All Projects</Link></div></footer>
  </div>;
}