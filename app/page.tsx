import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Code2,
  DatabaseZap,
  FlaskConical,
  FolderKanban,
  Globe2,
  Layers3,
  Package,
  Rocket,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Trophy,
  Youtube,
  Zap,
} from "lucide-react";

const products = [
  {
    title: "AI Dev Workflow Pack",
    price: "£29",
    oldPrice: "£49",
    tag: "Flagship",
    href: "/products/ai-dev-workflow-pack",
    externalHref: "https://gumroad.com/l/ai-dev-workflow-pack",
    icon: BrainCircuit,
    description:
      "A complete workflow system for planning, building, debugging, refactoring, documenting, and shipping with AI.",
    featured: true,
  },
  {
    title: "AI Prompt Library for Developers",
    price: "£9",
    oldPrice: "£19",
    tag: "Quick Win",
    href: "/products/ai-prompt-library",
    externalHref: "https://gumroad.com/l/ai-prompt-library",
    icon: Bot,
    description:
      "Practical prompts for debugging, API planning, component building, refactoring, docs, and code reviews.",
  },
  {
    title: "Next.js SaaS Starter Kit",
    price: "£29",
    oldPrice: "£59",
    tag: "Starter",
    href: "/products/nextjs-saas-starter-kit",
    externalHref: "https://gumroad.com/l/nextjs-saas-starter-kit",
    icon: Code2,
    description:
      "A clean starter layout for dashboards, auth flows, landing pages, pricing sections, and SaaS-style UI.",
  },
  {
    title: "Launch Page Template Pack",
    price: "£19",
    oldPrice: "£39",
    tag: "Templates",
    href: "/products/launch-page-template-pack",
    externalHref: "https://gumroad.com/l/launch-page-template-pack",
    icon: Rocket,
    description:
      "High-converting landing page sections for products, SaaS ideas, waitlists, lead magnets, and digital downloads.",
  },
  {
    title: "Developer Content System",
    price: "£19",
    oldPrice: "£39",
    tag: "Content",
    href: "/products/developer-content-system",
    externalHref: "https://gumroad.com/l/developer-content-system",
    icon: Youtube,
    description:
      "A repeatable system for turning builds, bugs, lessons, and AI experiments into posts, shorts, and videos.",
  },
  {
    title: "Solo SaaS Blueprint",
    price: "£9",
    oldPrice: "£19",
    tag: "Guide",
    href: "/products/solo-saas-blueprint",
    externalHref: "https://gumroad.com/l/solo-saas-blueprint",
    icon: Layers3,
    description:
      "A practical blueprint for validating, structuring, building, and launching small SaaS products as a solo builder.",
  },
];

const books = [
  {
    title: "AI for Developers",
    subtitle: "Build Faster, Ship Smarter",
    price: "£9",
    tag: "Guide",
    href: "/guides/ai-for-developers",
    icon: BrainCircuit,
    description:
      "A practical guide to using AI inside real development workflows without relying on hype, shortcuts, or theory.",
  },
  {
    title: "From Idea to SaaS",
    subtitle: "The Solo Builder’s Guide",
    price: "£14",
    tag: "Book",
    href: "/guides/from-idea-to-saas",
    icon: Rocket,
    description:
      "A focused guide for taking an idea from rough concept to a structured, usable SaaS product.",
  },
  {
    title: "How Developers Make Money Online",
    subtitle: "Products, SaaS, AI & Content",
    price: "£14",
    tag: "Book",
    href: "/guides/developers-make-money-online",
    icon: Zap,
    description:
      "A realistic guide for developers building income through digital products, tools, platforms, and content.",
  },
];

