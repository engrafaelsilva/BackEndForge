"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Lock, ArrowRight } from "lucide-react";
import type { RoadmapStep } from "@/types";

/* ─── Tech Badge ─── */
interface TechBadgeProps {
  label: string;
  variant?: "default" | "accent" | "success" | "warning" | "danger";
  className?: string;
}

export function TechBadge({ label, variant = "default", className }: TechBadgeProps) {
  const variants = {
    default: "border-forge-border bg-forge-bg text-forge-text-secondary",
    accent: "border-forge-accent/30 bg-forge-accent/10 text-forge-accent",
    success: "border-forge-success/30 bg-forge-success/10 text-forge-success",
    warning: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    danger: "border-forge-danger/30 bg-forge-danger/10 text-forge-danger",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
    >
      {label}
    </span>
  );
}

/* ─── Progress Bar ─── */
interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "accent" | "success" | "warning";
}

export function ProgressBar({
  value,
  max = 100,
  className,
  showLabel = false,
  size = "sm",
  variant = "accent",
}: ProgressBarProps) {
  const percentage = Math.min(Math.round((value / max) * 100), 100);
  const sizeClasses = { sm: "h-1.5", md: "h-2", lg: "h-3" };
  const variantClasses = {
    accent: "from-forge-accent to-forge-accent-secondary",
    success: "from-forge-success to-emerald-400",
    warning: "from-amber-500 to-orange-400",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("flex-1 overflow-hidden rounded-full bg-forge-border", sizeClasses[size])}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className={cn("h-full rounded-full bg-gradient-to-r", variantClasses[variant])}
        />
      </div>
      {showLabel && (
        <span className="text-xs tabular-nums text-forge-text-secondary">{percentage}%</span>
      )}
    </div>
  );
}

/* ─── Timeline ─── */
interface TimelineProps {
  steps: RoadmapStep[];
  className?: string;
}

export function Timeline({ steps, className }: TimelineProps) {
  return (
    <div className={cn("relative space-y-0", className)}>
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="relative flex gap-4 pb-8 last:pb-0"
        >
          {/* Line */}
          {index < steps.length - 1 && (
            <div className="absolute left-[15px] top-8 h-[calc(100%-16px)] w-px bg-forge-border" />
          )}

          {/* Node */}
          <div className="relative z-10 flex-shrink-0">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border-2",
                step.status === "completed"
                  ? "border-forge-success bg-forge-success/10"
                  : step.status === "in-progress"
                  ? "border-forge-accent bg-forge-accent/10"
                  : "border-forge-border bg-forge-card"
              )}
            >
              {step.status === "completed" ? (
                <Check className="h-4 w-4 text-forge-success" />
              ) : step.status === "in-progress" ? (
                <ArrowRight className="h-4 w-4 text-forge-accent" />
              ) : (
                <Lock className="h-3 w-3 text-forge-text-secondary" />
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 pt-0.5">
            <div className="flex items-center gap-2">
              <h4
                className={cn(
                  "text-sm font-semibold",
                  step.status === "locked" ? "text-forge-text-secondary" : "text-forge-text"
                )}
              >
                {step.title}
              </h4>
              <span
                className={cn(
                  "rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase",
                  step.difficulty === "easy"
                    ? "bg-green-500/10 text-green-400"
                    : step.difficulty === "medium"
                    ? "bg-blue-500/10 text-blue-400"
                    : step.difficulty === "hard"
                    ? "bg-amber-500/10 text-amber-400"
                    : "bg-red-500/10 text-red-400"
                )}
              >
                {step.difficulty}
              </span>
            </div>
            <p className="mt-0.5 text-xs text-forge-text-secondary">{step.description}</p>
            {step.status !== "locked" && (
              <ProgressBar value={step.progress} className="mt-2 max-w-xs" size="sm" />
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Roadmap Node ─── */
interface RoadmapNodeProps {
  step: RoadmapStep;
  isLast?: boolean;
  index?: number;
}

export function RoadmapNode({ step, isLast = false, index = 0 }: RoadmapNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative"
    >
      <div
        className={cn(
          "group relative rounded-xl border p-4 transition-all duration-300 hover:shadow-lg",
          step.status === "completed"
            ? "border-forge-success/30 bg-forge-success/5 hover:border-forge-success/50"
            : step.status === "in-progress"
            ? "border-forge-accent/30 bg-forge-accent/5 hover:border-forge-accent/50 shadow-md shadow-forge-accent/5"
            : "border-forge-border bg-forge-card hover:border-forge-border/80"
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-full",
                  step.status === "completed"
                    ? "bg-forge-success/20"
                    : step.status === "in-progress"
                    ? "bg-forge-accent/20"
                    : "bg-forge-border"
                )}
              >
                {step.status === "completed" ? (
                  <Check className="h-3.5 w-3.5 text-forge-success" />
                ) : step.status === "in-progress" ? (
                  <ArrowRight className="h-3.5 w-3.5 text-forge-accent" />
                ) : (
                  <Lock className="h-3 w-3 text-forge-text-secondary" />
                )}
              </div>
              <h4
                className={cn(
                  "text-sm font-semibold",
                  step.status === "locked" ? "text-forge-text-secondary" : "text-forge-text"
                )}
              >
                {step.title}
              </h4>
            </div>
            <p className="mt-1.5 pl-8 text-xs text-forge-text-secondary">{step.description}</p>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span
              className={cn(
                "rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                step.difficulty === "easy"
                  ? "bg-green-500/10 text-green-400"
                  : step.difficulty === "medium"
                  ? "bg-blue-500/10 text-blue-400"
                  : step.difficulty === "hard"
                  ? "bg-amber-500/10 text-amber-400"
                  : "bg-red-500/10 text-red-400"
              )}
            >
              {step.difficulty}
            </span>
            {step.status !== "locked" && (
              <span className="text-[10px] tabular-nums text-forge-text-secondary">
                {step.progress}%
              </span>
            )}
          </div>
        </div>

        {step.status !== "locked" && (
          <div className="mt-3 pl-8">
            <ProgressBar
              value={step.progress}
              size="sm"
              variant={step.status === "completed" ? "success" : "accent"}
            />
          </div>
        )}
      </div>

      {/* Connector */}
      {!isLast && (
        <div className="flex justify-center py-1">
          <div
            className={cn(
              "h-6 w-px",
              step.status === "completed" ? "bg-forge-success/40" : "bg-forge-border"
            )}
          />
        </div>
      )}
    </motion.div>
  );
}
