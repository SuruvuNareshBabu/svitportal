import { Link } from "react-router-dom";
import { ArrowRight, Code, Trophy, Users, Zap, BookOpen, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Code,
    title: "Practice Coding",
    description: "Solve 850+ curated programming questions across multiple domains",
  },
  {
    icon: Trophy,
    title: "Track Progress",
    description: "Monitor your learning journey with detailed analytics and insights",
  },
  {
    icon: Users,
    title: "Compete & Learn",
    description: "Join leaderboards and compete with fellow learners",
  },
  {
    icon: Zap,
    title: "AI Assistant",
    description: "Get instant help from TAI, your personal learning companion",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Courses",
    description: "Learn Java, DSA, SQL, and more with structured courses",
  },
  {
    icon: BarChart3,
    title: "Employability Score",
    description: "Measure and improve your job readiness with our scoring system",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">T</span>
              </div>
              <span className="text-xl font-bold text-foreground">TalentTribe</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  Sign in
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
              <Zap className="h-4 w-4" />
              Powered by AI
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Master Tech Skills.
              <br />
              <span className="text-primary glow-text">Land Your Dream Job.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practice programming, ace interviews, and track your progress with our comprehensive
              learning platform designed for aspiring developers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground text-lg">
                  Start Learning Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="h-14 px-8 border-border text-foreground hover:bg-secondary text-lg">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {[
              { value: "850+", label: "Questions" },
              { value: "50+", label: "Companies" },
              { value: "10k+", label: "Students" },
              { value: "95%", label: "Success Rate" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-6 text-center">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Everything you need to succeed</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive tools and resources to boost your career
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card p-6 hover:border-primary/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
            <div className="relative">
              <h2 className="text-4xl font-bold text-foreground mb-4">Ready to start your journey?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of developers who have transformed their careers with TalentTribe.
              </p>
              <Link to="/signup">
                <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground text-lg">
                  Create Free Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="text-sm font-bold text-primary">T</span>
            </div>
            <span className="text-foreground font-semibold">TalentTribe</span>
          </div>
          <p className="text-muted-foreground text-sm">© 2024 TalentTribe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
