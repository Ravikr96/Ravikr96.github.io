export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "ConcertAI",
    role: "Data Engineer",
    period: "Apr 2023 — Present",
    location: "Bangalore, India",
    highlights: [
      "Led migration of legacy AWS Glue & Snowflake pipelines to Databricks Lakehouse with Medallion architecture, Unity Catalog, and enterprise governance.",
      "Deployed enterprise Agentic RAG assistants (LangChain, LangGraph, FAISS/Pinecone) integrating Confluence, GitHub, and internal docs — cut onboarding time by 50%.",
      "Built AI observability & self-healing platforms using Amazon Bedrock, Lambda, CloudWatch, and RAG-based incident intelligence for Glue & Databricks pipelines.",
      "Automated incident workflows with Agentic AI — classification, routing, RCA generation, and Slack/Jira integrations.",
      "Architected MCP-based tool orchestration for secure agent access to enterprise APIs, databases, and business systems.",
      "Implemented production LLMOps CI/CD with Docker, FastAPI, GitHub Actions, and AWS (EKS, ECR, Lambda) for scalable GenAI deployment.",
      "Accelerated engineering with GenAI-assisted workflows — up to 60% reduction in manual effort for migration and documentation tasks.",
    ],
  },
  {
    company: "Agilisium Consulting",
    role: "Data Engineer",
    period: "Dec 2021 — Mar 2023",
    location: "Bangalore, India",
    highlights: [
      "Designed distributed PySpark pipelines on Databricks processing semi-structured S3 data into Snowflake with Airflow orchestration.",
      "Built churn prediction, segmentation, and retention models using Scikit-learn & XGBoost for personalized engagement.",
      "Implemented MLOps on AWS & Databricks — SageMaker, MLflow, Glue, Lambda for training, deployment, and real-time inference.",
      "Automated AI/ML infrastructure provisioning with Terraform, CodePipeline, and IaC best practices.",
    ],
  },
  {
    company: "LinkCXO Global",
    role: "Product Engineer",
    period: "Apr 2019 — Jun 2021",
    location: "Bangalore, India",
    highlights: [
      "Developed conversational AI chatbot with Rasa for real-time industry reports and platform support.",
      "Built aspect-based sentiment analysis pipeline extracting actionable insights from customer feedback.",
      "Delivered collaborative filtering recommendation system improving engagement and connectivity.",
      "Engineered image similarity & facial matching with OpenCV and deep learning for user recommendations.",
      "Deployed NLP, recommendation, and CV models via Docker, FastAPI, AWS, and GitHub Actions.",
    ],
  },
];

export const education = {
  school: "Visvesvaraya Technological University",
  degree: "Bachelor of Engineering in Computer Science",
  period: "Aug 2014 — May 2018",
  location: "Belgaum / Dharwad, Karnataka",
};
