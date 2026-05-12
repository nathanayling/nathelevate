import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Copy,
  FileText,
  Flame,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Star,
  TerminalSquare,
  Wand2,
} from "lucide-react";

const pageUrl = "https://nathelevate.com/ai-workflow-pack";
const checkoutHref = "#checkout"; // TODO: replace with Gumroad / Stripe link

export const metadata: Metadata = {
  title: "AI Developer Workflow Pack | AI Prompts & Workflows for Developers",
  description:
    "A practical AI workflow pack for developers. Get real AI prompts, debugging workflows, refactoring prompts, and examples to build, debug, and ship faster.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "AI Developer Workflow Pack | Nathelevate",
    description:
      "Real AI prompts, workflows, and examples for developers who want to build, debug, and ship faster.",
    url: pageUrl,
    siteName: "Nathelevate",
    type: "website",
    images: [
      {
        url: "https://nathelevate.com/og-ai-workflow-pack.png",
        width: 1200,
        height: 630,
        alt: "AI Developer Workflow Pack by Nathelevate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Developer Workflow Pack",
    description:
      "A practical AI workflow pack for developers using AI to code, debug, refactor, and ship faster.",
    images: ["https://nathelevate.com/og-ai-workflow-pack.png"],
  },
};

const included = [
  {
    title: "Real AI developer workflow",
    description:
      "The exact process for using AI to plan features, debug issues, refactor code, and ship faster without blindly trusting outputs.",
    icon: BrainCircuit,
  },
  {
    title: "Copy/paste prompt library",
    description:
      "Practical AI prompts for debugging, refactoring, system design, API planning, docs, testing, and production problem-solving.",
    icon: Copy,
  },
  {
    title: "Real-world examples",
    description:
      "Examples based on actual product work, not generic AI theory or recycled internet advice.",
    icon: TerminalSquare,
  },
  {
    title: "Common AI mistakes",
    description:
      "The traps that waste developer time: vague prompts, over-reliance, bad context, and copy/paste coding without validation.",
    icon: ShieldCheck,
  },
];

const outcomes = [
  "Debug issues faster with structured AI prompts",
  "Plan features before writing messy code",
  "Use AI as a senior thinking partner, not a magic coder",
  "Refactor components with clearer reasoning",
  "Avoid wasting hours on vague AI responses",
  "Build a repeatable AI coding workflow you can use every day",
];

const promptTypes = [
  "Debugging",
  "Refactoring",
  "Feature planning",
  "System design",
  "API routes",
  "Documentation",
  "Testing",
  "Code review",
];

const faqs = [
  {
    q: "Is this just another generic AI prompt pack?",
    a: "No. This is built around a real developer workflow: context, diagnosis, implementation, validation, and iteration. The prompts are designed for actual coding work, not vague AI tricks.",
  },
  {
    q: "Who is it for?",
    a: "Developers, indie hackers, SaaS builders, juniors trying to work smarter, and experienced devs who want a cleaner way to use AI in day-to-day coding.",
  },
  {
    q: "Do I need to be an advanced developer?",
    a: "No. The workflow is simple enough to use straight away, but practical enough to help experienced developers structure better AI conversations too.",
  },
  {
    q: "Is it a course?",
    a: "No. It is a focused digital pack: PDF guide plus practical prompt workflows you can use immediately.",
  },
];

export default function AIWorkflowPackPage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI Developer Workflow Pack",
    description:
      "A practical AI workflow pack for developers with real AI prompts, debugging workflows, refactoring prompts, system design prompts, and development examples.",
    brand: {
      "@type": "Brand",
      name: "Nathelevate",
    },
    offers: {
      "@type": "Offer",
      price: "29",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070D] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <HeroBackground />

        <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-6 py-24 sm:px-8 lg:grid-cols-[1.02fr_0.78fr] lg:px-10">
          <div className="relative z-10 max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#FCC822]/25 bg-[#FCC822]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#FCC822] shadow-[0_0_35px_rgba(252,200,34,0.10)] backdrop-blur">
              <Sparkles className="h-4 w-4" />
              AI workflow pack for developers
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl">
              The AI workflow I use to build,
              <span className="block text-[#FCC822]">debug & ship faster.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              A practical AI developer workflow pack with real prompts,
              debugging workflows, refactoring prompts, and examples I use to
              turn AI into a useful coding partner — not a copy/paste liability.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Instant download",
                "Real dev examples",
                "No fluff",
                "Copy/paste AI prompts",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white/70 backdrop-blur"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#FCC822]" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={checkoutHref}
                className="inline-flex items-center justify-center rounded-2xl bg-[#FCC822] px-7 py-4 text-base font-black text-[#05070D] shadow-[0_16px_45px_rgba(252,200,34,0.24)] transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Get the Workflow Pack — £29
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#preview"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-[#FCC822]/30 hover:bg-white/[0.09]"
              >
                Preview What’s Inside
              </Link>
            </div>

            <p className="mt-4 text-sm text-white/45">
              One-time purchase. Built for developers who want practical AI
              coding workflows they can use today.
            </p>
          </div>

          <ProductMockup />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative border-b border-white/10 bg-[#070A12]">
        <SectionGlow />
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Eyebrow icon={Flame}>The problem</Eyebrow>
              <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
                Most developers are using AI like a search box with attitude.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                They ask vague questions, paste broken code, accept the first
                answer, then wonder why they spend longer fixing AI output than
                writing the feature themselves.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Vague prompts create vague answers",
                "AI guesses when context is missing",
                "Copy/paste output causes hidden bugs",
                "No workflow means no repeatable results",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-red-400/10 bg-red-500/[0.045] p-5"
                >
                  <p className="text-base font-bold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-[#05070D]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow icon={Wand2} center>
              The solution
            </Eyebrow>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl">
              A practical AI coding workflow for real development work.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              This pack gives you a repeatable system for giving AI the right
              context, getting better answers, validating output, and moving
              faster without switching your brain off.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {included.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-[#FCC822]/35"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FCC822]/20 bg-[#FCC822]/10 text-[#FCC822] transition group-hover:bg-[#FCC822] group-hover:text-[#05070D]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-black tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/65">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="relative border-y border-white/10 bg-[#070A12]">
        <SectionGlow />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div>
            <Eyebrow icon={FileText}>What you get</Eyebrow>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Everything you need to start using AI properly as a developer.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Not a bloated course. Not 100 pages of recycled theory. A focused
              AI prompt pack and workflow guide designed to be used while you
              work.
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-[#FCC822]/20 bg-[#FCC822]/10 p-6">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#FCC822]">
                Launch version includes
              </p>
              <p className="mt-3 text-3xl font-black text-white">
                PDF guide + AI prompt library
              </p>
              <p className="mt-3 text-base leading-7 text-white/65">
                Future versions may include more examples, templates, and videos.
                Early buyers get the practical core now.
              </p>
            </div>
          </div>

          <div className="grid gap-3">
            {outcomes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 shadow-[0_12px_35px_rgba(0,0,0,0.16)]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FCC822] text-[#05070D]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <p className="font-semibold text-white/78">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMPT PREVIEW */}
      <section id="preview" className="bg-[#05070D]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Eyebrow icon={Code2}>Prompt preview</Eyebrow>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl">
                This is the difference between “fix this” and actually getting
                useful help.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                The pack teaches you how to give AI the context it needs so it
                can reason through the problem instead of guessing.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {promptTypes.map((type) => (
                  <span
                    key={type}
                    className="rounded-full border border-[#FCC822]/20 bg-[#FCC822]/10 px-4 py-2 text-sm font-bold text-[#FCC822]"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#070A12] shadow-[0_24px_90px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                  AI debugging prompt
                </span>
              </div>
              <pre className="overflow-x-auto p-6 text-sm leading-7 text-white/78">
{`I'm working on a [tech stack] project.

Issue:
[describe the bug clearly]

Expected behaviour:
[what should happen]

What's currently happening:
[what is happening]

What I've tried:
[list attempts]

Code:
[paste code]

Help me:
1. Identify the root cause
2. Suggest fixes
3. Explain why it's happening
4. Point out anything risky in the solution`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="relative border-y border-white/10 bg-[#070A12]">
        <SectionGlow />
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 lg:px-10">
          <Eyebrow icon={BrainCircuit}>AI for developers</Eyebrow>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl">
            How to use AI for coding without creating more work for yourself.
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-white/70">
            <p>
              AI tools can be incredibly useful for developers, but only when
              they are used with clear context, structured prompts, and proper
              validation. A vague prompt like “fix this bug” usually produces
              vague output.
            </p>

            <p>
              The AI Developer Workflow Pack focuses on practical AI coding
              workflows: debugging prompts, refactoring prompts, feature planning,
              system design prompts, and ways to review AI-generated code before
              it reaches a real project.
            </p>

            <p>
              It is designed for developers who want to use AI to move faster
              while still thinking clearly, checking assumptions, and keeping
              control of the code they ship.
            </p>
          </div>
        </div>
      </section>

      {/* WHY THIS WORKS */}
      <section className="relative border-y border-white/10 bg-[#070A12]">
        <SectionGlow />
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-[#FCC822]/20 bg-gradient-to-br from-[#111827] via-[#0A0F1C] to-[#070A12] p-8 shadow-[0_24px_90px_rgba(0,0,0,0.35)] lg:p-10">
            <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#FCC822]/15 blur-3xl" />
            <div className="absolute bottom-[-140px] left-[-120px] h-[300px] w-[300px] rounded-full bg-[#7C3AED]/15 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <Eyebrow icon={Star}>Why it works</Eyebrow>
                <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl">
                  Built from real product work, not AI hype.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/72">
                  I use AI while building actual systems: SaaS products,
                  dashboards, APIs, data tools, content platforms, and production
                  features. This pack is based on the workflow that holds up when
                  code breaks and deadlines matter.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Designed for", value: "Developers" },
                  { label: "Focused on", value: "Real workflows" },
                  { label: "Best for", value: "Shipping faster" },
                  { label: "Avoids", value: "Generic fluff" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-white/10 bg-black/25 p-6 backdrop-blur"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-2xl font-black text-[#FCC822]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="checkout" className="bg-[#05070D]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow icon={LockKeyhole} center>
              Get instant access
            </Eyebrow>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Start using AI properly in your dev workflow today.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              One focused pack. One simple price. Use it while you code, debug,
              plan, and build.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-lg overflow-hidden rounded-[2rem] border border-[#FCC822]/30 bg-gradient-to-br from-[#FCC822]/14 via-white/[0.055] to-white/[0.025] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.35)]">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#FCC822]">
                    Launch price
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-white">
                    AI Dev Workflow Pack
                  </h3>
                </div>
                <span className="rounded-full border border-[#FCC822]/25 bg-[#FCC822]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#FCC822]">
                  Flagship
                </span>
              </div>

              <div className="mt-7 flex items-end gap-3">
                <p className="text-6xl font-black text-[#FCC822]">£29</p>
                <p className="pb-2 text-white/45">one-time</p>
              </div>

              <div className="mt-7 grid gap-3">
                {[
                  "PDF workflow guide",
                  "Copy/paste AI prompt library",
                  "Real-world developer examples",
                  "Instant download after purchase",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold text-white/75"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#FCC822]" />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="https://YOUR-CHECKOUT-LINK-HERE.com"
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-[#FCC822] px-6 py-4 text-base font-black text-[#05070D] shadow-[0_16px_45px_rgba(252,200,34,0.22)] transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Buy Now — Instant Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <p className="mt-4 text-center text-xs leading-6 text-white/45">
                Replace the button link with your Gumroad, Lemon Squeezy,
                Stripe, or Payhip checkout URL.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 bg-[#070A12]">
        <div className="mx-auto max-w-4xl px-6 py-24 sm:px-8 lg:px-10">
          <div className="text-center">
            <Eyebrow icon={Bot} center>
              FAQ
            </Eyebrow>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Quick questions before you buy.
            </h2>
          </div>

          <div className="mt-12 grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6"
              >
                <h3 className="text-lg font-black text-white">{faq.q}</h3>
                <p className="mt-3 text-base leading-7 text-white/65">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#05070D] px-6 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-[#111827] via-[#0A0F1C] to-[#070A12] p-8 text-center shadow-[0_24px_90px_rgba(0,0,0,0.35)] lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#FCC822]">
            Stop winging it with AI
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
            Use a workflow that actually helps you build, debug, and ship.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/72">
            Get the AI Dev Workflow Pack and start using better prompts, better
            context, and better validation in your development process.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="#checkout"
              className="inline-flex items-center justify-center rounded-2xl bg-[#FCC822] px-7 py-4 text-base font-black text-[#05070D] transition hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              Get the Workflow Pack — £29
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProductMockup() {
  return (
    <div className="relative z-10 hidden lg:block">
      <div className="absolute -inset-8 rounded-[3rem] bg-[#FCC822]/10 blur-3xl" />
      <div className="relative rotate-2 rounded-[2rem] border border-[#FCC822]/25 bg-gradient-to-br from-[#151A28] via-[#0A0F1C] to-[#05070D] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.48)]">
        <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FCC822] text-[#05070D]">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <span className="rounded-full border border-[#FCC822]/25 bg-[#FCC822]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#FCC822]">
              PDF + Prompts
            </span>
          </div>

          <p className="text-sm font-black uppercase tracking-[0.26em] text-[#FCC822]">
            Nathelevate
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-white">
            AI Developer Workflow Pack
          </h2>
          <p className="mt-4 text-base leading-7 text-white/60">
            Build faster. Debug smarter. Ship with a repeatable AI workflow.
          </p>

          <div className="mt-8 grid gap-3">
            {[
              "Debugging prompts",
              "System design workflows",
              "Feature planning",
              "Validation rules",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3"
              >
                <CheckCircle2 className="h-4 w-4 text-[#FCC822]" />
                <span className="text-sm font-semibold text-white/75">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[#05070D]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(252,200,34,0.20),transparent_34%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.20),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070D]/40 to-[#05070D]" />
    </div>
  );
}

function Eyebrow({
  children,
  icon: Icon,
  center,
}: {
  children: React.ReactNode;
  icon: any;
  center?: boolean;
}) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2 rounded-full border border-[#FCC822]/25 bg-[#FCC822]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#FCC822]",
        center ? "mx-auto" : "",
      ].join(" ")}
    >
      <Icon className="h-4 w-4" />
      {children}
    </div>
  );
}

function SectionGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute right-[-160px] top-[-160px] h-[360px] w-[360px] rounded-full bg-[#FCC822]/8 blur-3xl" />
      <div className="absolute left-[-180px] bottom-[-180px] h-[360px] w-[360px] rounded-full bg-[#7C3AED]/8 blur-3xl" />
    </div>
  );
}