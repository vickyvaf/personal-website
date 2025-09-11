"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText("vickyadi243@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <section className="lg:grid lg:grid-cols-2 lg:min-h-screen px-7 md:px-20">
      <div className="flex flex-col lg:gap-8 pt-10 lg:pt-40">
        <motion.img
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          width={150}
          height={150}
          className="mb-5 block lg:hidden mx-auto rounded-full border-zinc-300"
          src="/profile.png"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-5 lg:mt-0 text-center lg:text-start text-3xl lg:text-9xl leading-10 lg:leading-32 font-bold"
        >
          Vicky Adi Firmansyah
        </motion.h1>

        <div className="hidden lg:flex items-center gap-2 mt-2 lg:mt-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-medium text-base lg:text-xl"
          >
            vickyadi243@gmail.com
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.5 }}
            onClick={handleCopy}
            className="mb-1 rounded-lg hover:cursor-pointer"
          >
            {copied ? (
              <Check className="w-3 h-3 lg:w-4 lg:h-4 text-green-600" />
            ) : (
              <Copy className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600" />
            )}
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col lg:gap-8 lg:justify-end items-end pb-10 lg:pb-32 mt-10">
        <motion.img
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          width={250}
          height={250}
          className="mb-28 mr-10 hidden lg:block rounded-full border border-zinc-300"
          src="/profile.png"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-medium text-base md:text-xl"
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
