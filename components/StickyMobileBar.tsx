"use client";

import { useTranslations } from "next-intl";
import { PHONE } from "@/lib/constants";
import { pushDataLayer } from "@/lib/utils";

export default function StickyMobileBar() {
  const t = useTranslations("sticky");
  const tNav = useTranslations("nav");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-slate-200 bg-white p-3 shadow-lg md:hidden">
      <a
        href={`tel:${PHONE}`}
        onClick={() => pushDataLayer("phone_click")}
        className="flex-1 rounded-xl bg-navy py-3 text-center text-sm font-semibold text-white"
      >
        {t("call")}
      </a>
      <a
        href="#contact"
        className="flex-1 rounded-xl bg-brand py-3 text-center text-sm font-semibold text-white"
      >
        {tNav("cta")}
      </a>
    </div>
  );
}
