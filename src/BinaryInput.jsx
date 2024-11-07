import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const BinaryInput = ({ maxBinaryLength = 32 }) => {
    const [binaryValue, setBinaryValue] = useState("");
    const [decimalValue, setDecimalValue] = useState("");
    const [isDecimalDisabled, setDecimalDisabled] = useState(true);
    const [error, setError] = useState("");

    const handleBinaryChange = (e) => {
        const value = e.target.value;

        if (/^[01]*$/.test(value) && value.length <= maxBinaryLength) {
            setBinaryValue(value);
            setDecimalValue("");
            setError("");
        } else if (value.length > maxBinaryLength) {
            setError("Maximum length of 32 binary digits reached.");
        } else {
            setError("Only binary digits (0 or 1) are allowed.");
            setDecimalValue("");
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
        <Box mt={2}>
            <TextField
                label="Binary"
                variant="outlined"
                fullWidth
                margin="normal"
                value={binaryValue}
                onChange={handleBinaryChange}
                error={!!error}
                helperText={
                    error ||
                    `Digits left: ${maxBinaryLength - binaryValue.length}`
                }
                slotProps={{
                    htmlInput: {
                        inputMode: "numeric",
                        pattern: "[0-1]*",
                        maxLength: maxBinaryLength,
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
                aria-label="Decimal output field"
            />
            <Button
                sx={{ mt: 2 }}
                size="large"
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleConvert}
                disabled={!binaryValue || !!error}
            >
                Convert
            </Button>
        </Box>
    );
};

export default BinaryInput;
