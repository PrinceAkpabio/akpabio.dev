"use client";
import { useState } from "react";
import styles from "@/styles/burger-menu.module.scss";
import { MenuState } from "./page-wrapper";

export default function BurgerMenu({ isActive, openMenu }: MenuState) {
  return (
    <>
      <div onClick={() => openMenu()} className={styles.button}>
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </div>
    </>
  );
}
