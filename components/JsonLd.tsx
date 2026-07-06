import { buildJsonLd } from "@/lib/seo";

type Props = {
  faq: { q: string; a: string }[];
  locale: string;
};

export default function JsonLd({ faq, locale }: Props) {
  const data = buildJsonLd(faq, locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
