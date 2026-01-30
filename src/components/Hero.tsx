import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Cpu, Settings, Code } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden circuit-pattern pt-20">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-glow-cyan/5 via-transparent to-glow-purple/5" />
      
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-medium tracking-wide">
                SYSTEM ONLINE • READY TO DEPLOY
              </span>
            </motion.div>

            {/* Initializing Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-primary font-mono text-sm mb-4 flex items-center gap-2"
            >
              <span className="text-muted-foreground">{">"}</span>
              INITIALIZING AI ENGINEER...
            </motion.p>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                Hi, I'm
              </h1>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4">
                Suyash Belhekar
              </h1>
              <p className="text-primary text-lg md:text-xl font-semibold mb-6">
                AI & ML Engineer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 leading-relaxed"
            >
              B.Tech student specializing in{" "}
              <span className="text-primary">Artificial Intelligence</span> &{" "}
              <span className="text-primary">Machine Learning</span>. Building
              intelligent, connected systems with IoT and Embedded Systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                VIEW PROJECTS
                <span>→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-semibold hover:bg-muted/50 transition-colors"
              >
                GET IN TOUCH
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-8"
            >
              <div>
                <p className="font-display text-3xl font-bold text-primary">4+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Projects</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">5+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Certifications</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">3rd</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Year B.Tech</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            {/* Floating Icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 lg:right-0 p-3 rounded-xl border border-primary/30 bg-background/80 backdrop-blur-sm"
            >
              <Code className="w-5 h-5 text-primary" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-1/3 -left-4 lg:left-0 p-3 rounded-xl border border-primary/30 bg-background/80 backdrop-blur-sm"
            >
              <Settings className="w-5 h-5 text-primary" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 right-5 lg:right-10 p-3 rounded-xl border border-primary/30 bg-background/80 backdrop-blur-sm"
            >
              <Cpu className="w-5 h-5 text-primary" />
            </motion.div>

            {/* Profile Photo */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-glow-cyan via-glow-purple to-glow-cyan rounded-full blur-xl opacity-40 animate-pulse scale-110" />
              <div className="relative p-2 rounded-full bg-gradient-to-r from-glow-cyan to-glow-purple">
                <img
                  src={profilePhoto}
                  alt="Suyash Belhekar"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-background"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-muted-foreground font-mono">Scroll Down</span>
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;
