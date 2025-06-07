import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function ComingSoon() {
  return (
    <Box
      minHeight="80vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ bgcolor: 'background.default', py: 8 }}
    >
      <Image
        src="/assets/images/harvest.jpg"
        alt="Coming Soon"
        width={220}
        height={120}
        style={{ borderRadius: 16, marginBottom: 24, objectFit: 'cover', opacity: 0.85 }}
      />
      <Typography variant="h4" fontWeight={700} color="primary" gutterBottom>
        Coming Soon!
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={3} align="center">
        This page is under construction and will be available soon.<br />
        Stay tuned for exciting updates!
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary" sx={{ borderRadius: 3, px: 4, py: 1 }}>
          Go to Home
        </Button>
      </Link>
    </Box>
  );
}
