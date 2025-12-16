// src/pages/Skills.tsx
import {
  faCss3,
  faHtml5,
  faNodeJs,
  faReact,
  faSquareGit,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, type Variants } from "motion/react";

const skillsWrapperVariant: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      delay: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const skillItemVariant: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

const skills = [
  { name: "HTML5", icon: faHtml5 },
  { name: "CSS3", icon: faCss3 },
  { name: "Tailwind CSS", icon: undefined },
  { name: "JavaScript", icon: faSquareJs },
  { name: "React.js", icon: faReact },
  { name: "Next.js", icon: undefined },
  { name: "Node.js", icon: faNodeJs },
  { name: "MongoDB", icon: undefined },
  { name: "TypeScript", icon: undefined },
  { name: "Prisma ORM", icon: undefined },
  { name: "PostgreSQL", icon: undefined },
  { name: "Git and Github", icon: faSquareGit },
  { name: "RESTful APIs", icon: undefined },
];

export default function Skills() {
  return (
    <section className="w-full max-w-6xl mx-auto md:mt-0 mt-20 px-6">
      <motion.div
        variants={skillsWrapperVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-bold text-white">Skills</h2>

        <motion.ul
          variants={skillsWrapperVariant}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-accent"
        >
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              variants={skillItemVariant}
              className="bg-chart-2/20 backdrop-blur-xs text-muted/80 text-sm whitespace-nowrap px-3 py-2 rounded-md flex items-center"
            >
              {skill.icon && (
                <FontAwesomeIcon icon={skill.icon} className="mr-2" />
              )}
              {skill.name}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
