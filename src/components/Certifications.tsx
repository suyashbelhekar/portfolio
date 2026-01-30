import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Power BI Data Modelling Basics",
    category: "Data Analytics",
    categoryColor: "bg-primary/20 text-primary",
    issuer: "Microsoft",
    description:
      "This course introduces the fundamentals of structuring data in Power BI using tables and relationships. It covers data normalization, star schema design, and managing keys for accurate reporting.",
  },
  {
    title: "SQL and Relational Database 101",
    category: "Database",
    categoryColor: "bg-primary/20 text-primary",
    issuer: "IBM",
    description:
      "Comprehensive introduction to SQL and relational database concepts including data querying, table creation, and database design principles for effective data management.",
  },
  {
    title: "DevOps Fundamentals",
    category: "DevOps",
    categoryColor: "bg-glow-purple/20 text-glow-purple",
    issuer: "IBM",
    description:
      "Foundational course covering DevOps principles, CI/CD pipelines, containerization, and collaboration practices for modern software development workflows.",
  },
  {
    title: "Predictive Modelling With IBM SPSS Modeler",
    category: "Machine Learning",
    categoryColor: "bg-glow-cyan/20 text-glow-cyan",
    issuer: "IBM",
    description:
      "Hands-on training in building predictive models using IBM SPSS Modeler, covering data mining techniques, model evaluation, and deployment strategies.",
  },
  {
    title: "Database Management System",
    category: "Database",
    categoryColor: "bg-primary/20 text-primary",
    issuer: "NPTEL Online Certification",
    description:
      "In-depth study of DBMS concepts including data models, normalization, transaction management, and query optimization for enterprise applications.",
  },
  {
    title: "IBM Watson Studio",
    category: "AI & ML",
    categoryColor: "bg-glow-pink/20 text-glow-pink",
    issuer: "IBM",
    description:
      "This certification covers cloud-based data science and machine learning workflows using IBM Watson Studio. It includes data preparation, model building, training, and deployment.",
  },
];

const stats = [
  { value: "6+", label: "CERTIFICATIONS" },
  { value: "3", label: "VENDORS" },
  { value: "5", label: "CATEGORIES" },
  { value: "∞", label: "LEARNING" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-glow-purple/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">
            {">"} CREDENTIALS.VERIFY()
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Professional certifications validating expertise in key technology domains
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-primary/20 bg-background/50 p-6 hover:border-primary/40 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl border border-primary/30 bg-primary/5">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${cert.categoryColor}`}>
                  {cert.category}
                </span>
              </div>

              <h3 className="font-display text-lg font-semibold mb-3 leading-tight">
                {cert.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {cert.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {cert.issuer}
                </div>
                <button className="flex items-center gap-1 text-sm text-primary hover:underline">
                  <ExternalLink className="w-4 h-4" />
                  View
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-muted/20 p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
