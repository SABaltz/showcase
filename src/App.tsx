import React from 'react';
import {ThemeProvider,} from "@mui/material";
import NavBar from "./components/NavBar";
import Name from "./components/Name";
import {darkTheme} from "./components/Theme";
import Quote from "./components/Quote";
import Portrait from "./components/Portrait";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <NavBar></NavBar>
                                <Name></Name>
                                <Quote></Quote>
                                <Portrait></Portrait>
                            </>
                        }>

                        </Route>
                        {/*<Route path="/home2">*/}
                        {/*    <Name></Name>*/}
                        {/*</Route>*/}
                    </Routes>
                </BrowserRouter>

            </ThemeProvider>
        </>
    );
}

export default App;
