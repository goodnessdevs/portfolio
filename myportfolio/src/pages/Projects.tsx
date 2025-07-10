import {
  Card,
  CardContent,
} from "@/components/ui/card";
import site1 from "@/assets/site1.png";
import site2 from "@/assets/site2.png";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const MotionCard = motion.create(Card);

function Projects() {
  return (
    <div className="space-y-10 mt-28 md:mt-2">
      {/* Section Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-muted-foreground">
          A showcase of some of the web applications, tools, and creative projects I’ve built.
        </p>
      </div>

      {/* Project 1 */}
      <MotionCard
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="p-6"
      >
        <CardContent>
          <div className="md:flex justify-between items-center md:space-x-20">
            <div className="p-2 rounded-md md:w-[400px] w-fit flex md:justify-center items-center bg-gray-900">
              <img
                src={site1}
                alt="BecomeIngenious"
                className="rounded-md w-96 h-56 object-fill"
              />
            </div>

            <div className="p-2 md:w-[650px]">
              BecomeIngenious is a web app dedicated to inspiring curiosity
              through the stories of great scientists and inventors. Explore their
              lives, breakthroughs, and impact on the world — all in one place.
              <a
                className="flex items-center gap-x-1 text-blue-500 hover:underline mt-2"
                href="https://becomeingenious.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project <ExternalLink size={16}/>
              </a>
            </div>
          </div>
        </CardContent>
      </MotionCard>

      {/* Project 2 */}
      <MotionCard
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false }}
        className="p-6"
      >
        <CardContent>
          <div className="md:flex justify-between items-center md:space-x-20">
            <div className="p-2 rounded-md md:w-[400px] w-fit flex md:justify-center items-center bg-gray-900">
              <img
                src={site2}
                alt="BlogTide"
                className="rounded-md w-96 h-56 object-fill"
              />
            </div>

            <div className="p-2 md:w-[650px]">
              BlogTide is a blogging platform focused on performance and simplicity.
              It's designed to help users easily write, share, and explore stories.
              <a
                className="flex items-center gap-x-1 text-blue-500 hover:underline mt-2"
                href="https://blogtide.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project <ExternalLink size={16}/>
              </a>
            </div>
          </div>
        </CardContent>
      </MotionCard>
    </div>
  );
}

export default Projects;
