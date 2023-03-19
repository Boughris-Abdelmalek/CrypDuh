import { useState, useMemo, createContext } from "react";
import Layout from "./layout/Layout";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                  // palette values for light mode
                  primary: {
                      main: "#ffffff", // black
                  },
                  secondary: {
                      main: "#000000", // white
                  },
                  text: {
                      primary: "#000000", // black
                      secondary: "#757575", // grey
                  },
              }
            : {
                  // palette values for dark mode
                  primary: {
                      main: "#ffffff", // white
                  },
                  secondary: {
                      main: "#ffffff", // black
                  },
                  background: {
                      default: "#000000", // black
                      paper: "#111111", // dark grey
                  },
                  text: {
                      primary: "#ffffff", // white
                      secondary: "#c7c7c7", // light grey
                  },
              }),
    },
});

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = () => {
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
                <Layout>
                    <Box>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi rerum amet, quas impedit magni veritatis
                        officiis aperiam accusamus autem placeat.
                    </Box>
                </Layout>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default App;
