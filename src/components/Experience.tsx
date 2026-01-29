import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    type: "education",
    title: "B.Tech - AI & Machine Learning",
    organization: "Sanjivani University, Kopargaon",
    period: "2024 - 2027",
    description: "Pursuing specialization in Artificial Intelligence and Machine Learning with focus on practical applications.",
  },
  {
    type: "work",
    title: "Front-end Developer Intern",
    organization: "Innovation Hub Pvt. Ltd, Nashik",
    period: "Jun 2024 - Jul 2024",
    description: "Developed responsive UI components using HTML, CSS, JavaScript. Used Git for version control and documented front-end workflows.",
  },
  {
    type: "work",
    title: "Watson Studio Intern",
    organization: "IBM SkillBuild (Online)",
    period: "Jul 2025 - Aug 2025",
    description: "Gained hands-on experience with IBM Watson Studio for data science and machine learning implementations.",
  },
  {
    type: "education",
    title: "Diploma - Computer Technology",
    organization: "VPIET, Loni",
    period: "2021 - 2024",
    description: "Completed with 82% aggregate. Built strong foundation in programming, embedded systems, and project development.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative circuit-pattern">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-glow-cyan to-glow-purple mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-glow-cyan via-glow-purple to-glow-pink" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary animate-pulse-glow z-10" />

              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="glass rounded-2xl p-6 glow-border hover:bg-muted/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    {exp.type === "work" ? (
                      <Briefcase className="w-5 h-5 text-primary" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-secondary" />
                    )}
                    <span className={`text-xs font-mono px-2 py-1 rounded-full ${
                      exp.type === "work" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"
                    }`}>
                      {exp.type === "work" ? "Work" : "Education"}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold mb-1">
                    {exp.title}
                  </h3>
                  
                  <p className="text-primary text-sm mb-2">{exp.organization}</p>
                  
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
