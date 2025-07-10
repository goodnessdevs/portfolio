import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { MoveDown } from "lucide-react";
import ProfileImage from "@/components/ProfileImage";
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
    <div className="text-center">
      <motion.div variants={imageVariant} initial="hidden" whileInView="visible" transition={{ duration: 0.9, ease: "easeInOut" }} viewport={{ once: false }} className="flex justify-center">
        <ProfileImage />
      </motion.div>

      <motion.div variants={imageVariant} initial="hidden" whileInView="visible" transition={{ delay: 0.3, duration: 0.9, ease: "easeInOut" }} viewport={{ once: false }} className="space-y-2">
        <h2 className="text-3xl mt-2">Hi, I'm</h2>
        <p className=" font-semibold md:text-6xl text-4xl">Goodness Omogbeja</p>
        <span className="text-chart-2 text-xl">Full Stack Developer</span>
        <motion.div variants={linkVariant} initial="hidden" whileInView="visible" transition={{ delay: 0.3, duration: 0.9, ease: "easeInOut" }} viewport={{ once: false }} className="flex justify-center text-4xl gap-3 mt-4">
          <a
            href="https://github.com"
            target="_blank"
            className="p-4 border rounded-md flex items-center gap-2"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2xs" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="p-4 border rounded-md flex items-center gap-2"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xs" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="p-4 border rounded-md flex items-center gap-2"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2xs" />
          </a>
        </motion.div>

        <Link to="know-me" smooth={true} duration={500}>
          <motion.button initial={{ scale: 0.7 }} animate={{ scale: 1.25 }} transition={{repeat: Infinity, duration: 0.5}} className="bg-cyan-700 text-white p-2 w-fit transition duration-200 rounded-md mx-auto mt-8 cursor-pointer flex justify-center items-center">
            About me <MoveDown size={16} />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
