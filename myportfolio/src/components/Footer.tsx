import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Separator } from "@/components/ui/separator";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-chart-2/40 via-black/40 to-black/40 backdrop-blur-sm manrope md:p-20 p-16 border-t-2 border-t-white text-white text-center md:text-start">
      <div className="md:flex justify-between items-center">
        <div className="">
          <h2 className="font-semibold text-3xl">
            Goodness Omogbeja,
          </h2>

          <div className="mt-4 md:w-[600px]">
            A passionate full-stack developer with a strong focus on the{" "}
            <span className="font-medium">MERN stack</span> (MongoDB,
            Express.js, React, Node.js). I enjoy building clean, functional, and
            scalable web applications.
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <h2 className="text-3xl">Follow me:</h2>
          <div className="flex md:justify-start justify-center gap-4 text-3xl my-4">
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
          </div>
          <p className="mt-2">
            Email:{" "}
            <a className="hover:text-blue-600 underline" href="mailto:devswithgoody82@gmail.com">
              devswithgoody82@gmail.com
            </a>
          </p>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex justify-center items-center relative top-5">
        <p>&copy; 2025 Goodness Omogbeja. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
