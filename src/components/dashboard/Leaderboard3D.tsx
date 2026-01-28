import { useState, useEffect } from "react";
import { ChevronDown, Share2, Crown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

interface LeaderboardUser {
  rank: number;
  name: string;
  initial: string;
  score: number;
  color: string;
  isCurrentUser?: boolean;
}

export function Leaderboard3D() {
  const [filter, setFilter] = useState("Total");
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [topPerformers, setTopPerformers] = useState<LeaderboardUser[]>([]);
  const [otherUsers, setOtherUsers] = useState<LeaderboardUser[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  const getColorForRank = (rank: number): string => {
    const colors = [
      "bg-emerald-500",
      "bg-amber-500", 
      "bg-orange-500",
      "bg-cyan-500",
      "bg-violet-500",
      "bg-pink-500",
      "bg-slate-500"
    ];
    return colors[Math.min(rank - 1, colors.length - 1)];
  };

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setCurrentUserId(user.id);
      }

      // Fetch all profiles ordered by score
      const { data: profiles, error } = await supabase
        .from("profiles")
        .select("user_id, full_name, total_score, avatar_url")
        .order("total_score", { ascending: false })
        .limit(20);

      if (error) {
        console.error("Error fetching leaderboard:", error);
        setLoading(false);
        return;
      }

      if (profiles && profiles.length > 0) {
        const leaderboardData: LeaderboardUser[] = profiles.map((profile, index) => ({
          rank: index + 1,
          name: profile.full_name || "Anonymous User",
          initial: (profile.full_name || "A")[0].toUpperCase(),
          score: profile.total_score || 0,
          color: getColorForRank(index + 1),
          isCurrentUser: profile.user_id === user?.id
        }));

        // Split into top 3 and others
        setTopPerformers(leaderboardData.slice(0, 3));
        setOtherUsers(leaderboardData.slice(3));
      }

      setLoading(false);
    };

    fetchLeaderboard();
  }, [filter]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (topPerformers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No users yet. Be the first to join!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground">Leaderboard</h2>
          <p className="text-sm text-muted-foreground">Overall Top Performers</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-lg text-sm text-foreground hover:bg-secondary/80 transition-colors">
            {filter}
            <ChevronDown className="h-4 w-4" />
          </button>
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <Share2 className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Top 3 Podium with 3D effect */}
      <div className="flex items-end justify-center gap-4 py-6 perspective-1000">
        {/* 2nd Place */}
        {topPerformers[1] && (
          <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all" />
              <div className={cn(
                "avatar-circle h-16 w-16 text-white relative z-10 shadow-lg shadow-amber-500/20",
                topPerformers[1].color
              )}>
                {topPerformers[1].initial}
              </div>
              <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-gradient-to-br from-primary to-cyan-400 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground shadow-lg z-20">
                2
              </div>
            </div>
            <p className="mt-2 text-sm font-medium text-foreground text-center max-w-20 truncate">
              {topPerformers[1].name}
            </p>
            <p className="text-sm text-muted-foreground">{topPerformers[1].score.toLocaleString()}</p>
          </div>
        )}

        {/* 1st Place */}
        {topPerformers[0] && (
          <div className="flex flex-col items-center -mt-8 transform hover:scale-105 transition-transform duration-300">
            <Crown className="h-8 w-8 text-warning mb-1 animate-pulse" />
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-warning/40 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all animate-pulse" />
              <div className={cn(
                "avatar-circle h-20 w-20 text-white text-2xl relative z-10 shadow-xl shadow-warning/30 ring-2 ring-warning/50",
                topPerformers[0].color
              )}>
                {topPerformers[0].initial}
              </div>
              <div className="absolute -bottom-1 -right-1 h-7 w-7 bg-gradient-to-br from-warning to-amber-400 rounded-full flex items-center justify-center text-sm font-bold text-warning-foreground shadow-lg z-20">
                1
              </div>
            </div>
            <p className="mt-2 text-sm font-medium text-foreground text-center max-w-24 truncate">
              {topPerformers[0].name}
            </p>
            <p className="text-sm text-muted-foreground font-semibold">{topPerformers[0].score.toLocaleString()}</p>
          </div>
        )}

        {/* 3rd Place */}
        {topPerformers[2] && (
          <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all" />
              <div className={cn(
                "avatar-circle h-16 w-16 text-white relative z-10 shadow-lg shadow-orange-500/20",
                topPerformers[2].color
              )}>
                {topPerformers[2].initial}
              </div>
              <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg z-20">
                3
              </div>
            </div>
            <p className="mt-2 text-sm font-medium text-foreground text-center max-w-20 truncate">
              {topPerformers[2].name}
            </p>
            <p className="text-sm text-muted-foreground">{topPerformers[2].score.toLocaleString()}</p>
          </div>
        )}
      </div>

      {/* Other Users List with 3D cards */}
      {otherUsers.length > 0 && (
        <div className="space-y-3">
          {otherUsers.slice(0, showMore ? undefined : 3).map((user) => (
            <div
              key={user.rank}
              className={cn(
                "leaderboard-item transform hover:scale-[1.02] hover:translate-x-1 transition-all duration-200",
                "hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 border border-transparent",
                user.isCurrentUser && "bg-primary/10 border-primary/30"
              )}
            >
              <span className="text-sm text-muted-foreground w-8 font-mono">#{user.rank}</span>
              <div className={cn(
                "avatar-circle h-10 w-10 text-white text-sm shadow-md",
                user.color
              )}>
                {user.initial}
              </div>
              <span className="flex-1 text-sm font-medium text-foreground truncate">
                {user.name}
                {user.isCurrentUser && (
                  <span className="ml-2 text-xs text-primary">(You)</span>
                )}
              </span>
              <span className="text-sm font-semibold text-foreground tabular-nums">
                {user.score.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Show More */}
      {otherUsers.length > 3 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="w-full flex items-center justify-center gap-2 py-3 text-sm text-primary hover:text-primary/80 transition-colors group"
        >
          {showMore ? "Show less" : `Show ${otherUsers.length - 3} more`}
          <ChevronDown className={cn(
            "h-4 w-4 transition-transform group-hover:translate-y-0.5",
            showMore && "rotate-180"
          )} />
        </button>
      )}
    </div>
  );
}
