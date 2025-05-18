'use client';

import React from 'react';
import { Box, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';
import PromoSlider from '@/app/components/PromoSlider';
import ButtomNavBar from '@/app/components/BottomNavBar';
import CategorySelection from '@/app/components/CategorySelection';
import CropSelection from '@/app/components/CropSelection';
import TopSellingProducts from '@/app/components/TopSellingProducts';
import LandingPageSearchBar from '@/app/components/LandingPageSearchBar';
import CommonTopNav from '../components/CommonTopNav';

export default function Dashboard() {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', pb: 8 }}>
      {/* <Box
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
            />
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Box> 
        <LandingPageSearchBar />
      </Box> */}
      <CommonTopNav />

      <CategorySelection />
      {/* <CropSelection /> */}
      <PromoSlider />
      <TopSellingProducts />
      <ButtomNavBar />
    </Box>
  );
}
