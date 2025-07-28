import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Link } from "react-scroll";
import { ModeToggle } from "./ui/mode-toggle";
import { Download } from "lucide-react";
import NavAvatar from "./NavAvatar";

function Navbar() {
  return (
    <nav className="hidden fixed z-50 w-full bg-cyan-100 dark:bg-cyan-950 md:flex justify-around items-center p-4 text-2xl font-semibold">
      <NavAvatar />

      <NavigationMenu>
        <NavigationMenuList className="space-x-4 tracking-wide">
          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer">
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="border-0 border-b-2 border-b-blue-500 font-bold"
              >
                Home
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
                activeClass="border-0 border-b-2 border-b-blue-500 font-bold"
              >
                Know Me
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
                activeClass="border-0 border-b-2 border-b-blue-500 font-bold"
              >
                Projects
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
                activeClass="border-0 border-b-2 border-b-blue-500 font-bold"
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="bg-gray-800 text-white p-2 animate-bounce rounded-md hover:opacity-85">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 text-[15px]"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export default Navbar;
