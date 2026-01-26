import {
  HelpCircle,
  Target,
  CheckCircle2,
  Award,
  TrendingUp,
  Flame,
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProgressRing } from "@/components/dashboard/ProgressRing";
import { StatCard } from "@/components/dashboard/StatCard";
import { SkillCard } from "@/components/dashboard/SkillCard";
import { EmployabilityScore } from "@/components/dashboard/EmployabilityScore";
import { DrivesChart } from "@/components/dashboard/DrivesChart";

const stats = [
  { title: "Total Questions", value: 850, icon: HelpCircle },
  { title: "Solved Questions", value: 124, icon: CheckCircle2 },
  { title: "Attempted Questions", value: 186, icon: Target },
  { title: "Marks Obtained", value: "1,250", icon: Award },
  { title: "Accuracy", value: "67%", icon: TrendingUp },
  { title: "Current Streak", value: "12 🔥", icon: Flame },
];

const skills = [
  { name: "Core Java", level: "Beginner" as const, rating: 4 },
  { name: "Programming", level: "Intermediate" as const, rating: 2 },
  { name: "SQL", level: "Beginner" as const, rating: 3 },
  { name: "DSA", level: "Advanced" as const, rating: 5 },
];

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Welcome back, Naresh! 👋</h1>
            <p className="text-muted-foreground">Track your learning progress and achievements</p>
          </div>
        </div>

        {/* Top Section: Progress & Employability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Progress Overview */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">Progress Overview</h3>
            <div className="flex items-center justify-center gap-12">
              <ProgressRing progress={25} size={140}>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">25%</p>
                  <p className="text-xs text-muted-foreground">Progress</p>
                </div>
              </ProgressRing>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">Course</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-success" />
                  <span className="text-sm text-muted-foreground">Assignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-warning" />
                  <span className="text-sm text-muted-foreground">Test</span>
                </div>
              </div>
            </div>
          </div>

          {/* Employability Score */}
          <EmployabilityScore score={0} />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Skills Acquired */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Skills Acquired</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
    </MainLayout>
  );
}
