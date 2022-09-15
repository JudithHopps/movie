import React from "react";
import './App.css';
import { HashRouter, Routes,Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
// <img src='./mainyouflex.JPG' width= "200%" alt="Home" />
function App() {
  return (
      <HashRouter>
        <Navigation/>
        <Routes>
          
          <Route path="/*" element={<Home/>}></Route>          
          <Route path="/about" element={<About/>}> </Route>
          <Route path="/movie-detail" element={<Detail/>}> </Route>
        </Routes>
      </HashRouter>

  );


}

export default App;
