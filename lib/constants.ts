import { Locale, locales } from "@/i18n";

export const BRAND_NAME = "ContaExpert MD";
export const PHONE = "+37369564277";
export const PHONE_DISPLAY = "+373 69 564 277";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://contaexpert-md.vercel.app";

export function localePath(locale: Locale, path = ""): string {
  const prefix = locale === "ro" ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${path}`;
}

export function hreflangAlternates(path = "") {
  return Object.fromEntries(
    locales.map((l) => [l === "ro" ? "ro-MD" : l === "ru" ? "ru-MD" : "en-US", localePath(l, path)])
  );
}
