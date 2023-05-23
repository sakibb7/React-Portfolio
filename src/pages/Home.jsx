import NavBar from "../containers/NavBar";
import About from "../containers/About";
import Contact from "../containers/Contact";
import Footer from "../containers/Footer";
import Hero from "../containers/Hero";
import Portfolio from "../containers/Portfolio";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
