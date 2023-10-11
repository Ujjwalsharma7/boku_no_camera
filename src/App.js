import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import MyWork from "./pages/MyWork";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/work" element={<MyWork />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