const projects = [
  {
    title: "Nathe.tv",
    category: "Content Hub",
    href: "https://nathe.tv",
    logo: "/logos/nathe-tv.png",
    stack: ["Next.js", "Content", "YouTube", "AI"],
    icon: Youtube,
    description:
      "My main content hub for development updates, AI workflows, tutorials, product builds, and behind-the-scenes breakdowns.",
  },
  {
    title: "Evo Sports Intelligence",
    category: "Umbrella Brand",
    href: "https://evosportsintelligence.com",
    logo: "/logos/evo-sports-intelligence.png",
    stack: ["Next.js", "TypeScript", "Sports Data", "SaaS"],
    icon: DatabaseZap,
    description:
      "The wider sports intelligence ecosystem connecting FootyEvo, RaceEvo, OddsEvo, and future data-led products.",
  },
  {
    title: "FootyEvo",
    category: "Football Intelligence",
    href: "https://footyevo.com",
    logo: "/logos/footyevo.png",
    stack: ["Next.js", "SportsMonks", "TypeScript", "Tailwind"],
    icon: Trophy,
    description:
      "Football match intelligence platform for fixture analysis, model signals, trends, probabilities, and data-led insights.",
  },
  {
    title: "RaceEvo",
    category: "Racing Intelligence",
    href: "https://raceevo.com",
    logo: "/logos/raceevo.png",
    stack: ["Next.js", "Racing Data", "AI Reports", "Tailwind"],
    icon: Sparkles,
    description:
      "Horse racing intelligence platform with structured race reports, race-shape analysis, form signals, and data modules.",
  },
  {
    title: "OddsEvo",
    category: "Odds Intelligence",
    href: "https://oddsevo.com",
    logo: "/logos/oddsevo.png",
    stack: ["Odds Data", "Affiliate", "Research", "Next.js"],
    icon: ShieldCheck,
    description:
      "Odds comparison and market intelligence product focused on bookmaker research, market movement, and data-led analysis.",
  },
  {
    title: "Aicrono",
    category: "AI Tools Directory",
    href: "https://aicrono.com",
    logo: "/logos/aicrono.png",
    stack: ["Next.js", "AI Tools", "Directory", "Guides"],
    icon: Globe2,
    description:
      "A curated AI tools discovery platform for comparing tools, workflows, categories, and practical AI use cases.",
  },
];

const stats = [
  { label: "Products", value: "6", icon: Package },
  { label: "Guides", value: "3", icon: BookOpen },
  { label: "Projects", value: "6", icon: FolderKanban },
  { label: "AI + Dev", value: "Core", icon: BrainCircuit },
];

export default function NatheElevateLandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070D] text-white">
      {/* HERO */}
      <section
        id="start"
        className="relative isolate flex min-h-[92vh] items-center overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-bg.png"
            alt="Nathelevate hero background"
            fill
            priority
            className="hero-img object-cover object-[72%_center] sm:object-right"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#05070D] via-[#05070D]/92 to-[#05070D]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-transparent to-[#05070D]/25" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_32%,rgba(252,200,34,0.08),transparent_28%)]" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#FCC822]/25 bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#FCC822] shadow-[0_0_35px_rgba(252,200,34,0.10)] backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Digital products for builders
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Build faster.
              <span className="block text-[#FCC822]">Ship smarter.</span>
              <span className="block text-white/90">Elevate online.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              Practical AI workflows, developer systems, starter kits, guides,
              and digital resources built from real production experience.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#products"
                className="inline-flex items-center justify-center rounded-2xl bg-[#FCC822] px-6 py-4 text-base font-black text-[#05070D] shadow-[0_16px_45px_rgba(252,200,34,0.22)] transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] px-6 py-4 text-base font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-[#FCC822]/30 hover:bg-white/[0.09]"
              >
                View Ecosystem
              </Link>
            </div>

<div className="mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
  {stats.map((stat) => {
    const Icon = stat.icon;

    return (
      <div
        key={stat.label}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B1426]/80 px-4 py-5 shadow-[0_14px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#FCC822]/35"
      >
        <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#FCC822]/50 to-transparent" />

        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#FCC822]/20 bg-[#FCC822]/10 text-[#FCC822]">
          <Icon className="h-5 w-5" />
        </div>

        <p className="text-2xl font-black leading-none text-white sm:text-3xl">
          {stat.value}
        </p>

        <p className="mt-2 min-h-[32px] text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-white/45">
          {stat.label}
        </p>
      </div>
    );
  })}
