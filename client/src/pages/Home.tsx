import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Mail, Linkedin, Github, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import heroBackground from "@assets/abstract_mechanical_wireframe_background_1767939471903.png";

const skills = {
  mechanical: ["SOLIDWORKS", "Fusion 360", "3D Printing", "CNC Milling/Turning", "GD&T", "DFM"],
  electrical: ["Circuit Design", "Soldering", "Sensor Integration", "Motor Control", "Arduino"],
  software: ["Python", "C++", "MATLAB", "LabVIEW", "HTML/CSS"],
  tools: ["Minitab", "Excel", "Microsoft Office", "Project Management"],
};

const workExperience = [
  {
    company: "Advanced Innovation, Inc.",
    title: "CNC Machinist",
    location: "Belgrade, MT",
    period: "March 2022 - Present",
    points: [
      "Operate and program up to 8 CNC mills simultaneously for precision components.",
      "Troubleshoot and maintain equipment to reduce downtime.",
      "Conduct quality inspections ensuring compliance with client specs.",
      "Facilitated training for new employees on CNC operation.",
    ],
  },
  {
    company: "Hondo Garage",
    title: "CNC Machinist / Assembly / Media Manager",
    location: "Belgrade, MT",
    period: "January 2023 - July 2024",
    points: [
      "Designed and 3D-printed custom fixtures to improve efficiency.",
      "Produced professional product photography and videography for marketing.",
      "Operated CNC mills for prototype and production runs.",
    ],
  },
  {
    company: "Proof",
    title: "CNC Machinist / Assembly",
    location: "Belgrade, MT",
    period: "January 2023 - July 2024",
    points: [
      "Designed calibration fixtures for automated CNC-loading robot arms, reducing setup time by 30%.",
      "Built custom enclosures for laser engravers, improving workflow efficiency by 45%.",
      "Executed rigorous quality checks on mechanical products.",
    ],
  },
];

