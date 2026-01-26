import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProgressRing } from "@/components/dashboard/ProgressRing";
import { Camera, Mail, Phone, MapPin, Linkedin, Instagram, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = ["Personal info", "Experiences", "Education", "Projects", "Certificates"];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Personal info");

  return (
    <MainLayout showLeaderboard={false}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
        {/* Left Column - Profile Summary */}
        <div className="space-y-6">
          {/* Banner & Avatar */}
          <div className="glass-card overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-primary/20 to-primary/10 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">TAP ACADEMY</span>
              </div>
            </div>
            <div className="px-6 pb-6">
              <div className="relative -mt-12 flex flex-col items-center">
                <div className="h-24 w-24 rounded-full bg-secondary border-4 border-card flex items-center justify-center">
                  <span className="text-3xl font-bold text-foreground">S</span>
                </div>
                <h2 className="mt-4 text-xl font-bold text-foreground">SURUVU NARESH BABU</h2>
                <span className="badge badge-beginner mt-2">Student</span>
              </div>
            </div>
          </div>

          {/* Progress Stats */}
          <div className="glass-card p-6">
            <div className="flex justify-around">
              <div className="text-center">
                <ProgressRing progress={0} size={80} strokeWidth={6}>
                  <span className="text-sm font-semibold text-foreground">0%</span>
                </ProgressRing>
                <p className="mt-2 text-sm text-muted-foreground">Course progress</p>
              </div>
              <div className="text-center">
                <ProgressRing progress={14} size={80} strokeWidth={6} color="success">
                  <span className="text-sm font-semibold text-foreground">14%</span>
                </ProgressRing>
                <p className="mt-2 text-sm text-muted-foreground">Assignment Progress</p>
              </div>
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Achievements</h3>
            <div className="bg-secondary/50 rounded-lg p-4 text-center text-muted-foreground">
              Coming Soon ...
            </div>
          </div>

          {/* Support */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Support</h3>
            <div className="space-y-2">
              <button className="w-full text-left text-primary hover:underline text-sm">
                Need help?
              </button>
              <button className="w-full text-left text-primary hover:underline text-sm">
                View Leaderboard
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Settings */}
        <div className="lg:col-span-2">
          <div className="glass-card">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">Profile Setting</h2>
            </div>

            {/* Tabs */}
            <div className="border-b border-border">
              <div className="flex gap-6 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "py-4 text-sm font-medium border-b-2 transition-colors",
                      activeTab === tab
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6">
              {activeTab === "Personal info" && (
                <div className="space-y-6">
                  {/* Avatar Upload */}
                  <div className="flex items-center gap-6">
                    <div className="h-20 w-20 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-foreground">S</span>
                    </div>
                    <div className="flex-1">
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                        <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-primary text-sm font-medium">Upload your Profile image</p>
                        <p className="text-xs text-muted-foreground">PNG or JPG (max. 5MB)</p>
                      </div>
                    </div>
                  </div>

                  {/* Form Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        defaultValue="SURUVU NARESH BABU"
                        className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-primary focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Gender
                      </label>
                      <select className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-primary focus:outline-none focus:border-primary">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="email"
                          defaultValue="nareshbabu6565@gmail.com"
                          className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-2.5 text-primary focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Mobile *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="tel"
                          defaultValue="+91 6305876096"
                          className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-2.5 text-primary focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="tel"
                          defaultValue="+91 6305876096"
                          className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-2.5 text-primary focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        DOB
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="date"
                          defaultValue="2026-01-16"
                          className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-2.5 text-primary focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        LinkedIn link *
                      </label>
                      <div className="relative">
                        <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="url"
                          defaultValue="https://www.linkedin.com/in/naresh-babu"
                          className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-2.5 text-primary focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Instagram Link *
                      </label>
                      <div className="relative">
                        <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="url"
                          defaultValue="https://www.instagram.com/naresh_suruvu"
                          className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-2.5 text-primary focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Current state
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <select className="w-full bg-secondary border border-border rounded-lg pl-10 pr-4 py-2.5 text-primary focus:outline-none focus:border-primary">
                          <option>Karnataka</option>
                          <option>Andhra Pradesh</option>
                          <option>Tamil Nadu</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Current city *
                      </label>
                      <input
                        type="text"
                        defaultValue="Bengaluru"
                        className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-primary focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {activeTab !== "Personal info" && (
                <div className="text-center py-12 text-muted-foreground">
                  <p>{activeTab} section coming soon...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
