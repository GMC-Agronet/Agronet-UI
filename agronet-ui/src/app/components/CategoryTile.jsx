import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Shimmer from '../components/Shimmer';
import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage.js';


export default function CategoryTile({ name, image, action, titleAlign }) {
  const [loading, setLoading] = useState(false); // Only set to true if you want shimmer for async data
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);
  const { strings } = useLanguage();
  // Ensure linkHref always starts with '/category-items/'
  let linkHref;
  if (action) {
    linkHref = action.startsWith('/category-items/') ? action : `/category-items/${action.replace(/^\//, '')}`;
  } else {
    linkHref = `/category-items/${name.toLowerCase().replace(/\s/g, '-')}`;
  }

  if (loading) {
    return <Shimmer type="tile" />;
  }
  

  return (
    <Link href={linkHref} passHref>
      <Box
        sx={{
          width: '100%',
          maxWidth: '180px',
          height: '160px',
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
          sx={{
            maxWidth: 120,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontWeight: 600,
            fontSize: 16,
          }}
        >
          {strings[`inputsPage${name.replace(/\s/g, '')}`] || strings[name] || name}
        </Typography>
      </Box>
    </Link>
  );
}