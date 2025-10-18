import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  // Add scroll listener for header shrinking effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { label: '01. Home', path: '/' },
    { label: '02. Experience', path: '/experience' },
    { label: '03. Skills', path: '/skills' },
    { label: '04. Projects', path: '/projects' },
    { label: '05. Publications', path: '/publications' },
    { label: '06. References', path: '/references' },
    { label: '07. Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ 
      width: 280, 
      height: '100%',
      padding: 3,
      backgroundColor: theme.palette.background.paper,
      boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: theme.palette.primary.main }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ mt: 4 }}>
        {navItems.map((item, i) => (
          <ListItem
            key={item.path}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '14px',
              my: 2,
              transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
              '&:hover': {
                color: theme.palette.primary.main,
              },
              color: location.pathname === item.path ? theme.palette.primary.main : theme.palette.text.primary,
            }}
          >
            <ListItemText 
              primary={item.label} 
              sx={{ 
                '& .MuiTypography-root': { 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '16px', 
                  fontWeight: 400 
                } 
              }} 
            />
          </ListItem>
        ))}
        <ListItem sx={{ mt: 4 }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              borderRadius: '4px',
              padding: '10px 16px',
              ml: 2,
              fontSize: '13px',
              fontFamily: 'var(--font-mono)',
              transition: 'var(--transition)',
              '&:hover': {
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                transform: 'translateY(-3px)'
              },
            }}
            href={`${process.env.PUBLIC_URL}/Oussama-SMAOUI-Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'rgba(10, 25, 47, 0.85)', 
          backdropFilter: 'blur(10px)',
          boxShadow: scrolled ? '0 10px 30px -10px rgba(2, 12, 27, 0.7)' : 'none',
          height: scrolled ? 'var(--nav-scroll-height)' : 'var(--nav-height)',
          transition: 'var(--transition)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                color: theme.palette.primary.main,
                fontFamily: 'var(--font-mono)',
                fontWeight: 500,
                fontSize: scrolled ? '20px' : '24px',
                transition: 'var(--transition)',
              }}
            >
              Oussama SMAOUI
            </Typography>

            {isMobile ? (
              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ color: theme.palette.primary.main }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {navItems.map((item, i) => (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: location.pathname === item.path ? theme.palette.primary.main : theme.palette.text.primary,
                      mx: 1.5,
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      transition: 'var(--transition)',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateY(-2px)'
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    borderRadius: '4px',
                    padding: '10px 16px',
                    ml: 2,
                    fontSize: '13px',
                    fontFamily: 'var(--font-mono)',
                    transition: 'var(--transition)',
                    '&:hover': {
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      transform: 'translateY(-3px)'
                    },
                  }}
                  href={`${process.env.PUBLIC_URL}/Oussama-SMAOUI-Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '280px',
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        {drawer}
      </Drawer>
      
      {/* Empty toolbar for proper spacing below fixed AppBar */}
      <Toolbar sx={{ height: 'var(--nav-height)' }} />
    </>
  );
};

export default Header;
