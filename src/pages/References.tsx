import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  Chip,
} from '@mui/material';
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  Phone as PhoneIcon,
  Business as BusinessIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const References: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Placeholder references - these would be updated with real references
  const references = [
    {
      name: 'Dr. Achraf Ben-Hamadou',
      title: 'Senior Research Scientist',
      company: 'Udini - Dental AI',
      relationship: 'Direct Supervisor',
      duration: '2021 - Present',
      email: 'achraf.benhamadou@udini.com',
      phone: '+216 XX XXX XXX',
      linkedin: 'achraf-ben-hamadou',
      description: 'Achraf has been my direct supervisor at Udini, overseeing my work on 3D dental scan segmentation and the organization of MICCAI challenges. He can speak to my technical skills in AI/ML and research capabilities.',
      skills: ['3D Computer Vision', 'Research Leadership', 'AI/ML Development', 'Team Collaboration'],
      avatar: 'AB'
    },
    {
      name: 'Prof. Edmond Boyer',
      title: 'Research Director',
      company: 'INRIA Grenoble',
      relationship: 'Research Collaborator',
      duration: '2020 - Present',
      email: 'edmond.boyer@inria.fr',
      phone: '+33 X XX XX XX XX',
      linkedin: 'edmond-boyer',
      description: 'Edmond collaborated with me during my graduation internship at Ecole Centrale de Lyon and continues to work with me on research publications. He can attest to my research abilities and academic contributions.',
      skills: ['Research Excellence', 'Academic Collaboration', '3D Vision', 'Publication Quality'],
      avatar: 'EB'
    },
    {
      name: 'Ahmed Rekik',
      title: 'AI Research Engineer',
      company: 'Udini - Dental AI',
      relationship: 'Research Colleague',
      duration: '2021 - Present',
      email: 'ahmed.rekik@udini.com',
      phone: '+216 XX XXX XXX',
      linkedin: 'ahmed-rekik',
      description: 'Ahmed and I have collaborated extensively on multiple research projects and publications. He can speak to my technical expertise, problem-solving abilities, and contribution to team projects.',
      skills: ['Technical Collaboration', 'Research Development', 'AI Implementation', 'Team Work'],
      avatar: 'AR'
    },
    {
      name: 'Dr. Sergi Pujades',
      title: 'Research Scientist',
      company: 'INRIA Grenoble',
      relationship: 'Research Collaborator',
      duration: '2020 - Present',
      email: 'sergi.pujades@inria.fr',
      phone: '+33 X XX XX XX XX',
      linkedin: 'sergi-pujades',
      description: 'Sergi has worked with me on several research publications and can provide insights into my research methodology, technical writing, and contribution to the scientific community.',
      skills: ['Research Methodology', 'Scientific Writing', 'Computer Vision', 'International Collaboration'],
      avatar: 'SP'
    }
  ];

  const handleRequestReference = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmitRequest = () => {
    setOpenDialog(false);
    setShowSuccess(true);
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
          Professional References
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Colleagues and supervisors who can speak to my professional experience and technical capabilities
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
            Reference request submitted successfully! The reference will be contacted shortly.
          </Alert>
        </motion.div>
      )}

      {/* References Grid */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
        gap: 4 
      }}>
        {references.map((reference, index) => (
          <Box key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card 
                sx={{ 
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: 3,
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {/* Header */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        mr: 2,
                        backgroundColor: 'primary.main',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {reference.avatar}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" color="primary" gutterBottom>
                        {reference.name}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {reference.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <BusinessIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                          {reference.company}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Relationship Info */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="primary" gutterBottom>
                      <strong>Relationship:</strong> {reference.relationship}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <strong>Duration:</strong> {reference.duration}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6 }}>
                    {reference.description}
                  </Typography>

                  {/* Skills */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <strong>Can attest to:</strong>
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {reference.skills.map((skill, idx) => (
                        <Chip
                          key={idx}
                          label={skill}
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Contact Info */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <strong>Contact Information:</strong>
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <EmailIcon fontSize="small" color="action" />
                        <Typography variant="body2">{reference.email}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PhoneIcon fontSize="small" color="action" />
                        <Typography variant="body2">{reference.phone}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LinkedInIcon fontSize="small" color="action" />
                        <Typography variant="body2">{reference.linkedin}</Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Action Button */}
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleRequestReference}
                    sx={{ mt: 'auto' }}
                  >
                    Request Reference
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        ))}
      </Box>

      {/* Additional References Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Card sx={{ mt: 4, textAlign: 'center', p: 4 }}>
          <Typography variant="h5" gutterBottom color="primary">
            Need Additional References?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            I can provide additional professional references upon request, including academic supervisors, 
            project collaborators, and industry contacts.
          </Typography>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={handleRequestReference}
            size="large"
          >
            Request Additional References
          </Button>
        </Card>
      </motion.div>

      {/* Reference Request Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Request Reference</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Please provide your details and I'll facilitate the reference request.
          </Typography>
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Your Email"
            variant="outlined"
            type="email"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Company/Organization"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Position/Role"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Message (Optional)"
            variant="outlined"
            multiline
            rows={3}
            placeholder="Please let me know the specific aspects you'd like the reference to address..."
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmitRequest} variant="contained">
            Submit Request
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default References;
