import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import "./styles/global.scss";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
    </>
  );
}

export default App;
