'use client';

import { useParams } from 'next/navigation';
import { Box, Grid, Typography } from '@mui/material';
import ProductCard from '@/app/products/page';
import CommonTopNav from '@/app/components/CommonTopNav';

const mockCategoryItems = {
  herbicides: [
    {
      id: 1,
      image: '/assets/images/seeds.png',
      title: 'Seeds',
      price: 100,
      unit: 'kg',
      discount: '10% Off',
    },
    {
      id: 2,
      image: '/assets/images/seeds.png',
      title: 'Fertilizer',
      price: 200,
      unit: 'bag',
      discount: '15% Off',
    },
  ],
  produce: [
    {
      id: 1,
      image: '/assets/images/rice.png',
      title: 'Rice',
      price: 50,
      unit: 'kg',
      discount: '5% Off',
    },
    {
      id: 2,
      image: '/assets/images/wheatseeds.png',
      title: 'Wheat',
      price: 60,
      unit: 'kg',
      discount: '8% Off',
    },
  ],
};

export default function CategoryItemsPage() {
  const { category } = useParams(); // Extract category from the dynamic route

  const items = mockCategoryItems[category] || [];

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
