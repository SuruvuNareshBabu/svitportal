import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  FileCheck,
  ClipboardList,
  Building2,
  Briefcase,
  Bookmark,
  HelpCircle,
  MessageSquare,
  User,
  Search,
  QrCode,
  Bell,
  LogOut,
  Moon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: QrCode, label: "Scan QR Code", path: "/scan" },
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: BookOpen, label: "Courses", path: "/courses" },
  { icon: FileCheck, label: "Tests", path: "/tests" },
  { icon: ClipboardList, label: "Assignments", path: "/assignments" },
  { icon: Building2, label: "Company Questions", path: "/company-questions" },
  { icon: Briefcase, label: "Jobs", path: "/jobs" },
  { icon: Bookmark, label: "Bookmarks", path: "/bookmarks" },
  { icon: HelpCircle, label: "Report an issue", path: "/report" },
  { icon: MessageSquare, label: "Ask TAI", path: "/ai-assistant" },
  { icon: User, label: "Profile", path: "/profile" },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen w-64 flex flex-col bg-sidebar border-r border-sidebar-border",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-sidebar-border">
        <div className="relative">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-[10px] font-bold rounded-full flex items-center justify-center text-primary-foreground">
            99+
          </span>
        </div>
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-secondary/50 border border-border rounded-lg py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn("nav-item", isActive && "active")}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Dark Mode Toggle */}
      <div className="px-3 py-2 border-t border-sidebar-border">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="nav-item w-full justify-between"
        >
          <div className="flex items-center gap-3">
            <Moon className="h-5 w-5" />
            <span className="text-sm font-medium">Dark Mode</span>
          </div>
          <div
            className={cn(
              "w-10 h-5 rounded-full relative transition-colors",
              darkMode ? "bg-primary" : "bg-muted"
            )}
          >
            <div
              className={cn(
                "absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform",
                darkMode ? "translate-x-5" : "translate-x-0.5"
              )}
            />
          </div>
        </button>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="avatar-circle h-10 w-10 bg-secondary text-foreground">
            S
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <p className="text-sm font-semibold truncate">SURUVU NARESH BABU</p>
              <span className="text-primary text-xs">✓</span>
            </div>
            <p className="text-xs text-muted-foreground truncate">
              nareshbabu6565@gmail.com
            </p>
          </div>
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <LogOut className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </aside>
  );
}
