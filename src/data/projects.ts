import type { Project } from "@/lib/types";

// To add a project, append a new entry. Set `status` to "active" or "completed".
export const projects: Project[] = [
  {
    id: "ai-for-ireland",
    title: "AI for Ireland",
    slug: "ai-for-ireland",
    description:
      "A national initiative to advance reliable and responsible AI across Ireland.",
    research_area_id: null,
    image_url: null,
    external_url: "https://aiforireland.org/",
    status: "active",
    created_at: "2026-04-13T19:00:16.521735+00:00",
  },
  {
    id: "irish-llm-leaderboard",
    title: "Irish LLM Leaderboard",
    slug: "irish-llm-leaderboard",
    description:
      "A public leaderboard tracking and benchmarking large language model capabilities on Irish, a UNESCO-certified endangered language in need of preservation.",
    research_area_id: "linguistic",
    image_url: null,
    external_url: "https://leaderboard.insight-centre.org/",
    status: "active",
    created_at: "2026-01-01T00:00:00.000Z",
  },
];
