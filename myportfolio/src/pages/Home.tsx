import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { MoveDown } from "lucide-react";
import { Link } from "react-scroll";

const imageVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const linkVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

function Home() {
  return (
    <div className="text-center md:flex justify-center items-center md:gap-x-4">
      <motion.div variants={imageVariant} initial="hidden" whileInView="visible" transition={{ delay: 0.3, duration: 0.9, ease: "easeInOut" }} viewport={{ once: false }} className="space-y-4 text-white">
        <h2 className="text-3xl mt-2">Hi, I'm</h2>
        <p className=" font-bold md:text-8xl text-4xl">Goodness Omogbeja</p>
        <span className="text-chart-2 text-xl">Full Stack Developer</span>
        <motion.div variants={linkVariant} initial="hidden" whileInView="visible" transition={{ delay: 0.3, duration: 0.9, ease: "easeInOut" }} viewport={{ once: false }} className="flex justify-center text-4xl gap-3 mt-4">
          <a
            href="https://github.com/goodnessdevs"
            target="_blank"
            className="p-4 border rounded-md flex items-center gap-2"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2xs" />
          </a>
          <a
            href="https://linkedin.com/in/goodness-omogbeja-47b99a292"
            target="_blank"
            className="p-4 border rounded-md flex items-center gap-2"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xs" />
          </a>
          <a
            href="https://www.instagram.com/gee_nyne/"
            target="_blank"
            className="p-4 border rounded-md flex items-center gap-2"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2xs" />
          </a>
        </motion.div>

        <Link to="about-me" smooth={true} duration={500}>
          <motion.button className="bg-chart-2/80 text-white animate-bounce p-2 text-sm w-fit transition duration-200 rounded-md mx-auto mt-8 cursor-pointer flex justify-center items-center">
            About me <MoveDown size={16} />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
