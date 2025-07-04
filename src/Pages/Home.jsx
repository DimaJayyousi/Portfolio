//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Heder from "./component/Heder/heder";
import Hero from "../component/hero/hero";
import About from "../component/about-me/about";
import Exp from "../component/Experience/Experience";
import Skills from "../component/Skills/Skills";
//import Footer from "./component/Footer/Footer";
//import Projects from "./Pages/project";
//import Activity from "./Pages/activity";

const Home = () => {
 return (
    <div>
      <Hero />
      <About />
      <Exp />
      <Skills />
    </div>
  );
}

export default Home
