import HeroSection from "@/components/HeroSection";
import RoadmapPhase from "@/components/RoadmapPhase";
import CareerCard from "@/components/CareerCard";
import { roadmapPhases, careerPaths } from "@/data/roadmapData";
import { BookOpen, Briefcase, Info } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection />

      {/* Info Banner */}
      <section className="py-8 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-center">
            <Info className="w-5 h-5 text-primary shrink-0" />
            <p className="text-muted-foreground text-sm md:text-base">
              All cybersecurity roles share the same foundational learning path. Master the phases below, then specialize.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Roadmap Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-primary">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground">
                Learning Roadmap
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {roadmapPhases.map((phase, index) => (
                <RoadmapPhase
                  key={phase.phase}
                  phase={phase.phase}
                  title={phase.title}
                  reason={phase.reason}
                  topics={phase.topics}
                  isLast={index === roadmapPhases.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 md:py-24 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-primary">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground">
                Cybersecurity Career Paths & Job Roles
              </h2>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mb-10 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-primary" />
                <span className="text-muted-foreground">Blue Team (Defense)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-destructive" />
                <span className="text-muted-foreground">Red Team (Offense)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-secondary" />
                <span className="text-muted-foreground">Neutral / Hybrid</span>
              </div>
            </div>

            {/* Career Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerPaths.map((career, index) => (
                <CareerCard
                  key={index}
                  title={career.title}
                  description={career.description}
                  focusAreas={career.focusAreas}
                  icon={career.icon}
                  teamType={career.teamType}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground text-sm font-mono mb-2">
              Cybersecurity Roadmap — Learning Order & Career Paths
            </p>
            <p className="text-muted-foreground/60 text-xs">
              Educational resource only. Always follow legal and ethical guidelines.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