const education = [
  {
    institution: "Montana State University",
    degree: "Bachelor of Science, Mechanical Engineering",
    location: "Bozeman, MT",
    period: "August 2022 - December 2026",
    points: [
      "GPA: 3.62",
      "Dean's List - Fall 2021, Spring 2024, Fall 2024",
    ],
  },
  {
    institution: "Montana State University",
    degree: "Certificate in CNC Machining",
    location: "Bozeman, MT",
    period: "August 2021 - May 2022",
    points: [
      "GPA: 3.61",
    ],
  },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Matching reference design */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 bg-[#0a1520]">
          <img
            src={heroBackground}
            alt=""
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1520]/90 via-[#0a1520]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1520] via-transparent to-[#0a1520]/20" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="font-mono text-primary text-sm tracking-[0.3em] mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-primary" />
              PORTFOLIO 2026
            </p>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-foreground tracking-tight leading-[0.9] mb-6">
              KORDIAN<br />
              <span>CEBU</span><span className="text-foreground/40">LLA</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Mechanical Engineering Student specializing in{" "}
              <span className="text-foreground font-medium">CNC Machining</span>,{" "}
              <span className="text-foreground font-medium">Robotics</span>, and{" "}
              <span className="text-foreground font-medium">Design</span>.
            </p>
            <div className="flex gap-4">
              <Link href="/projects">
                <button
                  className="px-6 py-3 bg-primary text-primary-foreground rounded font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors text-sm"
                  data-testid="button-view-projects"
                >
                  View Projects <ArrowRight size={16} />
                </button>
              </Link>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 border border-foreground/30 text-foreground rounded font-medium hover:bg-foreground/5 transition-colors text-sm"
                data-testid="button-contact-me"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-muted-foreground text-xs tracking-[0.2em] font-mono">SCROLL</span>
          <ChevronDown className="text-muted-foreground" size={20} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 blueprint-grid">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">
              <span className="text-primary font-mono text-lg mr-2">01.</span>
              About
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm a Mechanical Engineering student at Montana State University with a passion for 
                hands-on fabrication and systems integration. With professional experience in CNC 
                machining and a certificate in precision manufacturing, I bridge the gap between 
                design and production.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My work spans mechanical design, electrical systems, controls, and software — 
                building complete solutions from concept to functional prototype. I believe in 
                engineering that works: reliable, efficient, and built with precision.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-12">
              <span className="text-primary font-mono text-lg mr-2">02.</span>
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <button
                className="px-8 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="button-view-all-projects"
              >
                View All Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 blueprint-grid">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-12">
              <span className="text-primary font-mono text-lg mr-2">03.</span>
              Skills
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h3 className="font-display font-semibold text-foreground capitalize mb-4">
                  {category === "electrical" ? "Electrical / Controls" : category}
                </h3>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Two Column Layout */}
      <section id="experience" className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="font-display text-3xl font-bold text-foreground">
                  Education
                </h2>
              </motion.div>

              <div className="space-y-10">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8"
                  >
                    {/* Timeline dot and line */}
                    <div className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full border-2 border-primary bg-background" />
                    {i < education.length - 1 && (
                      <div className="absolute left-[4px] top-4 w-px h-[calc(100%+2rem)] bg-border" />
                    )}

                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="font-display font-bold text-lg text-foreground">
                        {edu.institution}
                      </h3>
                      <span className="font-mono text-primary text-sm whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <p className="font-medium text-foreground/90 text-sm mb-1">
                      {edu.degree}
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      {edu.location}
                    </p>
                    <div className="space-y-1.5 border-l border-border/50 pl-4">
                      {edu.points.map((point, j) => (
                        <p key={j} className="text-muted-foreground text-sm">
                          {point}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Work Experience Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="font-display text-3xl font-bold text-foreground">
                  Industry Experience
                </h2>
              </motion.div>

              <div className="space-y-10">
                {workExperience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8"
                  >
                    {/* Timeline dot and line */}
                    <div className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full border-2 border-primary bg-background" />
                    {i < workExperience.length - 1 && (
                      <div className="absolute left-[4px] top-4 w-px h-[calc(100%+2rem)] bg-border" />
                    )}

                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="font-display font-bold text-lg text-foreground">
                        {exp.company}
                      </h3>
                      <span className="font-mono text-primary text-sm whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="font-medium text-foreground/90 text-sm mb-1">
                      {exp.title}
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      {exp.location}
                    </p>
                    <div className="space-y-1.5 border-l border-border/50 pl-4">
                      {exp.points.map((point, j) => (
                        <p key={j} className="text-muted-foreground text-sm">
                          {point}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className="py-24 blueprint-grid">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">
              <span className="text-primary font-mono text-lg mr-2">05.</span>
              Goals
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                My engineering trajectory focuses on the intersection of mechanical systems and 
                intelligent automation. I'm driven to develop mechatronic solutions that bridge 
                hardware and software — from precision manufacturing equipment to autonomous systems.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Long-term, I aim to work on robotics and automation projects where mechanical 
                engineering meets embedded systems, contributing to technologies that improve 
                manufacturing efficiency, accessibility, or exploration.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              <span className="text-primary font-mono text-lg mr-2">06.</span>
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              I'm actively seeking internship and full-time opportunities in mechanical 
              engineering, robotics, and manufacturing. Let's connect.
            </p>

            <div className="flex justify-center gap-6 mb-8">
              <a
                href="mailto:kcebulla1987@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-email"
              >
                <Mail size={20} />
                <span className="text-sm">Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/kordian-c-b903b71a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin size={20} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-github"
              >
                <Github size={20} />
                <span className="text-sm">GitHub</span>
              </a>
            </div>

            <a
              href="mailto:kcebulla1987@gmail.com"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
              data-testid="button-say-hello"
            >
              Say Hello
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm font-mono">
            Designed & Built by Kordian Cebulla © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
