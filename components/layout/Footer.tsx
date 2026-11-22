"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link2, ArrowUpRight } from "lucide-react";

import { scrollToTop } from "@/lib/scroll";

const CURRENT_YEAR = 2026;

export default function Footer() {
  const pathname = usePathname();

  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      event.preventDefault();
      scrollToTop();
    }
  }

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-zinc-950">
      {/* Glow Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

      <div className="container-main py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 shadow-lg shadow-violet-500/20">
                <Link2 size={18} />
              </span>

              <span className="text-xl font-bold">
                Link<span className="text-violet-400">Flow</span>
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-6 text-zinc-400">
              Create branded short links, track analytics and grow your
              audience with powerful insights.
            </p>
          </div>


            {/* Product */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Product
              </h3>

              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <Link
                    href="/dashboard"
                    className="transition hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    href="/features"
                    className="transition hover:text-white"
                  >
                    Features
                  </Link>
                </li>

                <li>
                  <Link
                    href="/pricing"
                    className="transition hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>

                <li>
                  <Link
                    href="/analytics"
                    className="transition hover:text-white"
                  >
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Company
              </h3>

              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <Link
                    href="/about"
                    className="transition hover:text-white"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="transition hover:text-white"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    href="/support"
                    className="transition hover:text-white"
                  >
                    Support
                  </Link>
                </li>

                <li>
                  <Link
                    href="/blog"
                    className="transition hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>


          {/* CTA */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Get Started
            </h3>

            <p className="mb-4 text-sm text-zinc-400">
              Start shortening and tracking your links today.
            </p>

            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-xl border border-violet-500/30 px-4 py-2 text-sm font-medium text-violet-300 transition hover:border-violet-500 hover:bg-violet-500/10"
            >
              Create Free Account
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {CURRENT_YEAR} LinkFlow. All rights reserved.</p>

          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>

            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}