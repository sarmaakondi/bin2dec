import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import { Box, TextField, Typography } from "@mui/material";
import LogoIcon from "../public/bin2code_xl.png";

export default function App() {
    const [isDecimalDisabled, setDecimalDisabled] = useState(true);

    return (
        <Container maxWidth="sm">
            <Box
                mt={4}
                display="flex"
                alignItems="center"
                justifyContent="space-around"
            >
                <img src={LogoIcon} alt="logo icon" style={{ width: 100 }} />
                <Typography variant="h1" align="center">
                    Bin2Dec
                </Typography>
            </Box>

            <Box mt={4}>
                <TextField
                    label="Binary"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Decimal"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    disabled={isDecimalDisabled}
                />
            </Box>
        </Container>
    );
}
