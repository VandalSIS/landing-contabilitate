import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n";
import { BRAND_NAME, hreflangAlternates, SITE_URL } from "@/lib/constants";
import "../globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"], variable: "--font-playfair" });

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });
  const path = locale === "ro" ? "" : `/${locale}`;
  const url = `${SITE_URL}${path}`;

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: hreflangAlternates(),
    },
    openGraph: {
      type: "website",
      title: t("title"),
      description: t("description"),
      url,
      siteName: BRAND_NAME,
      locale: locale === "ro" ? "ro_MD" : locale === "ru" ? "ru_MD" : "en_US",
      alternateLocale: ["ro_MD", "ru_MD", "en_US"].filter(
        (l) => l !== (locale === "ro" ? "ro_MD" : locale === "ru" ? "ru_MD" : "en_US")
      ),
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: { index: true, follow: true },
    manifest: "/site.webmanifest",
    icons: { icon: "/favicon.svg" },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans pb-20 md:pb-0">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
