import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Button,
  Paper,
} from '@mui/material';
import {
  Article as ArticleIcon,
  OpenInNew as OpenInNewIcon,
  Download as DownloadIcon,
  FormatQuote as CitationIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Publications: React.FC = () => {
  const publications = [
    {
      title: 'TSegLab: Multi-stage 3D dental scan segmentation and labeling',
      authors: 'Ahmed Rekik, Achraf Ben-Hamadou, Oussama Smaoui, Firas Bouzguenda, Sergi Pujades, Edmond Boyer',
      journal: 'Computers in Biology and Medicine',
      year: '2025',
      status: 'Published',
      citations: 15,
      abstract: 'A comprehensive framework for automated 3D dental scan segmentation and labeling using advanced deep learning techniques.',
      keywords: ['3D Segmentation', 'Dental AI', 'Deep Learning', 'Medical Imaging'],
      doi: 'https://doi.org/10.1016/j.compbiomed.2024.example',
      pdfUrl: '#'
    },
    {
      title: '3DTeethSeg\'22: 3D Teeth Scan Segmentation and Labeling Challenge',
      authors: 'A Ben-Hamadou, O Smaoui, A Rekik, S Pujades, E Boyer, H Lim, M Kim, M Lee, M Chung, et al.',
      journal: 'MICCAI 2022 Challenge',
      year: '2023',
      status: 'Published',
      citations: 28,
      abstract: 'Challenge overview and results for 3D teeth segmentation and labeling from intraoral scans.',
      keywords: ['Challenge', 'MICCAI', '3D Teeth', 'Segmentation'],
      doi: 'https://doi.org/10.1007/example',
      pdfUrl: '#'
    },
    {
      title: 'Teeth3DS: a benchmark for teeth segmentation and labeling from intra-oral 3D scans',
      authors: 'A Ben-Hamadou, O Smaoui, H Chaabouni-Chouayakh, A Rekik, S Pujades, E Boyer, et al.',
      journal: 'Medical Image Analysis',
      year: '2022',
      status: 'Published',
      citations: 14,
      abstract: 'Introduction of a comprehensive benchmark dataset for 3D teeth segmentation and labeling tasks.',
      keywords: ['Dataset', 'Benchmark', '3D Teeth', 'Medical AI'],
      doi: 'https://doi.org/10.1016/j.media.2022.example',
      pdfUrl: '#'
    }
  ];

  const conferences = [
    {
      name: 'MICCAI 2024',
      role: 'Organizer - 3DTeethLand Challenge',
      description: 'Organized the 3DTeethLand challenge, developing evaluation metrics, data governance strategy, and managing the end-to-end submission process.',
      year: '2024'
    },
    {
      name: 'MICCAI 2022',
      role: 'Organizing Member - 3D Teeth Segmentation Challenge',
      description: 'Contributed as an organizing member for the 3D teeth segmentation and labeling challenge. Created scripts for 3D data preprocessing, data annotation pipeline, and evaluation metrics.',
      year: '2022'
    }
  ];

  const certificates = [
    {
      title: 'Nvidia DLI: Building Video AI Applications at the Edge on Jetson Nano',
      issuer: 'NVIDIA Deep Learning Institute',
      year: '2023',
      credentialId: '#'
    },
    {
      title: 'Machine Learning Engineering for Production (MLOps) Specialization',
      issuer: 'Coursera',
      year: '2022',
      credentialId: '#'
    },
    {
      title: 'Neural Networks and Deep Learning',
      issuer: 'Coursera',
      year: '2021',
      credentialId: '#'
    },
    {
      title: 'CCNA 1, 2, 3 and 4',
      issuer: 'Cisco',
      year: '2020',
      credentialId: '#'
    },
    {
      title: 'CyberOps Associate',
      issuer: 'Cisco',
      year: '2020',
      credentialId: '#'
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
          Publications & Research
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Research contributions in AI/ML, computer vision, and medical imaging
        </Typography>
      </motion.div>

      {/* Research Impact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
          gap: 3,
          mb: 4 
        }}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h3" color="primary" fontWeight="bold">
              3
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Publications
            </Typography>
          </Paper>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h3" color="primary" fontWeight="bold">
              57+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Citations
            </Typography>
          </Paper>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h3" color="primary" fontWeight="bold">
              2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              MICCAI Challenges
            </Typography>
          </Paper>
        </Box>
      </motion.div>

      {/* Publications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Research Publications
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 6 }}>
          {publications.map((pub, index) => (
            <Card key={index} elevation={2}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" color="primary" gutterBottom>
                      {pub.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" gutterBottom>
                      {pub.authors}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      <strong>{pub.journal}</strong> ({pub.year}) • {pub.status}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CitationIcon color="action" />
                    <Typography variant="body2" color="text.secondary">
                      {pub.citations}
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {pub.abstract}
                </Typography>
                
                <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {pub.keywords.map((keyword, idx) => (
                    <Chip key={idx} label={keyword} size="small" variant="outlined" />
                  ))}
                </Box>
                
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    size="small"
                    startIcon={<OpenInNewIcon />}
                    href={pub.doi}
                    target="_blank"
                  >
                    DOI
                  </Button>
                  <Button
                    size="small"
                    startIcon={<DownloadIcon />}
                    href={pub.pdfUrl}
                    target="_blank"
                  >
                    PDF
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </motion.div>

      {/* Conference Contributions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Conference Contributions
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 6 }}>
          {conferences.map((conf, index) => (
            <Card key={index} elevation={1}>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  {conf.name} ({conf.year})
                </Typography>
                <Typography variant="subtitle1" color="secondary" gutterBottom>
                  {conf.role}
                </Typography>
                <Typography variant="body2">
                  {conf.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </motion.div>

      {/* Certificates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Certifications
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
          gap: 2 
        }}>
          {certificates.map((cert, index) => (
            <Box key={index}>
              <Card elevation={1}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {cert.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {cert.issuer} • {cert.year}
                  </Typography>
                  <Button
                    size="small"
                    startIcon={<ArticleIcon />}
                    href={cert.credentialId}
                    target="_blank"
                  >
                    View Credential
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
};

export default Publications;
