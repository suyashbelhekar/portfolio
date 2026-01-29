import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-glow-cyan/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-glow-cyan to-glow-purple mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 glow-border h-full">
              <h3 className="font-display text-xl mb-6 text-primary">Contact Information</h3>
              
              <div className="space-y-6">
                <a
                  href="mailto:suyashbelhekar88@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      suyashbelhekar88@gmail.com
                    </p>
                  </div>
                </a>

                <a href="tel:+917058418077" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      +91 7058418077
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/suyashbelhekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      suyashbelhekar
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/suyash-belhekar-3abbb5333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      Suyash Belhekar
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-8 glow-border h-full flex flex-col">
              <h3 className="font-display text-xl mb-6 text-primary">Let's Connect</h3>
              
              <p className="text-muted-foreground mb-8 flex-1">
                I'm always excited to discuss new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out through any of my social 
                platforms or drop me an email!
              </p>

              <a
                href="mailto:suyashbelhekar88@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-glow-cyan to-glow-purple rounded-xl font-semibold text-primary-foreground hover:opacity-90 transition-opacity group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
