import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "education",
    title: "B.Tech - AI & Machine Learning",
    org: "Sanjivani University",
    period: "2024 - 2027",
  },
  {
    type: "work",
    title: "Front-end Developer Intern",
    org: "Innovation Hub Pvt. Ltd",
    period: "Jun - Jul 2024",
  },
  {
    type: "work",
    title: "Watson Studio Intern",
    org: "IBM SkillBuild",
    period: "Jul - Aug 2025",
  },
  {
    type: "education",
    title: "Diploma - Computer Technology (82%)",
    org: "VPIET, Loni",
    period: "2021 - 2024",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex gap-4 p-4 bg-card rounded-xl border border-border"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                exp.type === "work" ? "bg-primary/10" : "bg-secondary/10"
              }`}>
                {exp.type === "work" ? (
                  <Briefcase className="w-5 h-5 text-primary" />
                ) : (
                  <GraduationCap className="w-5 h-5 text-secondary" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{exp.title}</h3>
                <p className="text-primary text-sm">{exp.org}</p>
                <p className="text-muted-foreground text-xs">{exp.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
