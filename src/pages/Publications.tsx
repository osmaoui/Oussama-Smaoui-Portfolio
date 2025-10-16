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
  Dataset as DatasetIcon,
  EmojiEvents as ChallengeIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Publications: React.FC = () => {
  const publications = [
    {
      title: 'IoSR: End-to-End Intraoral Scans Repairin',
      authors: 'Manel Farhat, Achraf Ben-Hamadou, Ahmed Rekik, Ons Abida, Oussama Smaoui',
      journal : 'British Machine Vision Conference',
      year: '2025',
      status: 'Accepted',
      citations: 0,
      abstract: 'An end-to-end deep learning framework for repairing intraoral 3D scans, combining geometric and implicit representations to deliver superior accuracy and point cloud fidelity.',
      keywords: ['Dental AI', 'Geometric-aware transformer', 'Medical Imaging', 'Point Cloud Generation'],
      pdfUrl: '#'
    },
    {
      title: 'TSegLab: Multi-stage 3D dental scan segmentation and labeling',
      authors: 'Ahmed Rekik, Achraf Ben-Hamadou, Oussama Smaoui, Firas Bouzguenda, Sergi Pujades, Edmond Boyer',
      journal: 'Computers in Biology and Medicine',
      year: '2025',
      status: 'Published',
      citations: 3,
      abstract: 'A comprehensive framework for automated 3D dental scan segmentation and labeling using advanced deep learning techniques.',
      keywords: ['3D Segmentation', 'Dental AI', 'Deep Learning', 'Medical Imaging'],
      pdfUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S0010482524016202'
    },
    {
      title: '3DTeethSeg\'22: 3D Teeth Scan Segmentation and Labeling Challenge',
      authors: 'A Ben-Hamadou, O Smaoui, A Rekik, S Pujades, E Boyer, H Lim, M Kim, M Lee, M Chung, et al.',
      journal: 'MICCAI 2022 Challenge',
      year: '2023',
      status: 'Pre-print',
      citations: 31,
      abstract: 'Challenge overview and results for 3D teeth segmentation and labeling from intraoral scans.',
      keywords: ['Challenge', 'MICCAI', '3D Teeth', 'Segmentation'],
      pdfUrl: 'https://arxiv.org/abs/2305.18277'
    },
    {
      title: 'Teeth3DS: a benchmark for teeth segmentation and labeling from intra-oral 3D scans',
      authors: 'A Ben-Hamadou, O Smaoui, H Chaabouni-Chouayakh, A Rekik, S Pujades, E Boyer, et al.',
      journal: 'Medical Image Analysis',
      year: '2022',
      status: 'Pre-print',
      citations: 47,
      abstract: 'Introduction of a comprehensive benchmark dataset for 3D teeth segmentation and labeling tasks.',
      keywords: ['Dataset', 'Benchmark', '3D Teeth', 'Medical AI'],
      doi: 'https://arxiv.org/abs/2210.06094',
      pdfUrl: '#'
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
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(4, 1fr)' },
          gap: 3,
          mb: 4 
        }}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h3" color="primary" fontWeight="bold">
              4
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Publications
            </Typography>
          </Paper>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h3" color="primary" fontWeight="bold">
              76+
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
      {/* Datasets and Challenges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Datasets & Challenges
        </Typography>
        
        {/* Teeth3DS+ Dataset */}
        <Card elevation={2} sx={{ mb: 4 }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <DatasetIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
              <Typography variant="h5" color="primary">
                Teeth3DS+: An Extended Benchmark for Intraoral 3D Scans Analysis
              </Typography>
            </Box>
            
            <Typography variant="body1" sx={{ mb: 2 }}>
              A comprehensive benchmark dataset for 3D teeth segmentation, labeling, and landmark detection from intraoral scans. 
              The dataset includes 1800 3D intra-oral scans collected from 900 patients covering their upper and lower jaws separately, 
              with ground truth annotations for tooth labels and instances.
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 2 }}>
              The extended Teeth3DS+ dataset includes an additional 340 intraoral scans with landmark annotations for 3D teeth landmark detection tasks. 
              These landmarks include Mesial and Distal points, Cusp points, Inner and Outer points, and Facial Axis points, which are crucial for 
              orthodontic treatment planning and assessment.
            </Typography>
            
            <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <Chip label="3D Dental Scans" size="small" variant="outlined" />
              <Chip label="Segmentation" size="small" variant="outlined" />
              <Chip label="Landmark Detection" size="small" variant="outlined" />
              <Chip label="Medical Imaging" size="small" variant="outlined" />
              <Chip label="Benchmark" size="small" variant="outlined" />
            </Box>
            
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                size="small"
                startIcon={<OpenInNewIcon />}
                href="https://crns-smartvision.github.io/teeth3ds/"
                target="_blank"
              >
                Project Website
              </Button>
              <Button
                size="small"
                startIcon={<DownloadIcon />}
                href="https://osf.io/xctdy/"
                target="_blank"
              >
                Download Dataset
              </Button>
            </Box>
          </CardContent>
        </Card>
        
        {/* Challenges */}
        <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
          Associated Challenges
        </Typography>
        
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3, mb: 4 }}>
          {/* 3DTeethLand Challenge */}
          <Box>
            <Card elevation={1} sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <ChallengeIcon color="secondary" sx={{ mr: 1 }} />
                  <Typography variant="h6" color="secondary">
                    3DTeethLand Challenge MICCAI 2024
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  The objective of this challenge is to develop algorithms for automatic identification of essential landmarks 
                  on individual teeth using 3D intraoral scans. These landmarks play a vital role in orthodontic treatment planning 
                  and assessment by providing crucial anatomical references for tooth alignment and positioning.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    size="small"
                    startIcon={<OpenInNewIcon />}
                    href="https://www.synapse.org/Synapse:syn57400900/wiki/627259"
                    target="_blank"
                  >
                    Challenge Website
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
          
          {/* 3DTeethSeg Challenge */}
          <Box>
            <Card elevation={1} sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <ChallengeIcon color="secondary" sx={{ mr: 1 }} />
                  <Typography variant="h6" color="secondary">
                    3DTeethSeg Challenge MICCAI 2022
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  This challenge focused on developing and evaluating algorithms for teeth localization, segmentation, and labeling 
                  from intra-oral 3D scans. The challenge addressed difficulties posed by variations in dental anatomy, imaging protocols, 
                  and limited availability of publicly accessible data, advancing automated teeth analysis for improved dental diagnostics 
                  and treatment planning.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    size="small"
                    startIcon={<OpenInNewIcon />}
                    href="https://3dteethseg.grand-challenge.org/"
                    target="_blank"
                  >
                    Challenge Website
                  </Button>
                  <Button
                    size="small"
                    startIcon={<ArticleIcon />}
                    href="https://github.com/abenhamadou/3DTeethSeg22_challenge"
                    target="_blank"
                  >
                    GitHub Repository
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </motion.div>

      {/* Certificates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
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
