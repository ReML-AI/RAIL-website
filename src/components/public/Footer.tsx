import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#people", label: "People" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

const exploreLinks = [
  { href: "https://www.ucc.ie/", label: "University College Cork" },
  { href: "https://www.insight-centre.org/", label: "Insight SFI Centre" },
  { href: "https://aiforireland.org/", label: "AI for Ireland" },
];

export default function Footer() {
  return (
    <footer>
      {/* Pre-footer: contact strip */}
      <div className="bg-light-gray">
        <div className="mx-auto max-w-content px-6 py-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-dark">
                Reliable AI Lab
              </h3>
              <p className="mt-1 text-sm text-muted">
                Coláiste na hOllscoile Corcaigh
              </p>
            </div>
            <div>
              <p className="font-semibold text-dark">Contact us</p>
              <address className="mt-3 space-y-2 text-sm not-italic text-muted">
                <p>Western Gateway Building</p>
                <p>Cork T12 XF62, Ireland</p>
                <p className="pt-1">
                  <a
                    href="mailto:info@reliableai.org"
                    className="text-primary-green-dark underline underline-offset-4 hover:text-primary-orange"
                  >
                    info@reliableai.org
                  </a>
                </p>
              </address>
            </div>
            <div>
              <p className="font-semibold text-dark">Connect with us</p>
              <div className="mt-3 flex gap-2">
                <SocialLink href="#" label="Twitter/X">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </SocialLink>
                <SocialLink href="#" label="LinkedIn">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </SocialLink>
                <SocialLink href="#" label="GitHub">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </SocialLink>
                <SocialLink href="#" label="Google Scholar">
                  <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 10a8 8 0 017.162 3.44L24 9.5 12 0z" />
                </SocialLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-primary-green-darker text-white">
        <div className="mx-auto max-w-content px-6 py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <Image
                src="/images/logo.png"
                alt="RAIL"
                width={260}
                height={116}
                className="h-24 w-auto brightness-0 invert sm:h-28"
              />
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Reliable AI Lab is a research initiative at University College
                Cork advancing trustworthy, explainable, and safe artificial
                intelligence.
              </p>
              <p className="mt-4 text-xs text-white/55">
                Registered with University College Cork
              </p>
            </div>

            <FooterColumn title="Navigate" links={navLinks} />
            <FooterColumn title="Explore" links={exploreLinks} external />

            <div>
              <h3 className="font-serif text-lg font-semibold">
                RAIL Quicklinks
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href="#research"
                    className="text-white/75 transition-colors hover:text-primary-orange"
                  >
                    Research groups
                  </a>
                </li>
                <li>
                  <a
                    href="#people"
                    className="text-white/75 transition-colors hover:text-primary-orange"
                  >
                    Our team
                  </a>
                </li>
                <li>
                  <a
                    href="#publications"
                    className="text-white/75 transition-colors hover:text-primary-orange"
                  >
                    Recent publications
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@reliableai.org"
                    className="text-white/75 transition-colors hover:text-primary-orange"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} Reliable AI Lab, University College Cork.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#" className="hover:text-primary-orange">Sitemap</a>
              <a href="#" className="hover:text-primary-orange">Privacy</a>
              <a href="#" className="hover:text-primary-orange">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  external = false,
}: {
  title: string;
  links: { href: string; label: string }[];
  external?: boolean;
}) {
  return (
    <div>
      <h3 className="font-serif text-lg font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            {external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 transition-colors hover:text-primary-orange"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-white/75 transition-colors hover:text-primary-orange"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center bg-primary-green-darker text-white transition-colors hover:bg-primary-orange"
      aria-label={label}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}
