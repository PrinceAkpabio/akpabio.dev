"use client";

import Link from "next/link";
import { useScrollTo } from "@/components/providers/lenis-provider";
import { useTranslation } from "@/components/providers/language-provider";

type SectionNavProps = {
  // The menuItem class from the caller's own SCSS module
  className: string;
};

// The shared works / contact / résumé link trio used in the contact footer and
// the project page. The hero keeps its own copy because those links carry GSAP refs.
export default function SectionNav({ className }: SectionNavProps) {
  const scrollTo = useScrollTo();
  const { t } = useTranslation();

  const scrollToAnchor = (e: React.MouseEvent, anchor: string) => {
    e.preventDefault();
    scrollTo(anchor);
  };

  return (
    <>
      <Link
        href="#works-section"
        className={className}
        onClick={(e) => scrollToAnchor(e, "#works-section")}
      >
        {t("nav.works")}
      </Link>
      <Link
        href="#contact-section"
        className={className}
        onClick={(e) => scrollToAnchor(e, "#contact-section")}
      >
        {t("nav.contact")}
      </Link>
      <Link
        href="/prince-akpabio-cv.pdf"
        className={className}
        download="prince-akpabio-cv"
        target="_blank"
      >
        {t("nav.resume")}
      </Link>
    </>
  );
}
