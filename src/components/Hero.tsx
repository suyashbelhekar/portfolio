import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-pattern">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-glow-cyan/5 via-glow-purple/5 to-glow-pink/5 animate-gradient" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-glow-cyan/10 rounded-full blur-[100px]"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-glow-purple/10 rounded-full blur-[120px]"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-glow-cyan via-glow-purple to-glow-pink rounded-full blur-lg opacity-60 animate-pulse" />
            <img 
              src={profilePhoto} 
              alt="Suyash Belhekar"
              className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-widest">
            {"<Hello World />"}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          I'm{" "}
          <span className="text-gradient">Suyash Belhekar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {["AI/ML Engineer", "IoT Developer", "Full Stack Dev"].map((role, index) => (
            <span
              key={role}
              className="px-4 py-2 glass rounded-full text-sm md:text-base font-medium glow-border"
            >
              {role}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          B.Tech student passionate about building intelligent, connected systems. 
          Skilled in Python, Java, Embedded Systems, and crafting innovative solutions 
          that bridge hardware and software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/suyashbelhekar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 glass rounded-xl glow-border hover:bg-primary/10 transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/suyash-belhekar-3abbb5333"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 glass rounded-xl glow-border hover:bg-primary/10 transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:suyashbelhekar88@gmail.com"
            className="p-4 glass rounded-xl glow-border hover:bg-primary/10 transition-all duration-300 group"
          >
            <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;
