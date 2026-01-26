import { BookOpen, Clock, Users, Play } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { StarRating } from "@/components/dashboard/StarRating";
import { cn } from "@/lib/utils";

const courses = [
  {
    id: 1,
    name: "Core Java",
    description: "Master Java fundamentals, OOP concepts, and advanced features",
    questions: 100,
    duration: "20 hrs",
    students: 1250,
    rating: 4.5,
    level: "Beginner",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    name: "Java Coding",
    description: "Practice coding problems and improve problem-solving skills",
    questions: 100,
    duration: "25 hrs",
    students: 980,
    rating: 4.2,
    level: "Intermediate",
    color: "from-blue-500 to-purple-500",
  },
  {
    id: 3,
    name: "Programming Fundamentals",
    description: "Learn core programming concepts and logical thinking",
    questions: 100,
    duration: "15 hrs",
    students: 2100,
    rating: 4.8,
    level: "Beginner",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 4,
    name: "SQL",
    description: "Database queries, joins, and advanced SQL operations",
    questions: 100,
    duration: "18 hrs",
    students: 1500,
    rating: 4.3,
    level: "Intermediate",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 5,
    name: "HTML & CSS",
    description: "Build beautiful responsive websites from scratch",
    questions: 100,
    duration: "12 hrs",
    students: 3200,
    rating: 4.6,
    level: "Beginner",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    name: "DSA",
    description: "Data structures, algorithms, and complexity analysis",
    questions: 100,
    duration: "40 hrs",
    students: 890,
    rating: 4.7,
    level: "Advanced",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 7,
    name: "Aptitude",
    description: "Quantitative, logical, and verbal reasoning skills",
    questions: 100,
    duration: "22 hrs",
    students: 1800,
    rating: 4.4,
    level: "Beginner",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 8,
    name: "Company Questions",
    description: "Practice questions from TCS, Infosys, Wipro & more",
    questions: 200,
    duration: "30 hrs",
    students: 2500,
    rating: 4.9,
    level: "Mixed",
    color: "from-emerald-500 to-green-500",
  },
];

const levelColors = {
  Beginner: "badge-beginner",
  Intermediate: "badge-intermediate",
  Advanced: "badge-advanced",
  Mixed: "bg-primary/20 text-primary",
};

export default function Courses() {
  return (
    <MainLayout showLeaderboard={false}>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Courses</h1>
          <p className="text-muted-foreground">
            Explore our comprehensive courses and start learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              {/* Gradient Header */}
              <div
                className={cn(
                  "h-24 bg-gradient-to-r flex items-center justify-center",
                  course.color
                )}
              >
                <BookOpen className="h-12 w-12 text-white/90" />
              </div>

              <div className="p-5 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{course.name}</h3>
                    <span className={cn("badge", levelColors[course.level as keyof typeof levelColors])}>
                      {course.level}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {course.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <StarRating rating={Math.floor(course.rating)} size="sm" />
                    <span className="text-sm text-muted-foreground">{course.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {course.questions} Questions
                  </span>
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors font-medium text-sm group-hover:bg-primary group-hover:text-primary-foreground">
                  <Play className="h-4 w-4" />
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
