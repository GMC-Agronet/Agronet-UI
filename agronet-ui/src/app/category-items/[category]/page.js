'use client';

import { useParams } from 'next/navigation';
import { Box, Grid, Typography } from '@mui/material';
import ProductCard from '@/app/components/ProductCard';
import CommonTopNav from '@/app/components/CommonTopNav';
import productsData from '../../mock/products.json';

export default function CategoryItemsPage() {
  const { category } = useParams();
  const normalizedCategory = category?.toLowerCase();
  // Filter products by category attribute
  const items = productsData.filter(
    (item) =>
      item.category && item.category.toLowerCase() === normalizedCategory,
  );

  return (
    <Box p={0} minHeight="100vh" bgcolor="background.default">
      <CommonTopNav />
      <Typography variant="h5" fontWeight="bold" mt={4} ml={2}>
        {category
          ? category.charAt(0).toUpperCase() + category.slice(1)
          : 'Category'}{' '}
        Items
      </Typography>
      <Grid
        container
        spacing={2}
        mt={2}
        justifyContent="center"
        alignItems="center"
      >
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <ProductCard
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              unit={item.unit}
              discount={item.discount}
              onAddToCart={() => alert(`${item.title} added to cart!`)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
