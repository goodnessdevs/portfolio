import { Download, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Link } from "react-scroll";
// import { ModeToggle } from "./ui/mode-toggle";
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
        <Menu size="25" />
      </SheetTrigger>
      <SheetContent className="md:hidden block" side="top">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <Separator />

        <nav className="flex flex-col space-y-4 p-4">
          <Link to="home" smooth={true} duration={500}>
            <button
              className="rounded-md hover:bg-accent p-2 w-full text-start"
              onClick={handleNavClick}
            >
              Home
            </button>
          </Link>
          <Link to="know-me" smooth={true} duration={500}>
            <button
              className="rounded-md hover:bg-accent p-2 w-full text-start"
              onClick={handleNavClick}
            >
              Know Me
            </button>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <button
              className="rounded-md hover:bg-accent p-2 w-full text-start"
              onClick={handleNavClick}
            >
              Projects
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <button
              className="rounded-md hover:bg-accent p-2 w-full text-start"
              onClick={handleNavClick}
            >
              Contact
            </button>
          </Link>
          <button
              className="rounded-md w-fit bg-gray-800 text-white animate-bounce hover:opacity-85 p-2 text-start"
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
          
          {/* <div className="mx-2">
            <ModeToggle />
          </div> */}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default function MobileNavbar() {
  return (
    <nav className="md:hidden manrope fixed z-50 w-full flex justify-between items-center p-5">
      <NavAvatar />
      <SheetNavbar />
    </nav>
  );
}
