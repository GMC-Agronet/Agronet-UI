import React from 'react';
import { Box, Typography, Chip, IconButton } from '@mui/material';


const CropSelection = () => {
  return <Box sx={{ bgcolor: '#eee', p: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          Select Your Crop
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
          <Chip label="Tomato" icon={<span>🍅</span>} />
          <Chip label="Red Chilli" icon={<span>🌶️</span>} />
          <Chip label="Green Chilli" icon={<span>🌶️</span>} />
          <IconButton color="primary">
            <span>+</span>
          </IconButton>
        </Box>
      </Box>
}

export default CropSelection;