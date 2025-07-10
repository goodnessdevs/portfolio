import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import Layout from "./Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import KnowMe from "./pages/KnowMe";
import AdminMessages from "@/admin/AdminMessages";

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
          name="know-me"
          className="h-full md:h-screen flex items-center justify-between"
        >
          <KnowMe />
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
