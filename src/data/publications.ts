import type { Publication } from "@/lib/types";

// To add a publication, prepend a new entry. Most recent first.
// `created_at` is an ISO date used only for stable keys/sort tiebreaks.
export const publications: Publication[] = [
  {
    id: "aaai-2025-ecosound-tutor",
    title: "AI EcoSound Tutor: A guiding tool for exploring AI in bioacoustics",
    authors: "Muhammad Azeem, Harry Nguyen, Rosane Minghim",
    year: 2025,
    venue: "39th Annual AAAI Conference on Artificial Intelligence (AAAI 2025)",
    doi_url: "https://hdl.handle.net/10468/18354",
    pdf_url: null,
    bibtex: null,
    abstract:
      "The tool addresses barriers to AI adoption in bioacoustics by offering a code-free, interactive platform. Users can construct and explore a complete AI pipeline for audio data analysis starting from raw recordings. Capabilities include feature extraction (MFCC, OpenL3), dimensionality reduction (PCA, t-SNE, UMAP), clustering (K-Means, GMM, HDBSCAN), interactive 2D visualization, and machine learning model training.",
    created_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "emnlp-2025-cross-lingual-cot",
    title:
      "Disentangling language understanding and reasoning structures in cross-lingual chain-of-thought prompting",
    authors: "Khanh-Tung Tran, Nguyet-Hang Vu, Barry O'Sullivan, Harry Nguyen",
    year: 2025,
    venue: "EMNLP 2025",
    doi_url: "https://doi.org/10.18653/v1/2025.findings-emnlp.652",
    pdf_url: null,
    bibtex: null,
    abstract:
      "This work investigates whether cross-lingual chain-of-thought prompting benefits LLMs through reasoning structures intrinsic to each language, or are simply a consequence of improved comprehension through cross-linguistic exposure. Using neuron intervention techniques, the authors found performance gaps of up to 27.4% across languages, revealing that these neurons are essential for reasoning in their respective languages but have minimal effect on reasoning in other languages.",
    created_at: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "cochlear-vestibular-2025",
    title:
      "Effect of cochlear implantation on vestibular function: An intertwined phenomena",
    authors:
      "Kinza Salim, Junaid Shahzad, Jawwad Ahmad, Ghulam Saqulain, Harry Nguyen",
    year: 2025,
    venue: "Conference Paper",
    doi_url: "https://hdl.handle.net/10468/18356",
    pdf_url: null,
    bibtex: null,
    abstract:
      "The study investigates vestibular dysfunction following cochlear implantation using caloric testing across 70 patients. Findings revealed an 8.57% incidence of disturbed vestibular function post-implantation. The authors recommend careful surgical technique and suggest generative AI applications for rehabilitation procedures.",
    created_at: "2025-01-01T00:00:00.000Z",
  },
];
