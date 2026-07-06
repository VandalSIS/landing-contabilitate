import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./i18n";

export default createMiddleware({
  locales: [...locales],
  defaultLocale,
  localePrefix: "as-needed",
});

export const config = {
  matcher: ["/", "/(ru|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
