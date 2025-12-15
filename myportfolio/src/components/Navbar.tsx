import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Link } from "react-scroll";
// import { ModeToggle } from "./ui/mode-toggle";
import { Download, Home, IdCard, PanelsTopLeft, Phone } from "lucide-react";

function Navbar() {
  return (
    <nav className="hidden fixed z-50 w-full md:flex justify-center items-center p-3 text-lg font-semibold manrope backdrop-blur-xs">
      <NavigationMenu>
        <NavigationMenuList className="space-x-8 tracking-wide">
          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer">
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="border-0 border-b-2 border-b-cyan-500 font-bold"
                className="flex gap-x-1 items-center"
              >
                <Home /> Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer">
              <Link
                to="know-me"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="border-0 border-b-2 border-b-cyan-500 font-bold"
                className="flex gap-x-1 items-center"
              >
                <IdCard /> Know Me
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="border-0 border-b-2 border-b-cyan-500 font-bold"
                className="flex gap-x-1 items-center"
              >
                <PanelsTopLeft /> Projects
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="border-0 border-b-2 border-b-cyan-500 font-bold"
                className="flex gap-x-1 items-center"
              >
                <Phone /> Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="bg-chart-2/50 backdrop-blur-xs text-white p-2 text-sm rounded-md hover:opacity-85">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </NavigationMenuItem>

          {/* <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export default Navbar;
