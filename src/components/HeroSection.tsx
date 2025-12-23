import { Shield, Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-muted border border-primary/30 mb-8 cyber-glow">
            <Shield className="w-10 h-10 text-primary" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono mb-6">
            <span className="text-foreground">Cybersecurity</span>
            <br />
            <span className="text-gradient">Roadmap</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Complete Learning Order & Career Paths
          </p>

          {/* Terminal-style decoration */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border font-mono text-sm text-muted-foreground">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-primary">$</span>
            <span>master --path cybersecurity</span>
            <span className="w-2 h-4 bg-primary animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
