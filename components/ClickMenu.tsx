"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Do_Hyeon } from "next/font/google";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Search, ShoppingCart } from "lucide-react";

const do_h = Do_Hyeon({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function ClickMenu() {
  const [menuClick, setMenuClick] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1023) {
        setMenuClick(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const variants = {
    open: {
      transform: "translateY(0%)",
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
    closed: {
      transform: "translateY(-50%)",
      opacity: 0,
      transition: {
        staggerChildren: 0.07,
        staggerDirection: -1,
      },
    },
  };

  const liVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000 },
      },
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  const menuVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  const smLiVariants = {
    open: { opacity: 0, display: "none" },
    closed: { opacity: 1 },
  };
  return (
    <>
      <motion.ul
        initial={false}
        animate={menuClick ? "open" : "close"}
        variants={menuVariants}
        className="z-10 flex h-12 w-full items-center justify-between bg-stone-50 px-7 text-sm font-medium text-stone-800 sm:px-10 lg:hidden"
      >
        <Link href="/">
          <motion.li
            variants={smLiVariants}
            className={`${do_h.className} text-xl text-stone-800`}
          >
            귀목플라워
          </motion.li>
        </Link>
        <li className="flex space-x-8">
          <motion.span variants={smLiVariants}>
            <Search className="h-4 w-4" />
          </motion.span>
          <motion.span variants={smLiVariants}>
            <ShoppingCart className="h-4 w-4" />
          </motion.span>
          <MenuToggle toggle={() => setMenuClick(!menuClick)} />
        </li>
      </motion.ul>
      <motion.ul
        initial={false}
        animate={menuClick ? "open" : "closed"}
        variants={variants}
        className={`absolute top-12 ${menuClick ? "flex-row" : "hidden"} h-[100vh] w-full space-y-5 bg-stone-50 px-12 text-xl font-bold backdrop-blur-sm sm:px-12`}
      >
        <motion.li variants={liVariants} className="mt-5">
          시즌상품
        </motion.li>
        <motion.li variants={liVariants}>꽃다발</motion.li>
        <motion.li variants={liVariants}>꽃바구니</motion.li>
        <motion.li variants={liVariants}>개업화분</motion.li>
        <motion.li variants={liVariants}>축하화환</motion.li>
        <motion.li variants={liVariants}>근조화환</motion.li>
        <motion.li variants={liVariants}>동양란</motion.li>
        <motion.li variants={liVariants}>서양란</motion.li>
        <motion.li variants={liVariants}>분재/숯부작</motion.li>
      </motion.ul>
    </>
  );
}
