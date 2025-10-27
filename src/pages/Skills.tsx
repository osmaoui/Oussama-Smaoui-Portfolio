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
import {
  Code as CodeIcon,
  Cloud as CloudIcon,
  Psychology as AIIcon,
  VideoLibrary as VideoIcon,
  Language as LanguageIcon,
  Build as ToolsIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const theme = useTheme();

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <CodeIcon />,
      color: theme.palette.primary.main,
      skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      title: 'Deep Learning Frameworks',
      icon: <AIIcon />,
      color: theme.palette.secondary.main,
      skills: ['PyTorch', 'PyTorch3D', 'PyG (PyTorch Geometric)', 'TensorFlow', 'ONNX', 'TensorRT']
    },
    {
      title: 'Full-Stack',
      icon: < CodeIcon/>,
      color: theme.palette.secondary.main,
      skills: ['Next.JS', 'React', 'Three.js', 'FastAPI' , 'NestJs']
    },
    {
      title: 'Cloud & Infrastructure',
      icon: <CloudIcon />,
      color: theme.palette.success.main,
      skills: ['AWS (S3, SageMaker, SQS, RDS)', 'Docker', 'Kubernetes', 'Linux', 'Git']
    },
    {
      title: 'MLOps & Tools',
      icon: <ToolsIcon />,
      color: theme.palette.warning.main,
      skills: ['DVC', 'MLflow', 'Weights & Biases', 'Docker', 'Git', 'CI/CD']
    },
    {
      title: 'Computer Vision & 3D',
      icon: <VideoIcon />,
      color: theme.palette.info.main,
      skills: ['OpenCV', 'Trimesh', 'Open3D', 'meshlib', '3D Registration', 'CSG Operations', 'WebGL']
    },
    {
      title: 'Video Analytics & Streaming',
      icon: <VideoIcon />,
      color: theme.palette.error.main,
      skills: ['DeepStream', 'GStreamer', 'NVIDIA Jetson', 'Real-time Processing', 'Edge Computing']
    },
    {
      title: 'Data science Libraries',
      icon: <CodeIcon />,
      color: theme.palette.primary.dark,
      skills: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Plotly']
    },
    {
      title: 'Languages',
      icon: <LanguageIcon />,
      color: theme.palette.secondary.dark,
      skills: ['French (Native)', 'English (Fluent)', 'Arabic (Native)']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h2" gutterBottom color="primary" sx={{ mb: 2 }}>
          Technical Skills
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Comprehensive expertise across the AI/ML development lifecycle
        </Typography>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 3 
        }}>
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 48,
                        height: 48,
                        borderRadius: '12px',
                        backgroundColor: `${category.color}20`,
                        color: category.color,
                        mr: 2,
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography variant="h6" fontWeight="bold">
                      {category.title}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        size="small"
                        sx={{
                          backgroundColor: `${category.color}15`,
                          color: category.color,
                          fontWeight: 500,
                          '&:hover': {
                            backgroundColor: `${category.color}25`,
                          }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </motion.div>


    </Container>
  );
};

export default Skills;
