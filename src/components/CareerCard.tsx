import { 
  Eye, Target, Settings, Bug, AlertTriangle, Cloud, FileText, 
  Search, Shield, Cog, Brain, Crosshair, ShieldCheck 
} from "lucide-react";

interface CareerCardProps {
  title: string;
  description: string;
  focusAreas: string[];
  icon: keyof typeof careerIcons;
  teamType?: "blue" | "red" | "neutral";
}

const careerIcons = {
  soc: Eye,
  pentest: Target,
  engineer: Settings,
  malware: Bug,
  incident: AlertTriangle,
  cloud: Cloud,
  grc: FileText,
  forensics: Search,
  appsec: Shield,
  automation: Cog,
  threat: Brain,
  redteam: Crosshair,
  blueteam: ShieldCheck,
};

const teamColors = {
  blue: "border-l-primary",
  red: "border-l-destructive",
  neutral: "border-l-secondary",
};

const CareerCard = ({ title, description, focusAreas, icon, teamType = "neutral" }: CareerCardProps) => {
  const IconComponent = careerIcons[icon];
  
  return (
    <div className={`cyber-card rounded-lg p-6 border-l-4 ${teamColors[teamType]}`}>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-primary shrink-0">
          <IconComponent className="w-6 h-6" />
        </div>
        
        <div className="flex-1">
          <h4 className="text-lg font-bold font-mono text-foreground mb-2">
            {title}
          </h4>
          
          <p className="text-muted-foreground text-sm mb-4">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((area, index) => (
              <span 
                key={index}
                className="phase-badge px-2 py-1 rounded text-xs font-mono text-primary/90"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
