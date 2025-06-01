'use client';

import { Box, Typography, Grid } from '@mui/material';
import Slider from '@/app/components/Slider';
import CategoryTile from '@/app/components/CategoryTile';
import CommonTopNav from '@/app/components/CommonTopNav';
import Shimmer from '../components/Shimmer';
import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage.js';

const inputCategories = [
  {
    name: 'inputsPageOffers',
    image: '/assets/images/seeds.png',
    action: '/offers',
  },
  {
    name: 'inputsPageHerbicides',
    image: '/assets/images/inputs/herb.png',
    action: '/herbicides',
  },
  {
    name: 'inputsPageGrowthPromoters',
    image: '/assets/images/inputs/herb.png',
    action: '/growth-promoters',
  },
  {
    name: 'inputsPageFungicides',
    image: '/assets/images/inputs/fungicide.png',
    action: '/fungicides',
  },
  {
    name: 'inputsPageSeeds',
    image: '/assets/images/inputs/seeds.png',
    action: '/seeds',
  },
  {
    name: 'inputsPageFarmMachinery',
    image: '/assets/images/inputs/machine.png',
    action: '/farm-machinery',
  },
  {
    name: 'inputsPagePesticides',
    image: '/assets/images/inputs/pesticide.png',
    action: '/pesticides',
  },
  {
    name: 'inputsPagePoultryFeed',
    image: '/assets/images/inputs/poultry.png',
    action: '/poultry-feed',
  },
  {
    name: 'inputsPageCattleFeed',
    image: '/assets/images/inputs/cattle.png',
    action: '/cattle-feed',
  },
  {
    name: 'inputsPageDairyProducts',
    image: '/assets/images/seeds.png',
    action: '/dairy-products',
  },
  {
    name: 'inputsPageOrganicFarming',
    image: '/assets/images/inputs/organic.png',
    action: '/organic-farming',
  },
];

export default function InputsPage() {
  const { strings } = useLanguage();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box p={2}>
        <Shimmer type="tile" count={6} />
      </Box>
    );
  }

  return (
    <Box p={0}>
      <CommonTopNav />

      <Typography variant="h5" fontWeight="bold" mt={4} ml={2}>
        {strings.inputsPageCategories}
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{
          justifyContent: 'center',
          marginBottom: '10vh',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        {inputCategories.map((tile, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            mt={2}
            key={index}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <CategoryTile {...tile} titleAlign="center" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
