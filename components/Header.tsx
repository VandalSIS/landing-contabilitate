"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Logo from "./Logo";
import { PHONE } from "@/lib/constants";

const locales = [
  { code: "ro", label: "RO" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 lg:flex">
          <a href="#services" className="hover:text-brand transition-colors">{t("services")}</a>
          <a href="#about" className="hover:text-brand transition-colors">{t("about")}</a>
          <a href="#pricing" className="hover:text-brand transition-colors">{t("pricing")}</a>
          <a href="#reviews" className="hidden xl:inline hover:text-brand transition-colors">{t("reviews")}</a>
          <a href="#faq" className="hover:text-brand transition-colors">{t("faq")}</a>
          <a href="#contact" className="hover:text-brand transition-colors">{t("contact")}</a>
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border border-slate-200 p-0.5 text-xs font-semibold">
            {locales.map(({ code, label }) => (
              <Link
                key={code}
                href="/"
                locale={code}
                className={`rounded-md px-2 py-1 transition-colors ${
                  locale === code ? "bg-navy text-white" : "text-slate-500 hover:text-navy"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brandDark sm:inline-block"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
