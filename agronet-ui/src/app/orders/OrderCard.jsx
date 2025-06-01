'use client';

import { Box, Typography, Paper, Avatar, Button, Divider } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Skeleton from '@mui/material/Skeleton';
import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage.js';

const statusIconMap = {
  'Order Received': { color: '#2196f3', icon: '📦' },
  'Order Cancelled': { color: '#f48fb1', icon: '❌' },
  'Order Delivered': { color: '#4caf50', icon: '✅' },
};

export default function OrderCard({ order }) {
  const { strings } = useLanguage();
  const { status, statusColor, date, product, actions } = order;
  const statusMeta = statusIconMap[status] || { color: '#bbb', icon: '📦' };
  const statusLabel = strings[`ordersOrderList${status.replace(/ /g, '')}`] || status;

  // Shimmer loading state for demo
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Paper
        sx={{
          borderRadius: 3,
          p: 2,
          mb: 2,
          boxShadow: 1,
          bgcolor: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)',
          background: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)',
          border: '1px solid #e0f2f1',
        }}
      >
        <Box display="flex" alignItems="center" mb={1}>
          <Skeleton variant="circular" width={32} height={32} sx={{ mr: 1.5 }} />
          <Box flex={1}>
            <Skeleton width={100} height={20} />
            <Skeleton width={60} height={16} />
          </Box>
          <Skeleton variant="rectangular" width={24} height={24} />
        </Box>
        <Box display="flex" alignItems="center" mb={1}>
          <Skeleton variant="rounded" width={64} height={64} sx={{ mr: 2 }} />
          <Box flex={1}>
            <Skeleton width="80%" height={18} />
            <Skeleton width="60%" height={14} />
            <Skeleton width="40%" height={16} />
          </Box>
        </Box>
        <Box display="flex" gap={2} mt={1}>
          <Skeleton variant="rectangular" width={80} height={36} sx={{ borderRadius: 2 }} />
          <Skeleton variant="rectangular" width={80} height={36} sx={{ borderRadius: 2 }} />
        </Box>
      </Paper>
    );
  }

  return (
    <Paper
      sx={{
        borderRadius: 3,
        p: 2,
        mb: 2,
        boxShadow: 1,
        bgcolor: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)', // light green gradient
        background: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)',
        border: '1px solid #e0f2f1',
        transition: 'box-shadow 0.2s',
        '&:hover': {
          boxShadow: 4,
        },
      }}
    >
      <Box display="flex" alignItems="center" mb={1}>
        <Avatar sx={{ bgcolor: statusMeta.color, width: 32, height: 32, mr: 1.5, fontSize: 20 }}>
          {statusMeta.icon}
        </Avatar>
        <Box flex={1}>
          <Typography fontWeight={700} fontSize={16} color="#222">
            {statusLabel}
          </Typography>
          <Typography fontSize={13} color="#888">
            {date}
          </Typography>
        </Box>
        <ChevronRightIcon sx={{ color: '#bbb' }} />
      </Box>
      <Box display="flex" alignItems="center" mb={1}>
        <Avatar src={product.image} variant="rounded" sx={{ width: 56, height: 56, mr: 2 }} />
        <Box flex={1}>
          <Typography fontWeight={600} fontSize={15} color="#222">
            {product.title}
          </Typography>
          <Typography fontSize={13} color="#555">
            {strings.ordersOrderCardQuantity || 'Quantity'}: {strings[product.size] || product.size} &nbsp; {strings.ordersOrderCardColor || 'Color'}: {strings[product.color] || product.color}
          </Typography>
          <Typography fontSize={14} color="#357a38" fontWeight={700}>
            ₹{product.price}
          </Typography>
        </Box>
      </Box>
      {actions && actions.length > 0 && (
        <Box display="flex" gap={2} mt={1}>
          {actions.map((action) => (
            <Button
              key={action}
              variant="outlined"
              sx={{
                flex: 1,
                borderRadius: 2,
                fontWeight: 600,
                textTransform: 'none',
                bgcolor: '#fafbfc',
                borderColor: '#ddd',
                color: '#222',
                boxShadow: 'none',
                '&:hover': { bgcolor: '#f5f5f5', borderColor: '#bbb' },
              }}
            >
              {strings[`ordersOrderCardAction_${action.replace(/ /g, '')}`] || action}
            </Button>
          ))}
        </Box>
      )}
    </Paper>
  );
}
