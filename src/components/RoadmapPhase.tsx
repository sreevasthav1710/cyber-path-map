import { Shield, Code, Network, Database, Lock, Bug, Cog, Globe, Terminal, FileSearch, TestTube } from "lucide-react";

interface RoadmapPhaseProps {
  phase: number;
  title: string;
  reason: string;
  topics: string[];
  isLast?: boolean;
}

const phaseIcons: Record<number, React.ReactNode> = {
  1: <Code className="w-6 h-6" />,
  2: <Terminal className="w-6 h-6" />,
  3: <Database className="w-6 h-6" />,
  4: <Network className="w-6 h-6" />,
  5: <Database className="w-6 h-6" />,
  6: <Cog className="w-6 h-6" />,
  7: <Globe className="w-6 h-6" />,
  8: <Shield className="w-6 h-6" />,
  9: <Lock className="w-6 h-6" />,
  10: <Bug className="w-6 h-6" />,
  11: <TestTube className="w-6 h-6" />,
};

const RoadmapPhase = ({ phase, title, reason, topics, isLast = false }: RoadmapPhaseProps) => {
  return (
    <div className="relative flex gap-6 md:gap-10">
      {/* Timeline connector */}
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-muted border-2 border-primary flex items-center justify-center text-primary cyber-glow animate-pulse-glow shrink-0">
          {phaseIcons[phase]}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full min-h-[100px] timeline-line opacity-60" />
        )}
      </div>

      {/* Content */}
      <div className="pb-12 flex-1">
        <div className="cyber-card rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="phase-badge px-3 py-1 rounded-full font-mono text-sm text-primary">
              Phase {phase}
            </span>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold font-mono text-foreground mb-2">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 italic">
            {reason}
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {topics.map((topic, index) => (
              <li 
                key={index}
                className="flex items-center gap-2 text-sm text-foreground/80"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPhase;
