import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Package,
  BookOpen,
  FlaskConical,
  FolderKanban,
  Bot,
  Code2,
  Rocket,
  Layers3,
  Youtube,
  Facebook,
  Instagram,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.637 7.584H.477l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.291 19.492h2.039L6.486 3.24H4.298L17.61 20.645Z" />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.735h-3.257v12.59a2.896 2.896 0 1 1-2.896-2.896c.298 0 .584.045.855.124V8.454a6.145 6.145 0 0 0-.855-.06A6.153 6.153 0 1 0 15.82 14.55V8.192a8.036 8.036 0 0 0 4.77 1.57V6.686Z" />
    </svg>
  );
}

const socialLinks = [
  { name: "YouTube", href: "https://www.youtube.com/@nathelevate", icon: Youtube },
  { name: "Facebook", href: "https://www.facebook.com/nathelevate/", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/nathelevate", icon: Instagram },
  { name: "X", href: "https://twitter.com/nathelevate", icon: XIcon },
  { name: "TikTok", href: "https://www.tiktok.com/@nathelevate", icon: TikTokIcon },
];

export function Footer() {
  return (
    <>
      <div className="mt-20 border-t border-white/10 bg-[#11141d]">
        <div className="mx-auto max-w-7xl px-6 py-4 text-center sm:px-8 lg:px-10">
          <p className="mx-auto max-w-4xl text-sm leading-6 text-white/55">
            Nathelevate may include affiliate links, partner links, or product
            recommendations. This helps support the site at no extra cost to you.
          </p>
        </div>
      </div>

      <footer className="w-full border-t border-white/10 bg-[#080B12]">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <Link href="/" className="group flex items-center gap-2">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src="/logo.png"
                    alt="Nathelevate"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="leading-tight">
                  <div className="text-xl font-bold tracking-tight text-white transition group-hover:text-[#FCC822] sm:text-2xl">
                    Nathelevate
                  </div>
                  <div className="flex items-center gap-1 text-xs text-white/50">
                    <Sparkles className="h-3 w-3 text-[#FCC822]" />
                    Build faster. Ship smarter.
                  </div>
                </div>
              </Link>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
                Digital products, AI workflows, starter kits, guides, and real
                build breakdowns for developers, builders, and online creators.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/55">
                <ShieldCheck className="h-3.5 w-3.5 text-[#FCC822]" />
                Real systems. Real workflows. No fluff.
              </div>

              <div className="mt-6">
                <div className="mb-3 text-sm font-medium text-white">Follow</div>
                <div className="flex flex-wrap items-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        title={social.name}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/55 transition hover:border-[#FCC822]/40 hover:bg-[#FCC822]/10 hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Explore</h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-white/55">
                <Link href="/#products" className="inline-flex items-center gap-2 transition hover:text-white">
                  <Package className="h-4 w-4 text-[#FCC822]" />
                  Digital Products
                </Link>

                <Link href="/#books" className="inline-flex items-center gap-2 transition hover:text-white">
                  <BookOpen className="h-4 w-4 text-[#FCC822]" />
                  Books & Guides
                </Link>

                <Link href="/#lab" className="inline-flex items-center gap-2 transition hover:text-white">
                  <FlaskConical className="h-4 w-4 text-[#FCC822]" />
                  Nathelevate Lab
                </Link>

                <Link href="/#projects" className="inline-flex items-center gap-2 transition hover:text-white">
                  <FolderKanban className="h-4 w-4 text-[#FCC822]" />
                  Projects
                </Link>

                <Link href="/#content" className="inline-flex items-center gap-2 transition hover:text-white">
                  <Youtube className="h-4 w-4 text-[#FCC822]" />
                  Content
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Product areas</h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-white/55">
                <div className="inline-flex items-center gap-2">
                  <Bot className="h-4 w-4 text-[#FCC822]" />
                  AI prompt libraries
                </div>

                <div className="inline-flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-[#FCC822]" />
                  Developer workflows
                </div>

                <div className="inline-flex items-center gap-2">
                  <Layers3 className="h-4 w-4 text-[#FCC822]" />
                  SaaS blueprints
                </div>

                <div className="inline-flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-[#FCC822]" />
                  Starter kits
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Legal & info</h3>

              <p className="mt-4 text-xs leading-6 text-white/55">
                Built to help developers and builders move faster with practical
                systems, AI workflows, and digital product assets.
              </p>

              <div className="mt-4 flex flex-col gap-3 text-sm text-white/55">
                <Link href="/privacy" className="transition hover:text-white">
                  Privacy Policy
                </Link>

                <Link href="/terms" className="transition hover:text-white">
                  Terms &amp; Conditions
                </Link>

                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </div>

              <div className="mt-5">
                <Link
                  href="/#products"
                  className="nathe-yellow-button inline-flex items-center gap-2 rounded-xl bg-[#FCC822] px-4 py-2.5 text-sm font-black transition hover:bg-yellow-300"
                >
                  Explore products
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

<div className="mt-10 border-t border-white/10 pt-5">
  <div className="flex flex-col gap-3 text-xs text-white/40 lg:flex-row lg:items-center lg:justify-between">
    <div className="flex flex-wrap items-center gap-2">
      <span>
        © {new Date().getFullYear()} Nathelevate.
      </span>

      <span className="text-white/25">•</span>

      <span>Build faster. Ship smarter.</span>

      <span className="text-white/25">•</span>

      <span>
        Built by{" "}
        <a
          href="https://nathe.tv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 transition hover:text-white"
        >
          Nathe
        </a>
      </span>
    </div>

    <div className="flex flex-wrap items-center gap-4">
      <Link href="/#products" className="hover:text-white transition">
        Products
      </Link>
      <Link href="/#books" className="hover:text-white transition">
        Guides
      </Link>
      <Link href="/#projects" className="hover:text-white transition">
        Projects
      </Link>
      <Link href="/privacy" className="hover:text-white transition">
        Privacy
      </Link>
      <Link href="/terms" className="hover:text-white transition">
        Terms
      </Link>
    </div>
  </div>
</div>
        </div>
      </footer>
    </>
  );
}