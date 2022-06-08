import React from "react";
import {Routes, Route} from 'react-router-dom'
import Contact from "./routers/Contact";
import Home from "./routers/Home";
import Pricing from "./routers/Pricing";
import Training from "./routers/Training";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
