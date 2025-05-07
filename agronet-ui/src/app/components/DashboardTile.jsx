import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardTile({ name, image, action }) {
    return (
      <Link href={action} passHref>
        <Box
          sx={{
            // width: '90%',
            // height: '95%', 
            // bgcolor: 'gray.200',
            // borderRadius: '6%',  
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            textAlign: 'center',
            // borderColor: 'green',
            // borderWidth: "2px",
            justifyContent: 'center',
            alignItems: 'center',
            // borderRadius: '10%',
            // background:"#e7f3eb",
            // padding: '10px',
          }}
        >
          <Image src={image} alt={name} width={150} height={100}  />
          
        </Box>
        
        <Typography variant="body2" mt={1} sx={{textAlign: 'center'}}>
            {name}
          </Typography>
      </Link>
    );
  }