import { motion } from "framer-motion";
import { Code2, Cpu, Database, Globe, Lightbulb, Users } from "lucide-react";

const technicalSkills = [
  { name: "C++ / Java", icon: Code2, level: 85 },
  { name: "Embedded Systems", icon: Cpu, level: 90 },
  { name: "IoT Development", icon: Globe, level: 88 },
  { name: "Python / AI-ML", icon: Database, level: 80 },
  { name: "Web Development", icon: Globe, level: 75 },
];

const softSkills = [
  { name: "Leadership", icon: Users },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Creativity", icon: Lightbulb },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-glow-cyan to-glow-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 glow-border">
              <h3 className="font-display text-xl mb-4 text-primary">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a B.Tech student specializing in Artificial Intelligence and Machine Learning 
                at Sanjivani University. With a strong foundation in IoT, Embedded Systems, and 
                Software Development, I love creating solutions that bridge the gap between 
                hardware and software.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My journey started with a Diploma in Computer Technology from VPIET, Loni, 
                where I achieved 82% and developed a passion for building intelligent systems. 
                Now, I'm focused on pushing the boundaries of what's possible with AI and IoT.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-muted/30 rounded-xl">
                  <p className="font-display text-2xl text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-xl">
                  <p className="font-display text-2xl text-primary">82%</p>
                  <p className="text-sm text-muted-foreground">Diploma Score</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-8 glow-border">
              <h3 className="font-display text-xl mb-6 text-primary">Technical Skills</h3>
              
              <div className="space-y-5">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-5 h-5 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-glow-cyan to-glow-purple rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 * index }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <h3 className="font-display text-xl mt-8 mb-4 text-primary">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-muted/50 rounded-full text-sm flex items-center gap-2"
                  >
                    <skill.icon className="w-4 h-4 text-primary" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
