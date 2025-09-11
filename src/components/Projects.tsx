"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="min-h-screen p-7 md:p-20 border-gray-200 border-t">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto"
      >
        <motion.h2 className="text-xl md:text-3xl font-bold mb-10">
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 md:gap-8">
          <div>
            <a
              href="https://github.com/harisenincom-batch4-team1/kalibrr-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative group cursor-pointer">
                <motion.img
                  src="/kalibrr.png"
                  className="rounded-md border border-gray-100 w-full group-hover:blur-sm transition"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <ArrowUpRight className="w-10 h-10 text-white bg-black/60 p-2 rounded-full" />
                </div>
              </div>
            </a>

            <motion.h2 className="text-lg md:text-xl mt-4 font-semibold">
              Portal
            </motion.h2>
            <motion.p className="text-base md:text-lg leading-relaxed mt-2">
              A job portal designed to simplify the employee recruitment
              process. It connects companies with talented professionals and
              makes the search for the right opportunity easier. For job
              seekers, it offers tools to showcase skills and apply with
              confidence. For employers, it streamlines hiring by providing
              access to a large pool of qualified candidates. The platform is
              built to save time, reduce complexity, and create better matches
              between people and roles.
            </motion.p>
          </div>

          <div className="mt-10 md:mt-0">
            <a
              href="https://github.com/vickyvaf/lounge"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative group cursor-pointer">
                <motion.img
                  src="/lounge.png"
                  className="rounded-md border border-gray-100 w-full group-hover:blur-sm transition"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <ArrowUpRight className="w-10 h-10 text-white bg-black/60 p-2 rounded-full" />
                </div>
              </div>
            </a>

            <motion.h2 className="text-lg md:text-xl mt-4 font-semibold">
              Lounge
            </motion.h2>
            <motion.p className="text-base md:text-lg leading-relaxed mt-2">
              An interactive 3D interior experience built with Three.js. Users
              can explore a virtual room, move around the space, and interact
              with furniture. The project focuses on bringing architectural
              design to life in the browser, making it easy to visualize layouts
              and experiment with different perspectives. It’s designed to be
              both engaging and practical, blending creativity with modern web
              technology.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
