import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works/*" element={<Works />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />

                {/* Come in soon in V2 */}
                {/* <Route path="/contact" element={<Contact />} /> */}
                
            </Routes>
        </BrowserRouter>
    );
};

export default App;