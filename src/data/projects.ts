export type ProjectCategory =
  | "all"
  | "genai"
  | "data"
  | "ml"
  | "platform";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string[];
  tech: string[];
  category: ProjectCategory;
  image: string;
  imageAlt: string;
  github?: string;
  featured?: boolean;
};

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "genai", label: "GenAI" },
  { id: "platform", label: "Platform" },
  { id: "data", label: "Data" },
  { id: "ml", label: "ML / CV" },
];

export const projects: Project[] = [
  {
    id: "agentic-rag",
    title: "Enterprise Agentic RAG Assistant",
    subtitle: "Knowledge platform · ConcertAI",
    description:
      "Production knowledge assistant integrating Confluence, GitHub, and internal documentation with hybrid retrieval, conversational memory, and tool-calling agents for context-aware enterprise reasoning.",
    impact: [
      "50% reduction in team onboarding time",
      "Unified search across fragmented knowledge bases",
      "Autonomous workflow assistance for engineers",
    ],
    tech: ["LangChain", "LangGraph", "FAISS", "Pinecone", "FastAPI", "AWS"],
    category: "genai",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop&q=80",
    imageAlt: "Neural network visualization representing AI and RAG systems",
    featured: true,
  },
  {
    id: "ai-observability",
    title: "AI Observability & Self-Healing Platform",
    subtitle: "Pipeline intelligence · Enterprise",
    description:
      "RAG-powered observability layer for AWS Glue and Databricks pipelines using Bedrock, Lambda, and Spark metadata analysis to automate anomaly detection, root cause analysis, and remediation.",
    impact: [
      "Automated RCA for data pipeline incidents",
      "Reduced mean-time-to-resolution",
      "Proactive anomaly detection at scale",
    ],
    tech: ["Amazon Bedrock", "Lambda", "CloudWatch", "RAG", "Spark"],
    category: "platform",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop&q=80",
    imageAlt: "Analytics dashboard with charts for pipeline observability",
    featured: true,
  },
  {
    id: "incident-agents",
    title: "Agentic Incident Management",
    subtitle: "Ops automation · Enterprise",
    description:
      "LLM-driven incident workflows with Jira and Slack integrations for classification, severity prioritization, intelligent routing, and automated RCA generation.",
    impact: [
      "Faster incident triage and routing",
      "Consistent RCA documentation",
      "Reduced operational toil",
    ],
    tech: ["LangGraph", "LangChain", "Jira API", "Slack", "LLMs"],
    category: "genai",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=675&fit=crop&q=80",
    imageAlt: "Security operations center monitoring incident alerts",
    featured: true,
  },
  {
    id: "mcp-orchestration",
    title: "MCP Tool Orchestration Framework",
    subtitle: "Agent infrastructure",
    description:
      "Model Context Protocol integrations enabling AI agents to securely invoke enterprise APIs, databases, and applications with dynamic tool selection and context-aware execution.",
    impact: [
      "Secure agent-to-system connectivity",
      "Reusable tool frameworks across workflows",
      "Foundation for autonomous enterprise agents",
    ],
    tech: ["MCP", "Python", "FastAPI", "LangChain", "AWS"],
    category: "platform",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=675&fit=crop&q=80",
    imageAlt: "Server infrastructure representing API tool orchestration",
  },
  {
    id: "lakehouse-migration",
    title: "Lakehouse Platform Migration",
    subtitle: "Data platform · Healthcare",
    description:
      "End-to-end migration from legacy Glue and Snowflake to Databricks with Medallion architecture, Delta Lake, and Unity Catalog for governed, scalable analytics.",
    impact: [
      "Centralized data governance",
      "Scalable batch & streaming processing",
      "Modern analytics foundation",
    ],
    tech: ["Databricks", "Delta Lake", "PySpark", "Unity Catalog", "Airflow"],
    category: "data",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=675&fit=crop&q=80",
    imageAlt: "Cloud network diagram representing data lakehouse architecture",
  },
  {
    id: "face-attendance",
    title: "Vision-Based Attendance System",
    subtitle: "Computer vision · Academic",
    description:
      "Face recognition pipeline for automated attendance tracking with real-time detection, embedding matching, and admin dashboard integration.",
    impact: [
      "Automated attendance capture",
      "Reduced manual record-keeping",
      "Scalable vision pipeline",
    ],
    tech: ["OpenCV", "Python", "Deep Learning", "FastAPI"],
    category: "ml",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a5414?w=1200&h=675&fit=crop&q=80",
    imageAlt: "Facial recognition interface on a digital screen",
    github: "https://github.com/Ravikr96",
  },
  {
    id: "resume-parser",
    title: "Intelligent Resume Parser",
    subtitle: "NLP · Document AI",
    description:
      "NLP pipeline extracting structured candidate data from resumes — skills, experience, education — for recruitment automation and search.",
    impact: [
      "Structured data from unstructured PDFs",
      "Faster candidate screening",
      "Searchable talent database",
    ],
    tech: ["Python", "NLP", "spaCy", "ML"],
    category: "ml",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=675&fit=crop&q=80",
    imageAlt: "Resume documents and paperwork for document AI parsing",
    github: "https://github.com/Ravikr96",
  },
  {
    id: "anpr",
    title: "Automatic Number Plate Recognition",
    subtitle: "Computer vision",
    description:
      "End-to-end ANPR system detecting, segmenting, and recognizing license plates from video streams with OCR post-processing.",
    impact: [
      "Real-time plate detection",
      "High-accuracy OCR pipeline",
      "Edge-deployable architecture",
    ],
    tech: ["OpenCV", "YOLO", "OCR", "Python"],
    category: "ml",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=675&fit=crop&q=80",
    imageAlt: "Vehicle on a road for license plate recognition",
    github: "https://github.com/Ravikr96",
  },
  {
    id: "sentiment-chatbot",
    title: "Conversational AI & Sentiment Platform",
    subtitle: "LinkCXO · Product",
    description:
      "Rasa-powered chatbot with aspect-based sentiment analysis and recommendation engine for personalized content and user engagement.",
    impact: [
      "Improved self-service support",
      "Actionable sentiment insights",
      "Higher user engagement",
    ],
    tech: ["Rasa", "Python", "spaCy", "Scikit-learn", "AWS"],
    category: "genai",
    image:
      "https://images.unsplash.com/photo-1535378647046-10aedf7de28f?w=1200&h=675&fit=crop&q=80",
    imageAlt: "AI chatbot interface on a laptop screen",
  },
];
