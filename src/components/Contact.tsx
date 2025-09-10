"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section className="min-h-screen flex flex-col justify-between py-14 px-20 bg-black text-white">
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

      <div className="text-2xl md:text-5xl flex flex-col">
        <motion.p className="bg-gradient-to-r from-white to-black bg-clip-text p-2 text-transparent">
          Curious about what we can create together?
        </motion.p>

        <motion.p className="bg-gradient-to-r from-white to-black bg-clip-text p-2 text-transparent">
          Let’s bring something extraordinary to life!
        </motion.p>

        <div className="flex items-center mt-8 gap-4 ml-4 relative">
          <motion.span
            animate={{ scale: [0, 1, 2, 0], opacity: [0, 0.6, 0, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="w-10 h-10 rounded-full bg-gray-100"
          />

          <span className="absolute left-[14px] w-3 h-3 rounded-full bg-white" />
          <motion.p className="text-lg font-normal">
            Available For Work
          </motion.p>
        </div>
      </div>

      <div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-[2px]">
            <motion.p>+62 823 4018 2744</motion.p>
            <motion.p>vickyadi243@gmail.com</motion.p>
          </div>
          <div className="flex flex-col gap-[2px] ml-40">
            <motion.p>All rights reserved,</motion.p>
            <motion.p>Vicky @{new Date().getFullYear()}</motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
