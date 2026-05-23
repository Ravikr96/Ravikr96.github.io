import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Cloud,
  Code2,
  Gauge,
  Layers,
  Sparkles,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    icon: Sparkles,
    title: "GenAI & Agentic AI",
    description:
      "Production LLM applications, RAG systems, and autonomous agents that integrate with your existing tools and data.",
    deliverables: [
      "RAG & knowledge assistants",
      "Agent workflows (LangGraph)",
      "Prompt & model lifecycle (LLMOps)",
    ],
  },
  {
    icon: Layers,
    title: "Data Platform Engineering",
    description:
      "Lakehouse migrations, medallion architectures, and streaming pipelines built for scale and governance.",
    deliverables: [
      "Databricks & Delta Lake",
      "ETL / ELT pipelines",
      "Unity Catalog & governance",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & MLOps",
    description:
      "AWS-native AI infrastructure with CI/CD, observability, and infrastructure as code.",
    deliverables: [
      "Bedrock & SageMaker deployments",
      "Kubernetes / EKS serving",
      "Terraform & GitHub Actions",
    ],
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Intelligent automation for incidents, onboarding, documentation, and operational workflows.",
    deliverables: [
      "Incident intelligence",
      "MCP integrations",
      "Slack / Jira automations",
    ],
  },
  {
    icon: Code2,
    title: "Full-Stack & SaaS",
    description:
      "Modern web applications and APIs with AI-native features — from prototype to production.",
    deliverables: [
      "FastAPI backends",
      "React / TypeScript frontends",
      "End-to-end delivery",
    ],
  },
  {
    icon: Gauge,
    title: "Performance & Advisory",
    description:
      "Architecture reviews, cost optimization, and hands-on guidance for AI and data initiatives.",
    deliverables: [
      "Technical audits",
      "Platform strategy",
      "Team enablement",
    ],
  },
];
