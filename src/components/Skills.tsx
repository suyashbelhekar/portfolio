import { motion } from "framer-motion";
import { Users, Lightbulb, Settings } from "lucide-react";

const softSkills = [
  {
    name: "Leadership",
    description: "Leading teams and driving project success",
    icon: Users,
  },
  {
    name: "Creativity",
    description: "Innovative solutions and out-of-box thinking",
    icon: Lightbulb,
  },
  {
    name: "Problem Solving",
    description: "Analytical approach to complex challenges",
    icon: Settings,
  },
];

const tools = [
  "Python",
  "Java",
  "C++",
  "Power BI",
  "NodeMCU",
  "ESP32",
  "Arduino",
  "Firebase",
  "Git",
  "SQL",
  "HTML/CSS",
  "React",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="w-1 h-6 bg-primary rounded-full" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gradient">
              Soft Skills
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-primary/20 bg-background/50 p-8 text-center hover:border-primary/40 transition-colors group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl border border-primary/30 bg-primary/5 mb-4 group-hover:bg-primary/10 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="w-1 h-6 bg-primary rounded-full" />
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              Tools & Technologies
            </h2>
          </div>

          <div className="rounded-2xl border border-glow-purple/20 bg-background/50 p-8">
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all cursor-default
                    ${tool === "Arduino" 
                      ? "border-primary bg-primary/10 text-primary" 
                      : "border-border bg-muted/30 text-foreground hover:border-primary/50"
                    }`}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
