import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useLanguage } from '../hooks/useLanguage.js';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import CompostOutlinedIcon from '@mui/icons-material/CompostOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

const categories = [
  { icon: <AgricultureIcon sx={{ fontSize: 38, color: 'primary.main' }} />, label: 'inputsPageInputs', action: '/inputs' },
  { icon: <CompostOutlinedIcon sx={{ fontSize: 38, color: 'primary.main' }} />, label: 'inputsPageProduce', action: '/produce' },
  { icon: <TrendingUpOutlinedIcon sx={{ fontSize: 38, color: 'primary.main' }} />, label: 'inputsPagePrices', action: '/prices' },
  { icon: <CreditScoreIcon sx={{ fontSize: 38, color: 'primary.main' }} />, label: 'inputsPageCredit', action: '/credit' },
];

const CategorySelection = () => {
  const router = useRouter();
  const { strings } = useLanguage();

  const handleCategoryClick = (action) => {
    router.push(action); 
  };

  return (
    <Grid container spacing={2} p={1} justifyContent="center" alignItems="center">
      {categories.map((card, idx) => (
        <Grid item xs={6} key={idx} sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Box
            onClick={() => handleCategoryClick(card.action)}
            sx={{
              width: '40vw',
              minWidth: 140,
              maxWidth: 220,
              height: 60,
              display: 'flex',
              alignItems: 'center',
              borderRadius: 3,
              boxShadow: 2,
              bgcolor: 'white',
              cursor: 'pointer',
              transition: 'box-shadow 0.2s',
              '&:hover': { boxShadow: 6, bgcolor: '#f5f5f5' },
              overflow: 'hidden',
            }}
          >
            <Box sx={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', ml: 2, mr: 2 }}>
              {card.icon}
            </Box>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="primary"
              sx={{ width: '80%', textAlign: 'left', fontSize: 18, pl: 1, letterSpacing: 0.2 }}
            >
              {strings[card.label] || card.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategorySelection;