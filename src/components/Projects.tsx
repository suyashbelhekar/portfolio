import { motion } from "framer-motion";
import { ExternalLink, Cpu, Flame, Droplets, ShieldCheck, FileSearch } from "lucide-react";

const projects = [
  {
    title: "Smart Traffic Management System",
    description: "IoT & Computer Vision system to reduce urban traffic congestion through adaptive signal control and violation detection.",
    tech: ["NodeMCU", "Ultrasonic Sensors", "ANPR Cameras", "Cloud Services"],
    icon: Cpu,
    color: "from-glow-cyan to-glow-purple",
  },
  {
    title: "Fire Fighting Robot",
    description: "Autonomous robot that detects and extinguishes fires in indoor spaces with web integration for real-time monitoring.",
    tech: ["ESP32", "Flame Sensor", "Web UI", "Ultrasonic Sensor"],
    icon: Flame,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Hydro Guardian Smart Irrigation",
    description: "Optimizes water usage in agriculture using real-time sensor data, automation, and solar power with email alerts.",
    tech: ["Soil Moisture Sensor", "Firebase", "Solar Power", "Web Dashboard"],
    icon: Droplets,
    color: "from-glow-cyan to-green-500",
  },
  {
    title: "Industrial Safety Monitoring",
    description: "IoT-based system for environmental monitoring with automatic power shutdown and live sensor monitoring.",
    tech: ["Gas Sensors", "GSM Module", "Relay Modules", "IoT"],
    icon: ShieldCheck,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "AI Research Paper Analyzer",
    description: "Web-based tool for summarizing, finding similarity, and comparing research papers to accelerate literature review.",
    tech: ["Python", "Flask API", "React", "Bootstrap"],
    icon: FileSearch,
    color: "from-glow-purple to-glow-pink",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-glow-cyan to-glow-purple mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my work in IoT, Embedded Systems, and Full-Stack Development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full glow-border hover:bg-muted/20 transition-all duration-300 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} p-0.5 mb-5`}>
                    <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted/50 rounded-md text-xs font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
