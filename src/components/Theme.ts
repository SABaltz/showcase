import {createTheme} from "@mui/material";

let textColor = '#dcdcdc'

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#3d3d3d',
        },
        secondary: {
            main: '#7a7a7a'
        }

    },
    typography: {fontFamily: 'poppins', h1: {color: textColor}, h2: {color: textColor}, h6: {color: textColor}},
})
