import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Leaderboard3D } from "@/components/dashboard/Leaderboard3D";
import { Scene3D } from "@/components/dashboard/Scene3D";

interface MainLayout3DProps {
  children: ReactNode;
  showLeaderboard?: boolean;
  show3DBackground?: boolean;
}

export function MainLayout3D({ 
  children, 
  showLeaderboard = true, 
  show3DBackground = true 
}: MainLayout3DProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* 3D Background Scene */}
      {show3DBackground && <Scene3D />}
      
      <Sidebar />
      <main className="ml-64 min-h-screen relative z-10">
        <div className="flex">
          <div className={showLeaderboard ? "flex-1 p-6" : "flex-1 p-6"}>
            {children}
          </div>
          {showLeaderboard && (
            <div className="w-96 p-6 border-l border-border/50 min-h-screen backdrop-blur-sm bg-background/50">
              <Leaderboard3D />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