</div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="relative border-y border-white/10 bg-[#070A12]"
      >
        <SectionGlow />

        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <SectionHeader
            icon={Package}
            eyebrow="Digital products"
            title="Practical products built from real AI and development workflows."
            description="A focused product stack for developers, builders, and creators who want useful assets they can actually apply."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* BOOKS */}
      <section id="books" className="relative bg-[#05070D]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <SectionHeader
            icon={BookOpen}
            eyebrow="Books & guides"
            title="Practical guides for developers, builders, and creators."
            description="Short, focused resources that support the wider Nathelevate ecosystem — available as downloadable guides, with book versions planned later."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {books.map((book) => {
              const Icon = book.icon;

              return (
                <div
                  key={book.title}
                  className="group flex min-h-[390px] flex-col rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.075] to-white/[0.025] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-[#FCC822]/35"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FCC822]/20 bg-[#FCC822]/10 text-[#FCC822]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="mt-6 inline-flex w-fit rounded-full border border-[#FCC822]/25 bg-[#FCC822]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#FCC822]">
                    {book.tag}
                  </span>

                  <h3 className="mt-5 text-2xl font-black tracking-tight text-white">
                    {book.title}
                  </h3>

                  <p className="mt-2 text-base font-semibold text-[#FCC822]">
                    {book.subtitle}
                  </p>

                  <p className="mt-4 text-base leading-7 text-white/68">
                    {book.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                    <span className="text-3xl font-black text-white">
                      {book.price}
                    </span>

                    <Link
                      href={book.href}
                      className="inline-flex items-center justify-center rounded-2xl bg-[#FCC822] px-5 py-3 text-sm font-black text-[#05070D] transition hover:bg-yellow-300"
                    >
                      View guide
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LAB */}
      <section
        id="lab"
        className="relative border-y border-white/10 bg-[#070A12]"
      >
        <SectionGlow />

        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-[#FCC822]/20 bg-gradient-to-br from-[#111827] via-[#0A0F1C] to-[#070A12] p-8 shadow-[0_24px_90px_rgba(0,0,0,0.35)] lg:p-10">
            <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#FCC822]/10 blur-3xl" />
            <div className="absolute bottom-[-140px] left-[-120px] h-[300px] w-[300px] rounded-full bg-[#7C3AED]/12 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FCC822]/25 bg-[#FCC822]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#FCC822]">
                  <FlaskConical className="h-4 w-4" />
                  Private community
                </div>

                <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                  Nathelevate Lab
                </h2>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">
                  A private community for builders who want access to
                  behind-the-scenes development notes, AI workflows, sports
                  data insights, digital product ideas, and practical online
                  business lessons.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Private Discord access",
                    "AI workflow tips",
                    "Football & racing data insights",
                    "Digital product ideas",
                    "Build-in-public updates",
                    "Early access to new resources",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-white/75"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#FCC822]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.24em] text-white/50">
                  Membership
                </p>

                <p className="mt-3 text-5xl font-black text-[#FCC822]">
                  £9.99
                </p>
                <p className="mt-2 text-white/60">per month</p>

                <Link
                  href="/lab"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-[#FCC822] px-6 py-4 text-base font-black text-[#05070D] transition hover:bg-yellow-300"
                >
                  Join waitlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-[#05070D]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <SectionHeader
            icon={FolderKanban}
            eyebrow="Project ecosystem"
            title="Premium products and platforms I’ve built."
            description="Nathelevate is the central hub. These are the live platforms, SaaS products, data tools, and content systems connected to the wider ecosystem."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[#FCC822]/35"
                >
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="relative h-12 w-36">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        fill
                        className="object-contain object-left"
                      />
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-[#FCC822] transition group-hover:bg-[#FCC822] group-hover:text-[#05070D]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#FCC822]">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-2xl font-black tracking-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-white/68">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-white/55"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#FCC822]">
                    Visit project
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section id="content" className="border-y border-white/10 bg-[#070A12]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FCC822]/25 bg-[#FCC822]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#FCC822]">
                <Youtube className="h-4 w-4" />
                Nathelevate
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                What Nathelevate is
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/72">
                Nathelevate is where I share the real work behind building
                AI-assisted products, developer tools, sports data platforms,
                and digital resources. Across Nathe.tv and my social channels,
                I document what I’m building, what I’m learning, and the
                practical systems behind each project.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://www.youtube.com/@nathelevate"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#FCC822] px-6 py-4 text-base font-black text-[#05070D] transition hover:-translate-y-0.5 hover:bg-yellow-300"
                >
                  Watch YouTube
                  <Youtube className="ml-2 h-5 w-5" />
                </a>

                <a
                  href="https://nathe.tv"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/14 bg-white/[0.05] px-6 py-4 text-base font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.08]"
                >
                  Read Nathe.tv
                </a>
              </div>
            </div>

            <div className="grid gap-5">
              {[
                {
                  title: "Real build updates",
                  desc: "Behind-the-scenes progress from actual products, platforms, bugs, launches, and improvements.",
                  icon: TerminalSquare,
                },
                {
                  title: "AI-assisted development",
                  desc: "Practical examples of using AI to plan, build, debug, improve, and ship real software.",
                  icon: Bot,
                },
                {
                  title: "Product ecosystem",
                  desc: "The home for Nathe.tv, Aicrono, Evo Sports Intelligence, FootyEvo, RaceEvo, OddsEvo, and future resources.",
                  icon: Package,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-[#FCC822]/30"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#FCC822]/20 bg-[#FCC822]/10 text-[#FCC822]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-xl font-black tracking-tight text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-white/68">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#05070D] px-6 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-[#111827] via-[#0A0F1C] to-[#070A12] p-8 text-center shadow-[0_24px_90px_rgba(0,0,0,0.35)] lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#FCC822]">
            Start here
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
            Explore practical resources built from real development experience.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/72">
            Browse the products, read the guides, follow the builds, or explore
            the wider Nathelevate project ecosystem.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#products"
              className="inline-flex items-center justify-center rounded-2xl bg-[#FCC822] px-6 py-4 text-base font-black text-[#05070D] transition hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              View Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="#books"
              className="inline-flex items-center justify-center rounded-2xl border border-white/14 bg-white/[0.05] px-6 py-4 text-base font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.08]"
            >
              View Guides
              <BookOpen className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: any;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FCC822]/25 bg-[#FCC822]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#FCC822]">
        <Icon className="h-4 w-4" />
        {eyebrow}
      </div>

      <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-white/72">{description}</p>
    </div>
  );
}

function ProductCard({
  title,
  price,
  oldPrice,
  tag,
  icon: Icon,
  description,
  href,
  externalHref,
  featured,
}: {
  title: string;
  price: string;
  oldPrice?: string;
  tag: string;
  icon: any;
  description: string;
  href: string;
  externalHref: string;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "group relative flex min-h-[360px] flex-col overflow-hidden rounded-[1.75rem] border p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1",
        featured
          ? "border-[#FCC822]/40 bg-gradient-to-br from-[#FCC822]/16 via-white/[0.06] to-white/[0.025]"
          : "border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] hover:border-[#FCC822]/35",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FCC822]/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

      <div className="relative flex items-center justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FCC822]/20 bg-[#FCC822]/10 text-[#FCC822] transition group-hover:bg-[#FCC822] group-hover:text-[#05070D]">
          <Icon className="h-6 w-6" />
        </div>

        <span className="rounded-full border border-[#FCC822]/25 bg-[#FCC822]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#FCC822]">
          {tag}
        </span>
      </div>

      <h3 className="relative mt-6 text-2xl font-black tracking-tight text-white">
        {title}
      </h3>

      <p className="relative mt-3 text-base leading-7 text-white/68">
        {description}
      </p>

      <div className="relative mt-auto pt-8">
        <div className="mb-5 flex items-end gap-3">
          <span className="text-4xl font-black text-white">{price}</span>
          {oldPrice && (
            <span className="mb-1 text-sm font-bold text-white/35 line-through">
              {oldPrice}
            </span>
          )}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href={href}
            className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.055] px-4 py-3 text-sm font-bold text-white transition hover:border-[#FCC822]/30 hover:bg-white/[0.08]"
          >
            View details
          </Link>

          <a
            href={externalHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-[#FCC822] px-4 py-3 text-sm font-black text-[#05070D] transition hover:bg-yellow-300"
          >
            Buy now
          </a>
        </div>
      </div>
    </div>
  );
}

function SectionGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute right-[-160px] top-[-160px] h-[360px] w-[360px] rounded-full bg-[#FCC822]/6 blur-3xl" />
      <div className="absolute left-[-180px] bottom-[-180px] h-[360px] w-[360px] rounded-full bg-[#7C3AED]/8 blur-3xl" />
    </div>
  );
}