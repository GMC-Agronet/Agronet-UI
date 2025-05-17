import React, {useState} from 'react';
import { Box, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';
import LandingPageSearchBar from '@/app/components/LandingPageSearchBar';
import SideNav from '@/app/components/SideNav';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useRouter } from 'next/navigation'; 


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
            <Image
              src="/assets/images/landingPage/logo.svg"
              alt="GMC AgroNet Logo"
              width={120}
              height={40}
              onClick={() => router.push('/dashboard')}
            />
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
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