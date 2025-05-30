import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Shimmer from '../components/Shimmer';
import { useState, useEffect } from 'react';

export default function CategoryTile({ name, image, action, titleAlign }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Shimmer type="tile" />;
  }

  return (
    <Link href={`/category-items/${name.toLowerCase()}`} passHref>
      <Box
        sx={{
          width: '80%',
          maxWidth: '180px',
          height: '150px',
          bgcolor: 'white',
          border: '1.5px solid #eee',
          boxShadow: 2,
          borderRadius: 2,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          justifyContent: 'center',
          margin: 'auto',
          padding: '15%',
          transition: 'box-shadow 0.2s, transform 0.15s',
          '&:active': {
            boxShadow: 8,
            transform: 'scale(0.97) translateY(2px)',
          },
          '&:hover': {
            boxShadow: 4,
          },
        }}
        data-interactive-card
      >
        <Box
          sx={{
            width: 120,
            height: 80,
            bgcolor: 'linear-gradient(135deg, #e6f7e0 60%, #b6e2b1 100%)',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 1,
          }}
        >
          <Image
            src={image}
            alt={name}
            width={80}
            height={60}
            style={{ objectFit: 'contain' }}
          />
        </Box>
        <Typography
          variant="body1"
          mt={1}
          align={titleAlign || 'center'}
        >
          {name}
        </Typography>
      </Box>
    </Link>
  );
}