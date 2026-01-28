import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCard3DProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  gradient?: "cyan" | "green" | "yellow" | "purple" | "pink" | "orange";
}

const gradientClasses = {
  cyan: "from-cyan-500/20 to-blue-500/10 hover:from-cyan-500/30 hover:to-blue-500/20 shadow-cyan-500/10 hover:shadow-cyan-500/20",
  green: "from-emerald-500/20 to-green-500/10 hover:from-emerald-500/30 hover:to-green-500/20 shadow-emerald-500/10 hover:shadow-emerald-500/20",
  yellow: "from-amber-500/20 to-yellow-500/10 hover:from-amber-500/30 hover:to-yellow-500/20 shadow-amber-500/10 hover:shadow-amber-500/20",
  purple: "from-violet-500/20 to-purple-500/10 hover:from-violet-500/30 hover:to-purple-500/20 shadow-violet-500/10 hover:shadow-violet-500/20",
  pink: "from-pink-500/20 to-rose-500/10 hover:from-pink-500/30 hover:to-rose-500/20 shadow-pink-500/10 hover:shadow-pink-500/20",
  orange: "from-orange-500/20 to-red-500/10 hover:from-orange-500/30 hover:to-red-500/20 shadow-orange-500/10 hover:shadow-orange-500/20",
};

const iconColors = {
  cyan: "text-cyan-400",
  green: "text-emerald-400",
  yellow: "text-amber-400",
  purple: "text-violet-400",
  pink: "text-pink-400",
  orange: "text-orange-400",
};

export function StatCard3D({ title, value, icon: Icon, gradient = "cyan" }: StatCard3DProps) {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-xl p-5 transition-all duration-300",
        "bg-gradient-to-br backdrop-blur-xl",
        "border border-border/50 hover:border-primary/30",
        "transform hover:scale-105 hover:-translate-y-1",
        "shadow-lg hover:shadow-xl",
        gradientClasses[gradient]
      )}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
      
      {/* Icon with 3D effect */}
      <div className="relative z-10">
        <div className={cn(
          "h-10 w-10 rounded-lg flex items-center justify-center mb-3",
          "bg-gradient-to-br from-white/10 to-white/5",
          "shadow-inner"
        )}>
          <Icon className={cn("h-5 w-5", iconColors[gradient])} />
        </div>
        
        <p className="text-2xl font-bold text-foreground mb-1">{value}</p>
        <p className="text-xs text-muted-foreground">{title}</p>
      </div>

      {/* Decorative element */}
      <div className={cn(
        "absolute -bottom-4 -right-4 h-20 w-20 rounded-full opacity-20 blur-2xl",
        gradient === "cyan" && "bg-cyan-500",
        gradient === "green" && "bg-emerald-500",
        gradient === "yellow" && "bg-amber-500",
        gradient === "purple" && "bg-violet-500",
        gradient === "pink" && "bg-pink-500",
        gradient === "orange" && "bg-orange-500",
      )} />
    </div>
  );
}
