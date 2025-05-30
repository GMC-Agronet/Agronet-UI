import { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton, Fade } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const slides = [
  {
    title: 'Summer Season Special',
    description: '15% off on all seeds and fertilizers. Stock up now for the season!',
    image: '/assets/images/inputs/seeds.png',
    button: 'Shop Now',
    bg: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)', // blue-green
  },
  {
    title: 'Monsoon Bonanza',
    description: 'Exclusive deals on crop protection. Prepare for the rains!',
    image: '/assets/images/tractor.png',
    button: 'Explore',
    bg: 'linear-gradient(135deg, #ff5858 0%, #f09819 100%)', // red-orange
  },
  {
    title: 'AgroNet Rewards',
    description: 'Earn points on every purchase. Redeem for rewards.',
    image: '/assets/images/inputs/growth.png',
    button: 'Learn More',
    bg: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', // green
  },
];

export default function PromoSlider() {
  const [index, setIndex] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearTimeout(timer);
  }, [index]);

  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <Box sx={{ position: 'relative', width: '100%', maxWidth: 600, mx: 'auto', mb: 3, mt: 2 }}>
      <Fade in>
        <Box
          sx={{
            background: slides[index].bg,
            color: 'white',
            borderRadius: 3,
            p: 0,
            // minHeight: 320,
            height: 270,
            width: '100%',
            maxWidth: 600,
            boxShadow: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Overlay image */}
          {slides[index].image && (
            <Box
              component="img"
              src={slides[index].image}
              alt=""
              sx={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: { xs: '50%', sm: '50%' },
                height: 'auto',
                maxHeight: 220,
                objectFit: 'contain',
                opacity: 0.85,
                zIndex: 1,
                filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.18))',
                pointerEvents: 'none',
              }}
            />
          )}
          {/* Dark gradient overlay for text readability */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              zIndex: 2,
              background: 'linear-gradient(120deg, rgba(0,0,0,0.38) 40%, rgba(0,0,0,0.08) 100%)',
            }}
          />
          {/* Content */}
          <Box sx={{ position: 'relative', zIndex: 3, p: 4, maxWidth: 340 }}>
            <Typography variant="h5" fontWeight="bold" mb={2} mt={1}>
              {slides[index].title}
            </Typography>
            <Typography variant="body1" mb={3}>
              {slides[index].description}
            </Typography>
            <Button
              variant="contained"
              color="inherit"
              sx={{ bgcolor: 'white', color: 'success.main', fontWeight: 600, width: 160 }}
            >
              {slides[index].button}
            </Button>
          </Box>
          {/* Navigation Arrows */}
          {/* <IconButton
            onClick={prev}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 16,
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.3)',
              color: 'white',
              zIndex: 4,
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={next}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 16,
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.3)',
              color: 'white',
              zIndex: 4,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton> */}
          {/* Dots */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, zIndex: 4, position: 'relative' }}>
            {slides.map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 24,
                  height: 6,
                  borderRadius: 3,
                  mx: 0.5,
                  bgcolor: i === index ? 'white' : 'rgba(255,255,255,0.5)',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </Box>
        </Box>
      </Fade>
    </Box>
  );
}
