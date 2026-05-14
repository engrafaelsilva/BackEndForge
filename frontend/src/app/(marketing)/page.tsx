"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, FadeInView, StaggerContainer, StaggerItem } from "@/components/animations";
import { TechBadge, ProgressBar } from "@/components/common";
import {
  Terminal,
  ArrowRight,
  Zap,
  GitBranch,
  Layers,
  Shield,
  Activity,
  RefreshCcw,
  Server,
  Database,
  Box,
  MessageSquare,
  ChevronRight,
  Check,
  X,
  User,
  Rocket,
  TrendingUp,
  Cpu,
  Globe,
} from "lucide-react";
import { techBadges } from "@/constants";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-forge-bg">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-forge-border/50 bg-forge-bg/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-forge-accent">
              <Terminal className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold text-forge-text">BackendForge</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#problem" className="text-sm text-forge-text-secondary transition-colors hover:text-forge-text">
              Problema
            </a>
            <a href="#how" className="text-sm text-forge-text-secondary transition-colors hover:text-forge-text">
              Como Funciona
            </a>
            <a href="#features" className="text-sm text-forge-text-secondary transition-colors hover:text-forge-text">
              Features
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="text-sm text-forge-text-secondary hover:text-forge-text">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-forge-accent text-sm text-white hover:bg-forge-accent/90">
                Começar Grátis
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] bg-[radial-gradient(circle,rgba(139,92,246,0.06),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <div>
              <FadeIn delay={0}>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-forge-border bg-forge-card px-4 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forge-success opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-forge-success" />
                  </span>
                  <span className="text-xs font-medium text-forge-text-secondary">
                    Plataforma em desenvolvimento ativo
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-forge-text sm:text-5xl lg:text-[3.5rem]">
                  Pare de criar{" "}
                  <span className="bg-gradient-to-r from-forge-accent to-forge-accent-secondary bg-clip-text text-transparent">
                    CRUDs genéricos.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-forge-text-secondary">
                  Gere projetos Back-End modernos, estratégicos e alinhados ao mercado para evoluir
                  como{" "}
                  <span className="font-medium text-forge-text">engenheiro de software.</span>
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/generate">
                    <Button
                      size="lg"
                      className="group bg-forge-accent px-6 text-white hover:bg-forge-accent/90"
                    >
                      Gerar Meu Projeto
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-forge-border text-forge-text hover:bg-forge-card"
                    >
                      Explorar Plataforma
                    </Button>
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-2">
                  {techBadges.map((badge) => (
                    <TechBadge key={badge} label={badge} variant="accent" />
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right - Platform Mockup */}
            <FadeIn delay={0.3} direction="left">
              <div className="relative">
                {/* Glow behind */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-forge-accent/10 via-forge-accent-secondary/10 to-forge-accent/5 blur-3xl" />

                <div className="relative rounded-2xl border border-forge-border bg-forge-card p-1 shadow-2xl shadow-black/40">
                  {/* Fake window bar */}
                  <div className="flex items-center gap-1.5 rounded-t-xl bg-forge-sidebar px-3 py-2.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                    <span className="ml-3 text-[11px] text-forge-text-secondary">
                      backendforge.dev/dashboard
                    </span>
                  </div>

                  {/* Mockup Content */}
                  <div className="space-y-3 p-4">
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Projetos", value: "14", icon: "📁" },
                        { label: "Skills", value: "23", icon: "⚡" },
                        { label: "Score", value: "92", icon: "🎯" },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-lg border border-forge-border bg-forge-bg p-3"
                        >
                          <span className="text-sm">{stat.icon}</span>
                          <p className="mt-1 text-lg font-bold text-forge-text">{stat.value}</p>
                          <p className="text-[10px] text-forge-text-secondary">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Skill bars */}
                    <div className="rounded-lg border border-forge-border bg-forge-bg p-3">
                      <p className="mb-2 text-xs font-semibold text-forge-text">Evolução Técnica</p>
                      {["Node.js", "Docker", "Redis"].map((skill, i) => (
                        <div key={skill} className="mb-1.5 last:mb-0">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-forge-text-secondary">{skill}</span>
                            <span className="text-[10px] text-forge-accent">
                              {[80, 55, 40][i]}%
                            </span>
                          </div>
                          <ProgressBar value={[80, 55, 40][i]} size="sm" />
                        </div>
                      ))}
                    </div>

                    {/* Roadmap mini */}
                    <div className="rounded-lg border border-forge-accent/20 bg-forge-accent/5 p-3">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold text-forge-text">Projeto Recomendado</p>
                        <span className="rounded bg-forge-accent/20 px-1.5 py-0.5 text-[10px] font-bold text-forge-accent">
                          92
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-forge-text-secondary">
                        Order Processing Pipeline
                      </p>
                      <div className="mt-2 flex gap-1">
                        {["NestJS", "Redis", "RabbitMQ"].map((t) => (
                          <span
                            key={t}
                            className="rounded border border-forge-border bg-forge-bg px-1.5 py-0.5 text-[9px] text-forge-text-secondary"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="border-t border-forge-border bg-forge-sidebar/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInView>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-forge-text sm:text-4xl">
                O problema com projetos{" "}
                <span className="text-forge-text-secondary">&quot;convencionais&quot;</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-forge-text-secondary">
                A diferença entre um CRUD genérico e um projeto que impressiona no currículo é
                abismal. Veja o que separa um do outro.
              </p>
            </div>
          </FadeInView>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {/* CRUD Comum */}
            <FadeInView delay={0.1} direction="right">
              <div className="rounded-xl border border-forge-danger/20 bg-forge-card p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-forge-danger/10 p-2">
                    <X className="h-5 w-5 text-forge-danger" />
                  </div>
                  <h3 className="text-lg font-bold text-forge-text">CRUD Comum</h3>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    "Express.js básico com rotas simples",
                    "Sem tratamento de erros adequado",
                    "Sem cache ou otimização",
                    "Sem testes automatizados",
                    "Sem containerização",
                    "Sem padrões de arquitetura",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forge-danger/10">
                        <X className="h-3 w-3 text-forge-danger" />
                      </div>
                      <span className="text-sm text-forge-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-lg bg-forge-danger/5 p-3">
                  <p className="text-xs text-forge-danger/80">
                    ⚠️ Esse tipo de projeto não diferencia ninguém no mercado.
                  </p>
                </div>
              </div>
            </FadeInView>

            {/* Projeto Profissional */}
            <FadeInView delay={0.2} direction="left">
              <div className="rounded-xl border border-forge-accent/30 bg-forge-card p-6 shadow-lg shadow-forge-accent/5">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-forge-accent/10 p-2">
                    <Check className="h-5 w-5 text-forge-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-forge-text">Projeto BackendForge</h3>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    { text: "Cache com Redis e invalidação inteligente", icon: Database },
                    { text: "Filas e mensageria assíncrona", icon: MessageSquare },
                    { text: "Observabilidade com métricas e tracing", icon: Activity },
                    { text: "Retries com backoff exponencial", icon: RefreshCcw },
                    { text: "Arquitetura modular e escalável", icon: Layers },
                    { text: "Docker Compose + CI/CD pipeline", icon: Box },
                  ].map(({ text, icon: Icon }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forge-accent/10">
                        <Icon className="h-3 w-3 text-forge-accent" />
                      </div>
                      <span className="text-sm text-forge-text">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-lg bg-forge-accent/5 p-3">
                  <p className="text-xs text-forge-accent">
                    ✨ Esse projeto demonstra skills valorizadas pelo mercado.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-forge-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInView>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-forge-text sm:text-4xl">
                Como funciona
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-forge-text-secondary">
                Três passos para transformar sua evolução como engenheiro backend.
              </p>
            </div>
          </FadeInView>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                icon: User,
                title: "Configure seu perfil",
                description:
                  "Defina sua stack, nível técnico, objetivos profissionais e áreas de interesse. A plataforma entende onde você está e para onde quer ir.",
              },
              {
                step: "02",
                icon: Rocket,
                title: "Gere projetos personalizados",
                description:
                  "Receba projetos backend completos com arquitetura real, roadmap de implementação, tecnologias relevantes e score curricular.",
              },
              {
                step: "03",
                icon: TrendingUp,
                title: "Evolua como engenheiro",
                description:
                  "Acompanhe seu progresso, desbloqueie skills, suba de nível e construa um portfólio que impressiona recrutadores.",
              },
            ].map((item, index) => (
              <FadeInView key={item.step} delay={index * 0.15}>
                <div className="group relative rounded-xl border border-forge-border bg-forge-card p-6 transition-all duration-300 hover:border-forge-accent/30">
                  {/* Step number */}
                  <span className="text-5xl font-black text-forge-border/50">{item.step}</span>

                  <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forge-accent/10">
                    <item.icon className="h-6 w-6 text-forge-accent" />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-forge-text">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forge-text-secondary">
                    {item.description}
                  </p>

                  {/* Connector line (desktop) */}
                  {index < 2 && (
                    <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-forge-border md:block" />
                  )}
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="border-t border-forge-border bg-forge-sidebar/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInView>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-forge-text sm:text-4xl">
                Feito para{" "}
                <span className="bg-gradient-to-r from-forge-accent to-forge-accent-secondary bg-clip-text text-transparent">
                  engenheiros reais
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-forge-text-secondary">
                Cada feature foi pensada para quem leva engenharia de software a sério.
              </p>
            </div>
          </FadeInView>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Cpu,
                title: "Gerador Inteligente",
                description: "Projetos personalizados baseados no seu perfil técnico e objetivos.",
              },
              {
                icon: GitBranch,
                title: "Arquitetura Real",
                description: "Padrões como CQRS, Event Sourcing, Clean Architecture e DDD.",
              },
              {
                icon: Layers,
                title: "Roadmaps Visuais",
                description: "Trilhas de evolução inspiradas no roadmap.sh com progresso real.",
              },
              {
                icon: Shield,
                title: "Score Curricular",
                description: "Métrica de impacto do projeto no seu currículo e perfil técnico.",
              },
              {
                icon: Activity,
                title: "Observabilidade",
                description: "Métricas, logs estruturados e tracing distribuído em cada projeto.",
              },
              {
                icon: Globe,
                title: "Escala de Mercado",
                description: "Projetos alinhados com o que Big Techs e startups exigem.",
              },
            ].map((feature, index) => (
              <FadeInView key={feature.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="group rounded-xl border border-forge-border bg-forge-card p-5 transition-all duration-300 hover:border-forge-accent/20"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forge-accent/10 transition-colors group-hover:bg-forge-accent/15">
                    <feature.icon className="h-5 w-5 text-forge-accent" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-forge-text">{feature.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-forge-text-secondary">
                    {feature.description}
                  </p>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-forge-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInView>
            <div className="relative overflow-hidden rounded-2xl border border-forge-accent/20 bg-gradient-to-br from-forge-accent/10 via-forge-card to-forge-accent-secondary/10 p-12 text-center">
              <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-forge-accent/10 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-forge-accent-secondary/10 blur-3xl" />

              <div className="relative">
                <h2 className="text-3xl font-bold text-forge-text sm:text-4xl">
                  Pronto para evoluir?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-forge-text-secondary">
                  Comece agora a gerar projetos que realmente fazem diferença no seu currículo e na
                  sua carreira como engenheiro backend.
                </p>
                <div className="mt-8 flex justify-center gap-3">
                  <Link href="/generate">
                    <Button
                      size="lg"
                      className="group bg-forge-accent px-8 text-white hover:bg-forge-accent/90"
                    >
                      Começar Agora
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-forge-border bg-forge-sidebar/50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-forge-accent">
                <Terminal className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="font-bold text-forge-text">BackendForge</span>
            </div>

            <p className="text-xs text-forge-text-secondary">
              © 2025 BackendForge. Feito para desenvolvedores que levam engenharia a sério.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
