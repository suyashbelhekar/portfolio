import { motion } from "framer-motion";
import { Code2, Cpu, Database, Globe } from "lucide-react";

const skills = [
  { name: "C++ / Java", icon: Code2 },
  { name: "Embedded Systems", icon: Cpu },
  { name: "IoT Development", icon: Globe },
  { name: "Python / AI-ML", icon: Database },
  { name: "Web Development", icon: Globe },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card rounded-2xl p-8 border border-border mb-8"
        >
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm a B.Tech student specializing in Artificial Intelligence and Machine Learning 
            at Sanjivani University. With a strong foundation in IoT, Embedded Systems, and 
            Software Development, I love creating solutions that bridge hardware and software.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I completed my Diploma in Computer Technology from VPIET, Loni with 82% and 
            am now focused on pushing the boundaries of what's possible with AI and IoT.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-display text-xl mb-4 text-center">Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm"
              >
                <skill.icon className="w-4 h-4 text-primary" />
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
