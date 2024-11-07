import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import "@fontsource/inter";

// Create a theme instance.
let theme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            main: "#556cd6",
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: '"Inter", sans-serif',
    },
});

theme = responsiveFontSizes(theme);

export default theme;
