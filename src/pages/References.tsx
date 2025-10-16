import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  Business as BusinessIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const References: React.FC = () => {

  // Placeholder references - these would be updated with real references
  const references = [
    {
      name: 'Dr. Achraf Ben-Hamadou',
      title: 'Senior Research Scientist',
      company: 'Digital Research Center of Sfax - Udini',
      relationship: 'Direct Supervisor',
      duration: '2021 - Present',
      email: 'achraf.benhamadou@gmail.com',
      linkedin: 'achraf-ben-hamadou',
      description: 'Achraf has been my direct supervisor at Udini, overseeing my work on 3D dental scan segmentation and the organization of MICCAI challenges, providing guidance on technical skills in AI/ML and research capabilities.',
      skills: ['3D Computer Vision', 'Deep Learning', 'Leadership', 'AI/ML Development', 'Team Collaboration'],
      avatar: 'AB'
    },
    {
      name: 'Dr. Ahmed Rekik',
      title: 'Senior Research Scientist',
      company: 'Digital Research Center of Sfax - Udini',
      relationship: 'Senior Colleague',
      duration: '2021 - Present',
      email: 'rekikamed@gmail.com',
      linkedin: 'ahmed-rekik',
      description: 'Ahmed and I have collaborated extensively on multiple research projects and publications, working together on technical implementation, problem-solving, and team-based research initiatives.',
      skills: ['Technical Collaboration', 'Research Development', 'AI Implementation', 'Team Work'],
      avatar: 'AR'
    },
    {
      name: 'Dr. Sergi Pujades',
      title: 'Professor',
      company: 'INRIA Grenoble',
      relationship: 'Challenge Collaborator',
      duration: '2022 - 2024',
      email: 'sergi.pujades@inria.fr',
      linkedin: 'sergi-pujades',
      description: 'Sergi has worked with me on several research publications, collaborating on research methodology, technical writing, and contributions to the scientific community.',
      skills: ['Research Methodology', 'Scientific Writing', 'Computer Vision', 'International Collaboration'],
      avatar: 'SP'
    },
    {
      name: 'Dr. Liming Chen',
      title: 'Full professor ',
      company: 'Ecole Centrale de Lyon',
      relationship: 'Internship Supervisor',
      duration: '2021',
      email: 'liming.chen@ec-lyon.fr',
      linkedin: 'Liming-Chen',
      description: 'Liming has supervised me during my internship at Ecole Centrale de Lyon, where I worked on 3D modeling of deformable objects.',
      skills: ['Research Methodology', 'Scientific Research', 'Computer Vision',],
      avatar: 'LC'
    }
  ];


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

                  {/* Areas of Expertise */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <strong>Areas of Expertise:</strong>
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
                        <LinkedInIcon fontSize="small" color="action" />
                        <Typography variant="body2">{reference.linkedin}</Typography>
                      </Box>
                    </Box>
                  </Box>

                </CardContent>
              </Card>
            </motion.div>
          </Box>
        ))}
      </Box>

      {/* Additional References Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Card sx={{ mt: 4, textAlign: 'center', p: 4 }}>
          <Typography variant="h5" gutterBottom color="primary">
            Additional References Available
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Additional professional references are available upon request, including academic supervisors, 
            project collaborators, and industry contacts.
          </Typography>
        </Card>
      </motion.div>
    </Container>
  );
};

export default References;
