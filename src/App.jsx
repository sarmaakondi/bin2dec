import * as React from "react";
import Container from "@mui/material/Container";
import { Box, TextField, Typography } from "@mui/material";

export default function App() {
    return (
        <Container maxWidth="sm">
            <Typography variant="h3" align="center" mt={4}>
                Bin2Dec
            </Typography>
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
                />
            </Box>
        </Container>
    );
}
