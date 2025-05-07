'use client';

import { Box, Typography, Grid } from '@mui/material';
import TopNav from '@/app/components/TopNav'; 
import Slider from '@/app/components/Slider';
import CategoryTile from '@/app/components/CategoryTile';

const inputCategories = [
  { name: "Offers", image: "/assets/images/seeds.png", action: "/offers" },
  { name: "Herbicides", image: "/assets/images/seeds.png", action: "/herbicides" },
  { name: "Growth Promoters", image: "/assets/images/seeds.png", action: "/growth-promoters" },
  { name: "Fungicides", image: "/assets/images/seeds.png", action: "/fungicides" },
  { name: "Seeds", image: "/assets/images/seeds.png", action: "/seeds" },
  { name: "Farm Machinery", image: "/assets/images/seeds.png", action: "/farm-machinery" },
  { name: "Nutrients", image: "/assets/images/seeds.png", action: "/nutrients" },
  { name: "Pesticides", image: "/assets/images/seeds.png", action: "/pesticides" },
  { name: "Poultry Feed", image: "/assets/images/seeds.png", action: "/poultry-feed" },
  { name: "Cattle Feed", image: "/assets/images/seeds.png", action: "/cattle-feed" },
  { name: "Dairy Products", image: "/assets/images/seeds.png", action: "/dairy-products" },
  { name: "Organic Farming", image: "/assets/images/seeds.png", action: "/organic-farming" },
];

export default function InputsPage() {
  return (
    <Box p={0} minHeight="100vh" bgcolor="background.default">
      <TopNav />
      
      <Typography variant="h5" fontWeight="bold" mt={2}>
        Trending Deals
      </Typography>
      <Slider />

      <Typography variant="h5" fontWeight="bold" mt={4}>
        Categories
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: 'center', marginBottom: "10vh", display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {inputCategories.map((tile, index) => (
            <Grid item xs={12} sm={4} key={index}> {/* xs=12 for mobile (1 per row), sm=4 for 3 tiles per row */}
            <CategoryTile {...tile} />
            </Grid>
        ))}
    </Grid>
    </Box>
  );
}