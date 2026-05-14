"use client";

import { useState, useMemo } from "react";
import { FadeIn } from "@/components/animations";
import { TechBadge, ProgressBar } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { languages, frameworks, interests, concepts, objectives, difficulties } from "@/constants";
import type { GeneratorFormData } from "@/types";
import {
  Sparkles,
  ArrowRight,
  Code2,
  Layers,
  Target,
  Gauge,
  Compass,
  Puzzle,
  Cpu,
  Database,
  MessageSquare,
  Shield,
  Activity,
  RefreshCcw,
  GitBranch,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function GeneratePage() {
  const [form, setForm] = useState<GeneratorFormData>({
    language: "TypeScript",
    framework: "NestJS",
    level: 2,
    objective: "Evoluir para Sênior",
    difficulty: 2,
    interest: "Microsserviços",
    concepts: ["Redis / Cache", "Docker / Containers", "RabbitMQ / Kafka"],
  });

  const [generated, setGenerated] = useState(false);

  const availableFrameworks = useMemo(
    () => frameworks[form.language] || [],
    [form.language]
  );

  const toggleConcept = (concept: string) => {
    setForm((prev) => ({
      ...prev,
      concepts: prev.concepts.includes(concept)
        ? prev.concepts.filter((c) => c !== concept)
        : [...prev.concepts, concept],
    }));
  };

  const previewProject = useMemo(() => {
    const projectNames: Record<string, string> = {
      Microsserviços: "Distributed Order Pipeline",
      "Event-Driven": "Event Processing Engine",
      "APIs RESTful": "API Gateway Service",
      GraphQL: "GraphQL Federation Hub",
      CQRS: "CQRS Command Center",
      Mensageria: "Message Broker Service",
      "Real-time": "Real-Time Sync Engine",
      Serverless: "Serverless Functions Platform",
    };

    return {
      name: projectNames[form.interest] || "Backend Engineering Project",
      stack: [form.language, form.framework, ...form.concepts.slice(0, 3).map(c => c.split(" / ")[0])],
      score: Math.min(60 + form.difficulty * 10 + form.concepts.length * 3, 98),
      difficulty: difficulties[form.difficulty],
      architecture:
        form.difficulty >= 2
          ? "Microsserviços + Event-Driven"
          : "Modular Monolith",
    };
  }, [form]);

  const handleGenerate = () => {
    setGenerated(true);
    setTimeout(() => setGenerated(false), 2000);
  };

  return (
    <div className="mx-auto max-w-7xl">
      <FadeIn>
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-forge-accent/10 p-2.5">
            <Sparkles className="h-5 w-5 text-forge-accent" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-forge-text">Gerar Projeto</h1>
            <p className="text-sm text-forge-text-secondary">
              Configure os parâmetros e gere um projeto backend personalizado.
            </p>
          </div>
        </div>
      </FadeIn>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr,1fr]">
        {/* Form */}
        <FadeIn delay={0.1}>
          <div className="space-y-6 rounded-xl border border-forge-border bg-forge-card p-6">
            {/* Language */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-forge-text">
                <Code2 className="h-4 w-4 text-forge-accent" />
                Linguagem
              </label>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() =>
                      setForm((p) => ({
                        ...p,
                        language: lang,
                        framework: frameworks[lang]?.[0] || "",
                      }))
                    }
                    className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-all ${
                      form.language === lang
                        ? "border-forge-accent bg-forge-accent/10 text-forge-accent"
                        : "border-forge-border bg-forge-bg text-forge-text-secondary hover:border-forge-accent/30 hover:text-forge-text"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Framework */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-forge-text">
                <Layers className="h-4 w-4 text-forge-accent" />
                Framework
              </label>
              <div className="flex flex-wrap gap-2">
                {availableFrameworks.map((fw) => (
                  <button
                    key={fw}
                    onClick={() => setForm((p) => ({ ...p, framework: fw }))}
                    className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-all ${
                      form.framework === fw
                        ? "border-forge-accent bg-forge-accent/10 text-forge-accent"
                        : "border-forge-border bg-forge-bg text-forge-text-secondary hover:border-forge-accent/30 hover:text-forge-text"
                    }`}
                  >
                    {fw}
                  </button>
                ))}
              </div>
            </div>

            {/* Level */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-forge-text">
                <Gauge className="h-4 w-4 text-forge-accent" />
                Nível Técnico
              </label>
              <div className="px-1">
                <Slider
                  value={[form.level]}
                  onValueChange={(v) => setForm((p) => ({ ...p, level: Array.isArray(v) ? v[0] : v }))}
                  max={3}
                  step={1}
                  className="py-2"
                />
                <div className="mt-1 flex justify-between text-[10px] text-forge-text-secondary">
                  {difficulties.map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Objective */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-forge-text">
                <Target className="h-4 w-4 text-forge-accent" />
                Objetivo Profissional
              </label>
              <div className="flex flex-wrap gap-2">
                {objectives.map((obj) => (
                  <button
                    key={obj}
                    onClick={() => setForm((p) => ({ ...p, objective: obj }))}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                      form.objective === obj
                        ? "border-forge-accent bg-forge-accent/10 text-forge-accent"
                        : "border-forge-border bg-forge-bg text-forge-text-secondary hover:border-forge-accent/30 hover:text-forge-text"
                    }`}
                  >
                    {obj}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-forge-text">
                <Gauge className="h-4 w-4 text-forge-accent-secondary" />
                Dificuldade do Projeto
              </label>
              <div className="px-1">
                <Slider
                  value={[form.difficulty]}
                  onValueChange={(v) => setForm((p) => ({ ...p, difficulty: Array.isArray(v) ? v[0] : v }))}
                  max={3}
                  step={1}
                  className="py-2"
                />
                <div className="mt-1 flex justify-between text-[10px] text-forge-text-secondary">
                  {difficulties.map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Interest */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-forge-text">
                <Compass className="h-4 w-4 text-forge-accent" />
                Área de Interesse
              </label>
              <div className="flex flex-wrap gap-2">
                {interests.map((int) => (
                  <button
                    key={int}
                    onClick={() => setForm((p) => ({ ...p, interest: int }))}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                      form.interest === int
                        ? "border-forge-accent bg-forge-accent/10 text-forge-accent"
                        : "border-forge-border bg-forge-bg text-forge-text-secondary hover:border-forge-accent/30 hover:text-forge-text"
                    }`}
                  >
                    {int}
                  </button>
                ))}
              </div>
            </div>

            {/* Concepts */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-forge-text">
                <Puzzle className="h-4 w-4 text-forge-accent" />
                Conceitos Desejados
              </label>
              <div className="flex flex-wrap gap-2">
                {concepts.map((concept) => (
                  <button
                    key={concept}
                    onClick={() => toggleConcept(concept)}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-medium transition-all ${
                      form.concepts.includes(concept)
                        ? "border-forge-accent bg-forge-accent/10 text-forge-accent"
                        : "border-forge-border bg-forge-bg text-forge-text-secondary hover:border-forge-accent/30 hover:text-forge-text"
                    }`}
                  >
                    {concept}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate button */}
            <Button
              size="lg"
              className="group w-full bg-forge-accent text-white hover:bg-forge-accent/90"
              onClick={handleGenerate}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Gerar Projeto
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </FadeIn>

        {/* Preview */}
        <FadeIn delay={0.2}>
          <div className="sticky top-24 space-y-4">
            <div className="rounded-xl border border-forge-accent/20 bg-forge-card p-6 shadow-lg shadow-forge-accent/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-forge-accent" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-forge-text-secondary">
                    Preview do Projeto
                  </span>
                </div>
                <AnimatePresence>
                  {generated && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="rounded-full bg-forge-success/10 px-2 py-0.5 text-[10px] font-semibold text-forge-success"
                    >
                      ✓ Gerado!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Project Name */}
              <motion.h3
                key={previewProject.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-xl font-bold text-forge-text"
              >
                {previewProject.name}
              </motion.h3>

              {/* Architecture */}
              <div className="mt-2 flex items-center gap-2">
                <GitBranch className="h-3.5 w-3.5 text-forge-accent-secondary" />
                <motion.span
                  key={previewProject.architecture}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-forge-accent-secondary"
                >
                  {previewProject.architecture}
                </motion.span>
              </div>

              {/* Score */}
              <div className="mt-5 flex items-center gap-4">
                <motion.div
                  key={previewProject.score}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex h-16 w-16 flex-col items-center justify-center rounded-xl border border-forge-accent/30 bg-forge-accent/10"
                >
                  <span className="text-2xl font-black text-forge-accent">
                    {previewProject.score}
                  </span>
                  <span className="text-[8px] text-forge-text-secondary">Score</span>
                </motion.div>

                <div className="flex-1">
                  <p className="text-xs text-forge-text-secondary">Score Curricular</p>
                  <ProgressBar
                    value={previewProject.score}
                    showLabel
                    size="md"
                    variant={previewProject.score >= 80 ? "success" : "accent"}
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Stack */}
              <div className="mt-5">
                <p className="mb-2 text-xs font-semibold text-forge-text-secondary">Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {previewProject.stack.map((tech) => (
                    <TechBadge key={tech} label={tech} variant="accent" />
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold text-forge-text-secondary">Dificuldade</p>
                <TechBadge
                  label={previewProject.difficulty}
                  variant={
                    previewProject.difficulty === "Expert"
                      ? "danger"
                      : previewProject.difficulty === "Avançado"
                      ? "warning"
                      : "accent"
                  }
                />
              </div>

              {/* Concepts */}
              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold text-forge-text-secondary">
                  Conceitos Aplicados
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {form.concepts.map((concept) => (
                    <motion.div
                      key={concept}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <TechBadge label={concept} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Architecture Diagram Mini */}
              <div className="mt-6 rounded-lg border border-forge-border bg-forge-bg p-4">
                <p className="mb-3 text-xs font-semibold text-forge-text-secondary">
                  Arquitetura
                </p>
                <div className="flex items-center justify-center gap-2">
                  {[
                    { icon: Cpu, label: "API" },
                    { icon: Database, label: "DB" },
                    { icon: RefreshCcw, label: "Cache" },
                    { icon: MessageSquare, label: "Queue" },
                  ].map((item, i) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <div className="flex flex-col items-center">
                        <div className="rounded-lg border border-forge-border bg-forge-card p-2">
                          <item.icon className="h-4 w-4 text-forge-accent" />
                        </div>
                        <span className="mt-1 text-[9px] text-forge-text-secondary">
                          {item.label}
                        </span>
                      </div>
                      {i < 3 && (
                        <ArrowRight className="h-3 w-3 text-forge-border" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link href="/project/gen-1" className="mt-6 block">
                <Button className="group w-full bg-forge-accent text-white hover:bg-forge-accent/90">
                  Ver Projeto Completo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
