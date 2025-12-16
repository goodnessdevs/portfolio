// src/pages/About.tsx
import { motion, type Variants } from "motion/react";

const aboutVariant: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
    },
  },
};

export default function AboutMe() {
  return (
    <section className="w-full max-w-6xl mx-auto md:mt-0 mt-20 px-6">
      <motion.div
        variants={aboutVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="space-y-4 text-white"
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>

        <p className="text-base leading-relaxed">
          Hello! I’m <span className="font-semibold">Goodness Omogbeja</span>, a
          dedicated and creative full-stack web developer. I’m passionate about
          transforming ideas into seamless digital experiences through clean and
          maintainable code.
        </p>

        <p className="text-base leading-relaxed">
          I enjoy building user-focused applications and constantly strive to
          improve my approach to development. My work blends creativity with
          precision, aiming for intuitive and efficient solutions.
        </p>

        <p className="text-base leading-relaxed">
          Outside of coding, I have a deep interest in engineering—especially
          mechanical. I love exploring how physical systems and digital tools
          can work together to solve real-world problems.
        </p>

        <p className="text-base leading-relaxed">
          I value collaboration, continuous learning, and innovative thinking.
          I'm always open to meaningful projects and opportunities that push
          boundaries and inspire growth.
        </p>
      </motion.div>
    </section>
  );
}
