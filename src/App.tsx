import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import References from './pages/References';
import Contact from './pages/Contact';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda', // Teal accent color
      dark: '#4db6ac',
      light: '#9effff',
    },
    secondary: {
      main: '#ccd6f6', // Light slate
      dark: '#8892b0',
      light: '#e6f1ff',
    },
    background: {
      default: '#0a192f', // Navy blue background
      paper: '#112240', // Light navy
    },
    text: {
      primary: '#ccd6f6', // Light slate
      secondary: '#8892b0', // Slate
    },
    success: {
      main: '#64ffda', // Same as primary
    },
    warning: {
      main: '#ffb74d', // Amber
    },
    info: {
      main: '#64b5f6', // Light blue
    },
  },
  typography: {
    fontFamily: '"SF Mono", "Fira Code", "Roboto Mono", monospace',
    h1: {
      fontWeight: 700,
      fontSize: '3.2rem',
      lineHeight: 1.1,
      letterSpacing: '0.01em',
      color: '#e6f1ff',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.2rem',
      lineHeight: 1.3,
      letterSpacing: '0.01em',
      color: '#ccd6f6',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.8rem',
      lineHeight: 1.4,
      letterSpacing: '0.01em',
      color: '#ccd6f6',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.4rem',
      lineHeight: 1.4,
      letterSpacing: '0.01em',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      letterSpacing: '0.01em',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.1rem',
      lineHeight: 1.4,
      letterSpacing: '0.01em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 0,
          border: '1px solid #00ffff',
          background: 'linear-gradient(45deg, rgba(0,255,255,0.1) 0%, rgba(255,0,128,0.1) 100%)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'linear-gradient(45deg, rgba(0,255,255,0.2) 0%, rgba(255,0,128,0.2) 100%)',
            boxShadow: '0 0 20px rgba(0,255,255,0.5)',
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #00ffff 0%, #ff0080 100%)',
          color: '#000000',
          fontWeight: 600,
          '&:hover': {
            background: 'linear-gradient(45deg, #4dffff 0%, #ff4da6 100%)',
            boxShadow: '0 0 25px rgba(0,255,255,0.7)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          background: 'linear-gradient(135deg, rgba(26,26,26,0.9) 0%, rgba(40,40,40,0.9) 100%)',
          border: '1px solid rgba(0,255,255,0.2)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          '&:hover': {
            border: '1px solid rgba(0,255,255,0.5)',
            boxShadow: '0 8px 32px rgba(0,255,255,0.2)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, rgba(0,255,255,0.2) 0%, rgba(255,0,128,0.2) 100%)',
          border: '1px solid rgba(0,255,255,0.3)',
          color: '#ffffff',
          '&:hover': {
            background: 'linear-gradient(45deg, rgba(0,255,255,0.3) 0%, rgba(255,0,128,0.3) 100%)',
            boxShadow: '0 0 10px rgba(0,255,255,0.5)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, rgba(10,10,10,0.95) 0%, rgba(26,26,26,0.95) 100%)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,255,255,0.2)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/references" element={<References />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
