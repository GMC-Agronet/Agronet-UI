import { Box, Typography, Button, Paper } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';

export default function ProductCard({
  id,
  image,
  title,
  price,
  unit,
  discount,
  onAddToCart,
}) {
  return (
    <Link href={`/products/${id}`} passHref>
      <Paper
        sx={{
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: 2,
          width: 180,
          height: 300,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          m: 'auto',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        {/* Discount Badge */}
        {discount && (
          <Box
            sx={{
              position: 'absolute',
              top: 5,
              right: 2,
              bgcolor: 'success.main',
              color: 'white',
              px: 1,
              py: 0.25,
              borderRadius: 1,
              fontWeight: 600,
              fontSize: 12,
              zIndex: 1,
            }}
          >
            {discount}
          </Box>
        )}

        {/* Product Image */}
        <Box
          sx={{
            width: '100%',
            height: 148,
            bgcolor: '#ededed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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

        {/* Product Info */}
        <Box sx={{ p: 2, flexGrow: 0.5 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h6" component="span" fontWeight="bold">
            ₹{price}
          </Typography>
          <Typography
            variant="body2"
            component="span"
            color="text.secondary"
            sx={{ ml: 1 }}
          >
            {unit}
          </Typography>
        </Box>

        {/* Add to Cart Button */}
        <Box sx={{ p: 1, pt: 0 }}>
          <Button
            fullWidth
            size="small"
            variant="contained"
            color="success"
            startIcon={<ShoppingCartIcon />}
            sx={{ borderRadius: 2, fontWeight: 600, fontSize: 12, py: 1.2 }}
            onClick={(e) => {
              e.preventDefault();
              onAddToCart();
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Paper>
    </Link>
  );
}
