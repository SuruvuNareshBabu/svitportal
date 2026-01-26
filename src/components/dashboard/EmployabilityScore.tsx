import { cn } from "@/lib/utils";

interface EmployabilityScoreProps {
  score: number;
  className?: string;
}

export function EmployabilityScore({ score, className }: EmployabilityScoreProps) {
  // Calculate rotation: -90deg (0 score) to 90deg (100 score)
  const rotation = -90 + (score / 100) * 180;

  return (
    <div className={cn("glass-card p-6", className)}>
      <h3 className="text-lg font-semibold text-foreground mb-4">Employability Score</h3>
      <div className="flex items-center gap-8">
        {/* Gauge */}
        <div className="relative w-32 h-20">
          <svg viewBox="0 0 100 60" className="w-full h-full">
            {/* Background arc */}
            <path
              d="M 10 55 A 40 40 0 0 1 90 55"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Colored segments */}
            <path
              d="M 10 55 A 40 40 0 0 1 30 20"
              fill="none"
              stroke="hsl(var(--destructive))"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M 30 20 A 40 40 0 0 1 70 20"
              fill="none"
              stroke="hsl(var(--warning))"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M 70 20 A 40 40 0 0 1 90 55"
              fill="none"
              stroke="hsl(var(--success))"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
          {/* Needle */}
          <div
            className="absolute bottom-0 left-1/2 origin-bottom transition-transform duration-500"
            style={{
              transform: `translateX(-50%) rotate(${rotation}deg)`,
            }}
          >
            <div className="w-0.5 h-10 bg-foreground rounded-full" />
          </div>
          {/* Center dot */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-foreground rounded-full" />
          {/* Score display */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl font-bold text-foreground">
            {score}
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-destructive" />
            <span className="text-muted-foreground">0 to 35</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-warning" />
            <span className="text-muted-foreground">36 to 70</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success" />
            <span className="text-muted-foreground">71 to 100</span>
          </div>
        </div>
      </div>
    </div>
  );
}
