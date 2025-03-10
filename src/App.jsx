import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

// Import komponen halaman
import Home from "./page/Home";



// Import komponen loading
 

function App() {
  // Setup tema untuk aplikasi
  const theme = createTheme({
    palette: {
      primary: {
        main: "#204684",
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
