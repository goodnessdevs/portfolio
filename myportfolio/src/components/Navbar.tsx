import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Link } from "react-scroll";
import { Download, Home, IdCard, PanelsTopLeft, Phone } from "lucide-react";

function Navbar() {
  return (
    <nav className="hidden fixed z-50 w-full md:flex justify-center items-center p-3 text-white text-lg font-semibold manrope backdrop-blur-xs">
      <NavigationMenu>
        <NavigationMenuList className="space-x-8 tracking-wide">
          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer hover:bg-transparent">
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="border-0 border-l-2 border-l-chart-2 px-0.5 font-bold"
                className="group text-white hover:text-chart-2 flex gap-x-1 items-center"
              >
                <Home className="group-hoder:text-chart-2 transition-colors" /> 
                <span className="group-hoder:text-chart-2 transition-colors">Home</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer hover:bg-transparent">
              <Link
                to="about-me"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="border-0 border-l-2 border-l-chart-2 px-0.5 font-bold"
                className="group text-white hover:text-chart-2 flex gap-x-1 items-center"
              >
                <IdCard className="group-hoder:text-chart-2 transition-colors" /> 
                <span className="group-hoder:text-chart-2 transition-colors">About</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer hover:bg-transparent">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="border-0 border-l-2 border-l-chart-2 px-0.5 font-bold"
                className="group text-white hover:text-chart-2 flex gap-x-1 items-center"
              >
                <IdCard className="group-hoder:text-chart-2 transition-colors" /> 
                <span className="group-hoder:text-chart-2 transition-colors">Skills</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer hover:bg-transparent">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="border-0 border-l-2 border-l-chart-2 px-0.5 font-bold"
                className="group text-white hover:text-chart-2 flex gap-x-1 items-center"
              >
                <PanelsTopLeft className="group-hoder:text-chart-2 transition-colors" /> 
                <span className="group-hoder:text-chart-2 transition-colors">Projects</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer hover:bg-transparent">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="border-0 border-l-2 border-l-chart-2 px-0.5 font-bold"
                className="group text-white hover:text-chart-2 flex gap-x-1 items-center"
              >
                <Phone className="group-hoder:text-chart-2 transition-colors" /> 
                <span className="group-hoder:text-chart-2 transition-colors">Contact</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="bg-chart-2/50 hover:bg-chart-2/80 transition duration-700 backdrop-blur-xs text-white p-2 text-sm rounded-md hover:opacity-85">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export default Navbar;
