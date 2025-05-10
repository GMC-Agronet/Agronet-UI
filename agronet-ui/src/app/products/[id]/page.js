'use client';

import { useParams } from 'next/navigation';
import { Box, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';
import CommonTopNav from '@/app/components/CommonTopNav';

const mockProductDetails = {
  1: {
    id: 1,
    image: '/assets/images/seeds.png',
    title: 'Seeds',
    price: 100,
    unit: 'kg',
    discount: '10% Off',
    description: 'High-quality seeds for better yield.',
  },
  2: {
    id: 2,
    image: '/assets/images/fertilizer.png',
    title: 'Fertilizer',
    price: 200,
    unit: 'bag',
    discount: '15% Off',
    description: 'Premium fertilizer for healthy crops.',
  },
};

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = mockProductDetails[id];

  if (!product) {
    return <Typography variant="h5">Product not found</Typography>;
  }

  return (
    <Box p={2} minHeight="100vh" bgcolor="background.default">
      <CommonTopNav />
      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} sm={6}>
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            style={{ borderRadius: '8px' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {product.discount}
          </Typography>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            ₹{product.price} / {product.unit}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
            onClick={() => alert(`${product.title} added to cart!`)}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
