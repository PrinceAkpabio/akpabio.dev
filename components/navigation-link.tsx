import styles from "@/styles/nav-link.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide } from "@/utils/anim";
import { NavLinkItem } from "./navigation";
import { useScrollTo } from "./lenis-provider";

export default function NavLink({
  data,
  isActive,
  setSelectedIndicator,
  openMenu,
}: NavLinkItem) {
  const { title, href, index } = data;
  const scrollTo = useScrollTo();

  const navLinkAction = () => {
    openMenu();

    // Wait for the menu to slide out before scrolling to the section
    setTimeout(() => scrollTo(href), 1200);
  };

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {data?.download === undefined ? (
        <div className={styles.status}>
          <span className={styles.statusIconWrapper}>
            <span className={styles.statusIcon}></span>
          </span>
          <span className={styles.statusText}>{title}</span>
        </div>
      ) : data?.download ? (
        <Link
          href={href}
          className={styles.menuItem}
          download="prince-akpabio-cv"
          target="_blank"
          onClick={() => openMenu()}
        >
          {title}
        </Link>
      ) : (
        <div onClick={navLinkAction}>{title}</div>
      )}
    </motion.div>
  );
}
