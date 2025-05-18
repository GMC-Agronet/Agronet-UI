'use client';

import { Box, Typography, Grid } from '@mui/material';
import Slider from '@/app/components/Slider';
import CategoryTile from '@/app/components/CategoryTile';
import CommonTopNav from '@/app/components/CommonTopNav';

const inputCategories = [
  { name: 'Offers', image: '/assets/images/seeds.png', action: '/offers' },
  {
    name: 'Herbicides',
    image: '/assets/images/inputs/herb.png',
    action: '/herbicides',
  },
  {
    name: 'Growth Promoters',
    image: '/assets/images/inputs/herb.png',
    action: '/growth-promoters',
  },
  {
    name: 'Fungicides',
    image: '/assets/images/inputs/fungicide.png',
    action: '/fungicides',
  },
  { name: 'Seeds', image: '/assets/images/inputs/seeds.png', action: '/seeds' },
  {
    name: 'Farm Machinery',
    image: '/assets/images/inputs/machine.png',
    action: '/farm-machinery',
  },
  {
    name: 'Pesticides',
    image: '/assets/images/inputs/pesticide.png',
    action: '/pesticides',
  },
  {
    name: 'Poultry Feed',
    image: '/assets/images/inputs/poultry.png',
    action: '/poultry-feed',
  },
  {
    name: 'Cattle Feed',
    image: '/assets/images/inputs/cattle.png',
    action: '/cattle-feed',
  },
  {
    name: 'Dairy Products',
    image: '/assets/images/seeds.png',
    action: '/dairy-products',
  },
  {
    name: 'Organic Farming',
    image: '/assets/images/inputs/organic.png',
    action: '/organic-farming',
  },
];

export default function InputsPage() {
  return (
    <Box p={0} minHeight="100vh" bgcolor="background.default">
      <CommonTopNav />

      <Typography variant="h5" fontWeight="bold" mt={4} ml={2}>
        Categories
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
