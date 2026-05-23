export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI / ML & GenAI",
    description: "Production LLM apps, RAG, and intelligent automation at scale.",
    skills: [
      { name: "LLMs & RAG", level: 95 },
      { name: "Agentic AI (LangGraph)", level: 92 },
      { name: "LangChain", level: 90 },
      { name: "MLOps / LLMOps", level: 88 },
      { name: "NLP & CV", level: 85 },
      { name: "Prompt Engineering", level: 90 },
    ],
  },
  {
    id: "data",
    title: "Data Engineering",
    description: "Lakehouse architectures, streaming, and enterprise pipelines.",
    skills: [
      { name: "PySpark / Spark", level: 92 },
      { name: "Databricks", level: 95 },
      { name: "Delta Lake", level: 90 },
      { name: "Airflow", level: 88 },
      { name: "Kafka / Kinesis", level: 85 },
      { name: "Medallion Architecture", level: 90 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    description: "AWS-native AI infrastructure with IaC and observability.",
    skills: [
      { name: "AWS (Bedrock, SageMaker)", level: 92 },
      { name: "Kubernetes / EKS", level: 85 },
      { name: "Terraform", level: 88 },
      { name: "Docker", level: 90 },
      { name: "CI/CD (GitHub Actions)", level: 90 },
      { name: "Snowflake", level: 82 },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "High-performance services for AI inference and data products.",
    skills: [
      { name: "Python", level: 95 },
      { name: "FastAPI", level: 90 },
      { name: "SQL", level: 92 },
      { name: "Vector DBs (FAISS, Pinecone)", level: 88 },
      { name: "MCP Integrations", level: 85 },
      { name: "Hybrid Search", level: 87 },
    ],
  },
  {
    id: "freelance",
    title: "Freelance Capabilities",
    description: "End-to-end delivery for startups and enterprise teams.",
    skills: [
      { name: "AI Product Development", level: 92 },
      { name: "SaaS & Web Apps", level: 85 },
      { name: "Automation & Agents", level: 90 },
      { name: "Platform Migration", level: 88 },
      { name: "Performance Optimization", level: 85 },
      { name: "Technical Advisory", level: 88 },
    ],
  },
];
