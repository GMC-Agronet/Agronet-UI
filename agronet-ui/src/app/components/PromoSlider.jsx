import { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton, Fade } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const slides = [
  {
    title: 'Summer Season Special',
    description: 'Get 15% off on all seeds and fertilizers for summer crops. Limited time offer for registered farmers. Stock up now for the upcoming season and maximize your yield with our premium quality inputs.',
    image: '',
    button: 'Shop Now',
    bg: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)', // blue-green
  },
  {
    title: 'Monsoon Bonanza',
    description: 'Exclusive deals on crop protection products. Prepare your fields for the rains!',
    image: '',
    button: 'Explore',
    bg: 'linear-gradient(135deg, #ff5858 0%, #f09819 100%)', // red-orange
  },
  {
    title: 'AgroNet Rewards',
    description: 'Earn points on every purchase and redeem for exciting rewards.',
    image: '',
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
    <Box sx={{ position: 'relative', width: '100%', maxWidth: 600, mx: 'auto', mb: 3 }}>
      <Fade in>
        <Box
          sx={{
            background: slides[index].bg,
            color: 'white',
            borderRadius: 3,
            p: 4,
            minHeight: 300,
            height: 300,
            width: '100%',
            maxWidth: 600,
            boxShadow: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Optional: background image */}
          {slides[index].image && (
            <Box
              component="img"
              src={slides[index].image}
              alt=""
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.2,
                zIndex: 0,
              }}
            />
          )}
          {/* Content */}
          <Typography variant="h4" fontWeight="bold" mb={2} mt={3} sx={{ zIndex: 1 }}>
            {slides[index].title}
          </Typography>
          <Typography variant="body1" mb={3} sx={{ zIndex: 1 }}>
            {slides[index].description}
          </Typography>
          <Button
            variant="contained"
            color="inherit"
            sx={{ bgcolor: 'white', color: 'success.main', fontWeight: 600, width: 160, zIndex: 1 }}
          >
            {slides[index].button}
          </Button>
          {/* Navigation Arrows */}
          <IconButton
            onClick={prev}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 16,
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.3)',
              color: 'white',
              zIndex: 2,
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
              zIndex: 2,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          {/* Dots */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, zIndex: 2 }}>
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
