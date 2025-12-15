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

export default function KnowMe() {
  return (
    <section className="w-full max-w-6xl mx-auto md:mt-0 mt-20 px-6 grid md:grid-cols-2 gap-10 items-start overflow-x-hidden">
      {/* About Me */}
      <motion.div
        variants={aboutVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="space-y-4"
      >
        <h2 className="text-4xl font-bold mb-4 text-primary">About Me</h2>

        <p className="text-base leading-relaxed">
          Hello! I’m{" "}
          <span className="font-semibold text-primary">Goodness Omogbeja</span>,
          a dedicated and creative full-stack web developer. I’m passionate
          about transforming ideas into seamless digital experiences through
          clean and maintainable code.
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

      {/* Skills */}
      <motion.div
        variants={skillsWrapperVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-bold text-primary">Skills</h2>

        <motion.ul
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-muted-foreground"
        >
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              variants={skillItemVariant}
              className="bg-chart-2/20 backdrop-blur-xs text-primary text-sm whitespace-nowrap px-3 py-2 rounded-md flex items-center"
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
