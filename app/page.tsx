import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  DatabaseZap,
  FlaskConical,
  FolderKanban,
  PlayCircle,
  Rocket,
  Sparkles,
  TerminalSquare,
  Trophy,
  Youtube,
  Zap,
} from "lucide-react";

const pillars = [
  {
    title: "AI & Development",
    icon: Bot,
    description:
      "AI tools, real software builds, coding lessons, product decisions, bugs, workflows, automation, and the process of improving as a developer.",
    examples: ["AI workflows", "Next.js", "SaaS builds"],
  },
  {
    title: "Entrepreneurship",
    icon: Rocket,
    description:
      "The real journey of building products, growing Evo Sports Intelligence, making decisions, learning from mistakes, and staying focused.",
    examples: ["Founder lessons", "Product strategy", "Building in public"],
  },
  {
    title: "Online Income",
    icon: Zap,
    description:
      "Practical experiments around YouTube, side hustles, digital assets, SaaS, affiliate ideas, and building income online without fake guru hype.",
    examples: ["YouTube growth", "Side hustles", "Income experiments"],
  },
];

const mainProjects = [
  {
    title: "Evo Sports Intelligence",
    category: "Sports Intelligence Ecosystem",
    href: "https://evosportsintelligence.com",
    logo: "/logos/evo-sports-intelligence.png",
    icon: DatabaseZap,
    description:
      "The main business ecosystem behind RaceEvo, FootyEvo, OddsEvo, and EvoCore — focused on sports data, insight, and AI-powered intelligence.",
  },
  {
    title: "EvoCore",
    category: "AI Intelligence Layer",
    href: "https://core.evosportsintelligence.com",
    logo: "/logos/evo-core.png",
    icon: Bot,
    description:
      "The AI intelligence layer behind Evo Sports Intelligence, designed for deeper analysis, smarter reasoning, saved insights, and connected sports research.",
  },
];

const platformProjects = [
  {
    title: "RaceEvo",
    category: "Horse Racing Intelligence",
    href: "https://raceevo.com",
    logo: "/logos/raceevo.png",
    icon: Sparkles,
    description:
      "Horse racing intelligence platform with race reports, form signals, race-shape analysis, and AI-supported racing insights.",
  },
  {
    title: "FootyEvo",
    category: "Football Intelligence",
    href: "https://footyevo.com",
    logo: "/logos/footyevo.png",
    icon: Trophy,
    description:
      "Football data and prediction platform preparing for the new season with stats, match insights, and data-led football research.",
  },
  {
    title: "OddsEvo",
    category: "Odds Intelligence",
    href: "https://oddsevo.com",
    logo: "/logos/oddsevo.png",
    icon: Rocket,
    description:
      "Odds comparison and market intelligence platform currently being upgraded with stronger data systems and clearer betting research tools.",
  },
];

const stats = [
  { label: "Creator pillars", value: "3", icon: FolderKanban },
  { label: "Main business", value: "Evo", icon: Trophy },
  { label: "Content focus", value: "YouTube", icon: Youtube },
  { label: "Core identity", value: "Builder", icon: TerminalSquare },
];

