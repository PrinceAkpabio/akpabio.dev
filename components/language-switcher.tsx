"use client";

import { useTranslation } from "./language-provider";
import { locales, localeLabels } from "@/i18n";
import styles from "@/styles/language-switcher.module.scss";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className={styles.switcher}>
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          className={code === locale ? styles.active : styles.code}
          onClick={() => setLocale(code)}
          aria-pressed={code === locale}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}
