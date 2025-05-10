import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const categories = [
  { img: '/assets/images/tractor.png', label: 'Inputs', action: '/inputs' },
  { img: '/assets/images/paddy.png', label: 'Produce', action: '/produce' },
  { img: '/assets/images/prices.png', label: 'Prices', action: '/prices' },
  { img: '/assets/images/credit.png', label: 'Credit', action: '/credit' },
];

const CategorySelection = () => {
  const router = useRouter();

  const handleCategoryClick = (action) => {
    router.push(action); 
  };

  return (
    <Grid container spacing={2} p={1} wrap="nowrap">
      {categories.map((card, idx) => (
        <Grid item key={idx} sx={{ width: '100%' }}>
          <Paper
            sx={{
              height: 120,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 1,
              textAlign: 'center',
              borderRadius: 3,
              cursor: 'pointer', 
            }}
            onClick={() => handleCategoryClick(card.action)} 
          >
            <Box
              component="img"
              src={card.img}
              sx={{ width: 150, height: 90, objectFit: 'contain', mb: 1 }}
            />
            <Typography variant="subtitle2" fontWeight="bold" color="primary">
              {card.label}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategorySelection;