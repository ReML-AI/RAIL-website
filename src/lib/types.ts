export type ResearchArea = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image_url: string | null;
  order: number;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  research_area_id: string | null;
  image_url: string | null;
  status: "active" | "completed";
  created_at: string;
};

export type Publication = {
  id: string;
  category: string;
  title: string;
  authors: string;
  year: number;
  venue: string;
  location: string | null;
  doi_url: string | null;
  pdf_url: string | null;
  bibtex: string | null;
  abstract: string | null;
  created_at: string;
};
