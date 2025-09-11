"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen p-7 md:p-20 border-gray-200 border-t">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto"
      >
        <motion.h2 className="text-xl md:text-3xl font-bold mb-5 md:mb-10">
          About
        </motion.h2>
        <div className="md:h-fit flex flex-col md:flex-row items-start gap-4 md:gap-8">
          <motion.img
            src="/hand-drawn-retro.jpg"
            className="w-40 h-40 md:w-[250px] md:h-[250px] rounded-md"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base md:text-xl"
          >
            I specialize in crafting engaging user interfaces that feel both
            intuitive and responsive. Using React.js and Next.js, I translate
            ideas into interactive products that scale smoothly across devices.
            I pay close attention to typography, layout, and accessibility so
            every detail feels polished. Beyond the visuals, I focus on
            performance optimizing load times, implementing reusable components,
            and ensuring the experience remains smooth even on lower end
            devices. Collaboration is at the heart of my process, and I enjoy
            working with designers and product teams to refine flows from
            prototype to production.
          </motion.p>
        </div>

        <div className="md:h-fit flex flex-col-reverse md:flex-row items-start gap-4 md:gap-8 mt-7 md:mt-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-xl"
          >
            On the backend, I build systems that keep applications running
            smoothly. I work with tools like Node.js, Express.js, Nest.js, and
            MySQL to handle data, manage requests, and support the features
            users rely on. My goal is to make sure everything behind the scenes
            is secure, efficient, and easy to grow as projects get bigger. I
            also enjoy connecting the backend with the frontend so everything
            feels seamless for the user.
          </motion.p>
          <motion.img
            src="/hand-drawn-cartoon.jpg"
            width={250}
            height={250}
            className="w-40 h-40 md:w-[250px] md:h-[250px] rounded-md"
          />
        </div>
      </motion.div>
    </section>
  );
}
