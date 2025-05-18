'use client';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
  Grid,
  Paper,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import AddIcon from '@mui/icons-material/Add';
import {
  removeFromCart,
  clearCart,
  incrementQuantity,
} from '@/app/redux/slices/cartSlice';
import CommonTopNav from '@/app/components/CommonTopNav';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <Box p={0} minHeight="100vh" bgcolor="background.default">
      <CommonTopNav />
      <Box maxWidth={600} mx="auto" mt={2}>
        {cartItems.length === 0 ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mt={8}
          >
            <ProductionQuantityLimitsRoundedIcon
              sx={{ fontSize: 120, color: 'secondary.main', mb: 2 }}
            />
            <Typography variant="h6" fontWeight={500} mb={2}>
              No Products Added to Cart
            </Typography>
            <Link href="/dashboard" passHref legacyBehavior>
              <Button
                variant="contained"
                color="success"
                sx={{
                  fontWeight: 600,
                  fontSize: 18,
                  px: 4,
                  py: 1,
                }}
              >
                Continue Shopping
              </Button>
            </Link>
          </Box>
        ) : (
          <>
            {cartItems.map((item) => (
              <Paper
                key={item.id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  mb: 2,
                  boxShadow: 1,
                  borderRadius: 3,
                  gap: 2,
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 2,
                    objectFit: 'cover',
                    border: '1px solid #eee',
                    background: '#fff',
                  }}
                />
                <Box flex={1} minWidth={0}>
                  <Typography fontWeight={700} fontSize={18} mb={0.5}>
                    {item.title}
                  </Typography>
                  <Typography fontSize={14} color="text.secondary" mb={0.5}>
                    Size <b>{item.unit}</b>
                  </Typography>
                  <Typography fontSize={15} mb={1}>
                    Price <b>₹{item.price}</b>
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <IconButton
                      size="small"
                      color="error"
                      sx={{ bgcolor: '#f8e6e6', borderRadius: 2 }}
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Button
                      variant="contained"
                      color="inherit"
                      size="small"
                      sx={{
                        minWidth: 36,
                        fontWeight: 700,
                        color: '#888',
                        bgcolor: '#f5f5f5',
                        boxShadow: 'none',
                        cursor: 'default',
                      }}
                      disabled
                    >
                      {item.quantity || 1}
                    </Button>
                    <IconButton
                      size="small"
                      color="success"
                      sx={{ bgcolor: '#e6f8e6', borderRadius: 2 }}
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      <AddIcon />
                    </IconButton>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      sx={{
                        borderRadius: 2,
                        fontWeight: 600,
                        ml: 2,
                        px: 2,
                      }}
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>
              </Paper>
            ))}
            <Divider sx={{ my: 2 }} />
            <Box display="flex" alignItems="center" mb={2}>
              <Checkbox
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                color="success"
              />
              <Typography variant="body2">
                I accept the{' '}
                <Link
                  href="#"
                  style={{
                    color: '#e3912c',
                    textDecoration: 'underline',
                  }}
                >
                  terms and conditions
                </Link>
              </Typography>
            </Box>
            <Box bgcolor="#f5f6f7" p={2} borderRadius={2} mb={2}>
              <Typography variant="h6" fontWeight="bold" mb={1}>
                Sub Total
                <span style={{ float: 'right' }}>₹{total}</span>
              </Typography>
              <Button
                variant="contained"
                color="success"
                fullWidth
                sx={{
                  fontWeight: 700,
                  fontSize: 18,
                  py: 1.2,
                }}
                disabled={!acceptTerms}
              >
                Proceed
              </Button>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
                mt={1}
              >
                Shipping, taxes and discount codes calculated at checkout.
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
