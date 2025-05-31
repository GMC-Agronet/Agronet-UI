'use client';

import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect } from 'react';

export default function LandingPage() {
  const router = useRouter();
  useEffect(() => {
    // Prevent scroll on landing page
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
    };
  }, []);
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        background: 'url(/assets/images/farm.jpg) center/cover no-repeat',
        borderRadius: { xs: 0, sm: 6 },
        overflow: 'hidden',
        pb: 0, // Remove bottom padding to eliminate space for BottomNavBar
        pl: { xs: 2, sm: 8 },
      }}
    >
      {/* Logo and menu icon */}
      <Box
        sx={{
          position: 'absolute',
          top: 24,
          left: 24,
          right: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 'calc(100% - 48px)',
        }}
      >
        <Image
          src="/assets/images/gmclogo.svg"
          alt="GMC AgroNet Logo"
          width={160}
          height={48}
          style={{ objectFit: 'contain' }}
        />
      </Box>
      {/* Content */}
      <Box sx={{ zIndex: 2, mb: 8 }}>
        <Typography
          variant="h5"
          sx={{
            color: 'white',
            mb: 3,
            maxWidth: 340,
            fontWeight: 400,
            lineHeight: 1.4,
          }}
        >
          Building the Digital Future for Sustainable Agriculture
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: 'white',
            color: '#222',
            fontWeight: 700,
            borderRadius: 8,
            px: 4,
            py: 1.5,
            fontSize: 18,
            boxShadow: 2,
            textTransform: 'none',
            letterSpacing: 1,
            '&:hover': { bgcolor: '#f5f5f5' },
          }}
          onClick={() => router.push('/dashboard')}
        >
          Explore Now
        </Button>
      </Box>
      {/* Overlay for darkening the background image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0,0,0,0.18)',
          zIndex: 1,
        }}
      />
    </Box>
  );
}

// Prevent BottomNavBar from rendering on the landing page by checking the current route in layout.js and conditionally rendering BottomNavBar only if the route is not '/landing'.
