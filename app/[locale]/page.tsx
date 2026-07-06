import { getTranslations, setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Showcase from "@/components/Showcase";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CtaBanner from "@/components/CtaBanner";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import JsonLd from "@/components/JsonLd";
import { locales } from "@/i18n";

type Props = { params: { locale: string } };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "faq" });
  const faq = ["1", "2", "3", "4", "5"].map((id) => ({
    q: t(`items.${id}.q`),
    a: t(`items.${id}.a`),
  }));

  return (
    <>
      <JsonLd faq={faq} locale={locale} />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <Services />
        <Process />
        <WhyUs />
        <Showcase />
        <Testimonials />
        <Pricing />
        <CtaBanner />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
