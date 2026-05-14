"use client";

import { FadeIn, FadeInView } from "@/components/animations";
import { TechBadge, ProgressBar, Timeline } from "@/components/common";
import { mockGeneratedProject } from "@/services/mock-data";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  GitBranch,
  Cpu,
  Database,
  RefreshCcw,
  MessageSquare,
  Shield,
  Zap,
  Layers,
  Activity,
  Award,
  ExternalLink,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectPage() {
  const project = mockGeneratedProject;

  return (
    <div className="mx-auto max-w-5xl">
      {/* Back */}
      <FadeIn>
        <Link
          href="/generate"
          className="mb-6 inline-flex items-center gap-2 text-sm text-forge-text-secondary transition-colors hover:text-forge-text"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao Gerador
        </Link>
      </FadeIn>

      {/* Header */}
      <FadeIn delay={0.1}>
        <div className="rounded-xl border border-forge-accent/20 bg-gradient-to-r from-forge-card via-forge-card to-forge-accent/5 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <TechBadge label={project.difficulty} variant="warning" />
                <TechBadge label={project.architecture} variant="accent" />
              </div>
              <h1 className="mt-3 text-2xl font-bold text-forge-text sm:text-3xl">
                {project.name}
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-forge-text-secondary">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </div>

            {/* Score */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
              className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-2xl border border-forge-accent/30 bg-forge-accent/10"
            >
              <span className="text-3xl font-black text-forge-accent">{project.score}</span>
              <span className="text-[10px] font-medium text-forge-text-secondary">Score</span>
            </motion.div>
          </div>

          <div className="mt-5 flex gap-3">
            <Button className="group bg-forge-accent text-white hover:bg-forge-accent/90">
              <Download className="mr-2 h-4 w-4" />
              Baixar Projeto
            </Button>
            <Button
              variant="outline"
              className="border-forge-border text-forge-text-secondary hover:bg-forge-bg"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Abrir no GitHub
            </Button>
          </div>
        </div>
      </FadeIn>

      {/* Architecture */}
      <FadeInView delay={0.1} className="mt-8">
        <div className="rounded-xl border border-forge-border bg-forge-card p-6">
          <div className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-forge-accent" />
            <h2 className="text-lg font-bold text-forge-text">Arquitetura</h2>
          </div>

          <div className="mt-6">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {[
                { icon: Cpu, label: "API Gateway", desc: "NestJS + REST" },
                { icon: Database, label: "Database", desc: "PostgreSQL" },
                { icon: RefreshCcw, label: "Cache", desc: "Redis" },
                { icon: MessageSquare, label: "Message Queue", desc: "BullMQ" },
                { icon: Activity, label: "Monitoring", desc: "Prometheus" },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-forge-border bg-forge-bg transition-colors hover:border-forge-accent/30">
                      <item.icon className="h-7 w-7 text-forge-accent" />
                    </div>
                    <p className="mt-2 text-xs font-semibold text-forge-text">{item.label}</p>
                    <p className="text-[10px] text-forge-text-secondary">{item.desc}</p>
                  </motion.div>
                  {i < 4 && (
                    <ArrowRight className="hidden h-4 w-4 text-forge-border sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInView>

      {/* Roadmap */}
      <FadeInView delay={0.15} className="mt-6">
        <div className="rounded-xl border border-forge-border bg-forge-card p-6">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-forge-accent" />
            <h2 className="text-lg font-bold text-forge-text">Roadmap de Implementação</h2>
          </div>

          <div className="mt-6">
            <Timeline steps={project.roadmap} />
          </div>
        </div>
      </FadeInView>

      {/* Skills */}
      <FadeInView delay={0.2} className="mt-6">
        <div className="rounded-xl border border-forge-border bg-forge-card p-6">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-forge-accent" />
            <h2 className="text-lg font-bold text-forge-text">Skills Demonstradas</h2>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              {
                icon: Layers,
                title: "Escalabilidade",
                desc: "Arquitetura preparada para crescimento horizontal",
              },
              {
                icon: Shield,
                title: "Segurança",
                desc: "Rate limiting, validação e autenticação robusta",
              },
              {
                icon: Activity,
                title: "Concorrência",
                desc: "Filas, workers e processamento assíncrono",
              },
              {
                icon: GitBranch,
                title: "Arquitetura",
                desc: "Padrões CQRS, modularidade e separation of concerns",
              },
            ].map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2 }}
                className="rounded-xl border border-forge-border bg-forge-bg p-4 transition-colors hover:border-forge-accent/20"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-forge-accent/10 p-2">
                    <skill.icon className="h-5 w-5 text-forge-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-forge-text">{skill.title}</h3>
                    <p className="text-xs text-forge-text-secondary">{skill.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInView>

      {/* Differential */}
      <FadeInView delay={0.25} className="mt-6">
        <div className="rounded-xl border border-forge-accent/20 bg-gradient-to-br from-forge-accent/5 via-forge-card to-forge-accent-secondary/5 p-6">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-forge-accent" />
            <h2 className="text-lg font-bold text-forge-text">Diferencial Curricular</h2>
          </div>

          <div className="mt-2 rounded-lg bg-forge-accent/5 p-4">
            <p className="text-sm font-medium text-forge-accent">
              ✨ Esse projeto demonstra conhecimentos valorizados no mercado backend.
            </p>
          </div>

          <div className="mt-4 space-y-2">
            {project.differentials.map((diff) => (
              <div key={diff} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forge-success/10">
                  <Zap className="h-3 w-3 text-forge-success" />
                </div>
                <span className="text-sm text-forge-text">{diff}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <Button className="group bg-forge-accent text-white hover:bg-forge-accent/90">
              Começar Implementação
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Link href="/generate">
              <Button
                variant="outline"
                className="border-forge-border text-forge-text-secondary hover:bg-forge-bg"
              >
                Gerar Outro Projeto
              </Button>
            </Link>
          </div>
        </div>
      </FadeInView>
    </div>
  );
}
