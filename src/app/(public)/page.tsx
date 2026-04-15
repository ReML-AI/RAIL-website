import Hero from "@/components/public/Hero";
import SectionHeading from "@/components/public/SectionHeading";
import ResearchStickyRail from "@/components/public/ResearchStickyRail";
import OrgChart from "@/components/public/OrgChart";
import ScrollReveal from "@/components/public/ScrollReveal";
import StaggerChildren from "@/components/public/StaggerChildren";
import { SectionShapes } from "@/components/public/GeometricShapes";
import Image from "next/image";
import PublicationEntry from "@/components/public/PublicationEntry";
import { researchAreas as allResearchAreas } from "@/data/research";
import { publications as allPublications } from "@/data/publications";
import { projects as allProjects } from "@/data/projects";

export default function HomePage() {
  const researchAreas = [...allResearchAreas].sort((a, b) => a.order - b.order);
  const publications = [...allPublications]
    .sort((a, b) => b.year - a.year)
    .slice(0, 5);
  const projects = allProjects;

  return (
    <>
      <Hero />

      {/* About */}
      <section id="about" className="relative bg-light-gray px-6 py-24">
        <SectionShapes variant="a" />
        <div className="relative mx-auto max-w-content">
          <ScrollReveal>
            <SectionHeading title="About RAIL" subtitle="Reliable AI Lab is a research initiative at University College Cork dedicated to trustworthy, explainable, and robust artificial intelligence." />
          </ScrollReveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <ScrollReveal delay={100}>
              <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-green/10 text-primary-green-dark">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-dark">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-dark/65">
                  Ensure AI technologies are safe, transparent, and aligned with human
                  values — so they can be deployed in critical domains with confidence.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-orange/10 text-primary-orange-dark">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 3v18h18" />
                    <path d="M7 14l4-4 4 4 5-5" />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-dark">Our Approach</h3>
                <p className="mt-3 text-sm leading-relaxed text-dark/65">
                  We combine theoretical foundations — optimisation, game theory, causal
                  inference — with applied research across vision, language, decisions
                  and scientific data.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-sage/20 text-primary-green-dark">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2l2.5 6H21l-5 4 2 7-6-4-6 4 2-7-5-4h6.5z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-dark">Our Impact</h3>
                <p className="mt-3 text-sm leading-relaxed text-dark/65">
                  Partnering with industry and the Insight SFI Research Centre to deliver
                  research that moves from publication to real-world deployment in Ireland
                  and beyond.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Stat strip */}
          <ScrollReveal delay={400}>
            <div className="mt-14 grid grid-cols-1 gap-6 rounded-2xl border border-border bg-white/60 p-8 backdrop-blur-sm sm:grid-cols-3">
              {[
                { value: "6", label: "Research groups" },
                { value: "4+", label: "Industry & academic partners" },
                { value: "UCC", label: "University College Cork" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-primary-green-dark">{s.value}</div>
                  <div className="mt-1 text-xs text-dark/60">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Research Groups — sticky left-rail */}
      <section id="research" className="relative bg-white px-6 py-24">
        <SectionShapes variant="b" />
        <div className="relative mx-auto max-w-content">
          <ScrollReveal>
            <SectionHeading title="Research Groups" subtitle="Six specialised groups tackling the foundational and applied challenges of reliable AI." />
          </ScrollReveal>
          <div className="mt-12">
            <ResearchStickyRail areas={researchAreas} />
          </div>
        </div>
      </section>

      {/* People */}
      <section id="people" className="relative bg-light-gray px-6 py-24">
        <SectionShapes variant="c" />
        <div className="relative mx-auto max-w-content">
          <ScrollReveal>
            <SectionHeading title="Our Team" subtitle="RAIL brings together researchers, engineers, and advisors across six intelligence groups." />
          </ScrollReveal>

          {/* Interactive org chart */}
          <ScrollReveal delay={150}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-sm sm:p-8 lg:p-10">
              <OrgChart />
            </div>
          </ScrollReveal>

          {/* Advisors / Partners */}
          <ScrollReveal delay={250}>
            <div className="mt-16">
              <div className="mb-6 flex items-end justify-between">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-dark/40">
                    LEADERSHIP
                  </span>
                  <h3 className="mt-1 text-2xl font-bold text-dark sm:text-3xl">
                    Advisors / Partners
                  </h3>
                </div>
                <span className="hidden font-mono text-xs text-dark/40 sm:block">
                  SENIOR COUNCIL
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Prof.",       name: "Barry O'Sullivan",   affiliation: "UCC" },
                  { title: "Sci. Prof.",  name: "Shan Ling Pan",       affiliation: "UNSW Sydney" },
                  { title: "Prof.",       name: "Utz Roedig",          affiliation: "UCC" },
                  { title: "Prof.",       name: "George Shorten",      affiliation: "UCC" },
                  { title: "Prof.",       name: "Ken Brown",           affiliation: "UCC" },
                  { title: "Prof.",       name: "Dirk Pesch",          affiliation: "UCC" },
                  { title: "A/Prof",     name: "Rosane Minghim",      affiliation: "UCC" },
                  { title: "A/Prof",     name: "David Murphy",        affiliation: "UCC" },
                  { title: "A/Prof",     name: "Andrea Visentin",     affiliation: "UCC" },
                  { title: "Asst. Prof.", name: "Krishnendu Guha",     affiliation: "UCC" },
                  { title: "Prof.",       name: "Wemru Wang",          affiliation: "NUS" },
                  { title: "Dr.",         name: "Trong Le",            affiliation: "VNU" },
                  { title: "Asst. Prof.", name: "Viet Pham",           affiliation: "TCD" },
                  { title: "Asst. Prof.", name: "Xuan-Son Vu",         affiliation: "LTH" },
                ].map((advisor, i) => {
                  const accents = [
                    "before:bg-primary-green",
                    "before:bg-primary-orange",
                    "before:bg-primary-sage",
                    "before:bg-primary-green-dark",
                    "before:bg-primary-orange-dark",
                  ];
                  const accent = accents[i % accents.length];
                  return (
                    <div
                      key={advisor.name}
                      className={`group relative overflow-hidden rounded-xl border border-border bg-white p-4 pl-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md before:absolute before:left-0 before:top-0 before:h-full before:w-1 ${accent}`}
                    >
                      <div className="font-mono text-[10px] uppercase tracking-widest text-dark/40">
                        {advisor.title}
                      </div>
                      <div className="mt-0.5 text-base font-bold tracking-tight text-dark">
                        {advisor.name}
                      </div>
                      <div className="mt-1 flex items-center gap-1.5 text-xs text-dark/55">
                        <span className="h-1 w-1 rounded-full bg-primary-orange" />
                        {advisor.affiliation}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative bg-white px-6 py-24">
        <SectionShapes variant="a" />
        <div className="relative mx-auto max-w-content">
          <ScrollReveal>
            <SectionHeading title="Projects" subtitle="Flagship initiatives bringing RAIL research into the world." />
          </ScrollReveal>

          {projects.length === 1 ? (
            // Featured layout for a single project
            <ScrollReveal delay={150}>
              {(() => {
                const project = projects[0];
                const externalUrl =
                  project.slug === "ai-for-ireland" ? "https://aiforireland.org/" : null;
                return (
                  <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary-green/10 via-white to-primary-orange/10 shadow-sm">
                    <div className="grid items-center gap-10 p-8 md:grid-cols-2 md:p-12 lg:p-16">
                      <div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary-green/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-green-dark">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary-green" />
                          Flagship initiative
                        </span>
                        <h3 className="mt-5 text-3xl font-bold leading-tight text-dark lg:text-4xl">
                          {project.title}
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-dark/70">
                          {project.description}
                        </p>
                        {externalUrl && (
                          <a
                            href={externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-green px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-primary-green-dark hover:shadow-md"
                          >
                            Visit project site
                            <span aria-hidden="true">→</span>
                          </a>
                        )}
                      </div>
                      {/* Visual column — hidden on mobile when no image (would duplicate heading) */}
                      {project.image_url ? (
                        <div className="flex items-center justify-center">
                          <Image
                            src={project.image_url}
                            alt={project.title}
                            width={400}
                            height={240}
                            className="h-auto w-full max-w-sm object-contain"
                          />
                        </div>
                      ) : (
                        <div className="hidden items-center justify-center md:flex">
                          <div className="flex aspect-[5/3] w-full max-w-sm items-center justify-center rounded-2xl bg-white/70 p-8 shadow-inner">
                            <span className="text-center text-2xl font-bold tracking-tight text-primary-green-dark lg:text-3xl">
                              {project.title}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()}
            </ScrollReveal>
          ) : (
            <StaggerChildren className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => {
                const externalUrl =
                  project.slug === "ai-for-ireland"
                    ? "https://aiforireland.org/"
                    : null;

                return (
                  <div
                    key={project.id}
                    className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    {project.image_url ? (
                      <div className="mb-4 flex h-20 items-center">
                        <Image
                          src={project.image_url}
                          alt={project.title}
                          width={160}
                          height={80}
                          className="h-16 w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="mb-4">
                        <span className="text-xl font-bold text-dark">{project.title}</span>
                      </div>
                    )}
                    {project.image_url && (
                      <h3 className="mb-2 text-lg font-semibold text-dark">{project.title}</h3>
                    )}
                    <p className="flex-1 text-sm leading-relaxed text-dark/60">{project.description}</p>
                    {externalUrl && (
                      <a
                        href={externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-sm font-medium text-primary-orange hover:underline"
                      >
                        Visit website &rarr;
                      </a>
                    )}
                  </div>
                );
              })}
            </StaggerChildren>
          )}
        </div>
      </section>

      {/* Publications */}
      {publications.length > 0 && (
        <section id="publications" className="relative bg-light-gray px-6 py-20">
          <SectionShapes variant="b" />
          <div className="relative mx-auto max-w-content">
            <ScrollReveal>
              <SectionHeading title="Recent Publications" subtitle="Selected recent works from our research team." />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div>
                {publications.map((pub) => (
                  <PublicationEntry key={pub.id} publication={pub} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Partners section temporarily hidden
      <section id="partners" className="relative bg-white px-6 py-20">
        <SectionShapes variant="c" />
        <div className="relative mx-auto max-w-content">
          <ScrollReveal>
            <SectionHeading title="Our Partners & Affiliations" />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-16">
              {partners.map((partner) => (
                <a
                  key={partner.id}
                  href={partner.website_url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {partner.logo_url ? (
                    <Image
                      src={partner.logo_url}
                      alt={partner.name}
                      width={160}
                      height={80}
                      className="h-16 w-auto object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  ) : (
                    <span className="text-lg font-semibold text-dark/40 transition-colors group-hover:text-dark/70">
                      {partner.name}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
      */}

      {/* Contact */}
      <section id="contact" className="bg-primary-green px-6 py-20">
        <div className="mx-auto max-w-content text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white">Contact Us</h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="mt-4 text-lg text-white/80">Western Gateway Building, Cork, Ireland</p>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <a
              href="mailto:info@reliableai.org"
              className="mt-6 inline-block text-base font-medium text-white underline decoration-white/40 transition-colors hover:decoration-white"
            >
              info@reliableai.org
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
