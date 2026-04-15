import type { ResearchArea } from "@/lib/types";

// To add/edit research areas, modify this list and commit. Keep `order` unique to control display order.
export const researchAreas: ResearchArea[] = [
  {
    id: "spatial",
    title: "Spatial Intelligence (SPATIAL)",
    slug: "spatial-intelligence",
    description:
      "The Spatial Intelligence Group investigates how vision-language models perceive, reason about, and evaluate visual content at the spatial level. Our research examines whether multimodal AI systems genuinely ground their judgments in visual evidence or rely on linguistic shortcuts, with a focus on image quality assessment across structured quality dimensions. By combining attention analysis, interpretability methods, and established image quality metrics, we develop frameworks to measure and improve spatial grounding in large vision-language models. Our goal is to build AI systems that can reliably assess, compare, and explain visual quality — bridging the gap between human visual perception and machine understanding for applications in generative AI evaluation, automated quality assurance, and scientific figure analysis.",
    image_url: null,
    order: 1,
  },
  {
    id: "collective",
    title: "Collective Intelligence (COLLECTIVE)",
    slug: "collective-intelligence",
    description:
      "The Collective Intelligence Group is a research team within the Reliable Artificial Intelligence Lab (RAIL). We employ techniques from convex optimization, game theory, machine learning, and deep learning to address challenges in distributed systems and communication networks, with a focus on building systems that are both intelligent and reliable.",
    image_url: null,
    order: 2,
  },
  {
    id: "linguistic",
    title: "Linguistic Intelligence (LING)",
    slug: "linguistic-intelligence",
    description:
      "The Linguistic Intelligence (LING) Group develops data- and compute-efficient methods for natural language processing. Our research focuses on large language models for low-resource scenarios, multilingual and cross-lingual reasoning, and multi-agent collaboration mechanisms. We build language models for extremely low-resource and endangered languages, including Irish, and investigate how reasoning structures transfer across languages through cross-lingual chain-of-thought prompting and test-time compute scaling. Our work advances the scientific understanding and practical deployment of multilingual AI, making language technologies accessible across diverse linguistic communities.",
    image_url: null,
    order: 3,
  },
  {
    id: "decision",
    title: "Decision Intelligence (DECISION)",
    slug: "decision-intelligence",
    description:
      "The Decision Intelligence (DECISION) Group develops advanced methods to enable smarter, faster, and more reliable decision-making in complex systems. By integrating AI, data-driven approaches, optimization, and system-level modeling, we design scalable, explainable, and high-performance solutions for real-world applications. Our goal is to bridge theory and practice through impactful and deployable innovations.",
    image_url: null,
    order: 4,
  },
  {
    id: "multi",
    title: "Multi-Representational Intelligence (MULTI)",
    slug: "multi-representational-intelligence",
    description:
      "Multi-representational learning is a cognitive strategy that presents the same information through various formats like text, diagrams, and simulations. By combining different sensory inputs, it helps build a deeper understanding and reduces the mental effort required to process complex ideas. This approach ensures that if one format is unclear or noisy, another provides the necessary context to bridge the gap. Artificial Intelligence and Machine Learning could enhance these processes by linking and translating between these different data types. By using such approaches, it is possible to enhance knowledge and information extracted and generate different helpful outputs, such as charts from written descriptions or align spoken words with video frames in real time.",
    image_url: null,
    order: 5,
  },
  {
    id: "sciq",
    title: "Scientific and Quantum Intelligence (SCIQ)",
    slug: "scientific-quantum-intelligence",
    description:
      "The Scientific and Quantum Intelligence team focuses on developing advanced AI solutions for complex, real-world scientific data. Our work spans acoustic data analysis and healthcare data, with applications in areas such as environmental monitoring and biomedical research. We are particularly interested in building and adapting foundation models for domain-specific datasets to enable scalable and generalizable insights. In addition, we explore emerging paradigms in quantum intelligence to enhance computational efficiency and unlock new capabilities in scientific discovery.",
    image_url: null,
    order: 6,
  },
];
