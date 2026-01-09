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

const experience = [
  {
    title: "CNC Machinist",
    company: "Advanced Innovation, Inc.",
    location: "Belgrade, MT",
    period: "March 2022 - Present",
    points: [
      "Operate and program up to 8 CNC mills simultaneously",
      "Troubleshoot and maintain CNC equipment",
      "Conduct quality inspections using precision measurement tools",
    ],
  },
  {
    title: "CNC Machinist / Assembly / Media",
    company: "Hondo Garage",
    location: "Belgrade, MT",
    period: "January 2023 - July 2024",
    points: [
      "Designed and 3D-printed custom fixtures for product photography",
      "Operated CNC mills for prototype and production runs",
    ],
  },
  {
    title: "CNC Machinist / Assembly",
    company: "Proof",
    location: "Belgrade, MT",
    period: "January 2023 - July 2024",
    points: [
      "Built custom enclosures improving workflow efficiency by 45%",
      "Designed calibration fixtures for automated robot arm",
    ],
  },
];

const education = [
  {
    degree: "B.S. Mechanical Engineering",
    school: "Montana State University",
    period: "August 2022 - December 2026",
    gpa: "3.62 GPA",
  },
  {
    degree: "Certificate in CNC Machining",
    school: "Montana State University",
    period: "August 2021 - May 2022",
    gpa: "3.61 GPA",
  },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBackground}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-primary text-sm tracking-wider mb-4">
              MECHANICAL ENGINEERING
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Kordian Cebulla
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Engineering precision through CNC machining, robotics, and hands-on problem solving.
              Building systems that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <button
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors mx-auto sm:mx-0"
                  data-testid="button-view-projects"
                >
                  View Projects <ArrowRight size={18} />
                </button>
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border text-foreground rounded-md font-medium hover:bg-muted transition-colors"
                data-testid="button-hero-resume"
              >
                Resume
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="text-muted-foreground animate-bounce" size={24} />
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

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-12">
              <span className="text-primary font-mono text-lg mr-2">04.</span>
              Experience
            </h2>
          </motion.div>

          <div className="mb-12">
            <h3 className="font-mono text-primary text-sm mb-6">EDUCATION</h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-primary/30 pl-6"
                >
                  <h4 className="font-display font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-muted-foreground text-sm">{edu.school}</p>
                  <p className="text-muted-foreground text-sm">{edu.period} • {edu.gpa}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-primary text-sm mb-6">WORK EXPERIENCE</h3>
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-primary/30 pl-6"
                >
                  <h4 className="font-display font-semibold text-foreground">{exp.title}</h4>
                  <p className="text-primary text-sm mb-1">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-3">{exp.location} • {exp.period}</p>
                  <ul className="space-y-1">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1 h-1 bg-muted-foreground rounded-full mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
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