import './App.css';

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import './i18n';

import Home from './components/Home';
import Imprint from './components/Imprint';
import DataProtection from './components/DataProtection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Malfunctions from './components/Malfunctions';
import CustomCase from './components/CustomCase';
import SecurityIncidents from './components/SecurityIncidents';
import DigitalFirstAidBasics from './components/DigitalFirstAidBasics';

function App() {
  
  // Check if the key already exists in localStorage
  const key = "i18nLanguage";
  if (!localStorage.getItem(key)) {
    // Initialize with a default value if it doesn't exist
    localStorage.setItem(key, "de");
  }

  const theme = createTheme({
    colorSchemes: {
      dark: true
    },
  });

  return (
    <ThemeProvider theme={theme} defaultMode="dark">
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/malfunctions" element={<Malfunctions/>} />
          <Route path="/security-incidents" element={<SecurityIncidents/>} />
          <Route path="first-aid-basics" element={<DigitalFirstAidBasics/>} />
          <Route path="/custom-case" element={<CustomCase/>} />
          <Route path="/imprint" element={<Imprint/>} />
          <Route path="/data_protection" element={<DataProtection/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
