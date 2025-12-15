import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner"
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Footer from "./components/Footer";
import CanvasBackground from "./components/CanvasBackground";

function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CanvasBackground />
      
      {/* desktop */}
      <Navbar />

      {/* mobile */}
      <MobileNavbar />

      <main className="p-6 z-10 overflow-x-hidden manrope">
        {children}
      </main>

      <Footer />
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}

export default Layout;
