import { MainLayout } from "@/components/layout/MainLayout";
import { Clock, Trophy, Target, Play, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const upcomingTests = [
  {
    id: 1,
    title: "Java Full Stack Assessment",
    duration: "90 mins",
    questions: 50,
    date: "2026-02-01",
    time: "10:00 AM",
    type: "scheduled",
  },
  {
    id: 2,
    title: "SQL Proficiency Test",
    duration: "60 mins",
    questions: 40,
    date: "2026-02-05",
    time: "2:00 PM",
    type: "scheduled",
  },
];

const practiceTests = [
  {
    id: 1,
    title: "Core Java Basics",
    duration: "30 mins",
    questions: 25,
    attempts: 3,
    bestScore: 92,
  },
  {
    id: 2,
    title: "DSA - Arrays",
    duration: "45 mins",
    questions: 30,
    attempts: 2,
    bestScore: 85,
  },
  {
    id: 3,
    title: "SQL Fundamentals",
    duration: "30 mins",
    questions: 25,
    attempts: 5,
    bestScore: 96,
  },
  {
    id: 4,
    title: "Aptitude - Quantitative",
    duration: "40 mins",
    questions: 35,
    attempts: 1,
    bestScore: 78,
  },
];

export default function Tests() {
  return (
    <MainLayout showLeaderboard={false}>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Tests</h1>
          <p className="text-muted-foreground">
            Take tests to assess your knowledge and track your progress
          </p>
        </div>

        {/* Upcoming Tests */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Upcoming Scheduled Tests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingTests.map((test) => (
              <div
                key={test.id}
                className="glass-card p-5 border-l-4 border-l-warning"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{test.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {test.duration}
                      </span>
                      <span>{test.questions} Questions</span>
                    </div>
                    <div className="mt-3 text-sm">
                      <span className="text-primary font-medium">
                        {test.date} at {test.time}
                      </span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-warning text-warning-foreground rounded-lg text-sm font-medium">
                    Remind Me
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Tests */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Practice Tests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {practiceTests.map((test) => (
              <div
                key={test.id}
                className="glass-card p-5 hover:border-primary/30 transition-all duration-300 group"
              >
                <h3 className="font-semibold text-foreground mb-3">{test.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {test.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    {test.questions} Questions
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-warning" />
                    Best: {test.bestScore}%
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {test.attempts} attempts
                  </span>
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Play className="h-4 w-4" />
                    Start
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Test History */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            Recent Test History
          </h2>
          <div className="glass-card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Test Name</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Date</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Score</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="p-4 text-foreground">SQL Fundamentals</td>
                  <td className="p-4 text-muted-foreground">Jan 20, 2026</td>
                  <td className="p-4 text-success font-medium">96%</td>
                  <td className="p-4">
                    <span className="badge badge-beginner">Passed</span>
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-4 text-foreground">Core Java Basics</td>
                  <td className="p-4 text-muted-foreground">Jan 18, 2026</td>
                  <td className="p-4 text-success font-medium">92%</td>
                  <td className="p-4">
                    <span className="badge badge-beginner">Passed</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-foreground">Aptitude - Quantitative</td>
                  <td className="p-4 text-muted-foreground">Jan 15, 2026</td>
                  <td className="p-4 text-warning font-medium">78%</td>
                  <td className="p-4">
                    <span className="badge badge-intermediate">Passed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
