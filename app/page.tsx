"use client"
import React from "react";
import Navbar from "@/Components/Navbar";
import { Container ,createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography:{
    fontFamily: 'Quicksand',
  },
  palette:{
    primary:{
      main: '#3949ab',
    }
  }
});
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
        <Navbar/>
          <Container maxWidth='xl'>

          </Container>
    </ThemeProvider>
  );
}
