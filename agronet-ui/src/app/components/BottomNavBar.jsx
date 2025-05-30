import React from 'react';
import { Box } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from 'next/navigation';


const BottomNavBar = () => { 
    const router = useRouter();
    return <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: 'white',
          borderTop: '1px solid #eee',
          zIndex: 1000,
        }}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} sx={{
            borderRadius: 2,
            transition: 'box-shadow 0.2s, transform 0.15s',
            '&:active': {
              boxShadow: 8,
              transform: 'scale(0.97) translateY(2px)',
            },
            '&:hover': {
              boxShadow: 4,
            },
          }} />
          <BottomNavigationAction label="My Orders" icon={<ListAltIcon />} onClick={() => router.push('/orders')} sx={{
            borderRadius: 2,
            transition: 'box-shadow 0.2s, transform 0.15s',
            '&:active': {
              boxShadow: 8,
              transform: 'scale(0.97) translateY(2px)',
            },
            '&:hover': {
              boxShadow: 4,
            },
          }} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} sx={{
            borderRadius: 2,
            transition: 'box-shadow 0.2s, transform 0.15s',
            '&:active': {
              boxShadow: 8,
              transform: 'scale(0.97) translateY(2px)',
            },
            '&:hover': {
              boxShadow: 4,
            },
          }} />
          <BottomNavigationAction label="Support" icon={<SupportAgentIcon />} sx={{
            borderRadius: 2,
            transition: 'box-shadow 0.2s, transform 0.15s',
            '&:active': {
              boxShadow: 8,
              transform: 'scale(0.97) translateY(2px)',
            },
            '&:hover': {
              boxShadow: 4,
            },
          }} />
        </BottomNavigation>
      </Box>
}

export default BottomNavBar;