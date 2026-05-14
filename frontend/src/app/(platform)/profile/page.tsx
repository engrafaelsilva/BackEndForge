"use client";

import { FadeIn, FadeInView, StaggerContainer, StaggerItem } from "@/components/animations";
import { SkillCard } from "@/components/cards";
import { TechBadge, ProgressBar } from "@/components/common";
import { mockUser } from "@/services/mock-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  UserCircle,
  Trophy,
  Target,
  Flame,
  Code2,
  GitBranch,
  Award,
  Calendar,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const xpPercentage = Math.round((mockUser.xp / mockUser.xpToNext) * 100);

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      {/* Header */}
      <FadeIn>
        <div className="rounded-xl border border-forge-border bg-forge-card p-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            {/* Avatar */}
            <div className="relative">
              <Avatar className="h-20 w-20 border-2 border-forge-accent/30">
                <AvatarFallback className="bg-forge-accent/10 text-2xl font-bold text-forge-accent">
                  RF
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-forge-card bg-forge-accent text-[10px] font-bold text-white">
                {mockUser.level}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-forge-text">{mockUser.name}</h1>
                <TechBadge label={mockUser.title} variant="accent" />
              </div>

              <div className="mt-2 flex items-center gap-4">
                <div className="flex items-center gap-1 text-sm text-forge-text-secondary">
                  <Trophy className="h-3.5 w-3.5 text-forge-accent" />
                  Nível {mockUser.level}
                </div>
                <div className="flex items-center gap-1 text-sm text-forge-text-secondary">
                  <Flame className="h-3.5 w-3.5 text-orange-400" />
                  {mockUser.stats.streakDays} dias de streak
                </div>
                <div className="flex items-center gap-1 text-sm text-forge-text-secondary">
                  <Zap className="h-3.5 w-3.5 text-yellow-400" />
                  {mockUser.stats.skillsLearned} skills
                </div>
              </div>

              {/* XP Bar */}
              <div className="mt-3 max-w-md">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-forge-text-secondary">XP para próximo nível</span>
                  <span className="font-semibold text-forge-accent">
                    {mockUser.xp}/{mockUser.xpToNext}
                  </span>
                </div>
                <ProgressBar value={mockUser.xp} max={mockUser.xpToNext} size="md" className="mt-1" />
              </div>
            </div>

            {/* Stats mini */}
            <div className="flex gap-4 sm:flex-col sm:items-end">
              {[
                { label: "Projetos", value: mockUser.stats.projectsCompleted },
                { label: "Skills", value: mockUser.stats.skillsLearned },
              ].map((s) => (
                <div key={s.label} className="text-center sm:text-right">
                  <p className="text-xl font-bold text-forge-text">{s.value}</p>
                  <p className="text-[10px] text-forge-text-secondary">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Skills */}
        <FadeIn delay={0.1} className="lg:col-span-2">
          <div className="rounded-xl border border-forge-border bg-forge-card p-6">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-forge-accent" />
              <h2 className="text-lg font-bold text-forge-text">Skills Dominadas</h2>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {mockUser.skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  maxLevel={skill.maxLevel}
                  category={skill.category}
                />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Technologies */}
          <FadeIn delay={0.15}>
            <div className="rounded-xl border border-forge-border bg-forge-card p-6">
              <div className="flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-forge-accent" />
                <h2 className="text-base font-bold text-forge-text">Tecnologias</h2>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {mockUser.technologies.map((tech) => (
                  <TechBadge key={tech} label={tech} variant="accent" />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Objectives */}
          <FadeIn delay={0.2}>
            <div className="rounded-xl border border-forge-border bg-forge-card p-6">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-forge-accent-secondary" />
                <h2 className="text-base font-bold text-forge-text">Objetivos</h2>
              </div>

              <div className="mt-4 space-y-2">
                {mockUser.objectives.map((obj) => (
                  <div
                    key={obj}
                    className="flex items-center gap-3 rounded-lg border border-forge-border bg-forge-bg px-3 py-2"
                  >
                    <TrendingUp className="h-4 w-4 text-forge-accent-secondary" />
                    <span className="text-sm text-forge-text">{obj}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Badges / Achievements */}
      <FadeInView delay={0.25}>
        <div className="rounded-xl border border-forge-border bg-forge-card p-6">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-forge-accent" />
            <h2 className="text-lg font-bold text-forge-text">Conquistas</h2>
            <span className="rounded-md bg-forge-accent/10 px-2 py-0.5 text-xs font-semibold text-forge-accent">
              {mockUser.badges.filter((b) => b.earned).length}/{mockUser.badges.length}
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {mockUser.badges.map((badge, i) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`flex flex-col items-center rounded-xl border p-4 text-center transition-all ${
                  badge.earned
                    ? "border-forge-accent/20 bg-forge-accent/5 shadow-sm"
                    : "border-forge-border bg-forge-bg opacity-40"
                }`}
              >
                <span className="text-2xl">{badge.icon}</span>
                <span className="mt-2 text-[11px] font-semibold text-forge-text">
                  {badge.name}
                </span>
                <span className="mt-0.5 text-[9px] text-forge-text-secondary">
                  {badge.description}
                </span>
                {badge.earned && (
                  <span className="mt-1.5 rounded bg-forge-success/10 px-1.5 py-0.5 text-[8px] font-semibold text-forge-success">
                    DESBLOQUEADO
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInView>

      {/* Progress Overview */}
      <FadeInView delay={0.3}>
        <div className="rounded-xl border border-forge-accent/20 bg-gradient-to-r from-forge-card via-forge-card to-forge-accent/5 p-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-forge-accent" />
            <h2 className="text-lg font-bold text-forge-text">Progresso Técnico</h2>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Projetos Gerados",
                value: mockUser.stats.projectsGenerated,
                icon: "📁",
              },
              {
                label: "Projetos Concluídos",
                value: mockUser.stats.projectsCompleted,
                icon: "✅",
              },
              {
                label: "Skills Aprendidas",
                value: mockUser.stats.skillsLearned,
                icon: "⚡",
              },
              {
                label: "Dias de Streak",
                value: mockUser.stats.streakDays,
                icon: "🔥",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-forge-border bg-forge-bg p-4 text-center"
              >
                <span className="text-xl">{stat.icon}</span>
                <p className="mt-1 text-2xl font-bold text-forge-text">{stat.value}</p>
                <p className="text-[10px] text-forge-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeInView>
    </div>
  );
}
