'use client';

import { Box, Typography, Button, Paper } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';

export default function ProductCard({
  id,
  image,
  title,
  price,
  unit,
  discount,
  brand,
  originalPrice,
  onAddToCart,
  sizes = [],
}) {
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id == id);
  const [selectedSize, setSelectedSize] = useState(sizes[0] || unit);

  // Calculate savings and percent discount if originalPrice is provided
  // For demo: force a discount to always show
  const demoOriginalPrice = price + 20;
  const hasDiscount = true;
  const savings = demoOriginalPrice - price;
  const percentOff = Math.round(((demoOriginalPrice - price) / demoOriginalPrice) * 100);

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!isInCart && onAddToCart) {
      onAddToCart({ id, image, title, price, unit: selectedSize });
    }
  };

  return (
    <>
      <Link href={`/products/${id}`} passHref>
        <Paper
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: 0.5,
            width: 180,
            minHeight: 290,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            m: 'auto',
            cursor: 'pointer',
            textDecoration: 'none',
            p: 0.5,
            mb: 7, // Add margin bottom to avoid overlap with BottomNavBar
          }}
        >
          {/* % OFF badge top-left */}
          {percentOff && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                bgcolor: '#e3912c',
                color: 'white',
                px: 1.5,
                py: 0.5,
                borderRadius: '12%',
                fontWeight: 700,
                fontSize: 13,
                zIndex: 2,
              }}
            >
              {percentOff}% OFF
            </Box>
          )}
          {/* Discount label top-right (if discount string provided) */}
          {/* {discount && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                bgcolor: 'white',
                borderRadius: '12%',
                p: 0.5,
                boxShadow: 1,
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 28,
                minHeight: 28,
              }}
            >
              <Typography sx={{ color: '#e3912c', fontWeight: 700, fontSize: 13 }}>
                {discount}
              </Typography>
            </Box>
          )} */}
          {/* Wishlist icon top-right, offset if discount label present */}
          <Box
            sx={{
              position: 'absolute',
              top: 2,
              right: discount ? 4 : 8,
              zIndex: 2,
              bgcolor: 'white',
              borderRadius: '50%',
              p: 0.5,
              boxShadow: 1,
            }}
          >
            <FavoriteBorderIcon sx={{ color: '#bbb', fontSize: 22 }} />
          </Box>
          {/* Product image */}
          <Box
            sx={{
              width: '100%',
              height: 120,
              bgcolor: '#ededed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 3,
            }}
          >
            {image ? (
              <Box
                component="img"
                src={image}
                alt={title}
                sx={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }}
              />
            ) : (
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  bgcolor: '#e0e0e0',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#bdbdbd',
                  fontSize: 16,
                }}
              >
                <ShoppingCartIcon fontSize="inherit" />
              </Box>
            )}
          </Box>
          {/* Product info */}
          <Box sx={{ px: 2, pt: 1, flexGrow: 1 }}>
            <Typography variant="subtitle1" fontWeight={400} gutterBottom noWrap>
              {title}
            </Typography>
            {brand && (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                {brand}
              </Typography>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
              <Typography variant="body1" fontWeight={400} color="text.primary">
                ₹{price}
              </Typography>
              {hasDiscount && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textDecoration: 'line-through', fontWeight: 400 }}
                >
                  ₹{demoOriginalPrice}
                </Typography>
              )}
            </Box>
            {hasDiscount && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                <Box
                  sx={{
                    bgcolor: '#4caf50',
                    color: 'white',
                    borderRadius: '6px',
                    px: 0.7,
                    py: 0.2,
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 15,
                    fontWeight: 400,
                    gap: 0.5,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: 2, display: 'inline' }}><circle cx="12" cy="12" r="12" fill="#fff"/><text x="7" y="17" fontSize="12" fill="#4caf50" fontWeight="bold">%</text></svg>
                  <span style={{ fontWeight: 600, fontSize: 15, color: 'white' }}>Save ₹{savings}</span>
                </Box>
              </Box>
            )}
            {/* Size dropdown */}
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 500, mr: 1 }}>
                Size
              </Typography>
              <select
                value={selectedSize}
                onChange={e => setSelectedSize(e.target.value)}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: 6,
                  padding: '2px 8px',
                  fontSize: 15,
                  minWidth: 70,
                  background: '#fff',
                  color: '#333',
                }}
              >
                {(sizes.length ? sizes : [unit]).map((sz) => (
                  <option key={sz} value={sz}>
                    {sz}
                  </option>
                ))}
              </select>
            </Box>
          </Box>
          {/* Add to Cart button */}
          {/* <Box sx={{ p: 1, pt: 0 }}>
            <Button
              fullWidth
              size="small"
              variant={isInCart ? 'outlined' : 'contained'}
              color={isInCart ? 'info' : 'success'}
              startIcon={<ShoppingCartIcon />}
              sx={{ borderRadius: 2, fontWeight: 600, fontSize: 13, py: 1.2 }}
              disabled={isInCart}
              onClick={handleAddToCart}
            >
              {isInCart ? 'Added to Cart' : 'Add to Cart'}
            </Button>
          </Box> */}
        </Paper>
      </Link>
    </>
  );
}
