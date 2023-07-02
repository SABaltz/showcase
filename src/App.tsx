import React from 'react';
import {ThemeProvider,} from "@mui/material";
import {darkTheme} from "./components/Theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import About from './components/About';
import Code from "./components/Code";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<><HomePage></HomePage></>}></Route>
                        <Route path="/about" element={<><About/></>}></Route>
                        <Route path="/code" element={<><Code/></>}></Route>
                        {/*<Route path="/about" element={<><About/></>}></Route>*/}
                    </Routes>
                </BrowserRouter>
                <Footer/>
            </ThemeProvider>
        </>
    );
}

export default App;
