import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Services from "./pages/services";
import { links } from "./data";
import Top from "./components/top";
import Portfolio from "./pages/portfolio";
import Blogs from "./pages/blogs";

function App() {
  return (
    <div className="App">
      <Header links={links} />
      <Home />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Blogs />
      <Top />
    </div>
  );
}

export default App;
