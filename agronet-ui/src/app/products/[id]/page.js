'use client';

import { useParams } from 'next/navigation';
import { Box, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';
import CommonTopNav from '@/app/components/CommonTopNav';
import ProductCard from '@/app/components/ProductCard';
import ProductBreadcrumbs from '@/app/components/ProductBreadcrumbs';
import productsData from '@/app/mock/products.json';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/redux/slices/cartSlice';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  // Find product by id in flat array
  const product = productsData.find((item) => String(item.id) === String(id));
  if (!product) {
    return <Typography variant="h5">Product not found</Typography>;
  }

  // Find 2-3 other products from the same category, excluding the current product
  const suggestions = productsData
    .filter(
      (item) =>
        item.category === product.category && String(item.id) !== String(id),
    )
    .slice(0, 3);

  return (
    <Box minHeight="100vh" bgcolor="background.default">
      <CommonTopNav />
      <Grid container spacing={2} pl={1} pr={1}>
        <Grid item xs={12} sm={12} md={12}>
          <Box
            sx={{
              // border: '1.5px solid #e0e0e0',
              borderRadius: 2,
              p: 1,
              // boxShadow: 1,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { sm: 'flex-start' },
              gap: 1,
            }}
          >
            <Box sx={{ flex: 1, minWidth: 350 }}>
              <ProductBreadcrumbs
                category={product.category}
                title={product.title}
              />
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                style={{
                  borderRadius: '8px',
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto',
                }}
              />
            </Box>
            <Box sx={{ flex: 2 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {product.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {product.discount}
              </Typography>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: '1.1rem',
                    color: '#666',
                    marginRight: 8,
                  }}
                >
                  Price:
                </span>
                ₹{product.price} / {product.unit}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {product.description}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 2, width: '100%' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{
                    flex: 1.6,
                    py: 1.2,
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    borderRadius: 1,
                    minWidth: 0,
                  }}
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  sx={{
                    flex: 0.8,
                    py: 1.2,
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    borderRadius: 1,
                    minWidth: 0,
                    color: 'white',
                  }}
                  onClick={() => alert(`Buying ${product.title}...`)}
                >
                  Buy
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {suggestions.length > 0 && (
        <Box mt={6} px={2}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            You may also like
          </Typography>
          <Grid container spacing={2}>
            {suggestions.map((item, idx) => (
              <Grid item xs={12} sm={6} md={6} key={item.id}>
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
      )}
    </Box>
  );
}
