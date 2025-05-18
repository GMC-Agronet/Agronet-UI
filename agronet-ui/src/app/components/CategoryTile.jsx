import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoryTile({ name, image, action, titleAlign }) {
  return (
    <Link href={`/category-items/${name.toLowerCase()}`} passHref>
      <Box
        sx={{
          width: '80%', 
          maxWidth: '180px',
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
          margin: 'auto', 
          background: '#e8f5ed',
          padding: '15%', boxShadow: 2,
        }}
      >
        <Image src={image} alt={name} width={180} height={140} sx={{ borderRadius: 8 }} />
        <Typography variant="body1" mt={1} align={titleAlign || 'center'}>
          {name}
        </Typography>
      </Box>
    </Link>
  );
}