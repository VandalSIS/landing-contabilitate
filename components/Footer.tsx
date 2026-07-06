"use client";

import { useTranslations } from "next-intl";
import Logo from "./Logo";
import { BRAND_NAME, PHONE, PHONE_DISPLAY } from "@/lib/constants";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-navy py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left md:px-6">
        <div>
          <Logo className="[&_text]:fill-white [&_path]:fill-white [&_rect]:fill-white/20" />
          <p className="mt-3 text-sm text-blue-200">{t("tagline")}</p>
        </div>
        <div className="text-sm text-blue-200">
          <a href={`tel:${PHONE}`} className="block text-lg font-semibold text-white hover:underline">
            {PHONE_DISPLAY}
          </a>
          <p className="mt-2">{t("hours")}</p>
        </div>
        <p className="text-xs text-blue-300">
          © {year} {BRAND_NAME}. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
