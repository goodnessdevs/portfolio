import { Download, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Link } from "react-scroll";
import { Separator } from "./ui/separator";
import { useState } from "react";
import NavAvatar from "./NavAvatar";

function SheetNavbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu size="25" className="text-white" />
      </SheetTrigger>
      <SheetContent className="md:hidden block bg-gradient-to-tl from-chart-2/50 via-black/90 to-black/90 backdrop-blur-xs text-white" side="top">
        <SheetHeader>
          <SheetTitle className="text-white">Menu</SheetTitle>
        </SheetHeader>

        <Separator />

        <nav className="flex flex-col space-y-4 p-4">
          <Link to="home" smooth={true} duration={500}>
            <button
              className="rounded-md hover:bg-chart-2/90 p-2 w-full text-start"
              onClick={handleNavClick}
            >
              Home
            </button>
          </Link>
          <Link to="about-me" smooth={true} duration={500}>
            <button
              className="rounded-md hover:bg-chart-2/90 p-2 w-full text-start"
              onClick={handleNavClick}
            >
              About me
            </button>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <button
              className="rounded-md hover:bg-chart-2/90 p-2 w-full text-start"
              onClick={handleNavClick}
            >
              Skills
            </button>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <button
              className="rounded-md hover:bg-chart-2/90 p-2 w-full text-start"
              onClick={handleNavClick}
            >
              Projects
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <button
              className="rounded-md hover:bg-chart-2/90 p-2 w-full text-start"
              onClick={handleNavClick}
            >
              Contact
            </button>
          </Link>
          <button
              className="rounded-md w-fit bg-chart-2/50 hover:bg-chart-2/80 transition duration-700 text-white hover:opacity-85 p-2 text-start"
            >
              <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 text-[15px]"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
            </button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default function MobileNavbar() {
  return (
    <nav className="backdrop-blur-xs md:hidden manrope fixed z-50 w-full flex justify-between items-center p-5">
      <NavAvatar />
      <SheetNavbar />
    </nav>
  );
}
