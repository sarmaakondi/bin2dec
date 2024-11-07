import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import { Box, Button, TextField, Typography } from "@mui/material";
import LogoIcon from "../public/bin2code_xl.png";

export default function App() {
    const [binaryValue, setBinaryValue] = useState("");
    const [decimalValue, setDecimalValue] = useState("");
    const [isDecimalDisabled, setDecimalDisabled] = useState(true);

    const handleConvert = () => {
        const decimal = parseInt(binaryValue, 2);
        setDecimalValue(decimal.toString());
        setDecimalDisabled(false);
    };

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
                    value={binaryValue}
                    onChange={(e) => setBinaryValue(e.target.value)}
                />
                <TextField
                    label="Decimal"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    disabled={isDecimalDisabled}
                    value={decimalValue}
                    onChange={(e) => setDecimalValue(e.target.value)}
                />
                <Button
                    sx={{ mt: 2 }}
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleConvert}
                >
                    Convert
                </Button>
            </Box>
        </Container>
    );
}
