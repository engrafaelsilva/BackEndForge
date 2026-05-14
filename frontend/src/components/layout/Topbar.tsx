"use client";

import { Search, Bell, Flame } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { mockUser } from "@/services/mock-data";
import { useAuth } from "@/lib/auth-context";

export function Topbar() {
  const { user } = useAuth();
  const userName = user?.name || "Rafael";
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  const xpPercentage = Math.round((mockUser.xp / mockUser.xpToNext) * 100);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-forge-border bg-forge-bg/80 px-6 backdrop-blur-xl">
      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-forge-text-secondary" />
        <Input
          placeholder="Buscar projetos, skills, roadmaps..."
          className="h-9 border-forge-border bg-forge-card pl-9 text-sm text-forge-text placeholder:text-forge-text-secondary/60 focus-visible:ring-forge-accent"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* XP Bar */}
        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-1 text-xs font-medium text-forge-accent">
            <Flame className="h-3.5 w-3.5" />
            <span>{mockUser.stats.streakDays}d</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-forge-text">Lv.{mockUser.level}</span>
            <div className="h-1.5 w-24 overflow-hidden rounded-full bg-forge-border">
              <div
                className="h-full rounded-full bg-gradient-to-r from-forge-accent to-forge-accent-secondary transition-all duration-500"
                style={{ width: `${xpPercentage}%` }}
              />
            </div>
            <span className="text-[10px] tabular-nums text-forge-text-secondary">
              {mockUser.xp}/{mockUser.xpToNext}
            </span>
          </div>
        </div>

        {/* Notifications */}
        <button className="relative rounded-lg p-2 text-forge-text-secondary transition-colors hover:bg-forge-card hover:text-forge-text">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-forge-accent" />
        </button>

        {/* Avatar */}
        <Avatar className="h-8 w-8 border border-forge-border">
          <AvatarFallback className="bg-forge-accent/20 text-xs font-semibold text-forge-accent">
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
