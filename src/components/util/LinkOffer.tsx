"use client";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LinkOffer() {
  return (
    <Link
      href="/kurzy"
      className="offer flex items-center justify-center md:justify-start gap-2 rounded-lg text-sm font-semibold py-4 px-8 text-white transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-indigo-400 to-indigo-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-center md:text-left"
    >
      <motion.span
        animate={{
          rotate: [0, 10, -10, 10, -10, 0],
        }}
      >
        <IconBriefcaseFilled />
      </motion.span>
      Zobraziť ponuku
    </Link>
  );
}