export default function NatheElevateLandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070D] text-white">
      {/* HERO */}
      <section className="relative isolate flex min-h-[94vh] items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-bg.png"
            alt="Nathe hero background"
            fill
            priority
            className="object-cover object-[72%_center] sm:object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070D] via-[#05070D]/94 to-[#05070D]/38" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-transparent to-[#05070D]/25" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_32%,rgba(252,200,34,0.12),transparent_30%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05070D] to-transparent" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#FCC822]/25 bg-black/35 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#FCC822] backdrop-blur">
              <Sparkles className="h-4 w-4" />
              AI • Development • Entrepreneurship
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
              I’m Nathe.
              <span className="block text-[#FCC822]">I build with AI,</span>
              <span className="block text-white/90">code & business.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/74 sm:text-xl">
              I’m a full-stack developer and entrepreneur documenting the real
              process of using AI, building software, growing online businesses,
              testing ideas, and creating income streams from scratch.
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
                href="#pillars"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] px-6 py-4 text-base font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-[#FCC822]/30 hover:bg-white/[0.09]"
              >
                Explore the pillars
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-[#0B1426]/80 px-4 py-5 shadow-[0_14px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#FCC822]/20 bg-[#FCC822]/10 text-[#FCC822]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <p className="text-2xl font-black leading-none text-white sm:text-3xl">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-white/45">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="border-y border-white/10 bg-[#070A12]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 sm:px-8 md:grid-cols-3 lg:px-10">
          {[
            {
              title: "AI-assisted building",
              desc: "Real examples of using AI to speed up coding, content, workflows, and product development.",
              icon: Bot,
            },
            {
              title: "No fake guru stuff",
              desc: "Honest experiments, practical progress, and lessons from the actual work.",
              icon: FlaskConical,
            },
            {
              title: "Focused business track",
              desc: "The only products I’m actively developing are under Evo Sports Intelligence.",
              icon: Trophy,
            },
          ].map((item) => {
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
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="relative bg-[#05070D]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <SectionHeader
            icon={Youtube}
            eyebrow="Content pillars"
            title="The channel is built around three clear areas."
            description="Everything sits under AI & development, entrepreneurship, or online income — so the content stays focused while still leaving room to grow."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-[#FCC822]/35"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FCC822]/20 bg-[#FCC822]/10 text-[#FCC822]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-2xl font-black tracking-tight text-white">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-white/68">
                    {pillar.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {pillar.examples.map((example) => (
                      <span
                        key={example}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-white/55"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* YOUTUBE FOCUS */}
      <section className="relative border-y border-white/10 bg-[#070A12]">
        <SectionGlow />

        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FCC822]/25 bg-[#FCC822]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#FCC822]">
                <PlayCircle className="h-4 w-4" />
                YouTube-first direction
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                The content comes from the work.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/72">
                I’m not trying to launch loads of random products anymore. The
                focus is simple: build Evo Sports Intelligence, grow the YouTube
                channel, and share useful lessons from using AI, writing code,
                making decisions, and building online income.
              </p>

              <p className="mt-4 text-base leading-7 text-white/58">
                That means videos about AI tools, development, business
                decisions, productivity, mistakes, progress, income experiments,
                and the systems that help me build faster.
              </p>

              <div className="mt-8">
                <a
                  href="https://www.youtube.com/@nathelevate"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#FCC822] px-6 py-4 text-base font-black text-[#05070D] transition hover:-translate-y-0.5 hover:bg-yellow-300"
                >
                  Subscribe on YouTube
                  <Youtube className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="grid gap-5">
              {[
                {
                  title: "AI & development videos",
                  desc: "AI tools, real coding lessons, software builds, bug fixes, architecture decisions, automation, and developer workflows.",
                  icon: Bot,
                },
                {
                  title: "Founder journey",
                  desc: "Progress, setbacks, focus, decisions, product direction, and lessons from building a real business.",
                  icon: TerminalSquare,
                },
                {
                  title: "Online income experiments",
                  desc: "Practical tests around YouTube, side hustles, SaaS, affiliate ideas, and digital income paths.",
                  icon: Zap,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-[#FCC822]/30"
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

      {/* EVO PROJECTS */}
      <section id="projects" className="bg-[#05070D]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <SectionHeader
            icon={FolderKanban}
            eyebrow="Main business ecosystem"
            title="Evo Sports Intelligence is the business I’m building."
            description="Nathelevate is the creator brand. Evo is the focused product ecosystem. EvoCore is the AI intelligence layer behind it. This keeps the direction clear: grow the audience, improve the sports platforms, and stop splitting attention across random new apps."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {mainProjects.map((project) => {
              const Icon = project.icon;

              return (
                <ProjectCard
                  key={project.title}
                  project={project}
                  Icon={Icon}
                />
              );
            })}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {platformProjects.map((project) => {
              const Icon = project.icon;

              return (
                <ProjectCard
                  key={project.title}
                  project={project}
                  Icon={Icon}
                />
              );
            })}
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
            Follow the journey of building with AI, software, business, and online income.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/72">
            AI. Development. Entrepreneurship. Online income. Real lessons from
            a builder figuring it out one step at a time.
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
              View Evo projects
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

function ProjectCard({
  project,
  Icon,
}: {
  project: {
    title: string;
    category: string;
    href: string;
    logo: string;
    description: string;
  };
  Icon: any;
}) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-[#FCC822]/35"
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

function SectionGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute right-[-160px] top-[-160px] h-[360px] w-[360px] rounded-full bg-[#FCC822]/6 blur-3xl" />
      <div className="absolute left-[-180px] bottom-[-180px] h-[360px] w-[360px] rounded-full bg-[#7C3AED]/8 blur-3xl" />
    </div>
  );
}