import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Notfound from "./Pages/Notfound/Notfound";

import "./app.scss";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
