import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import { links } from "./data";

function App() {
  return (
    <div className="App">
      <Header links={links} />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
