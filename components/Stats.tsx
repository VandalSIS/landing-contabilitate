"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useCountUp } from "@/lib/utils";

const statKeys = [
  { key: "years" as const, value: 10, suffix: "+" },
  { key: "offices" as const, value: 3, suffix: "" },
  { key: "response" as const, value: 24, suffix: "h" },
  { key: "price" as const, value: 1000, suffix: "" },
];

export default function Stats() {
  const t = useTranslations("stats");
  const reduce = useReducedMotion();

  return (
    <section className="border-y border-slate-100 bg-navy py-12 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-6">
        {statKeys.map(({ key, value, suffix }, i) => {
          const { count, ref } = useCountUp(value);
          return (
            <motion.div
              key={key}
              ref={ref}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white md:text-4xl">
                {count}
                {suffix}
              </div>
              <div className="mt-1 text-sm text-blue-200">{t(key)}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
