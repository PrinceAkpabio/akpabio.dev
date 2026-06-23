import en, { type Dictionary } from "./en";
import fr from "./fr";
import de from "./de";
import nl from "./nl";

export type Locale = "en" | "fr" | "de" | "nl";

export const defaultLocale: Locale = "en";

/** Ordered list shown in the language switcher. */
export const locales: Locale[] = ["en", "fr", "de", "nl"];

/** Short codes displayed in the switcher. */
export const localeLabels: Record<Locale, string> = {
  en: "en",
  fr: "fr",
  de: "de",
  nl: "nl",
};

export const dictionaries: Record<Locale, Dictionary> = { en, fr, de, nl };

export const isLocale = (value: string | null): value is Locale =>
  !!value && (locales as string[]).includes(value);

export type { Dictionary };
