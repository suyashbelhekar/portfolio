import { motion } from "framer-motion";
import { Cpu, Flame, Droplets, ShieldCheck, FileSearch } from "lucide-react";

const projects = [
  {
    title: "Smart Traffic Management",
    description: "IoT & Computer Vision system for adaptive traffic control and violation detection.",
    tech: ["NodeMCU", "ANPR", "Cloud"],
    icon: Cpu,
  },
  {
    title: "Fire Fighting Robot",
    description: "Autonomous robot that detects and extinguishes fires with web monitoring.",
    tech: ["ESP32", "Flame Sensor", "Web UI"],
    icon: Flame,
  },
  {
    title: "Smart Irrigation System",
    description: "Optimizes water usage in agriculture with real-time sensor data and automation.",
    tech: ["Firebase", "Solar Power", "IoT"],
    icon: Droplets,
  },
  {
    title: "Industrial Safety Monitor",
    description: "Environmental monitoring with automatic alerts and power shutdown.",
    tech: ["Gas Sensors", "GSM", "IoT"],
    icon: ShieldCheck,
  },
  {
    title: "AI Research Paper Analyzer",
    description: "Web tool for summarizing and comparing research papers.",
    tech: ["Python", "Flask", "React"],
    icon: FileSearch,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <project.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="font-display text-base font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-muted rounded text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
