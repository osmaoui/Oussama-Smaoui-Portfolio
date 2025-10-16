import React, { useEffect, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Link as MuiLink,
  Chip,
  useTheme,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Launch as LaunchIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  KeyboardArrowRight as ArrowIcon,
  Facebook as FacebookIcon,
  FileDownload as DownloadIcon,

  Instagram as InstagramIcon,
} from '@mui/icons-material';

const Home: React.FC = () => {
  const theme = useTheme();
  const [typedText, setTypedText] = useState('');
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Refs for scroll animations
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const skills = [
    'Tech Lead AI', 'AI/ML Engineer', 'Computer Vision Expert', '3D Point Cloud Specialist', 
    'Deep Learning Researcher',
  ];
  
  
  const contactLinks = [
    { name: 'LinkedIn', icon: <LinkedInIcon fontSize="small" />, url: 'https://linkedin.com/in/oussama-smaoui' },
    { name: 'GitHub', icon: <GitHubIcon fontSize="small" />, url: 'https://github.com/osmaoui' },
    { name: 'Facebook', icon: <FacebookIcon fontSize="small" />, url: 'https://www.facebook.com/osmaoui' },
    { name: 'Instagram', icon: <InstagramIcon fontSize="small" />, url: 'https://www.instagram.com/oussamasmaoui' },
  ];
  
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Typing animation effect
  useEffect(() => {
    const currentSkill = skills[currentSkillIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentSkill.length) {
          setTypedText(currentSkill.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentSkillIndex, skills]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 10, md: 15 }, mt: 3 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box mb={10}>            
            <Typography 
              component="h1"
              variant="body1" 
              sx={{ 
                color: theme.palette.primary.main,
                fontFamily: "'SF Mono', 'Fira Code', monospace",
                mb: 2,
                fontSize: '1rem',
                fontWeight: 400
              }}
            >
              Hi, my name is
            </Typography>

            <Typography 
              variant="h1" 
              sx={{ 
                fontFamily: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', sans-serif",
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
                color: theme.palette.text.primary,
                letterSpacing: '-2px',
                mb: 1,
                lineHeight: 1.1
              }}
            >
              Oussama Smaoui.
            </Typography>
            
            <Box sx={{ height: { xs: '3.5rem', sm: '4.5rem' }, mb: 3, display: 'flex', alignItems: 'center' }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontFamily: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' },
                  color: theme.palette.text.secondary,
                  letterSpacing: '-1px',
                  lineHeight: 1.1,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {typedText}
                <Box
                  component="span"
                  sx={{
                    display: 'inline-block',
                    width: '3px',
                    height: '1em',
                    backgroundColor: theme.palette.primary.main,
                    ml: 1,
                    animation: 'blink 1s step-end infinite'
                  }}
                />
              </Typography>
            </Box>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: theme.palette.text.secondary,
                mb: 5,
                maxWidth: '540px',
                fontSize: '1.1rem',
                lineHeight: 1.7,
              }}
            >
              I’m an AI/ML engineer specializing in <strong>2D/3D computer vision</strong> and <strong>medical imaging</strong>. 
              Currently at <strong>Udini</strong>, I design and deploy advanced <strong> AI solutions</strong> — turning 
              research breakthroughs into real-world impact.  
          </Typography>

            
            <Button
              variant="outlined"
              component="a"
              href="/Oussama-SMAOUI-Resume.pdf"
              target="_blank"
              sx={{
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                fontFamily: "'SF Mono', 'Fira Code', monospace",
                py: 1.5,
                px: 3,
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 400,
                textTransform: 'none',
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: `${theme.palette.primary.main}10`,
                  transform: 'translateY(-2px)',
                },
              }}
              startIcon={<DownloadIcon />}
            >
              View My Resume
            </Button>
            
            <Button
              variant="contained"
              color="primary"
              href="/projects"
              sx={{
                ml: 2,
                py: 1.5,
                px: 3,
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 400,
                textTransform: 'none',
                transition: 'all 0.25s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: `0 5px 15px ${theme.palette.primary.main}40`,
                },
              }}
            >
              View My Work
            </Button>
          </Box>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          ref={aboutRef}
        >
          <Box mb={15}>
            <Box display="flex" alignItems="center" mb={4}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: "'Calibre', 'Inter', 'San Francisco', sans-serif",
                  '&::before': {
                    content: '"01."',
                    color: theme.palette.primary.main,
                    fontFamily: "'SF Mono', 'Fira Code', monospace",
                    fontSize: '1.2rem',
                    marginRight: '0.75rem',
                    fontWeight: 400,
                  },
                }}
              >
                About Me
              </Typography>
              <Box
                sx={{
                  height: '1px',
                  backgroundColor: 'rgba(136, 146, 176, 0.3)',
                  flexGrow: 1,
                  ml: 3,
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
              <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 60%' } }}>
                <Typography variant="h4" gutterBottom color="primary" sx={{ mb: 3 }}>
                  About Me
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 3,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}
                >
                  I’m an AI engineer with <strong>4+ years of experience</strong> spanning the full AI lifecycle — from 
                  research to production deployment. After graduating from <strong>SUP’COM</strong>, I completed a research 
                  internship at <strong>École Centrale de Lyon</strong>, where I explored advanced methods in 3D modelisation models. 
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 3,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}
                >
                  At <strong>Udini – Dental AI</strong>, I focus on <strong>3D computer vision</strong> for medical imaging, 
                  building high-precision registration systems and developing self-supervised learning methods for 
                  intraoral scans. Beyond engineering, I actively contribute to the community as a <strong>MICCAI 
                  workshop organizer</strong>, bridging research and applied innovation.
                </Typography>

                <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {[
                    '4+ Years Experience',
                    '3D Computer Vision',
                    'Medical AI',
                    'Research & Development',
                    'Production Deployment',
                    'MICCAI Organizer'
                  ].map((highlight, index) => (
                    <Chip
                      key={index}
                      label={highlight}
                      variant="outlined"
                      color="primary"
                      sx={{ fontWeight: 500 }}
                    />
                  ))}
                </Box>

              </Box>
{/* 
              <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 40%' }, display: 'flex', justifyContent: 'center' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: '70%', sm: '60%', md: '80%' },
                    maxWidth: '300px',
                    mt: { xs: 2, md: 0 },
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      position: 'relative',
                      zIndex: 1,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '4px',
                        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
                        backgroundColor: theme.palette.primary.main,
                        opacity: 0.5,
                        top: 0,
                        left: 0,
                        mixBlendMode: 'screen',
                      },
                      '&:hover::before': {
                        backgroundColor: 'transparent',
                        opacity: 0,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src="/profile.jpg"
                      alt="Oussama SMAOUI"
                      sx={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '4px',
                        filter: 'grayscale(100%) contrast(1.1)',
                        mixBlendMode: 'multiply',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      width: '100%',
                      height: '100%',
                      border: `2px solid ${theme.palette.primary.main}`,
                      borderRadius: '4px',
                      zIndex: 0,
                      transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
                    }}
                  />
                </Box>
              </Box> */}
            </Box>
          </Box>
        </motion.div>
        
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          ref={contactRef}
        >
          <Box mb={10} sx={{ textAlign: 'center', maxWidth: '600px', mx: 'auto' }}>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.primary.main,
                fontFamily: "'SF Mono', 'Fira Code', monospace",
                fontSize: '1rem',
                mb: 2,
                fontWeight: 400,
              }}
            >
              02. What's Next? 
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: theme.palette.text.primary,
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 600,
                mb: 3,
                fontFamily: "'Calibre', 'Inter', 'San Francisco', sans-serif",
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: '1.1rem',
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              I'm currently open to new opportunities in AI and computer vision. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </Typography>
            <Button
              variant="outlined"
              component={RouterLink}
              to="/contact"
              sx={{
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                fontFamily: "'SF Mono', 'Fira Code', monospace",
                py: 1.5,
                px: 3,
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 400,
                textTransform: 'none',
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: `${theme.palette.primary.main}10`,
                  transform: 'translateY(-2px)',
                },
              }}
              startIcon={<EmailIcon />}
            >
              Say Hello
            </Button>
          </Box>
        </motion.div>
        
        {/* Footer */}
        <Box sx={{ textAlign: 'center', py: 3 }}>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            sx={{ mb: 2 }}
          >
            {contactLinks.map((link, index) => (
              <MuiLink
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.text.secondary,
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.25s ease',
                  display: 'inline-block',
                }}
              >
                {link.icon}
              </MuiLink>
            ))}
          </Stack>
          <Typography
            variant="caption"
            sx={{
              color: theme.palette.text.secondary,
              fontFamily: "'SF Mono', 'Fira Code', monospace",
              fontSize: '0.75rem',
            }}
          >
            Designed & Built by Oussama Smaoui
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
