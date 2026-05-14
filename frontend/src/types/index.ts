export interface Skill {
  name: string;
  level: number;
  maxLevel: number;
  category: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  difficulty: string;
  score: number;
  architecture: string;
  concepts: string[];
  roadmap: RoadmapStep[];
  differentials: string[];
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "locked";
  difficulty: "easy" | "medium" | "hard" | "expert";
  progress: number;
}

export interface UserProfile {
  name: string;
  level: number;
  xp: number;
  xpToNext: number;
  title: string;
  skills: Skill[];
  technologies: string[];
  objectives: string[];
  badges: BadgeItem[];
  stats: UserStats;
}

export interface BadgeItem {
  name: string;
  icon: string;
  earned: boolean;
  description: string;
}

export interface UserStats {
  projectsGenerated: number;
  projectsCompleted: number;
  skillsLearned: number;
  streakDays: number;
}

export interface GeneratorFormData {
  language: string;
  framework: string;
  level: number;
  objective: string;
  difficulty: number;
  interest: string;
  concepts: string[];
}
