import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const theme = useTheme();
  
  const workExperience = [
    {
      title: 'AI / ML & 3D Software Engineer — Research to Product',
      company: 'Udini.ai — Dental AI (now part of Upperside Group)',
      period: '02/2021 – present',
      location: 'Sfax, Tunisia',
      achievements: [
        'End-to-end owner of dental AI solutions: I take ideas from research prototypes to production applications used daily by dental labs and clinicians — covering AI models, 3D geometry processing, backend services, interactive 3D interfaces, and deployment.',
        'Product & Application Design — Conceived and built a full suite of dental lab applications: an AI workflow automation platform orchestrating the digital production lifecycle, an interactive 3D scan cleaning workspace, and a CAD/CAM preparation tool for 3D printing — from initial concept and UX design to production release.',
        'Mesh Processing & 3D Geometry — Developed advanced mesh processing capabilities: automatic cutline estimation, geometric anomaly detection and repair, sculpting and smoothing tools, socle (base) generation, hole filling, boolean operations, and post-processing pipelines that produce 3D-print-ready dental models.',
        'Applied AI Research — Designed and trained 3D deep learning models for teeth segmentation and labeling (94.5% F1 on Teeth3DS), self-supervised learning on intraoral scans (PointMAE, Point-BERT, PointGPT), 3D scan-to-photo registration with sub-millimeter accuracy, and generative models for crown design and smile aesthetics.',
        'Platform & Automation Engineering — Built agent-based workflow orchestration connecting all applications into one automated pipeline, with real-time tracking, quality assessment scoring, retry/recovery, and human-in-the-loop intervention where expert judgment is needed.',
        'Data & Infrastructure — Created data lakes and validation pipelines for intraoral scan datasets, STL requirement checkers, and cloud infrastructure as code — ensuring reliable data foundations for both research and production.',
        'Scientific Community — Co-organized international 3D dental AI challenges at MICCAI 2022 (3DTeethSeg)and MICCAI 2024 (3DTeethLand): built benchmark datasets, defined evaluation metrics, and managed end-to-end submissions.'
      ],
      technologies: ['Python', 'PyTorch', '3D Deep Learning', 'Mesh Processing', 'Computational Geometry', 'React', 'TypeScript', 'Three.js', 'FastAPI', 'Microservices', 'PostgreSQL', 'RabbitMQ', 'Celery', 'AWS / CDK', 'Docker', 'MICCAI']
    },
    {
      title: 'Computer Vision Engineer — Soccer AI Camera (External Collaboration, part-time)',
      company: 'Reeplayer',
      period: '2021 – present',
      location: 'Remote',
      achievements: [
        'Cloud-Based Version: Developed, fine-tuned and deployed object detection models using YOLOv7',
        'Collaborated on design and implementation of VPTZ system for dynamic camera parameter estimation for action tracking',
        'Edge-Based Version (Jetson Orin): Customized gstreamer plugins and deepstream pipeline for optimized soccer video processing and real-time action tracking'
      ],
      technologies: ['YOLOv7', 'Jetson Orin', 'GStreamer', 'DeepStream', 'Computer Vision', 'Edge Computing']
    }
  ];

  const internships = [
    {
      title: 'Graduation Internship',
      company: 'LIRIS Laboratory, Ecole Centrale de Lyon',
      period: '04/2020 – 11/2020',
      location: 'Lyon, France',
      description: '3D modeling of deformable objects for simulation of fruit grasping with robotic arm in Learn-Real project: simulation of deformable body (fruit) behavior with different rigidity based on mass-spring system approach',
      technologies: ['3D Modeling', 'Robotics', 'Physics Simulation', 'Mass-Spring Systems']
    },
    {
      title: 'Engineer Internship',
      company: 'Digital Research Center in Sfax',
      period: '06/2019 – 07/2019',
      location: 'Sfax, Tunisia',
      description: 'Development of LipReading system: speech recognition through mouth landmark points based on deep learning architecture. Improved model using data augmentation techniques based on GANs',
      technologies: ['Deep Learning', 'Computer Vision', 'GANs', 'Speech Recognition']
    },
    {
      title: 'Human Formation Internship',
      company: 'Hat Web Security Lab',
      period: '07/2018 – 08/2018',
      location: 'Tunis, Tunisia',
      description: 'Participation in external security audit processes (vulnerability scan + pentesting + reporting). Participation in PCI-DSS certification process',
      technologies: ['Cybersecurity', 'Penetration Testing', 'PCI-DSS', 'Security Auditing']
    }
  ];

  const education = [
    {
      degree: 'Information and Communication Technology Engineering',
      school: 'Higher School of Communications of Tunis (SUP\'COM)',
      period: '2017 – 2020',
      location: 'Tunis, Tunisia',
      option: 'AI & Cyber Security',
      description: 'Specialized in Artificial Intelligence and Cybersecurity with focus on machine learning, computer vision, and security systems.'
    },
    {
      degree: 'Pre-engineering Cycle',
      school: 'Preparatory Engineering Institute of Sfax (IPEIS)',
      period: '2015 – 2017',
      location: 'Sfax, Tunisia',
      option: 'Mathematics/Physics',
      description: 'Ranked 120/1800 in competitive examination. Strong foundation in mathematics and physics.'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 8, md: 12 }, mt: 3 }}>
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box display="flex" alignItems="center" mb={6}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: theme.palette.text.primary,
                fontSize: { xs: '1.75rem', md: '2.5rem' },
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                fontFamily: "'Calibre', 'Inter', 'San Francisco', sans-serif",
                '&::before': {
                  content: '"02."',
                  color: theme.palette.primary.main,
                  fontFamily: "'SF Mono', 'Fira Code', monospace",
                  fontSize: '1.5rem',
                  marginRight: '0.8rem',
                  fontWeight: 400,
                },
              }}
            >
              Experience
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
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Box mb={8}>
            <Typography 
              variant="h3" 
              sx={{ 
                color: theme.palette.text.primary,
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 600,
                mb: 4,
                fontFamily: "'Calibre', 'Inter', 'San Francisco', sans-serif",
              }}
            >
              Professional Work
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {workExperience.map((job, index) => (
                <Card 
                  key={index} 
                  elevation={0}
                  sx={{
                    backgroundColor: 'rgba(17, 34, 64, 0.5)',
                    border: '1px solid rgba(100, 255, 218, 0.1)',
                    borderRadius: '4px',
                    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', mb: 2 }}>
                      <Box>
                        <Typography 
                          variant="h4" 
                          sx={{ 
                            color: theme.palette.text.primary,
                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                            fontWeight: 600,
                            mb: 1,
                            fontFamily: "'Calibre', 'Inter', 'San Francisco', sans-serif",
                          }}
                        >
                          {job.title}
                        </Typography>
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            color: theme.palette.primary.main,
                            fontSize: { xs: '1.1rem', md: '1.25rem' },
                            fontWeight: 500,
                            fontFamily: "'Calibre', 'Inter', 'San Francisco', sans-serif",
                          }}
                        >
                          {job.company}
                        </Typography>
                      </Box>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: theme.palette.text.secondary,
                          fontFamily: "'SF Mono', 'Fira Code', monospace",
                          fontSize: '0.85rem',
                          mt: { xs: 1, md: 0 },
                          alignSelf: { xs: 'flex-start', md: 'flex-end' },
                        }}
                      >
                        {job.period} | {job.location}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mt: 2 }}>
                      {job.achievements.map((achievement, idx) => (
                        <Box 
                          key={idx} 
                          sx={{ 
                            display: 'flex', 
                            mb: 2,
                            '&::before': {
                              content: '"▹"',
                              color: theme.palette.primary.main,
                              mr: 2,
                              fontSize: '1.1rem',
                            }
                          }}
                        >
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: theme.palette.text.secondary,
                              fontSize: '0.95rem',
                              lineHeight: 1.6,
                            }}
                          >
                            {achievement}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    
                    <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {job.technologies.map((tech, idx) => (
                        <Chip
                          key={idx}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(100, 255, 218, 0.1)',
                            color: theme.palette.primary.main,
                            fontFamily: "'SF Mono', 'Fira Code', monospace",
                            fontSize: '0.75rem',
                            height: 'auto',
                            py: 0.5,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Internships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Box mb={8}>
            <Typography 
              variant="h3" 
              sx={{ 
                color: theme.palette.text.primary,
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 600,
                mb: 4,
                fontFamily: "'Calibre', 'Inter', 'San Francisco', sans-serif",
              }}
            >
              Internships
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {internships.map((internship, index) => (
                <Card 
                  key={index} 
                  elevation={0}
                  sx={{
                    backgroundColor: 'rgba(17, 34, 64, 0.5)',
                    border: '1px solid rgba(100, 255, 218, 0.1)',
                    borderRadius: '4px',
                    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', mb: 2 }}>
                      <Box>
                        <Typography 
                          variant="h4" 
                          sx={{ 
                            color: theme.palette.text.primary,
                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                            fontWeight: 600,
                            mb: 1,
                            fontFamily: "'Calibre', 'Inter', 'San Francisco', sans-serif",
                          }}
                        >
                          {internship.title}
                        </Typography>
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            color: theme.palette.primary.main,
                            fontSize: { xs: '1.1rem', md: '1.25rem' },
                            fontWeight: 500,
                            fontFamily: "'Calibre', 'Inter', 'San Francisco', sans-serif",
                          }}
                        >
                          {internship.company}
                        </Typography>
                      </Box>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: theme.palette.text.secondary,
                          fontFamily: "'SF Mono', 'Fira Code', monospace",
                          fontSize: '0.85rem',
                          mt: { xs: 1, md: 0 },
                          alignSelf: { xs: 'flex-start', md: 'flex-end' },
                        }}
                      >
                        {internship.period} | {internship.location}
                      </Typography>
                    </Box>
                    
                    <Box 
                      sx={{ 
                        mt: 2,
                        display: 'flex', 
                        mb: 2,
                        '&::before': {
                          content: '"▹"',
                          color: theme.palette.primary.main,
                          mr: 2,
                          mt: '2px',
                          fontSize: '1.1rem',
                        }
                      }}
                    >
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: theme.palette.text.secondary,
                          fontSize: '0.95rem',
                          lineHeight: 1.6,
                        }}
                      >
                        {internship.description}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {internship.technologies.map((tech, idx) => (
                        <Chip
                          key={idx}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(100, 255, 218, 0.1)',
                            color: theme.palette.primary.main,
                            fontFamily: "'SF Mono', 'Fira Code', monospace",
                            fontSize: '0.75rem',
                            height: 'auto',
                            py: 0.5,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Box mb={8}>
            <Typography 
              variant="h3" 
              sx={{ 
                color: theme.palette.text.primary,
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 600,
                mb: 4,
                fontFamily: "'Calibre', 'Inter', 'San Francisco', sans-serif",
              }}
            >
              Education
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  elevation={0}
                  sx={{
                    backgroundColor: 'rgba(17, 34, 64, 0.5)',
                    border: '1px solid rgba(100, 255, 218, 0.1)',
                    borderRadius: '4px',
                    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', mb: 2 }}>
                      <Box>
                        <Typography 
                          variant="h4" 
                          sx={{ 
                            color: theme.palette.text.primary,
                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                            fontWeight: 600,
                            mb: 1,
                            fontFamily: "'Calibre', 'Inter', 'San Francisco', sans-serif",
                          }}
                        >
                          {edu.degree}
                        </Typography>
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            color: theme.palette.primary.main,
                            fontSize: { xs: '1.1rem', md: '1.25rem' },
                            fontWeight: 500,
                            fontFamily: "'Calibre', 'Inter', 'San Francisco', sans-serif",
                          }}
                        >
                          {edu.school}
                        </Typography>
                      </Box>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: theme.palette.text.secondary,
                          fontFamily: "'SF Mono', 'Fira Code', monospace",
                          fontSize: '0.85rem',
                          mt: { xs: 1, md: 0 },
                          alignSelf: { xs: 'flex-start', md: 'flex-end' },
                        }}
                      >
                        {edu.period} | {edu.location}
                      </Typography>
                    </Box>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.palette.primary.main,
                        fontFamily: "'SF Mono', 'Fira Code', monospace",
                        fontSize: '0.85rem',
                        mb: 2,
                        mt: 1
                      }}
                    >
                      Option: {edu.option}
                    </Typography>
                    
                    <Box 
                      sx={{ 
                        mt: 2,
                        display: 'flex', 
                        '&::before': {
                          content: '"▹"',
                          color: theme.palette.primary.main,
                          mr: 2,
                          mt: '2px',
                          fontSize: '1.1rem',
                        }
                      }}
                    >
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: theme.palette.text.secondary,
                          fontSize: '0.95rem',
                          lineHeight: 1.6,
                        }}
                      >
                        {edu.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Experience;
