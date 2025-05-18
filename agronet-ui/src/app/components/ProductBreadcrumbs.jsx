import React from 'react';
import { Box, Typography } from '@mui/material';

export default function ProductBreadcrumbs({ category, title }) {
  return (
    <Box mb={2}>
      <Typography variant="body2" color="text.secondary">
        <span style={{ color: '#888' }}>Home</span> {'>'} <span style={{ color: '#888' }}>Categories</span> {'>'} <span style={{ color: '#333', fontWeight: 600 }}>{category.charAt(0).toUpperCase() + category.slice(1)}</span> {'>'} <span style={{ color: '#333', fontWeight: 600 }}>{title}</span>
      </Typography>
    </Box>
  );
}
