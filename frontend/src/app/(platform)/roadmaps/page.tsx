"use client";

import { FadeIn } from "@/components/animations";
import { RoadmapNode, TechBadge, ProgressBar } from "@/components/common";
import { mockRoadmapSteps } from "@/services/mock-data";
import { Map, Filter, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const filters = ["Todos", "Concluídos", "Em Progresso", "Bloqueados"];

export default function RoadmapsPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredSteps = mockRoadmapSteps.filter((step) => {
    if (activeFilter === "Todos") return true;
    if (activeFilter === "Concluídos") return step.status === "completed";
    if (activeFilter === "Em Progresso") return step.status === "in-progress";
    if (activeFilter === "Bloqueados") return step.status === "locked";
    return true;
  });

  const completedCount = mockRoadmapSteps.filter((s) => s.status === "completed").length;
  const totalCount = mockRoadmapSteps.length;
  const overallProgress = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-forge-accent/10 p-2.5">
              <Map className="h-5 w-5 text-forge-accent" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-forge-text">Roadmap Backend</h1>
              <p className="text-sm text-forge-text-secondary">
                Sua trilha de evolução como engenheiro backend.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <TechBadge label={`${completedCount}/${totalCount} etapas`} variant="accent" />
            <TechBadge label={`${overallProgress}% completo`} variant="success" />
          </div>
        </div>
      </FadeIn>

      {/* Overall Progress */}
      <FadeIn delay={0.1}>
        <div className="mt-6 rounded-xl border border-forge-border bg-forge-card p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-forge-accent" />
              <span className="text-sm font-semibold text-forge-text">Progresso Geral</span>
            </div>
            <span className="text-sm font-bold text-forge-accent">{overallProgress}%</span>
          </div>
          <ProgressBar value={overallProgress} size="lg" className="mt-3" variant="accent" />

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: "Concluídas", count: completedCount, color: "text-forge-success" },
              {
                label: "Em Progresso",
                count: mockRoadmapSteps.filter((s) => s.status === "in-progress").length,
                color: "text-forge-accent",
              },
              {
                label: "Bloqueadas",
                count: mockRoadmapSteps.filter((s) => s.status === "locked").length,
                color: "text-forge-text-secondary",
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className={`text-xl font-bold ${stat.color}`}>{stat.count}</p>
                <p className="text-[10px] text-forge-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Filters */}
      <FadeIn delay={0.15}>
        <div className="mt-6 flex items-center gap-2">
          <Filter className="h-4 w-4 text-forge-text-secondary" />
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                activeFilter === filter
                  ? "border-forge-accent bg-forge-accent/10 text-forge-accent"
                  : "border-forge-border bg-forge-card text-forge-text-secondary hover:text-forge-text"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Roadmap Tree */}
      <div className="mt-6 space-y-0">
        {filteredSteps.map((step, index) => (
          <RoadmapNode
            key={step.id}
            step={step}
            isLast={index === filteredSteps.length - 1}
            index={index}
          />
        ))}
      </div>

      {/* Legend */}
      <FadeIn delay={0.3}>
        <div className="mt-8 rounded-xl border border-forge-border bg-forge-card p-4">
          <p className="mb-3 text-xs font-semibold text-forge-text-secondary">Legenda</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Concluído", color: "bg-forge-success" },
              { label: "Em Progresso", color: "bg-forge-accent" },
              { label: "Bloqueado", color: "bg-forge-text-secondary" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                <span className="text-xs text-forge-text-secondary">{item.label}</span>
              </div>
            ))}
            <div className="ml-auto flex gap-3">
              {[
                { label: "Easy", color: "text-green-400" },
                { label: "Medium", color: "text-blue-400" },
                { label: "Hard", color: "text-amber-400" },
                { label: "Expert", color: "text-red-400" },
              ].map((d) => (
                <span key={d.label} className={`text-[10px] font-semibold uppercase ${d.color}`}>
                  {d.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
