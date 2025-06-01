import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useLanguage } from '../hooks/useLanguage.js';

const categories = [
  { img: '/assets/images/tractor.png', label: 'inputsPageInputs', action: '/inputs' },
  { img: '/assets/images/produce2.png', label: 'inputsPageProduce', action: '/produce' },
  { img: '/assets/images/mandi2.png', label: 'inputsPagePrices', action: '/prices' },
  { img: '/assets/images/credit.png', label: 'inputsPageCredit', action: '/credit' },
];

const CategorySelection = () => {
  const router = useRouter();
  const { strings } = useLanguage();

  const handleCategoryClick = (action) => {
    router.push(action); 
  };

  return (
    <Grid container spacing={2} p={1} wrap="nowrap">
      {categories.map((card, idx) => (
        <Grid item key={idx} sx={{ width: '100%' }}>
          <Paper
            sx={{
              height: 90,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 1,
              textAlign: 'center',
              borderRadius: 40,
              cursor: 'pointer', 
            }}
            onClick={() => handleCategoryClick(card.action)} 
          >
            <Box
              component="img"
              src={card.img}
              sx={{ width: 150, height: 120, objectFit: 'contain', mb: 1 }}
            />
            
          </Paper>
          <Typography variant="subtitle2" fontWeight="bold" color="primary" align="center" mt={1}>
              {strings[card.label] || card.label}
            </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategorySelection;