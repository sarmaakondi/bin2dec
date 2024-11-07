import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import LogoIcon from "../public/bin2code_sm.png";
import BinaryInput from "./BinaryInput";

export default function App() {
    return (
        <Container maxWidth="sm">
            <Box
                mt={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <img
                    src={LogoIcon}
                    alt="logo icon"
                    style={{ marginRight: 32 }}
                />
                <Typography variant="h2">Bin2Dec</Typography>
            </Box>

            <Box mt={4} textAlign="center">
                <Typography variant="body1">
                    Enter 'Binary' input and click 'CONVERT' to get the decimal
                    value
                </Typography>
            </Box>

            <BinaryInput maxBinaryLength={32} />
        </Container>
    );
}
