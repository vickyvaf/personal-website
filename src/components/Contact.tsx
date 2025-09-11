"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section className="min-h-screen flex flex-col justify-between p-7 md:py-14 md:px-20 bg-black text-white">
      <div className="flex justify-end font-medium gap-6">
        <a
          href="https://www.linkedin.com/in/vicky-adi-firmansyah/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/vickyvaf/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer"
        >
          Github
        </a>
      </div>

      <div className="text-base md:text-5xl flex flex-col gap-1 md:gap-0">
        <motion.p className="bg-gradient-to-r from-white to-gray-700 md:to-black bg-clip-text md:p-2 text-transparent">
          Curious about what we can create together?
        </motion.p>

        <motion.p className="bg-gradient-to-r from-white to-gray-700 md:to-black bg-clip-text md:p-2 text-transparent">
          Let’s bring something extraordinary to life!
        </motion.p>

        <div className="flex items-center mt-3 md:mt-8 md:gap-4 md:ml-4 relative">
          <motion.span
            animate={{ scale: [0, 1, 2, 0], opacity: [0, 0.6, 0, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-gray-100"
          />

          <span className="absolute left-[10px] md:left-[14px] w-2 h-2 md:w-3 md:h-3 rounded-full bg-white" />
          <motion.p className="text-sm md:text-lg font-normal ml-3 md:ml-0">
            Available For Work
          </motion.p>
        </div>
      </div>

      <div className="flex text-sm md:text-base justify-between">
        <div className="flex flex-col gap-[2px]">
          <motion.p>+62 823 4018 2744</motion.p>
          <motion.p>vickyadi243@gmail.com</motion.p>
        </div>
        <div className="flex flex-col gap-[2px] md:ml-40">
          <motion.p>All rights reserved,</motion.p>
          <motion.p>Vicky @{new Date().getFullYear()}</motion.p>
        </div>
      </div>
    </motion.section>
  );
}
