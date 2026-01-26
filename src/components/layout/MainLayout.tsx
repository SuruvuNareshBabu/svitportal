import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Leaderboard } from "@/components/dashboard/Leaderboard";

interface MainLayoutProps {
  children: ReactNode;
  showLeaderboard?: boolean;
}

export function MainLayout({ children, showLeaderboard = true }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64 min-h-screen">
        <div className="flex">
          <div className={showLeaderboard ? "flex-1 p-6" : "flex-1 p-6"}>
            {children}
          </div>
          {showLeaderboard && (
            <div className="w-96 p-6 border-l border-border min-h-screen">
              <Leaderboard />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
