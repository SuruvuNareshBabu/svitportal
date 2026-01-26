import { useState } from "react";
import { ChevronDown, Share2, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeaderboardUser {
  rank: number;
  name: string;
  initial: string;
  score: number;
  color: string;
}

const topPerformers: LeaderboardUser[] = [
  { rank: 1, name: "Dhinakar", initial: "D", score: 7651, color: "bg-green-400" },
  { rank: 2, name: "Hemanth Reddy", initial: "H", score: 7540, color: "bg-yellow-500" },
  { rank: 3, name: "Saiket K", initial: "S", score: 7133, color: "bg-orange-400" },
];

const otherUsers: LeaderboardUser[] = [
  { rank: 4, name: "Kalpana Ramappa Yallatti", initial: "K", score: 7129, color: "bg-slate-500" },
  { rank: 5, name: "Keerthana V", initial: "K", score: 7080, color: "bg-slate-500" },
  { rank: 14769, name: "Suruvu Naresh Babu", initial: "S", score: 487, color: "bg-slate-600" },
];

export function Leaderboard() {
  const [filter, setFilter] = useState("Total");
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground">Leaderboard</h2>
          <p className="text-sm text-muted-foreground">Overall Top Performers</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-lg text-sm text-foreground">
            {filter}
            <ChevronDown className="h-4 w-4" />
          </button>
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <Share2 className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="flex items-end justify-center gap-4 py-6">
        {/* 2nd Place */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className={cn("avatar-circle h-16 w-16", topPerformers[1].color, "text-white")}>
              {topPerformers[1].initial}
            </div>
            <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
              2
            </div>
          </div>
          <p className="mt-2 text-sm font-medium text-foreground text-center">
            {topPerformers[1].name}
          </p>
          <p className="text-sm text-muted-foreground">{topPerformers[1].score}</p>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center -mt-8">
          <Crown className="h-8 w-8 text-warning mb-1" />
          <div className="relative">
            <div className={cn("avatar-circle h-20 w-20", topPerformers[0].color, "text-white text-2xl")}>
              {topPerformers[0].initial}
            </div>
            <div className="absolute -bottom-1 -right-1 h-7 w-7 bg-warning rounded-full flex items-center justify-center text-sm font-bold text-warning-foreground">
              1
            </div>
          </div>
          <p className="mt-2 text-sm font-medium text-foreground text-center">
            {topPerformers[0].name}
          </p>
          <p className="text-sm text-muted-foreground">{topPerformers[0].score}</p>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className={cn("avatar-circle h-16 w-16", topPerformers[2].color, "text-white")}>
              {topPerformers[2].initial}
            </div>
            <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
              3
            </div>
          </div>
          <p className="mt-2 text-sm font-medium text-foreground text-center">
            {topPerformers[2].name}
          </p>
          <p className="text-sm text-muted-foreground">{topPerformers[2].score}</p>
        </div>
      </div>

      {/* Other Users List */}
      <div className="space-y-3">
        {otherUsers.map((user) => (
          <div
            key={user.rank}
            className={cn(
              "leaderboard-item",
              user.name === "Suruvu Naresh Babu" && "bg-secondary"
            )}
          >
            <span className="text-sm text-muted-foreground w-12">{user.rank}</span>
            <div className={cn("avatar-circle h-10 w-10", user.color, "text-white text-sm")}>
              {user.initial}
            </div>
            <span className="flex-1 text-sm font-medium text-foreground truncate">
              {user.name}
            </span>
            <span className="text-sm font-semibold text-foreground">{user.score}</span>
          </div>
        ))}
      </div>

      {/* Show More */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="w-full flex items-center justify-center gap-2 py-3 text-sm text-primary hover:text-primary/80 transition-colors"
      >
        Show more
        <ChevronDown className={cn("h-4 w-4 transition-transform", showMore && "rotate-180")} />
      </button>
    </div>
  );
}
