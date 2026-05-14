"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  className?: string;
}

export function StatCard({ label, value, icon: Icon, trend, trendUp, className }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-forge-border bg-forge-card p-5 transition-colors hover:border-forge-accent/30",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-forge-text-secondary">{label}</p>
          <p className="mt-1 text-2xl font-bold text-forge-text">{value}</p>
          {trend && (
            <p
              className={cn(
                "mt-1 text-xs font-medium",
                trendUp ? "text-forge-success" : "text-forge-danger"
              )}
            >
              {trend}
            </p>
          )}
        </div>
        <div className="rounded-lg bg-forge-accent/10 p-2.5">
          <Icon className="h-5 w-5 text-forge-accent" />
        </div>
      </div>
      {/* Subtle glow on hover */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-forge-accent/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}

interface SkillCardProps {
  name: string;
  level: number;
  maxLevel: number;
  category: string;
  className?: string;
}

export function SkillCard({ name, level, maxLevel, category, className }: SkillCardProps) {
  const percentage = Math.round((level / maxLevel) * 100);

  return (
    <motion.div
      whileHover={{ y: -1 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "rounded-xl border border-forge-border bg-forge-card p-4 transition-colors hover:border-forge-accent/20",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold text-forge-text">{name}</h4>
          <p className="text-xs text-forge-text-secondary">{category}</p>
        </div>
        <span className="rounded-md bg-forge-accent/10 px-2 py-0.5 text-xs font-semibold text-forge-accent">
          {level}/{maxLevel}
        </span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-forge-border">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-forge-accent to-forge-accent-secondary"
        />
      </div>
    </motion.div>
  );
}

interface ProjectCardProps {
  name: string;
  description: string;
  stack: string[];
  score: number;
  difficulty: string;
  featured?: boolean;
  className?: string;
  onClick?: () => void;
}

export function ProjectCard({
  name,
  description,
  stack,
  score,
  difficulty,
  featured,
  className,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onClick={onClick}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-xl border bg-forge-card p-5 transition-all duration-300",
        featured
          ? "border-forge-accent/40 shadow-lg shadow-forge-accent/5"
          : "border-forge-border hover:border-forge-accent/30",
        className
      )}
    >
      {featured && (
        <div className="absolute inset-0 bg-gradient-to-br from-forge-accent/5 via-transparent to-forge-accent-secondary/5" />
      )}

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-base font-bold text-forge-text">{name}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-forge-text-secondary">{description}</p>
          </div>
          {/* Score */}
          <div className="ml-4 flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forge-accent/10">
              <span className="text-lg font-bold text-forge-accent">{score}</span>
            </div>
            <span className="mt-1 text-[10px] text-forge-text-secondary">Score</span>
          </div>
        </div>

        {/* Stack */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-forge-border bg-forge-bg px-2 py-0.5 text-[11px] font-medium text-forge-text-secondary"
            >
              {tech}
            </span>
          ))}
          {stack.length > 5 && (
            <span className="rounded-md border border-forge-border bg-forge-bg px-2 py-0.5 text-[11px] text-forge-text-secondary">
              +{stack.length - 5}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <span
            className={cn(
              "rounded-md px-2 py-0.5 text-[11px] font-semibold",
              difficulty === "Avançado"
                ? "bg-amber-500/10 text-amber-400"
                : difficulty === "Expert"
                ? "bg-red-500/10 text-red-400"
                : difficulty === "Intermediário"
                ? "bg-blue-500/10 text-blue-400"
                : "bg-green-500/10 text-green-400"
            )}
          >
            {difficulty}
          </span>
          <span className="text-xs text-forge-accent opacity-0 transition-opacity group-hover:opacity-100">
            Ver projeto →
          </span>
        </div>
      </div>
    </motion.div>
  );
}
