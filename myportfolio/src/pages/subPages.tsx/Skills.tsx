import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGithub,
  faHtml5,
  faNodeJs,
  faReact,
  faSquareGit,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";

const frontendSkills = [
  {
    name: "HTML5",
    icon: faHtml5,
  },
  {
    name: "CSS3",
    icon: faCss3,
  },
  {
    name: "JavaScript",
    icon: faSquareJs,
  },
  {
    name: "TypeScript",
    icon: undefined,
  },
  {
    name: "React.js",
    icon: faReact,
  },
  {
    name: "Tailwind CSS",
    icon: undefined,
  },
  {
    name: "Framer Motion",
    icon: undefined,
  },
  {
    name: "ShadCN UI",
    icon: undefined,
  },
  {
    name: "Vite",
    icon: undefined,
  },
];

const backendSkills = [
  {
    name: "Node.js",
    icon: faNodeJs,
  },
  {
    name: "Express.js",
    icon: undefined,
  },
  {
    name: "MongoDB",
    icon: undefined,
  },
  {
    name: "Prisma ORM",
    icon: undefined,
  },
  {
    name: "PostgreSQL",
    icon: undefined,
  },
];

const devTools = [
  {
    name: "Git",
    icon: faSquareGit,
  },
  {
    name: "GitHub",
    icon: faGithub,
  },
  {
    name: "VS Code",
    icon: undefined,
  },
  {
    name: "RESTful APIs",
    icon: undefined,
  },
  {
    name: "Postman",
    icon: undefined,
  },
  {
    name: "Responsive Design",
    icon: undefined,
  },
  {
    name: "Vercel",
    icon: undefined,
  },
  {
    name: "Render",
    icon: undefined,
  },
];

const MotionCard = motion(Card)

const fadeInFromRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: 0.3, duration: 1, ease: "easeInOut" as const },
};

function Skills() {
  return (
    <MotionCard initial={fadeInFromRight.initial}
        whileInView={fadeInFromRight.animate}
        transition={fadeInFromRight.transition}
        viewport={{ once: false }} className="w-full max-w-2xl mt-16 mx-auto p-4" id="skills">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">
          My Skills
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="space-y-4 text-xl">
        <h2>Frontend Development</h2>
        <div className="p-2 space-x-4 space-y-2">
          {frontendSkills.map((frontendSkill, index) => (
            <Badge key={index} className="text-[16px]" variant={"outline"}>
              {frontendSkill.icon && (
                <FontAwesomeIcon icon={frontendSkill.icon} />
              )}
              {frontendSkill.name}
            </Badge>
          ))}
        </div>
        <Separator />
        <h2>Backend Development</h2>
        <div className="p-2 space-x-4 space-y-2">
          {backendSkills.map((backendSkill, index) => (
            <Badge key={index} className="text-[16px]" variant={"outline"}>
              {backendSkill.icon && (
                <FontAwesomeIcon icon={backendSkill.icon} />
              )}
              {backendSkill.name}
            </Badge>
          ))}
        </div>
        <Separator />
        <h2>Dev Tools & Other Skills</h2>
        <div className="p-2 space-x-4 space-y-2">
          {devTools.map((devTool, index) => (
            <Badge key={index} className="text-[16px]" variant={"outline"}>
              {devTool.icon && <FontAwesomeIcon icon={devTool.icon} />}
              {devTool.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </MotionCard>
  );
}

export default Skills;
