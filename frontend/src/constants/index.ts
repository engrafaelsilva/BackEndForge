import {
  LayoutDashboard,
  Rocket,
  Map,
  FolderGit2,
  UserCircle,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const sidebarNavItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Gerar Projeto", href: "/generate", icon: Rocket },
  { label: "Roadmaps", href: "/roadmaps", icon: Map },
  { label: "Projetos Salvos", href: "/projects", icon: FolderGit2 },
  { label: "Perfil Técnico", href: "/profile", icon: UserCircle },
  { label: "Configurações", href: "/settings", icon: Settings },
];

export const techBadges = [
  "Arquitetura",
  "Escalabilidade",
  "Microsserviços",
  "Roadmaps",
  "Engenharia Real",
];

export const languages = [
  "TypeScript",
  "Java",
  "Go",
  "Python",
  "Rust",
  "C#",
  "Kotlin",
];

export const frameworks: Record<string, string[]> = {
  TypeScript: ["NestJS", "Express", "Fastify", "Hono"],
  Java: ["Spring Boot", "Quarkus", "Micronaut"],
  Go: ["Gin", "Fiber", "Echo", "Chi"],
  Python: ["FastAPI", "Django", "Flask"],
  Rust: ["Actix Web", "Axum", "Rocket"],
  "C#": [".NET 8", "ASP.NET Core"],
  Kotlin: ["Ktor", "Spring Boot"],
};

export const difficulties = ["Iniciante", "Intermediário", "Avançado", "Expert"];

export const interests = [
  "APIs RESTful",
  "GraphQL",
  "Microsserviços",
  "Event-Driven",
  "CQRS",
  "Mensageria",
  "Real-time",
  "Serverless",
];

export const concepts = [
  "Redis / Cache",
  "Docker / Containers",
  "RabbitMQ / Kafka",
  "JWT / OAuth2",
  "Rate Limiting",
  "Circuit Breaker",
  "Observabilidade",
  "Testes E2E",
  "CI/CD",
  "SOLID",
  "DDD",
  "Clean Architecture",
  "gRPC",
  "WebSockets",
  "Retry Pattern",
  "Database Sharding",
];

export const objectives = [
  "Conquistar primeira vaga",
  "Migrar para Backend",
  "Evoluir para Sênior",
  "Buscar Staff/Principal",
  "Preparar para Big Tech",
];
