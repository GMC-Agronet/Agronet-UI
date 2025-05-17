import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoryTile({ name, image, action }) {
  return (
    <Link href={`/category-items/${name.toLowerCase()}`} passHref>
      <Box
        sx={{
          width: '80%', // Make the width responsive to fit the grid
          maxWidth: '180px', // Set a maximum width for consistency
          height: '150px',
          bgcolor: 'gray.200',
          borderRadius: 2,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          justifyContent: 'center',
          borderColor: '#ffffff',
          borderWidth: '2px',
          margin: 'auto', // Center the tile within the grid
          background: '#e8f5ed',
          padding: '15%',
        }}
      >
        <Image src={image} alt={name} width={180} height={140} sx={{ borderRadius: 8 }} />
        <Typography variant="body1" mt={1}>
          {name}
        </Typography>
      </Box>
    </Link>
  );
}