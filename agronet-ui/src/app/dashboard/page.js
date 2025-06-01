'use client';

import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
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
import { useLanguage } from '../hooks/useLanguage.js';

export default function Dashboard() {
  const { strings } = useLanguage();

  return (
    <Box sx={{ minHeight: '100vh', pb: 8 }}>
      <CommonTopNav />

      {/* Dashboard Welcome Section */}
      <Box sx={{ px: { xs: 2, sm: 4 }, mt: 2, mb: 3 }}>
        <Typography variant="h6" fontWeight={700} mb={1} color="primary.main">
          {strings.dashboardPageHeading || 'Dashboard'}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2}>
          {strings.dashboardPageWelcome || 'Welcome to GMC AgroNet!'}
        </Typography>
      </Box>

      <CategorySelection />
      {/* <CropSelection /> */}
      <PromoSlider />
      <TopSellingProducts />
      <ButtomNavBar />
    </Box>
  );
}
