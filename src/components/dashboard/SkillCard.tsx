import { StarRating } from "./StarRating";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  academy?: string;
  className?: string;
}

export function SkillCard({ name, level, rating, academy = "TAP ACADEMY", className }: SkillCardProps) {
  const levelClasses = {
    Beginner: "badge-beginner",
    Intermediate: "badge-intermediate",
    Advanced: "badge-advanced",
  };

  return (
    <div className={cn("skill-card", className)}>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground">{name}</h3>
        <StarRating rating={rating} />
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className={cn("badge", levelClasses[level])}>{level}</span>
        <div className="px-2 py-1 border border-border rounded text-xs text-muted-foreground">
          {academy}
        </div>
      </div>
    </div>
  );
}
