import "./App.css";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Hero from "./containers/Hero";
import NavBar from "./containers/NavBar";
import Portfolio from "./containers/Portfolio";

function App() {
  return (
    <>
      <div className="w-full h-auto font-bodyFont text-primaryColor">
        <NavBar />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
