"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { StatCard, SkillCard, ProjectCard } from "@/components/cards";
import { TechBadge, ProgressBar } from "@/components/common";
import { mockUser, mockRecommendedProject } from "@/services/mock-data";
import { Button } from "@/components/ui/button";
import {
  FolderGit2,
  CheckCircle2,
  Zap,
  Flame,
  ArrowRight,
  Trophy,
  Target,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/lib/auth-context";
import Link from "next/link";

export default function DashboardPage() {
  const { user } = useAuth();
  const userName = user?.name || mockUser.name;
  const xpPercentage = Math.round((mockUser.xp / mockUser.xpToNext) * 100);

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Welcome */}
      <FadeIn>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-forge-text">
            Bem-vindo de volta,{" "}
            <span className="bg-gradient-to-r from-forge-accent to-forge-accent-secondary bg-clip-text text-transparent">
              {userName}
            </span>
            .
          </h1>
          <p className="text-sm text-forge-text-secondary">
            Continue evoluindo. Seu próximo passo está aqui.
          </p>
        </div>
      </FadeIn>

      {/* Stats */}
      <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
        <StaggerItem>
          <StatCard
            label="Projetos Gerados"
            value={mockUser.stats.projectsGenerated}
            icon={FolderGit2}
            trend="+3 este mês"
            trendUp
          />
        </StaggerItem>
        <StaggerItem>
          <StatCard
            label="Projetos Concluídos"
            value={mockUser.stats.projectsCompleted}
            icon={CheckCircle2}
            trend="50% taxa de conclusão"
            trendUp
          />
        </StaggerItem>
        <StaggerItem>
          <StatCard
            label="Skills Aprendidas"
            value={mockUser.stats.skillsLearned}
            icon={Zap}
            trend="+5 novas skills"
            trendUp
          />
        </StaggerItem>
        <StaggerItem>
          <StatCard
            label="Streak"
            value={`${mockUser.stats.streakDays} dias`}
            icon={Flame}
            trend="Melhor sequência!"
            trendUp
          />
        </StaggerItem>
      </StaggerContainer>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Evolução Técnica */}
        <FadeIn delay={0.2} className="lg:col-span-2">
          <div className="rounded-xl border border-forge-border bg-forge-card p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-forge-accent/10 p-2">
                  <Trophy className="h-5 w-5 text-forge-accent" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-forge-text">Evolução Técnica</h2>
                  <p className="text-xs text-forge-text-secondary">
                    Nível {mockUser.level} — {mockUser.title}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-forge-accent">Lv. {mockUser.level}</p>
                <p className="text-[10px] tabular-nums text-forge-text-secondary">
                  {mockUser.xp}/{mockUser.xpToNext} XP
                </p>
              </div>
            </div>

            <div className="mt-4">
              <ProgressBar value={mockUser.xp} max={mockUser.xpToNext} showLabel size="md" />
            </div>

            {/* Top Skills */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {mockUser.skills.slice(0, 6).map((skill) => (
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

        {/* Próximas Skills */}
        <FadeIn delay={0.3}>
          <div className="rounded-xl border border-forge-border bg-forge-card p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-forge-accent-secondary/10 p-2">
                <Target className="h-5 w-5 text-forge-accent-secondary" />
              </div>
              <h2 className="text-base font-bold text-forge-text">Próximas Skills</h2>
            </div>

            <div className="mt-5 space-y-4">
              {[
                { name: "Redis Avançado", desc: "Cache distribuído e pub/sub", progress: 30 },
                { name: "Docker Compose", desc: "Orquestração multi-container", progress: 65 },
                { name: "Mensageria", desc: "RabbitMQ e padrões de mensagem", progress: 0 },
                { name: "Observabilidade", desc: "Métricas, logs e tracing", progress: 0 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-forge-text">{skill.name}</p>
                      <p className="text-[11px] text-forge-text-secondary">{skill.desc}</p>
                    </div>
                    {skill.progress > 0 ? (
                      <span className="text-xs font-semibold text-forge-accent">
                        {skill.progress}%
                      </span>
                    ) : (
                      <TechBadge label="Em breve" variant="default" />
                    )}
                  </div>
                  {skill.progress > 0 && (
                    <ProgressBar value={skill.progress} className="mt-1.5" size="sm" />
                  )}
                </div>
              ))}
            </div>

            <Link href="/roadmaps" className="mt-6 block">
              <Button
                variant="outline"
                className="w-full border-forge-border text-sm text-forge-text-secondary hover:bg-forge-bg hover:text-forge-text"
              >
                Ver Roadmap Completo
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Projeto Recomendado */}
      <FadeIn delay={0.4}>
        <div className="overflow-hidden rounded-xl border border-forge-accent/30 bg-gradient-to-r from-forge-card via-forge-card to-forge-accent/5 p-6 shadow-lg shadow-forge-accent/5">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-forge-accent" />
            <h2 className="text-base font-bold text-forge-text">Projeto Recomendado</h2>
            <TechBadge label="Para você" variant="accent" />
          </div>

          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr,auto]">
            <div>
              <h3 className="text-lg font-bold text-forge-text">{mockRecommendedProject.name}</h3>
              <p className="mt-1 text-sm text-forge-text-secondary">
                {mockRecommendedProject.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {mockRecommendedProject.stack.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {mockRecommendedProject.concepts.slice(0, 4).map((concept) => (
                  <TechBadge key={concept} label={concept} variant="accent" />
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                <Link href={`/project/${mockRecommendedProject.id}`}>
                  <Button className="group bg-forge-accent text-white hover:bg-forge-accent/90">
                    Começar Projeto
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-forge-border text-forge-text-secondary hover:bg-forge-bg"
                >
                  Ver Detalhes
                </Button>
              </div>
            </div>

            {/* Score */}
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
                className="flex h-28 w-28 flex-col items-center justify-center rounded-2xl border border-forge-accent/30 bg-forge-accent/10"
              >
                <span className="text-3xl font-black text-forge-accent">
                  {mockRecommendedProject.score}
                </span>
                <span className="mt-0.5 text-[10px] font-medium text-forge-text-secondary">
                  Score Curricular
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Badges */}
      <FadeIn delay={0.5}>
        <div className="rounded-xl border border-forge-border bg-forge-card p-6">
          <h2 className="text-base font-bold text-forge-text">Conquistas</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {mockUser.badges.map((badge) => (
              <motion.div
                key={badge.name}
                whileHover={{ scale: 1.05 }}
                className={`flex flex-col items-center rounded-xl border p-4 text-center transition-colors ${
                  badge.earned
                    ? "border-forge-accent/20 bg-forge-accent/5"
                    : "border-forge-border bg-forge-bg opacity-50"
                }`}
              >
                <span className="text-2xl">{badge.icon}</span>
                <span className="mt-2 text-[11px] font-semibold text-forge-text">{badge.name}</span>
                <span className="mt-0.5 text-[9px] text-forge-text-secondary">
                  {badge.description}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
