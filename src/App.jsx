import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import { Box, Button, TextField, Typography } from "@mui/material";
import LogoIcon from "../public/bin2code_xl.png";

export default function App() {
    const [binaryValue, setBinaryValue] = useState("");
    const [decimalValue, setDecimalValue] = useState("");
    const [isDecimalDisabled, setDecimalDisabled] = useState(true);
    const [error, setError] = useState("");

    const handleBinaryChange = (e) => {
        const value = e.target.value;

        if (/^[01]*$/.test(value)) {
            setBinaryValue(value);
            setError("");
        } else {
            setError("Only binary digits (0 or 1) are allowed.");
        }
    };

    const handleConvert = () => {
        if (binaryValue === "") {
            setError("This field cannot be empty.");
            return;
        }

        const decimal = parseInt(binaryValue, 2);
        setDecimalValue(decimal.toString());
        setDecimalDisabled(false);
        setError("");
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
                <Typography variant="h1">Bin2Dec</Typography>
            </Box>

            <Box mt={4} textAlign="center">
                <Typography variant="p">
                    Enter 'Binary' input and click 'CONVERT' to get the decimal
                    value
                </Typography>
            </Box>

            <Box mt={2}>
                <TextField
                    label="Binary"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={binaryValue}
                    onChange={handleBinaryChange}
                    error={!!error}
                    helperText={error}
                    slotProps={{
                        input: {
                            inputMode: "numeric",
                            pattern: "[0-1]*",
                        },
                    }}
                />
                <TextField
                    label="Decimal"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    disabled={isDecimalDisabled}
                    value={decimalValue}
                />
                <Button
                    sx={{ mt: 2 }}
                    size="large"
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
