/**
 * Blog placeholder — add posts here when you launch a blog.
 * Future: wire to MDX files or a headless CMS.
 */
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  published: boolean;
};

export const blogPosts: BlogPost[] = [
  // {
  //   slug: "building-agentic-rag-at-scale",
  //   title: "Building Agentic RAG at Scale",
  //   excerpt: "Lessons from deploying enterprise knowledge assistants.",
  //   date: "2025-01-15",
  //   tags: ["GenAI", "RAG", "LangGraph"],
  //   published: true,
  // },
];
