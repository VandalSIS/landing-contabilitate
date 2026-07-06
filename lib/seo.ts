import { BRAND_NAME, PHONE, PHONE_DISPLAY, SITE_URL } from "./constants";

type FaqItem = { q: string; a: string };

export function buildJsonLd(faq: FaqItem[], locale: string) {
  const url =
    locale === "ro"
      ? SITE_URL
      : `${SITE_URL}/${locale}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AccountingService",
        "@id": `${url}#business`,
        name: BRAND_NAME,
        description:
          "Servicii de contabilitate pentru firme și SRL în Chișinău, Moldova. Primele 10 minute gratuite.",
        url,
        telephone: PHONE,
        priceRange: "1000 MDL+",
        areaServed: {
          "@type": "City",
          name: "Chișinău",
          containedInPlace: { "@type": "Country", name: "Moldova" },
        },
        availableLanguage: ["Romanian", "Russian", "English"],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        offers: {
          "@type": "Offer",
          name: "Primele 10 minute gratuite",
          description: "Consultație inițială gratuită, fără obligații",
          price: "0",
          priceCurrency: "MDL",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        name: BRAND_NAME,
        url,
        inLanguage: locale,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: url },
          { "@type": "ListItem", position: 2, name: "Contact", item: `${url}#contact` },
        ],
      },
    ],
  };
}

export { BRAND_NAME, PHONE, PHONE_DISPLAY, SITE_URL };
