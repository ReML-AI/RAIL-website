import type { Publication } from "@/lib/types";

// Publications grouped by `category`. Categories render in the order they first appear.
// Venue format (conferences): "Conference YYYY · City, Country · Date range"
// Venue format (journals):    "Journal Name · YYYY · vol. X, pp. A-B"
export const publications: Publication[] = [
  // === 2026 ===
  {
    id: "aaai-2026-reasoning-transfer-low-resource",
    category: "Top-tier Conference (A)",
    title:
      "Reasoning Transfer for an Extremely Low-Resource and Endangered Language: Bridging Languages through Sample-Efficient Language Understanding",
    authors: "Khanh-Tung Tran, Barry O'Sullivan, Harry Nguyen",
    year: 2026,
    venue: "AAAI 2026 · Singapore · January 20-27, 2026",
    location: "Singapore",
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2026-01-20T00:00:00.000Z",
  },
  {
    id: "kdd-2026-irlbench",
    category: "Top-tier Conference (A)",
    title:
      "IRLBench: A Multi-modal, Culturally Grounded, Parallel Irish-English Benchmark for Open-Ended LLM Reasoning Evaluation",
    authors:
      "Khanh-Tung Tran, Duc-Hai Nguyen, Barry O'Sullivan, Harry Nguyen",
    year: 2026,
    venue: "KDD 2026 · Jeju, Korea · August 9-13, 2026",
    location: "Jeju, Korea",
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2026-08-09T00:00:00.000Z",
  },
  {
    id: "acl-2026-disentangling-continued-pretraining",
    category: "Top-tier Conference (A)",
    title:
      "Disentangling Continued Pre-training: Attention-Driven Routing and Semantic Hub Preservation in Language Adaptation",
    authors: "Khanh-Tung Tran, Vinh-Khanh Tran, Barry O'Sullivan, Harry Nguyen",
    year: 2026,
    venue: "ACL 2026 · San Diego, USA · July 2-7, 2026",
    location: "San Diego, USA",
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2026-07-02T00:00:00.000Z",
  },
  {
    id: "eacl-2026-lacomsa",
    category: "Top-tier Conference (A)",
    title:
      "LaCoMSA: Language-Consistency Multilingual Self-Alignment with Latent Representation Rewarding",
    authors: "Khanh-Tung Tran, Barry O'Sullivan, Harry Nguyen",
    year: 2026,
    venue: "EACL 2026 · Rabat, Morocco · March 24-29, 2026",
    location: "Rabat, Morocco",
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2026-03-24T00:00:00.000Z",
  },
  {
    id: "ijcai-ecai-2026-tracebrain",
    category: "Top-tier Conference (A)",
    title:
      "TraceBrain: An Open-Source Framework for Agentic Trace Management",
    authors:
      "Quy-Minh Le, Oscar Cao, Hoang-Quoc-Viet Pham, Thanh Lam Hoang, Harry Nguyen",
    year: 2026,
    venue: "IJCAI-ECAI 2026 · Bremen, Germany · August 18-21, 2026",
    location: "Bremen, Germany",
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2026-08-18T00:00:00.000Z",
  },
  {
    id: "aamas-2026-toolbrain",
    category: "Multi-Agent Systems / Reinforcement Learning",
    title:
      "ToolBrain: A Flexible Reinforcement Learning Framework for Agentic Tools",
    authors:
      "Quy Minh Le, Minh Sao Khue Luu, Khanh-Tung Tran, Duc-Hai Nguyen, Hoang-Quoc-Viet Pham, Quan Le, Hoang Thanh Lam, Harry Nguyen",
    year: 2026,
    venue: "AAMAS 2026 · Paphos, Cyprus · May 25-29, 2026",
    location: "Paphos, Cyprus",
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2026-05-25T00:00:00.000Z",
  },
  {
    id: "lrec-coling-2026-questionnaire-llm",
    category: "NLP / LLM Benchmarks (LREC-COLING 2026)",
    title:
      "Questionnaire meets LLM: A Benchmark and Empirical Study of Structural Skills for Understanding Questions and Responses",
    authors:
      "Duc-Hai Nguyen, Vijayakumar Nanjappan, Barry O'Sullivan, Harry Nguyen",
    year: 2026,
    venue: "LREC-COLING 2026 · Palma de Mallorca, Spain · May 11-16, 2026",
    location: "Palma de Mallorca, Spain",
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2026-05-11T00:00:00.000Z",
  },
  {
    id: "lrec-coling-2026-irish-blimp",
    category: "NLP / LLM Benchmarks (LREC-COLING 2026)",
    title:
      "Irish-BLiMP: A Linguistic Benchmark for Evaluating Human and Language Model Performance in a Low-Resource Setting",
    authors:
      "Josh McGiff, Khanh-Tung Tran, William Mulcahy, Dáibhidh Ó Luinín, Jake Dalzell, Róisín Ní Bhroin, Adam Burke, Barry O'Sullivan, Harry Nguyen, Nikola S. Nikolov",
    year: 2026,
    venue: "LREC-COLING 2026 · Palma de Mallorca, Spain · May 11-16, 2026",
    location: "Palma de Mallorca, Spain",
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2026-05-11T00:00:00.000Z",
  },
  {
    id: "minds-and-machines-2026-controllability-agentic-ai",
    category: "Journal",
    title: "On Controllability in Agentic AI: A Survey",
    authors:
      "M. H. Nguyen, Duc-Hai Nguyen, Barry O'Sullivan, Harry Nguyen",
    year: 2026,
    venue: "Minds and Machines (Springer) · 2026",
    location: null,
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2026-12-31T00:00:00.000Z",
  },
  {
    id: "eaai-aaai-2026-sound-ai",
    category: "Education / Applications",
    title:
      "Sound-AI: A Pedagogical Tool for Exploring AI in Audio and Bioacoustic Research",
    authors: "Mai Le, Barry O'Sullivan, Harry Nguyen, Rosane Minghim",
    year: 2026,
    venue: "EAAI / AAAI 2026 · Singapore · January 20-27, 2026",
    location: "Singapore",
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2026-01-20T00:00:00.000Z",
  },
  {
    id: "lak-2026-multimodal-learning-analytics",
    category: "Education / Applications",
    title:
      "Empowering Multimodal Learning Analytics using Agentic AI: A Comprehensive Platform for Simulation-based Clinical Training with Intelligent Assessment",
    authors:
      "Duc-Hai Nguyen, Kinza Salim, D. Power, M. Connolly, A. Hamdy, M. Contreras, T. T. Mai, G. Shorten, Barry O'Sullivan, Vijayakumar Nanjappan, Harry Nguyen",
    year: 2026,
    venue: "LAK 2026 · Bergen, Norway · April 27 - May 1, 2026",
    location: "Bergen, Norway",
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2026-04-27T00:00:00.000Z",
  },

  // === 2025 ===
  {
    id: "neurips-2025-pareto-rl-admet",
    category: "Workshops",
    title:
      "Pareto-Guided Reinforcement Learning for Multi-Objective ADMET Optimization in Generative Drug Design",
    authors: "M. Nguyen, Nguyet-Hang Vu, Barry O'Sullivan, Harry Nguyen",
    year: 2025,
    venue:
      "NeurIPS 2025 (AI for Science Workshop) · San Diego, USA · December 2-7, 2025",
    location: "San Diego, USA",
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2025-12-02T00:00:00.000Z",
  },
  {
    id: "neurips-2025-agentic-design-patterns",
    category: "Workshops",
    title: "Agentic Design Patterns: A System-Theoretic Framework",
    authors:
      "M. D. Dao, Minh-Quy Le, Thanh Lam Hoang, D. T. Le, Hoang-Quoc-Viet Pham, Barry O'Sullivan, Harry Nguyen",
    year: 2025,
    venue:
      "NeurIPS 2025 (Workshop on Bridging Language, Agent, and World Models for Reasoning and Planning) · San Diego, USA · December 2-7, 2025",
    location: "San Diego, USA",
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2025-12-02T00:00:00.000Z",
  },
  {
    id: "iccv-2025-irltrees3d",
    category: "Workshops",
    title:
      "IRLTrees3D: A 3D Reconstruction Dataset of Trees",
    authors: "Joseph Chai, Barry O'Sullivan, Harry Nguyen",
    year: 2025,
    venue:
      "ICCV 2025 (SEA Workshop on Sustainability with Earth Observation and AI) · Honolulu, USA · October 19-23, 2025",
    location: "Honolulu, USA",
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2025-10-19T00:00:00.000Z",
  },
  {
    id: "emnlp-2025-cross-lingual-cot",
    category: "Top-tier Conference (A)",
    title:
      "Disentangling Language Understanding and Reasoning Structures in Cross-lingual Chain-of-Thought Prompting",
    authors:
      "Khanh-Tung Tran, Nguyet-Hang Vu, Barry O'Sullivan, Harry Nguyen",
    year: 2025,
    venue: "EMNLP 2025 · Suzhou, China · November 5-9, 2025",
    location: "Suzhou, China",
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2025-11-05T00:00:00.000Z",
  },
  {
    id: "globecom-2025-sum-rate-thz",
    category: "Journal",
    title:
      "Sum Rate Maximization in Downlink HAP-RSMA-based THz Systems: A Generative Diffusion Model enabled RL Approach",
    authors: "Mai Le, Quoc-Viet Pham, Barry O'Sullivan, Harry Nguyen",
    year: 2025,
    venue: "IEEE GLOBECOM 2025 · Taipei, Taiwan · December 8-12, 2025",
    location: "Taipei, Taiwan",
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2025-12-08T00:00:00.000Z",
  },
  {
    id: "acm-mm-2025-aiqam",
    category: "Workshops",
    title:
      "AIQAM'25: The 2nd ACM Workshop on AI-powered Question Answering Systems for Multimedia",
    authors:
      "T. T. Mai, A. Tran, Q. L. Tran, A. Nguyen, Harry Nguyen, T. Quan, C. Gurrin",
    year: 2025,
    venue:
      "ACM Multimedia 2025 (AIQAM'25 Workshop) · Dublin, Ireland · October 27-31, 2025",
    location: "Dublin, Ireland",
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2025-10-27T00:00:00.000Z",
  },

  // === 2024 ===
  {
    id: "ai-open-2024-wave2graph",
    category: "Journal",
    title:
      "Wave2Graph: Integrating spectral features and correlations for graph-based learning in sound waves",
    authors:
      "V. T. Hoang, Khanh-Tung Tran, X. S. Vu, D. K. Nguyen, M. Bhuyan, Harry Nguyen",
    year: 2024,
    venue: "AI Open · 2024 · vol. 5, pp. 115-125",
    location: null,
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2024-01-01T00:00:00.000Z",
  },
  {
    id: "ecai-2024-uccix",
    category: "Top-tier Conference (A)",
    title: "UCCIX: Irish-eXcellence Large Language Model",
    authors: "Khanh-Tung Tran, Barry O'Sullivan, Harry Nguyen",
    year: 2024,
    venue: "ECAI 2024 · Santiago de Compostela, Spain · October 19-24, 2024",
    location: "Santiago de Compostela, Spain",
    doi_url: null,
    pdf_url: null,
    bibtex: null,
    abstract: null,
    created_at: "2024-10-19T00:00:00.000Z",
  },
];
