import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createContext, useMemo, useState } from "react";

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                  // palette values for light mode
                  primary: {
                      main: "#ffffff", // white
                  },
                  secondary: {
                      main: "#2962ff", // dark blue
                  },
                  text: {
                      primary: "#000000", // black
                      secondary: "#ffffff", // grey
                  },
                  background: {
                      primary: "#42a5f5",
                      secondary: "#1565c0",
                  },
              }
            : {
                  // palette values for dark mode
                  primary: {
                      main: "#ffffff", // white
                  },
                  secondary: {
                      main: "#2962ff", // dark blue
                  },
                  background: {
                      default: "#000000", // black
                      paper: "#111111", // dark grey
                  },
                  text: {
                      primary: "#ffffff", // white
                      secondary: "#c7c7c7", // light grey\
                  },
              }),
    },
});

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ThemeProviderWrapper = ({ children }) => {
    const [mode, setMode] = useState("light");
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prevMode) => {
                    return prevMode === "light" ? "dark" : "light";
                }),
        }),
        []
    );

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ThemeProviderWrapper;
