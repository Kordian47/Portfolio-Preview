export interface Artifact {
  id: string;
  title: string;
  shortDescription: string;
  images: string[];
  description: string;
  tools: string[];
  takeaway: string;
}

export const artifacts: Artifact[] = [
  {
    id: "drill-press-fence",
    title: "Drill Press Alignment Fence",
    shortDescription: "Quick-mount fence jig for repeatable hole placement on a benchtop drill press.",
    images: [],
    description:
      "Designed and fabricated a bolt-on aluminum fence for a benchtop drill press to enable repeatable hole spacing without manual layout. The fence clamps to the drill press table via T-slot nuts and features an adjustable stop block with a fine-thread adjuster for sub-millimeter repeatability. Reduced setup time for batch drilling operations from ~5 minutes per part to under 30 seconds.",
    tools: ["Manual Mill", "Drill Press", "Calipers", "6061 Aluminum"],
    takeaway:
      "Simple fixturing dramatically improves throughput and consistency — even on low-cost machines.",
  },
  {
    id: "filament-spool-holder",
    title: "Filament Dry-Box Spool Holder",
    shortDescription: "Sealed spool holder with desiccant bay and PTFE feed-through for 3D printing.",
    images: [],
    description:
      "Built a sealed, airtight filament dry-box from an off-the-shelf food container. Designed and 3D-printed internal roller bearings, a PTFE tube feed-through fitting, and a snap-in desiccant tray. The box maintains <15 % RH and allows continuous printing without removing the spool. Tested with PLA, PETG, and Nylon over 200+ hours of print time with no moisture-related defects.",
    tools: ["FDM 3D Printer", "PTFE Tubing", "Hygrometer", "Fusion 360"],
    takeaway:
      "Controlling the storage environment is as important as tuning print parameters for hygroscopic materials.",
  },
  {
    id: "tap-guide-block",
    title: "Tap Guide Block Set",
    shortDescription: "Hardened steel guide blocks for hand-tapping straight threads in soft metals.",
    images: [],
    description:
      "Machined a set of three guide blocks (M3, M5, M8) from mild steel to ensure perpendicular hand-tapping in aluminum and brass parts. Each block features a precision-reamed pilot bore that self-centers the tap and prevents walking. Blocks are case-hardened after machining for wear resistance. Used extensively across multiple prototype builds to maintain thread quality without a tapping head.",
    tools: ["Manual Lathe", "Reamer Set", "Case Hardening Compound", "1018 Steel"],
    takeaway:
      "Low-cost tooling aids eliminate the most common failure modes in manual fabrication workflows.",
  },
];
