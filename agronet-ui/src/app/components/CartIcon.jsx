"use client";
import { useSelector } from 'react-redux';
import { Box, Typography, IconButton, Badge, Paper, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';

export default function CartIcon() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      <Link href="/cart" passHref legacyBehavior>
        <IconButton color="inherit" sx={{ p: 0.25 }} >
          <Badge badgeContent={totalCount} color="error" overlap="circular" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <ShoppingCartIcon fontSize="medium" />
          </Badge>
        </IconButton>
      </Link>
    </Box>
  );
}
