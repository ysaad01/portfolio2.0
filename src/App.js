import Landing from "./pages/Landing";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import { Row } from "react-bootstrap";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </div>
      <Row className="contact-info-row">
        <Contact />
      </Row>
      <Footer />
    </div>
  );
}

export default App;
