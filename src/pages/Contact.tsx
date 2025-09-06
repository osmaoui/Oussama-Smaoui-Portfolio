import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
  Paper,
  IconButton,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: 'osmaoui1996@gmail.com',
      link: 'mailto:osmaoui1996@gmail.com',
    },
    {
      icon: <PhoneIcon />,
      label: 'Phone',
      value: '+216 21 392 722',
      link: 'tel:+21621392722',
    },
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      value: 'oussama-smaoui',
      link: 'https://linkedin.com/in/oussama-smaoui',
    },
    {
      icon: <GitHubIcon />,
      label: 'GitHub',
      value: 'osmaoui',
      link: 'https://github.com/osmaoui',
    },
    {
      icon: <LocationIcon />,
      label: 'Location',
      value: 'Sfax, Tunisia',
      link: '#',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h2" gutterBottom color="primary" sx={{ mb: 2 }}>
          Get In Touch
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Let's discuss opportunities, collaborations, or any questions you might have
        </Typography>
      </motion.div>

      {/* Success Alert */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Alert severity="success" sx={{ mb: 3 }}>
            Message sent successfully! I'll get back to you as soon as possible.
          </Alert>
        </motion.div>
      )}

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        {/* Contact Information */}
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 40%' } }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card sx={{ mb: 4 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h4" gutterBottom color="primary">
                  Contact Information
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  Feel free to reach out through any of these channels. I'm always open to 
                  discussing new opportunities, research collaborations, or technical challenges.
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {contactInfo.map((info, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <IconButton
                        color="primary"
                        sx={{ backgroundColor: 'primary.light', color: 'white' }}
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                      >
                        {info.icon}
                      </IconButton>
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {info.label}
                        </Typography>
                        <Typography variant="body1" fontWeight="medium">
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Quick Actions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  fullWidth
                  size="large"
                >
                  Download CV
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<LinkedInIcon />}
                  href="https://linkedin.com/in/oussama-smaoui"
                  target="_blank"
                  fullWidth
                  size="large"
                >
                  Connect on LinkedIn
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/osmaoui"
                  target="_blank"
                  fullWidth
                  size="large"
                >
                  View GitHub Profile
                </Button>
              </Box>
            </Paper>
          </motion.div>
        </Box>

        {/* Contact Form */}
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 60%' } }}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom color="primary">
                  Send a Message
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  Whether you're looking for an AI/ML engineer, want to discuss a research 
                  collaboration, or have a technical question, I'd love to hear from you.
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Box>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      multiline
                      rows={6}
                      variant="outlined"
                      placeholder="Tell me about your project, opportunity, or question..."
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<SendIcon />}
                      sx={{ minWidth: 150, alignSelf: 'flex-start' }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Box>

      {/* Additional Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Paper sx={{ mt: 4, p: 4, textAlign: 'center', backgroundColor: 'grey.50' }}>
          <Typography variant="h5" gutterBottom color="primary">
            Open to Opportunities
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            I'm currently open to new opportunities in AI/ML engineering, research collaborations, 
            and consulting projects. Particularly interested in:
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
            {[
              '3D Computer Vision',
              'Medical AI',
              'Research & Development',
              'MLOps & Deployment',
              'Technical Leadership',
              'International Collaborations'
            ].map((interest, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  px: 2,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: '0.875rem',
                }}
              >
                {interest}
              </Box>
            ))}
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Contact;
