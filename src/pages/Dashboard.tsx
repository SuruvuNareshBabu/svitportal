import { useState, useEffect } from "react";
import {
  HelpCircle,
  Target,
  CheckCircle2,
  Award,
  TrendingUp,
  Flame,
} from "lucide-react";
import { MainLayout3D } from "@/components/layout/MainLayout3D";
import { ProgressRing } from "@/components/dashboard/ProgressRing";
import { StatCard3D } from "@/components/dashboard/StatCard3D";
import { SkillCard } from "@/components/dashboard/SkillCard";
import { EmployabilityScore } from "@/components/dashboard/EmployabilityScore";
import { DrivesChart } from "@/components/dashboard/DrivesChart";
import { supabase } from "@/integrations/supabase/client";

const skills = [
  { name: "Core Java", level: "Beginner" as const, rating: 4 },
  { name: "Programming", level: "Intermediate" as const, rating: 2 },
  { name: "SQL", level: "Beginner" as const, rating: 3 },
  { name: "DSA", level: "Advanced" as const, rating: 5 },
];

const statGradients: Array<"cyan" | "green" | "yellow" | "purple" | "pink" | "orange"> = [
  "cyan", "green", "yellow", "purple", "pink", "orange"
];

export default function Dashboard() {
  const [userName, setUserName] = useState("User");
  const [userStats, setUserStats] = useState({
    totalQuestions: 850,
    solvedQuestions: 0,
    attemptedQuestions: 0,
    marksObtained: 0,
    accuracy: 0,
    currentStreak: 0,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Get user profile
        const { data: profile } = await supabase
          .from("profiles")
          .select("*")
          .eq("user_id", user.id)
          .single();

        if (profile) {
          setUserName(profile.full_name || user.email?.split("@")[0] || "User");
          setUserStats({
            totalQuestions: 850,
            solvedQuestions: profile.questions_solved || 0,
            attemptedQuestions: profile.questions_attempted || 0,
            marksObtained: profile.total_score || 0,
            accuracy: profile.accuracy_percentage || 0,
            currentStreak: profile.current_streak || 0,
          });
        } else {
          setUserName(user.user_metadata?.full_name || user.email?.split("@")[0] || "User");
        }
      }
    };

    fetchUserData();
  }, []);

  const stats = [
    { title: "Total Questions", value: userStats.totalQuestions, icon: HelpCircle },
    { title: "Solved Questions", value: userStats.solvedQuestions, icon: CheckCircle2 },
    { title: "Attempted Questions", value: userStats.attemptedQuestions, icon: Target },
    { title: "Marks Obtained", value: userStats.marksObtained.toLocaleString(), icon: Award },
    { title: "Accuracy", value: `${userStats.accuracy}%`, icon: TrendingUp },
    { title: "Current Streak", value: `${userStats.currentStreak} 🔥`, icon: Flame },
  ];

  const progress = userStats.totalQuestions > 0 
    ? Math.round((userStats.solvedQuestions / userStats.totalQuestions) * 100) 
    : 0;

  return (
    <MainLayout3D>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Welcome back, {userName}! 👋
            </h1>
            <p className="text-muted-foreground">Track your learning progress and achievements</p>
          </div>
        </div>

        {/* Top Section: Progress & Employability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Progress Overview with 3D styling */}
          <div className="glass-card p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <h3 className="text-lg font-semibold text-foreground mb-6 relative z-10">Progress Overview</h3>
            <div className="flex items-center justify-center gap-12 relative z-10">
              <div className="relative">
                {/* Glow behind progress ring */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
                <ProgressRing progress={progress} size={140}>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{progress}%</p>
                    <p className="text-xs text-muted-foreground">Progress</p>
                  </div>
                </ProgressRing>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
                  <span className="text-sm text-muted-foreground">Course</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-success shadow-lg shadow-success/50" />
                  <span className="text-sm text-muted-foreground">Assignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-warning shadow-lg shadow-warning/50" />
                  <span className="text-sm text-muted-foreground">Test</span>
                </div>
              </div>
            </div>
          </div>

          {/* Employability Score */}
          <EmployabilityScore score={0} />
        </div>

        {/* Stats Grid with 3D Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <StatCard3D
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              gradient={statGradients[index]}
            />
          ))}
        </div>

        {/* Skills Acquired */}
        <div className="glass-card p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <h3 className="text-lg font-semibold text-foreground mb-4 relative z-10">Skills Acquired</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {skills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                level={skill.level}
                rating={skill.rating}
              />
            ))}
          </div>
        </div>

        {/* Drives Data Chart */}
        <DrivesChart />
      </div>
    </MainLayout3D>
  );
}
