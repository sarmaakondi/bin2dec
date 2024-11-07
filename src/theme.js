import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import "@fontsource/inter";

// Create a theme instance.
const theme = createTheme({
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
        fontFamily: '"Inter", "Roboto", sans-serif',
    },
});

export default theme;
