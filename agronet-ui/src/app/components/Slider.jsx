'use client';

import { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Box position="relative" width="100%" maxWidth={400} mx="auto">
      <Box
        component="img"
        src={images[index]}
        alt={`slide-${index}`}
        width="100%"
        height={250}
        sx={{ objectFit: 'cover', borderRadius: 2, borderColor: '#3CB371', borderWidth: "2px" }}
      />
      
      {/* Manual navigation buttons */}
      <IconButton
        onClick={prev}
        sx={{ position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.7)' }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={next}
        sx={{ position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.7)' }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}