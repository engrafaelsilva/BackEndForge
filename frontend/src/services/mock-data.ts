import type { Project, UserProfile, RoadmapStep } from "@/types";

export const mockUser: UserProfile = {
  name: "Rafa",
  level: 12,
  xp: 2840,
  xpToNext: 3500,
  title: "Backend Engineer",
  skills: [
    { name: "Node.js", level: 8, maxLevel: 10, category: "Runtime" },
    { name: "TypeScript", level: 7, maxLevel: 10, category: "Language" },
    { name: "PostgreSQL", level: 6, maxLevel: 10, category: "Database" },
    { name: "Docker", level: 5, maxLevel: 10, category: "DevOps" },
    { name: "Redis", level: 4, maxLevel: 10, category: "Cache" },
    { name: "RabbitMQ", level: 3, maxLevel: 10, category: "Messaging" },
    { name: "Kubernetes", level: 2, maxLevel: 10, category: "Orchestration" },
    { name: "gRPC", level: 3, maxLevel: 10, category: "Communication" },
  ],
  technologies: [
    "Node.js", "TypeScript", "NestJS", "PostgreSQL", "Redis",
    "Docker", "RabbitMQ", "Jest", "Prisma", "Git",
  ],
  objectives: ["Evoluir para Sênior", "Dominar arquitetura de microsserviços"],
  badges: [
    { name: "Primeiro Projeto", icon: "🚀", earned: true, description: "Gerou o primeiro projeto" },
    { name: "API Master", icon: "⚡", earned: true, description: "Completou 5 projetos de API" },
    { name: "Docker Ready", icon: "🐳", earned: true, description: "Utilizou Docker em 3 projetos" },
    { name: "Arquiteto", icon: "🏗️", earned: false, description: "Completou projeto com Clean Architecture" },
    { name: "Full Observability", icon: "📊", earned: false, description: "Implementou observabilidade completa" },
    { name: "Event Master", icon: "📨", earned: false, description: "Dominou mensageria e eventos" },
  ],
  stats: {
    projectsGenerated: 14,
    projectsCompleted: 7,
    skillsLearned: 23,
    streakDays: 12,
  },
};

export const mockRecommendedProject: Project = {
  id: "rec-1",
  name: "Order Processing Pipeline",
  description:
    "Sistema de processamento de pedidos com CQRS, Event Sourcing e comunicação assíncrona via mensageria. Inclui rate limiting, circuit breaker e observabilidade completa.",
  stack: ["NestJS", "PostgreSQL", "Redis", "RabbitMQ", "Docker", "Prometheus"],
  difficulty: "Avançado",
  score: 92,
  architecture: "Microsserviços + Event-Driven",
  concepts: [
    "CQRS",
    "Event Sourcing",
    "Circuit Breaker",
    "Rate Limiting",
    "Observabilidade",
    "Mensageria Assíncrona",
  ],
  roadmap: [
    { id: "1", title: "Setup do Projeto", description: "Configuração inicial com NestJS e Docker", status: "completed", difficulty: "easy", progress: 100 },
    { id: "2", title: "Modelagem de Domínio", description: "Definição de entidades e agregados", status: "completed", difficulty: "medium", progress: 100 },
    { id: "3", title: "API REST", description: "Endpoints de pedidos com validação", status: "in-progress", difficulty: "medium", progress: 60 },
    { id: "4", title: "Mensageria", description: "Integração com RabbitMQ para eventos", status: "locked", difficulty: "hard", progress: 0 },
    { id: "5", title: "CQRS Pattern", description: "Separação de leitura e escrita", status: "locked", difficulty: "hard", progress: 0 },
    { id: "6", title: "Observabilidade", description: "Métricas, logs e tracing", status: "locked", difficulty: "expert", progress: 0 },
  ],
  differentials: [
    "Demonstra domínio de padrões arquiteturais avançados",
    "Experiência prática com sistemas distribuídos",
    "Conhecimento em resiliência e tolerância a falhas",
    "Habilidade em observabilidade e monitoramento",
  ],
};

