import React, { useState } from "react";
import {
  Typography,
  Container,
  Paper,
  Snackbar,
  IconButton,
  Box,
} from "@mui/material";
import {
  Brightness4 as LightModeIcon,
  Brightness7 as DarkModeIcon,
} from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import { copyToClipboard } from "../../utils/clipboard";

import {
  PasswordDisplay,
  PasswordStrengthIndicator,
  CustomizePassword,
  lightTheme,
  darkTheme,
} from "../../components";
import { usePasswordGenerator } from "../../hooks/use-password-generator";

function App() {
  const {
    password,
    strength,
    length,
    setLength,
    hasUppercase,
    setHasUppercase,
    hasLowercase,
    setHasLowercase,
    hasNumbers,
    setHasNumbers,
    hasSymbols,
    setHasSymbols,
    generatePassword,
  } = usePasswordGenerator();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleCopyToClipboard = () => {
    copyToClipboard(password);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Box
        style={{
          height: "100vh",
          backgroundColor: theme.palette.background.default,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="sm">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="20px"
          >
            <Typography variant="h6" color="text.primary">
              Password Generator
            </Typography>
            <IconButton onClick={toggleDarkMode} color="primary">
              {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Box>

          <Paper
            elevation={3}
            style={{
              padding: "20px",
              marginBottom: "20px",
              textAlign: "center",
              backgroundColor: theme.palette.background.paper,
              overflow: "hidden",
              wordBreak: "break-word",
            }}
          >
            <PasswordDisplay
              password={password}
              onCopy={handleCopyToClipboard}
              onGenerate={generatePassword}
            />
            <PasswordStrengthIndicator strength={strength} />
          </Paper>

          <Paper
            elevation={3}
            style={{
              padding: "20px",
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <CustomizePassword
              length={length}
              setLength={setLength}
              hasUppercase={hasUppercase}
              setHasUppercase={setHasUppercase}
              hasLowercase={hasLowercase}
              setHasLowercase={setHasLowercase}
              hasNumbers={hasNumbers}
              setHasNumbers={setHasNumbers}
              hasSymbols={hasSymbols}
              setHasSymbols={setHasSymbols}
            />
          </Paper>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={2000}
            onClose={handleCloseSnackbar}
            message="Password copied to clipboard!"
          />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
