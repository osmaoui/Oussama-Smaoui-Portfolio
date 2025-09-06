import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  Close as CloseIcon,
  Code as CodeIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      title: '3D Teeth Segmentation & Labeling (GNN)',
      description: 'Innovative approach for 3D teeth intraoral scan segmentation and labeling using Graph Neural Networks. Achieved 94.5% F1 score on Teeth3DS dataset while significantly reducing memory usage and processing time.',
      technologies: ['PyTorch', 'Graph Neural Networks', 'Point Clouds', '3D Vision', 'Medical AI'],
      achievements: ['94.5% F1 Score', 'Production-Ready', 'Memory Optimized'],

      githubUrl: '#',
      demoUrl: '#',
      image: '/assets/projects/3DteethSeg.jpeg',
      category: 'Medical AI'
    },
    {
      title: '3D Registration Algorithm for Dental Scans',
      description: 'High-precision 3D registration algorithm to align structured light intraoral scans with real photos in different poses (frontal, lateral, intraoral), ensuring sub-millimeter accuracy.',
      technologies: ['Computer Vision', '3D Reconstruction', 'Point Cloud Processing', 'OpenCV'],
      achievements: ['Sub-millimeter Accuracy', 'Multi-pose Alignment', 'Real-time Processing'],

      githubUrl: '#',
      image: '/api/placeholder/400/250',
      category: 'Computer Vision'
    },
    {
      title: 'Soccer AI Camera System (Reeplayer)',
      description: 'Developed object detection models using YOLOv7 and implemented VPTZ system for dynamic camera parameter estimation. Created edge-based version optimized for Jetson Orin with custom GStreamer plugins.',
      technologies: ['YOLOv7', 'Jetson Orin', 'GStreamer', 'DeepStream', 'Edge Computing'],
      achievements: ['Real-time Tracking', 'Edge Deployment', 'Custom Pipeline'],

      githubUrl: '#',
      demoUrl: '#',
      image: '/api/placeholder/400/250',
      category: 'Sports AI'
    },
    {
      title: 'Self-Supervised Learning for 3D IOS Analysis',
      description: 'Pioneered self-supervised learning approaches using PointGPT, PointBERT, and PointMAE models to improve segmentation and labeling accuracy for 3D intraoral scans.',
      technologies: ['Self-Supervised Learning', 'PointGPT', 'PointBERT', 'PointMAE', 'Transformers'],
      achievements: ['Novel Approach', 'Improved Accuracy', 'Research Innovation'],

      githubUrl: '#',
      image: '/api/placeholder/400/250',
      category: 'Research'
    },
    {
      title: 'Diffusion Model for 3D Crown Design',
      description: 'Proof-of-concept implementation of Diffusion Probabilistic Model to generate 3D point cloud crown designs for dental applications.',
      technologies: ['Diffusion Models', 'Generative AI', '3D Generation', 'Point Clouds'],
      achievements: ['Generative Design', 'Novel Application', 'POC Implementation'],

      githubUrl: '#',
      image: '/api/placeholder/400/250',
      category: 'Generative AI'
    },
    {
      title: 'LipReading System with GANs',
      description: 'Speech recognition through mouth landmark points based on deep learning architecture. Enhanced model performance using data augmentation techniques based on GANs.',
      technologies: ['Deep Learning', 'Computer Vision', 'GANs', 'Speech Recognition', 'Data Augmentation'],
      achievements: ['Landmark Detection', 'GAN Augmentation', 'Speech Recognition'],

      githubUrl: '#',
      image: '/api/placeholder/400/250',
      category: 'Computer Vision'
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

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
              Projects
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
          
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              mb: 4,
              maxWidth: '700px',
              fontSize: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            Showcasing cutting-edge AI/ML projects with video demonstrations and technical details
          </Typography>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Box sx={{ mb: 5, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                sx={{
                  backgroundColor: selectedCategory === category 
                    ? 'rgba(100, 255, 218, 0.1)' 
                    : 'rgba(45, 57, 82, 0.5)',
                  color: selectedCategory === category 
                    ? theme.palette.primary.main 
                    : theme.palette.text.secondary,
                  border: selectedCategory === category 
                    ? `1px solid ${theme.palette.primary.main}` 
                    : '1px solid rgba(136, 146, 176, 0.3)',
                  fontFamily: "'SF Mono', 'Fira Code', monospace",
                  fontSize: '0.75rem',
                  height: 'auto',
                  py: 1,
                  px: 1.5,
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  '&:hover': {
                    backgroundColor: 'rgba(100, 255, 218, 0.1)',
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                  },
                }}
              />
            ))}
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <Box sx={{ mt: 3 }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 4 
          }}>
            {filteredProjects.map((project, index) => (
              <Box key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <Card 
                    elevation={0}
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      backgroundColor: 'rgba(17, 34, 64, 0.5)',
                      border: '1px solid rgba(100, 255, 218, 0.1)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                        '& .project-preview': {
                          filter: 'grayscale(0%) contrast(1)',
                          opacity: 0.8,
                        }
                      }
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        image={project.image}
                        className="project-preview"
                        sx={{
                          height: 200,
                          backgroundColor: '#112240',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          filter: 'grayscale(100%) contrast(1)',
                          opacity: 0.6,
                          transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                        }}
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.parentElement?.querySelector('.fallback-icon');
                          if (fallback) {
                            (fallback as HTMLElement).style.display = 'flex';
                          }
                        }}
                      />
                      <Box
                        className="fallback-icon"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: 'none',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'linear-gradient(120deg, #112240 0%, #0a192f 100%)',
                        }}
                      >
                        <CodeIcon sx={{ fontSize: 40, color: theme.palette.primary.main, opacity: 0.8 }} />
                      </Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          p: 1.5,
                          display: 'flex',
                          gap: 1,
                        }}
                      >
                        {project.githubUrl && (
                          <IconButton
                            size="small"
                            href={project.githubUrl}
                            target="_blank"
                            sx={{
                              color: theme.palette.text.secondary,
                              '&:hover': {
                                color: theme.palette.primary.main,
                              },
                            }}
                          >
                            <GitHubIcon fontSize="small" />
                          </IconButton>
                        )}
                        {project.demoUrl && (
                          <IconButton
                            size="small"
                            href={project.demoUrl}
                            target="_blank"
                            sx={{
                              color: theme.palette.text.secondary,
                              '&:hover': {
                                color: theme.palette.primary.main,
                              },
                            }}
                          >
                            <LaunchIcon fontSize="small" />
                          </IconButton>
                        )}
                      </Box>
                      <IconButton
                        sx={{
                          position: 'absolute',
                          bottom: 10,
                          left: 10,
                          backgroundColor: 'rgba(10, 25, 47, 0.7)',
                          color: theme.palette.primary.main,
                          '&:hover': {
                            backgroundColor: 'rgba(10, 25, 47, 0.9)',
                            color: theme.palette.primary.light,
                          },
                          padding: '6px',
                        }}
                        onClick={() => handleImageClick(project.image)}
                        size="small"
                      >
                        <LaunchIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: theme.palette.primary.main,
                            fontFamily: "'SF Mono', 'Fira Code', monospace",
                            fontSize: '0.75rem',
                            mb: 1,
                          }}
                        >
                          {project.category}
                        </Typography>
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            color: theme.palette.text.primary,
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            mb: 2,
                            fontFamily: "'Calibre', 'Inter', 'San Francisco', sans-serif",
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: theme.palette.text.secondary,
                            fontSize: '0.95rem',
                            mb: 2,
                            lineHeight: 1.6,
                          }}
                        >
                          {project.description}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ mt: 'auto' }}>
                        {/* Achievements */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                          {project.achievements.map((achievement, idx) => (
                            <Chip
                              key={idx}
                              label={achievement}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(100, 255, 218, 0.07)',
                                color: theme.palette.primary.main,
                                fontFamily: "'SF Mono', 'Fira Code', monospace",
                                fontSize: '0.7rem',
                                height: 'auto',
                                py: 0.4,
                                px: 0.5,
                              }}
                            />
                          ))}
                        </Box>
                        
                        {/* Technologies */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {project.technologies.map((tech, idx) => (
                            <Typography
                              key={idx}
                              variant="caption"
                              sx={{
                                color: theme.palette.text.secondary,
                                fontFamily: "'SF Mono', 'Fira Code', monospace",
                                fontSize: '0.75rem',
                              }}
                            >
                              {tech}{idx < project.technologies.length - 1 ? ' · ' : ''}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>
        
        {/* Image Dialog */}
        <Dialog
          open={!!selectedImage}
          onClose={handleCloseImage}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: {
              backgroundColor: '#0a192f',
              backgroundImage: 'none',
              borderRadius: '4px',
            },
          }}
        >
          <DialogTitle sx={{ 
            color: theme.palette.text.primary,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
            borderBottom: '1px solid rgba(136, 146, 176, 0.2)'
          }}>
            <Typography variant="h6" component="div" sx={{ fontFamily: "'Calibre', 'Inter', 'San Francisco', sans-serif" }}>
              Project Image
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleCloseImage}
              aria-label="close"
              sx={{ 
                color: theme.palette.text.secondary,
                '&:hover': {
                  color: theme.palette.primary.main,
                }
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ p: 0, backgroundColor: '#0a192f' }}>
            {selectedImage && (
              <Box sx={{ pt: 2 }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    backgroundColor: '#0a192f',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={selectedImage}
                    alt="Project"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '70vh',
                      objectFit: 'contain',
                      filter: 'none',
                      opacity: 1,
                    }}
                  />
                </Box>
              </Box>
            )}
          </DialogContent>
          <DialogActions sx={{ p: 2, borderTop: '1px solid rgba(136, 146, 176, 0.2)' }}>
            <Button
              onClick={handleCloseImage}
              sx={{
                color: theme.palette.primary.main,
                fontFamily: "'SF Mono', 'Fira Code', monospace",
                textTransform: 'none',
                fontSize: '0.85rem',
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default Projects;
