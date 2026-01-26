import { MainLayout } from "@/components/layout/MainLayout";
import { CheckCircle, Clock, Lock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const assignments = [
  {
    id: 1,
    course: "Core Java",
    title: "OOP Concepts & Inheritance",
    questions: 25,
    completed: 20,
    status: "in-progress",
    dueDate: "2026-02-01",
  },
  {
    id: 2,
    course: "SQL",
    title: "Joins & Subqueries",
    questions: 30,
    completed: 30,
    status: "completed",
    dueDate: "2026-01-20",
  },
  {
    id: 3,
    course: "DSA",
    title: "Arrays & Linked Lists",
    questions: 40,
    completed: 0,
    status: "locked",
    dueDate: "2026-02-10",
  },
  {
    id: 4,
    course: "Programming Fundamentals",
    title: "Loops & Conditionals",
    questions: 20,
    completed: 15,
    status: "in-progress",
    dueDate: "2026-02-05",
  },
  {
    id: 5,
    course: "HTML & CSS",
    title: "Responsive Design Basics",
    questions: 25,
    completed: 25,
    status: "completed",
    dueDate: "2026-01-15",
  },
  {
    id: 6,
    course: "Aptitude",
    title: "Number Series & Patterns",
    questions: 35,
    completed: 0,
    status: "not-started",
    dueDate: "2026-02-15",
  },
];

const statusConfig = {
  completed: {
    icon: CheckCircle,
    label: "Completed",
    color: "text-success",
    bg: "bg-success/10",
  },
  "in-progress": {
    icon: Clock,
    label: "In Progress",
    color: "text-warning",
    bg: "bg-warning/10",
  },
  "not-started": {
    icon: Clock,
    label: "Not Started",
    color: "text-muted-foreground",
    bg: "bg-muted/10",
  },
  locked: {
    icon: Lock,
    label: "Locked",
    color: "text-muted-foreground",
    bg: "bg-muted/10",
  },
};

export default function Assignments() {
  return (
    <MainLayout showLeaderboard={false}>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Assignments</h1>
          <p className="text-muted-foreground">
            Complete assignments to earn marks and improve your skills
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="glass-card p-4 text-center">
            <p className="text-3xl font-bold text-foreground">6</p>
            <p className="text-sm text-muted-foreground">Total Assignments</p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-3xl font-bold text-success">2</p>
            <p className="text-sm text-muted-foreground">Completed</p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-3xl font-bold text-warning">2</p>
            <p className="text-sm text-muted-foreground">In Progress</p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-3xl font-bold text-muted-foreground">2</p>
            <p className="text-sm text-muted-foreground">Pending</p>
          </div>
        </div>

        {/* Assignments List */}
        <div className="space-y-4">
          {assignments.map((assignment) => {
            const status = statusConfig[assignment.status as keyof typeof statusConfig];
            const progress = (assignment.completed / assignment.questions) * 100;

            return (
              <div
                key={assignment.id}
                className={cn(
                  "glass-card p-5 transition-all duration-300",
                  assignment.status !== "locked" && "hover:border-primary/30 cursor-pointer"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-primary/20 text-primary rounded">
                        {assignment.course}
                      </span>
                      <span className={cn("flex items-center gap-1 text-xs", status.color)}>
                        <status.icon className="h-3 w-3" />
                        {status.label}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {assignment.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{assignment.questions} Questions</span>
                      <span>Due: {assignment.dueDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    {/* Progress */}
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">
                        {assignment.completed}/{assignment.questions}
                      </p>
                      <div className="w-32 h-2 bg-muted rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <button
                      className={cn(
                        "p-3 rounded-lg transition-colors",
                        assignment.status === "locked"
                          ? "bg-muted text-muted-foreground cursor-not-allowed"
                          : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                      )}
                      disabled={assignment.status === "locked"}
                    >
                      {assignment.status === "locked" ? (
                        <Lock className="h-5 w-5" />
                      ) : (
                        <ArrowRight className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}
