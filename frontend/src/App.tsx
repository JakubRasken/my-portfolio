import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import "./styles/global.scss";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <Work/>
    </>
  );
}

export default App;
