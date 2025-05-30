import React, {useState} from 'react';
import { Box, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';
import LandingPageSearchBar from '@/app/components/LandingPageSearchBar';
import SideNav from '@/app/components/SideNav';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useRouter } from 'next/navigation'; 
import CartIcon from '@/app/components/CartIcon';


const CommonTopNav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter(); 


    return <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
          p: 2,
          pb: 4,
          position: 'relative',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Box
              sx={{
                display: 'inline-block',
                borderRadius: 2,
                transition: 'box-shadow 0.2s, transform 0.15s',
                cursor: 'pointer',
                '&:active': {
                  boxShadow: 8,
                  transform: 'scale(0.97) translateY(2px)',
                },
                '&:hover': {
                  boxShadow: 4,
                },
              }}
              data-interactive-card
              onClick={() => router.push('/dashboard')}
            >
              <Image
                src="/assets/images/landingPage/logo.svg"
                alt="GMC AgroNet Logo"
                width={120}
                height={40}
                style={{ display: 'block' }}
              />
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            {/* <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton> */}
            <CartIcon
              sx={{
                display: 'inline-block',
                borderRadius: 2,
                transition: 'box-shadow 0.2s, transform 0.15s',
                cursor: 'pointer',
                '&:active': {
                  boxShadow: 8,
                  transform: 'scale(0.97) translateY(2px)',
                },
                '&:hover': {
                  boxShadow: 4,
                },
              }}
              data-interactive-card
            />

            <IconButton color="inherit" onClick={() => setSidebarOpen(true)} >
              <MenuRoundedIcon />
            </IconButton>
          </Box>
        </Box>
        <LandingPageSearchBar />
        <SideNav isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      </Box>
    }

export default CommonTopNav;