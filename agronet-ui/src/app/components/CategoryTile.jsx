import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoryTile({ name, image, action }) {
  return (
    <Link href={action} passHref>
      <Box
        sx={{
          width: '80%',
          height: '180px',
          bgcolor: 'gray.200',
          borderRadius: 2,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          justifyContent: 'center', 
          borderColor: '#3CB371',
          borderWidth: "2px",
          marginBottom: "10px",

          borderRadius: '10%',
          background:"#e7f3eb",
          padding: '10px',
        }}
      >
        <Image src={image} alt={name} width={180} height={140} style={{ borderRadius: 8 }} />
        <Typography variant="body2" mt={1}>
          {name}
        </Typography>
      </Box>
    </Link>
  );
}