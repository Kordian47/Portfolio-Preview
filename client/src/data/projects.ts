import { Project } from "@/components/ProjectCard";
import gardenImage from "@assets/garden-v2-final-pic_1768091711436.PNG";
import beamImage from "@assets/projects/beam-deflection-hero1.png";

export const projects: Project[] = [
  {
    id: "beam-deflection-calculator",
    title: "Beam Deflection Calculator",
    description: "Numerical structural analysis tool for computing shear, moment, slope, and deflection of beams under arbitrary loading.",
    tags: ["Mechanical", "Software"],
    featured: true,
    image: beamImage,
    result: "Developed a robust Python tool that produces physically correct diagrams for complex loading scenarios.",
  },
  {
    id: "automated-garden-watering",
    title: "Automated Garden Watering System",
    description: "Automated indoor garden watering system with sensor feedback, scheduling, and modular expansion.",
    tags: ["Mechanical", "Electrical", "Controls", "Software"],
    featured: true,
    image: gardenImage,
    result: "Reduced manual watering to zero and maintained consistent soil moisture across all plants.",
  },
  {
    id: "hobby-rocketry",
    title: "Hobby Rocketry Components",
    description: "Custom-designed fin cans and rail guide systems for high-power hobby rockets with material testing.",
    tags: ["Mechanical", "Manufacturing"],
    featured: true,
    result: "Developed reusable launch systems compatible with multiple rocket diameters.",
  },
  {
    id: "cnc-automation-fixtures",
    title: "CNC Automation Fixtures",
    description: "3D-printed calibration fixtures for automated CNC-loading robot arm systems.",
    tags: ["Mechanical", "Controls", "Manufacturing"],
    featured: true,
    result: "Improved system accuracy and reduced setup time by 30%.",
  },
  {
    id: "laser-engraver-enclosure",
    title: "Laser Engraver Enclosure",
    description: "Custom enclosures and fixtures for laser engraving operations with enhanced safety features.",
    tags: ["Mechanical", "Manufacturing"],
    result: "Enhanced precision, operator safety, and workflow efficiency by 45%.",
  },
];
