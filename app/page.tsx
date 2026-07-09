import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  DatabaseZap,
  FolderKanban,
  Globe2,
  PlayCircle,
  Rocket,
  Search,
  Sparkles,
  Trophy,
  Youtube,
  Zap,
} from "lucide-react";

const products = [
  {
    title: "Evo Sports Intelligence",
    category: "Sports Intelligence Ecosystem",
    href: "https://evosportsintelligence.com",
    logo: "/logos/evo-sports-intelligence.png",
    icon: Trophy,
    description:
      "AI-powered sports intelligence ecosystem behind RaceEvo, FootyEvo, OddsEvo and EvoCore.",
  },
  {
    title: "Aicrono",
    category: "AI Discovery Platform",
    href: "https://aicrono.com",
    logo: "/logos/aicrono.png",
    icon: Bot,
    description:
      "A platform for discovering, comparing and understanding AI tools faster.",
  },
];

const evoProjects = [
  {
    title: "RaceEvo",
    href: "https://raceevo.com",
    logo: "/logos/raceevo.png",
    description: "Horse racing intelligence, reports and data-led insights.",
    icon: Sparkles,
  },
  {
    title: "FootyEvo",
    href: "https://footyevo.com",
    logo: "/logos/footyevo.png",
    description: "Football data, predictions and match intelligence.",
    icon: Trophy,
  },
  {
    title: "OddsEvo",
    href: "https://oddsevo.com",
    logo: "/logos/oddsevo.png",
    description: "Odds comparison and market intelligence tools.",
    icon: DatabaseZap,
  },
  {
    title: "EvoCore",
    href: "https://core.evosportsintelligence.com",
    logo: "/logos/evo-core.png",
    description: "The AI intelligence layer behind the Evo ecosystem.",
    icon: BrainCircuit,
  },
];

const channels = [
  {
    title: "SEEK",
    href: "https://theseekshow.com",
    logo: "/logos/seek.png",
    description:
      "Interesting things worth understanding across AI, technology, science and space.",
    tags: ["AI", "Technology", "Science", "Space"],
  },
  {
    title: "DOIT",
    href: "https://thedoitshow.com",
    logo: "/logos/doit.png",
    description:
      "Discover Online Ideas & Tools — exploring AI tools, side hustles and internet ideas.",
    tags: ["AI Tools", "Side Hustles", "Internet Ideas", "Experiments"],
  },
];

