import React from 'react';
import {ThemeProvider,} from "@mui/material";
import {darkTheme} from "./components/Theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <NavBar></NavBar>
                            </>
                        }>
                        </Route>
                    </Routes>
                </BrowserRouter>

            </ThemeProvider>
        </>
    );
}

export default App;