export const mockGeneratedProject: Project = {
  id: "gen-1",
  name: "Real-Time Notification Engine",
  description:
    "Motor de notificações em tempo real com suporte a múltiplos canais (WebSocket, email, push). Implementa filas de prioridade, retry com backoff exponencial e rate limiting por usuário.",
  stack: ["TypeScript", "NestJS", "Redis", "PostgreSQL", "BullMQ", "Socket.IO", "Docker"],
  difficulty: "Avançado",
  score: 88,
  architecture: "Modular Monolith → Microsserviços",
  concepts: [
    "WebSockets",
    "Filas de Prioridade",
    "Retry com Backoff",
    "Rate Limiting",
    "Template Engine",
    "Multi-channel Delivery",
  ],
  roadmap: [
    { id: "1", title: "Arquitetura Base", description: "Setup NestJS modular com Docker Compose", status: "completed", difficulty: "easy", progress: 100 },
    { id: "2", title: "Sistema de Filas", description: "BullMQ com filas de prioridade", status: "completed", difficulty: "medium", progress: 100 },
    { id: "3", title: "Canal WebSocket", description: "Notificações real-time via Socket.IO", status: "in-progress", difficulty: "hard", progress: 45 },
    { id: "4", title: "Canal Email", description: "Templates e envio assíncrono", status: "locked", difficulty: "medium", progress: 0 },
    { id: "5", title: "Rate Limiting", description: "Controle de taxa por usuário e canal", status: "locked", difficulty: "hard", progress: 0 },
    { id: "6", title: "Retry Engine", description: "Backoff exponencial com dead letter queue", status: "locked", difficulty: "expert", progress: 0 },
    { id: "7", title: "Dashboard de Métricas", description: "Monitoramento de entregas e falhas", status: "locked", difficulty: "hard", progress: 0 },
  ],
  differentials: [
    "Domínio completo de sistemas de mensageria e filas",
    "Experiência com comunicação real-time em produção",
    "Padrões de resiliência (retry, backoff, DLQ)",
    "Arquitetura preparada para migração a microsserviços",
  ],
};

export const mockRoadmapSteps: RoadmapStep[] = [
  { id: "r1", title: "Fundamentos Backend", description: "HTTP, REST, JSON, servidores", status: "completed", difficulty: "easy", progress: 100 },
  { id: "r2", title: "APIs RESTful", description: "Design, versionamento, HATEOAS", status: "completed", difficulty: "easy", progress: 100 },
  { id: "r3", title: "Autenticação & JWT", description: "OAuth2, JWT, sessions, RBAC", status: "completed", difficulty: "medium", progress: 100 },
  { id: "r4", title: "Banco de Dados", description: "SQL, NoSQL, ORMs, migrations", status: "completed", difficulty: "medium", progress: 100 },
  { id: "r5", title: "Docker & Containers", description: "Dockerfile, Compose, volumes, networks", status: "in-progress", difficulty: "medium", progress: 65 },
  { id: "r6", title: "Cache & Redis", description: "Estratégias de cache, invalidação, pub/sub", status: "in-progress", difficulty: "hard", progress: 30 },
  { id: "r7", title: "Mensageria", description: "RabbitMQ, Kafka, padrões de mensageria", status: "locked", difficulty: "hard", progress: 0 },
  { id: "r8", title: "Microsserviços", description: "Decomposição, comunicação, orquestração", status: "locked", difficulty: "expert", progress: 0 },
  { id: "r9", title: "Observabilidade", description: "Logs, métricas, tracing distribuído", status: "locked", difficulty: "expert", progress: 0 },
  { id: "r10", title: "Arquitetura Avançada", description: "CQRS, Event Sourcing, DDD, Saga Pattern", status: "locked", difficulty: "expert", progress: 0 },
];
