import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./styles/global.scss";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
    </>
  );
}

export default App;
