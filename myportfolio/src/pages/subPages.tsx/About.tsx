import { motion } from "motion/react";

const fadeInFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: 0.3, duration: 1, ease: "easeInOut" as const },
};

function About() {
  return (
    <motion.div initial={fadeInFromLeft.initial}
        whileInView={fadeInFromLeft.animate}
        transition={fadeInFromLeft.transition}
        viewport={{ once: false }} id="about" className="max-w-2xl mx-auto mt-16 px-6 space-y-6">
      <h2 className="text-4xl font-bold mb-4 text-primary">About Me</h2>

      <p className="text-base leading-relaxed">
        Hello! I’m{" "}
        <span className="font-semibold text-primary">Goodness Omogbeja</span>, a
        dedicated and creative{" "}
        <span className="font-medium">Full-Stack Web Developer</span>{" "}
        specializing in the <span className="font-medium">MERN stack</span>{" "}
        (MongoDB, Express.js, React, and Node.js). My passion lies in
        transforming ideas into seamless digital experiences through clean,
        maintainable, and scalable code.
      </p>

      <p className="text-base leading-relaxed">
        I have a strong interest in modern web technologies and development
        practices. I'm constantly improving my skillset with tools like{" "}
        <span className="italic">TypeScript</span>,{" "}
        <span className="italic">Tailwind CSS</span>,{" "}
        <span className="italic">Prisma</span>, and frameworks like{" "}
        <span className="italic">Next.js</span>. Whether working on the frontend
        or backend, I aim to write code that not only works, but is also easy to
        understand and extend.
      </p>

      <p className="text-base leading-relaxed">
        In addition to my passion for web development, I have a deep-rooted
        interest in engineering — particularly{" "}
        <span className="font-medium">mechanical engineering</span>. I enjoy
        exploring the intersection of physical systems and digital solutions,
        and I’m fascinated by how engineering principles can complement
        problem-solving in software development and real-world innovation.
      </p>

      <p className="text-base leading-relaxed">
        I value{" "}
        <span className="font-medium">
          collaboration, continuous learning, and creative problem-solving
        </span>
        . Beyond coding, I enjoy contributing to open-source projects and
        staying updated with emerging trends in both tech and engineering. I’m
        always open to exciting opportunities, innovative projects, and
        meaningful collaboration.
      </p>
    </motion.div>
  );
}

export default About;
