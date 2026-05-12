"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  Package,
  BookOpen,
  FlaskConical,
  FolderKanban,
  Youtube,
  ChevronRight,
  Target,
} from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  icon: any;
};

const navItems: NavItem[] = [
  { href: "#products", label: "Products", icon: Package },
  { href: "#books", label: "Guides", icon: BookOpen },
  { href: "#lab", label: "Lab", icon: FlaskConical },
  { href: "#projects", label: "Projects", icon: FolderKanban },
  { href: "#content", label: "Content", icon: Youtube },
];

const ANIM_MS = 260;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const onHome = pathname === "/";

  const toAnchorHref = useMemo(() => {
    return (hash: string) => (onHome ? hash : `/${hash}`);
  }, [onHome]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") requestClose();
    }

    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, closing]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function requestOpen() {
    setClosing(false);
    setOpen(true);
  }

  function requestClose() {
    if (!open || closing) return;

    setClosing(true);

    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, ANIM_MS);
  }

  function scrollToHash(hash: string) {
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleAnchorClick(hash: string) {
    requestClose();

    if (onHome) {
      window.setTimeout(() => scrollToHash(hash), ANIM_MS);
      return;
    }

    router.push(`/${hash}`);

    window.setTimeout(() => {
      let tries = 0;
      const maxTries = 24;

      const tick = () => {
        const el = document.querySelector(hash);

        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }

        tries += 1;
        if (tries < maxTries) window.setTimeout(tick, 50);
      };

      tick();
    }, ANIM_MS);
  }

  const drawer = open ? (
    <div className="fixed inset-0 z-[9999] md:hidden">
      <div
        onClick={requestClose}
        className={[
          "absolute inset-0 bg-black/65 backdrop-blur-[6px]",
          "transition-opacity duration-300 ease-out",
          closing ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />

      <div
        className={[
          "absolute right-0 top-0 h-full w-[92%] max-w-sm",
          "border-l border-white/10 bg-[#080B12] shadow-2xl",
          "transition-[transform,opacity] duration-300 ease-out",
          closing ? "translate-x-full opacity-0" : "translate-x-0 opacity-100",
        ].join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <Link href="/" onClick={requestClose} className="flex items-center gap-2">
            <div className="relative h-12 w-14 shrink-0">
              <Image
                src="/logo.png"
                alt="Nathelevate logo"
                fill
                priority
                sizes="56px"
                className="object-contain"
              />
            </div>

            <div className="leading-tight">
              <div className="text-sm font-bold text-white">Nathelevate</div>
              <div className="text-xs text-white/55">
                Build faster. Ship smarter.
              </div>
            </div>
          </Link>

          <button
            onClick={requestClose}
            className="rounded-xl bg-white/[0.04] p-2 text-white/85 hover:bg-white/[0.06]"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex h-[calc(100%-84px)] flex-col">
          <div className="flex-1 overflow-y-auto px-3 py-4">
            <div className="mb-3 rounded-2xl border border-[#FCC822]/20 bg-[#FCC822]/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#FCC822]">
                Nathelevate
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                AI workflows, products, guides, and real build breakdowns for
                builders.
              </p>
            </div>

            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleAnchorClick(item.href)}
                className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-white/90 transition hover:bg-white/[0.05]"
              >
                <span className="inline-flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <item.icon className="h-4 w-4 text-[#FCC822]" />
                  </span>
                  <span className="text-base font-semibold">{item.label}</span>
                </span>

                <ChevronRight className="h-4 w-4 text-white/35" />
              </button>
            ))}

            <div className="my-4 h-px w-full bg-white/10" />

            <button
              onClick={() => handleAnchorClick("#start")}
              className="nathe-yellow-button mx-1 inline-flex w-[calc(100%-8px)] items-center justify-center rounded-2xl bg-[#FCC822] px-5 py-3 font-black text-[#05070D] transition hover:bg-yellow-300"
            >
              <Target className="mr-2 h-4 w-4" />
              Start here
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070D]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8 lg:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-12 w-14 shrink-0">
            <Image
              src="/logo.png"
              alt="Nathelevate logo"
              fill
              priority
              sizes="56px"
              className="object-contain"
            />
          </div>

          <div className="hidden leading-tight sm:block">
            <div className="text-sm font-bold tracking-tight text-white transition group-hover:text-[#FCC822]">
              Nathelevate
            </div>
            <div className="text-xs text-white/55">
              Build faster. Ship smarter.
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={toAnchorHref(item.href)}
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-white/68 transition hover:bg-white/[0.05] hover:text-white"
            >
              <item.icon className="h-4 w-4 text-[#FCC822]/85" />
              {item.label}
            </a>
          ))}

          <a
            href={toAnchorHref("#start")}
            className="nathe-yellow-button ml-3 inline-flex items-center rounded-2xl bg-[#FCC822] px-4 py-2 text-sm font-black text-[#05070D] transition hover:bg-yellow-300"
          >
            Start here
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </nav>

        <button
          onClick={(e) => {
            e.stopPropagation();
            requestOpen();
          }}
          className="rounded-xl bg-white/[0.05] p-2 text-white/90 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {mounted && createPortal(drawer, document.body)}
    </header>
  );
}