import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import Layout from "./Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AdminMessages from "@/admin/AdminMessages";
import AboutMe from "./pages/About";
import Skills from "./pages/Skills";

function LandingPage() {
  return (
    <Layout>
      <div className="space-y-40">
        <Element
          name="home"
          className="h-screen flex items-center justify-center"
        >
          <Home />
        </Element>

        <Element
          name="about-me"
          className="h-full md:h-screen flex items-center justify-between"
        >
          <AboutMe />
        </Element>

        <Element
          name="skills"
          className="h-full md:h-screen flex items-center justify-between"
        >
          <Skills />
        </Element>

        <Element
          name="projects"
          className="h-full flex items-center justify-center"
        >
          <Projects />
        </Element>

        <Element
          name="contact"
          className="h-full flex items-center justify-center"
        >
          <Contact />
        </Element>
      </div>
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/messages" element={<AdminMessages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
