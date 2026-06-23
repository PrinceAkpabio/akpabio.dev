"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  ReactNode,
} from "react";
import {
  dictionaries,
  defaultLocale,
  isLocale,
  type Dictionary,
  type Locale,
} from "@/i18n";

const STORAGE_KEY = "lang";
const listeners = new Set<() => void>();

// External store: the saved locale lives in localStorage so reading it needs no
// setState-in-effect, and useSyncExternalStore renders the server snapshot first
// (matching SSR) before switching to the client value — no hydration mismatch.
function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) return saved;
  } catch {}
  return defaultLocale;
}

const getServerSnapshot = (): Locale => defaultLocale;

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue>({
  locale: defaultLocale,
  setLocale: () => {},
  t: (key) => key,
});

export const useTranslation = () => useContext(LanguageContext);

const lookup = (dict: Dictionary, key: string): string | undefined =>
  key
    .split(".")
    .reduce<unknown>(
      (acc, part) =>
        acc && typeof acc === "object"
          ? (acc as Record<string, unknown>)[part]
          : undefined,
      dict
    ) as string | undefined;

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const locale = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const setLocale = useCallback((next: Locale) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
    listeners.forEach((listener) => listener());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = (key: string): string =>
    lookup(dictionaries[locale], key) ?? lookup(dictionaries.en, key) ?? key;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
