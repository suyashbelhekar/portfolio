import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground mb-8">
            I'm open to new opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <a
            href="mailto:suyashbelhekar88@gmail.com"
            className="flex items-center gap-2 px-5 py-3 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm">suyashbelhekar88@gmail.com</span>
          </a>
          <a
            href="tel:+917058418077"
            className="flex items-center gap-2 px-5 py-3 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm">+91 7058418077</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4"
        >
          <a
            href="https://github.com/suyashbelhekar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card rounded-xl border border-border hover:border-primary/50 hover:text-primary transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/suyash-belhekar-3abbb5333"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card rounded-xl border border-border hover:border-primary/50 hover:text-primary transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
