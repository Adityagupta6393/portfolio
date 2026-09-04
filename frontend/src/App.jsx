import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />

      <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Stats />
      <Achievements />
      <Contact />
      <Footer />
      </main>
      
    </>
  );
}

export default App;