const focus = [
  {
    title: "Building software",
    description: "Products, platforms, dashboards, AI systems and useful tools.",
    icon: FolderKanban,
  },
  {
    title: "Growing products",
    description: "SEO, content, product updates, feedback and iteration.",
    icon: Rocket,
  },
  {
    title: "Sharing the journey",
    description: "Founder updates, devlogs, stats, progress and lessons.",
    icon: Youtube,
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070D] text-white">
      <section className="relative isolate flex min-h-[94vh] items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-bg.png"
            alt="Nathe hero background"
            fill
            priority
            className="object-cover object-[72%_center] sm:object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070D] via-[#05070D]/94 to-[#05070D]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-transparent to-[#05070D]/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(252,200,34,0.14),transparent_30%)]" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#FCC822]/25 bg-black/35 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#FCC822] backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Founder · Developer · Builder
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
              Building software.
              <span className="block text-[#FCC822]">Growing products.</span>
              <span className="block text-white/90">Sharing the journey.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/74 sm:text-xl">
              I’m Nathe — a full-stack developer building AI-powered software,
              sports intelligence platforms and useful web products.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.youtube.com/@nathelevate"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-[#FCC822] px-6 py-4 text-base font-black text-[#05070D] transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Watch on YouTube
                <Youtube className="ml-2 h-5 w-5" />
              </a>

              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] px-6 py-4 text-base font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-[#FCC822]/30 hover:bg-white/[0.09]"
              >
                Explore projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#070A12]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 sm:px-8 md:grid-cols-3 lg:px-10">
          {focus.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#FCC822]/20 bg-[#FCC822]/10 text-[#FCC822]">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="font-black text-white">{item.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="projects" className="bg-[#05070D]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <SectionHeader
            icon={FolderKanban}
            eyebrow="Products"
            title="The main things I’m building."
            description="Nathe is where I document the real process behind building software, growing products and improving the systems behind them."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {products.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="evo" className="border-y border-white/10 bg-[#070A12]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <SectionHeader
            icon={Trophy}
            eyebrow="Evo ecosystem"
            title="Sports intelligence platforms under Evo."
            description="RaceEvo, FootyEvo, OddsEvo and EvoCore sit under Evo Sports Intelligence — the main SaaS ecosystem I’m actively developing."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {evoProjects.map((project) => (
              <SmallProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="channels" className="bg-[#05070D]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <SectionHeader
            icon={Globe2}
            eyebrow="Media channels"
            title="Different ideas live on different channels."
            description="Nathe is the builder channel. SEEK and DOIT are separate media brands with their own clear focus."
          />

<div className="mt-12 grid gap-6 lg:grid-cols-2">
  {channels.map((channel) => (
    <a
      key={channel.title}
      href={channel.href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-[#FCC822]/35"
    >
      <div className="relative mb-6 h-14 w-40">
        <Image
          src={channel.logo}
          alt={`${channel.title} logo`}
          fill
          className="object-contain object-left"
        />
      </div>

      <h3 className="text-3xl font-black tracking-tight text-white">
        {channel.title}
      </h3>

      <p className="mt-4 text-base leading-7 text-white/68">
        {channel.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {channel.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-white/55"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#FCC822]">
        Visit channel
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </a>
  ))}
</div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-[#070A12]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FCC822]/25 bg-[#FCC822]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#FCC822]">
              <Zap className="h-4 w-4" />
              About
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              I like building useful things.
            </h2>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7">
            <p className="text-lg leading-8 text-white/72">
              Sometimes that is software. Sometimes it is data. Sometimes it is
              content. Nathe is where I share the process of building, shipping,
              improving and learning as I grow my products and media brands.
            </p>

            <p className="mt-5 text-base leading-7 text-white/58">
              The focus is simple: build better products, publish useful
              content, and turn ideas into real assets instead of starting new
              projects that never get finished.
            </p>
          </div>
        </div>
      </section>

      <section id="start" className="bg-[#05070D] px-6 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-[#111827] via-[#0A0F1C] to-[#070A12] p-8 text-center shadow-[0_24px_90px_rgba(0,0,0,0.35)] lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#FCC822]">
            Start here
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
            Follow the journey of building software, products and media brands.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/72">
            Product updates, devlogs, sports data, AI builds, search growth and
            real lessons from building online.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://www.youtube.com/@nathelevate"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#FCC822] px-6 py-4 text-base font-black text-[#05070D] transition hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              Watch YouTube
              <Youtube className="ml-2 h-5 w-5" />
            </a>

            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-2xl border border-white/14 bg-white/[0.05] px-6 py-4 text-base font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.08]"
            >
              View projects
              <ArrowRight className="ml-2 h-5 w-5" />
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

function ProjectCard({ project }: { project: any }) {
  const Icon = project.icon;

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-[#FCC822]/35"
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

      <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#FCC822]">
        Visit platform
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </a>
  );
}

function SmallProjectCard({ project }: { project: any }) {
  const Icon = project.icon;

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-[#FCC822]/35"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="relative h-12 w-32">
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            fill
            className="object-contain object-left"
          />
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#FCC822]/20 bg-[#FCC822]/10 text-[#FCC822]">
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <h3 className="text-xl font-black text-white">{project.title}</h3>

      <p className="mt-3 text-sm leading-6 text-white/60">
        {project.description}
      </p>

      <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FCC822]">
        Visit
        <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
      </div>
    </a>
  );
}