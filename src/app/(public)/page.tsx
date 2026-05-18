import Hero from "@/components/public/Hero";
import OrgChart from "@/components/public/OrgChart";
import ResearchCard from "@/components/public/ResearchCard";
import ScrollReveal from "@/components/public/ScrollReveal";
import StaggerChildren from "@/components/public/StaggerChildren";
import Image from "next/image";
import Link from "next/link";
import PublicationsList from "@/components/public/PublicationsList";
import { researchAreas as allResearchAreas } from "@/data/research";
import { publications as allPublications } from "@/data/publications";
import { projects as allProjects } from "@/data/projects";

// Accents cycled through research group cards
const GROUP_ACCENTS = [
  "bg-primary-green",
  "bg-primary-orange",
  "bg-primary-green-dark",
  "bg-primary-green-darker",
  "bg-primary-orange-dark",
  "bg-primary-green",
];

function extractTag(title: string): { name: string; tag: string | null } {
  const m = title.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  if (m) return { name: m[1].trim(), tag: m[2].trim() };
  return { name: title, tag: null };
}

const quickLinks: {
  href: string;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    href: "#about",
    label: "About RAIL",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    href: "#research",
    label: "Research",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5h16M4 12h10M4 19h16" />
      </svg>
    ),
  },
  {
    href: "#people",
    label: "Our Team",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="3.5" />
        <path d="M3 20a6 6 0 0112 0M16.5 10.5a3 3 0 100-5 3 3 0 000 5zM21 19a5 5 0 00-6.5-4.8" />
      </svg>
    ),
  },
  {
    href: "#projects",
    label: "Projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7l9-4 9 4-9 4-9-4zM3 12l9 4 9-4M3 17l9 4 9-4" />
      </svg>
    ),
  },
  {
    href: "#publications",
    label: "Publications",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h12a3 3 0 013 3v13H7a3 3 0 01-3-3V4z" />
        <path d="M4 17a3 3 0 013-3h12" />
      </svg>
    ),
  },
  {
    href: "mailto:info@reliableai.org",
    label: "Contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6l9 6 9-6" />
        <rect x="3" y="5" width="18" height="14" rx="1" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const researchAreas = [...allResearchAreas].sort((a, b) => a.order - b.order);
  const publications = allPublications;
  const projects = allProjects;
  const featuredProject = projects[0];

  return (
    <>
      <Hero />

      {/* Quick links row */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-3 gap-4 sm:grid-cols-6 sm:gap-6">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group flex flex-col items-center gap-3 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-green text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary-orange group-hover:shadow-lg">
                    <span className="h-7 w-7 transition-transform duration-300 group-hover:scale-110">
                      {link.icon}
                    </span>
                  </span>
                  <span className="text-[13px] font-medium text-dark transition-colors group-hover:text-primary-orange-dark">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About — split layout */}
      <section id="about" className="bg-white">
        <div className="mx-auto grid max-w-content gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.3fr] md:py-20 lg:gap-12 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-orange-dark">
              About RAIL
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-dark md:text-4xl">
              A research initiative for trustworthy, explainable, and safe AI.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                Reliable AI Lab (RAIL) is a research initiative at University
                College Cork dedicated to advancing the scientific foundations and
                applied methods of artificial intelligence that society can trust.
              </p>
              <p>
                We combine theoretical research (optimisation, game theory,
                causal inference) with applied work across vision, language,
                decision systems and scientific data. In partnership with the
                Insight SFI Research Centre and industry collaborators, we move
                research from publication to real-world deployment in Ireland and
                beyond.
              </p>
              <Link
                href="#research"
                className="mt-2 inline-flex items-center gap-2 font-semibold text-primary-green-dark underline underline-offset-4 hover:text-primary-orange"
              >
                Read more about our research
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Research Groups */}
      <section id="research" className="bg-light-gray">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-orange-dark">
                  Research Groups
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-dark md:text-4xl">
                  Six specialised groups
                </h2>
              </div>
              <p className="max-w-md text-sm text-muted">
                Tackling the foundational and applied challenges of reliable AI
                across vision, language, decisions, and scientific data.
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={90}>
            {researchAreas.map((area, i) => {
              const { name, tag } = extractTag(area.title);
              const accent = GROUP_ACCENTS[i % GROUP_ACCENTS.length];
              return (
                <ResearchCard
                  key={area.id}
                  name={name}
                  tag={tag}
                  description={area.description}
                  accent={accent}
                />
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* RAIL at a Glance */}
      <section className="bg-white">
        <div className="mx-auto max-w-content px-4 py-14 sm:px-6 md:py-16 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-2xl font-semibold text-dark md:text-3xl">
              RAIL at a glance
            </h2>
          </ScrollReveal>
          <StaggerChildren className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-4" staggerDelay={80}>
            {[
              { value: "6", label: "Research groups", sub: "across the lab" },
              { value: "4+", label: "Partners", sub: "industry & academic" },
              { value: "UCC", label: "University College Cork", sub: "home institution" },
              { value: "Ireland", label: "National initiative", sub: "AI for Ireland" },
            ].map((s) => (
              <div
                key={s.label}
                className="group cursor-default border-l-4 border-primary-green bg-light-gray px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-orange hover:bg-white hover:shadow-md"
              >
                <div className="font-serif text-4xl font-semibold text-primary-green-dark transition-colors duration-300 group-hover:text-primary-orange md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-dark">
                  {s.label}
                </div>
                <div className="text-xs text-muted">{s.sub}</div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* People */}
      <section id="people" className="bg-light-gray">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-orange-dark">
                Our Team
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-dark md:text-4xl">
                Researchers, engineers and advisors
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-muted">
                RAIL brings together researchers from across UCC and partner
                institutions, organised into six intelligence groups under the
                direction of the lab.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="border border-border bg-white p-3 sm:p-6 lg:p-10">
              <OrgChart />
            </div>
          </ScrollReveal>

          {/* Advisors */}
          <ScrollReveal delay={200}>
            <div className="mt-16">
              <div className="mb-6 flex items-baseline justify-between">
                <h3 className="font-serif text-2xl font-semibold text-dark md:text-3xl">
                  Advisors and Partners
                </h3>
                <span className="hidden text-xs text-muted md:inline">
                  Senior council
                </span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <div className="grid grid-cols-1 overflow-hidden border border-border bg-white sm:grid-cols-2 lg:grid-cols-3">
              {ADVISORS.map((advisor) => (
                <div
                  key={advisor.name}
                  className="group relative -ml-px -mt-px border border-border px-5 py-4 transition-all duration-300 hover:z-10 hover:-translate-y-0.5 hover:border-primary-green hover:bg-cream hover:shadow-md"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-0 bg-primary-orange transition-all duration-300 group-hover:w-1"
                  />
                  <div className="text-xs font-medium uppercase tracking-wider text-muted">
                    {advisor.title}
                  </div>
                  <div className="mt-1 font-serif text-lg font-semibold text-dark transition-colors duration-300 group-hover:text-primary-green-dark">
                    {advisor.name}
                  </div>
                  <div className="mt-0.5 text-sm text-primary-green-dark">
                    {advisor.affiliation}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white">
        <div className="mx-auto max-w-content px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-orange-dark">
                Projects
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-dark md:text-4xl">
                Flagship initiatives
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            {featuredProject && <ProjectFeature project={featuredProject} />}
          </ScrollReveal>
        </div>
      </section>

      {/* Publications */}
      {publications.length > 0 && (
        <section id="publications" className="bg-light-gray">
          <div className="mx-auto max-w-content px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <ScrollReveal>
              <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-orange-dark">
                    Latest research
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-semibold text-dark md:text-4xl">
                    Publications
                  </h2>
                </div>
                <p className="max-w-md text-sm text-muted">
                  A selection of recent papers from our research groups.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <PublicationsList publications={publications} />
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Contact band */}
      <section id="contact" className="bg-primary-green-darker text-white">
        <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:py-14 lg:px-8">
          <div>
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">
              Interested in working with RAIL?
            </h2>
            <p className="mt-2 text-white/80">
              Western Gateway Building, Cork, Ireland
            </p>
          </div>
          <a
            href="mailto:info@reliableai.org"
            className="group inline-flex items-center gap-2 bg-primary-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-orange-dark"
          >
            info@reliableai.org
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>
    </>
  );
}

function ProjectFeature({ project }: { project: (typeof allProjects)[number] }) {
  const externalUrl =
    project.slug === "ai-for-ireland" ? "https://aiforireland.org/" : null;

  return (
    <article className="group grid overflow-hidden border border-border bg-white transition-all duration-300 hover:border-primary-green hover:shadow-xl md:grid-cols-[1.1fr_1fr]">
      <div className="flex min-h-[260px] items-center justify-center bg-light-gray p-8 md:p-10">
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}
            width={420}
            height={260}
            className="h-auto w-full max-w-sm object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="font-serif text-4xl font-semibold leading-tight text-primary-green-dark md:text-5xl">
            {project.title}
          </span>
        )}
      </div>

      <div className="relative bg-primary-green-darker p-8 text-white md:p-12">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary-orange">
          Flagship initiative
        </span>
        <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-5 text-base leading-relaxed text-white/85">
          {project.description}
        </p>
        {externalUrl && (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 bg-primary-orange px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-orange-dark hover:gap-3"
          >
            Visit project site
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </article>
  );
}

const ADVISORS: { title: string; name: string; affiliation: string }[] = [
  { title: "Prof.", name: "Barry O'Sullivan", affiliation: "UCC" },
  { title: "Sci. Prof.", name: "Shan Ling Pan", affiliation: "UNSW Sydney" },
  { title: "Prof.", name: "Utz Roedig", affiliation: "UCC" },
  { title: "Prof.", name: "George Shorten", affiliation: "UCC" },
  { title: "Prof.", name: "Ken Brown", affiliation: "UCC" },
  { title: "Prof.", name: "Dirk Pesch", affiliation: "UCC" },
  { title: "A/Prof", name: "Rosane Minghim", affiliation: "UCC" },
  { title: "A/Prof", name: "David Murphy", affiliation: "UCC" },
  { title: "A/Prof", name: "Andrea Visentin", affiliation: "UCC" },
  { title: "Asst. Prof.", name: "Krishnendu Guha", affiliation: "UCC" },
  { title: "Prof.", name: "Wemru Wang", affiliation: "NUS" },
  { title: "Dr.", name: "Trong Le", affiliation: "VNU" },
  { title: "Asst. Prof.", name: "Viet Pham", affiliation: "TCD" },
  { title: "Asst. Prof.", name: "Xuan-Son Vu", affiliation: "LTH" },
];
