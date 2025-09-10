"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("vickyadi243@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="grid grid-cols-2 min-h-screen px-20">
      <div className="flex flex-col gap-8 pt-40">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-9xl leading-32 font-bold"
        >
          Vicky Adi Firmansyah
        </motion.h1>

        <div className="flex items-center gap-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-medium text-xl"
          >
            vickyadi243@gmail.com
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.5 }}
            onClick={handleCopy}
            className="mb-1 rounded-lg  hover:cursor-pointer"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-600" />
            ) : (
              <Copy className="w-4 h-4 text-gray-600" />
            )}
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col gap-8 justify-end items-end pb-20">
        <motion.img
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          width={250}
          height={250}
          className="mb-28 mr-10"
          src="https://framerusercontent.com/images/j1OWdec3GtorzmtyEO583X355k.png"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-medium text-2xl text-balance"
        >
          Mid Frontend Engineer with 2+ years building web apps using React.js,
          Next.js, and TypeScript. Expanding skills in 3D web development with
          Three.js. Recognized for improving developer workflows, optimizing
          performance, and mentoring students in coding.
        </motion.p>
      </div>
    </section>
  );
}
