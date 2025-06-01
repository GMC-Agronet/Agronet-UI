'use client';

import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Paper,
  Button,
  Divider,
  Avatar,
  Grid,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CommonTopNav from '@/app/components/CommonTopNav';
import OrderList from './OrderList';
import { useLanguage } from '../hooks/useLanguage.js';

export default function OrdersPage() {
  const { strings } = useLanguage();

  return (
    <Box minHeight="100vh" bgcolor="background.default">
      <CommonTopNav />
      <Box
        sx={{
          px: 2,
          pt: 2,
          pb: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          {strings.ordersPageHeading}
        </Typography>
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          sx={{
            borderRadius: 2,
            fontWeight: 600,
            textTransform: 'none',
            px: 2,
            py: 0.5,
          }}
        >
          {strings.ordersPageFilter}
        </Button>
      </Box>
      <Box sx={{ px: 2, mb: 2 }}>
        <Paper
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: 2,
            boxShadow: 0,
            px: 2,
            py: 0.5,
            mb: 2,
            bgcolor: '#f8f8f8',
          }}
        >
          <SearchIcon sx={{ color: '#aaa', mr: 1 }} />
          <InputBase
            placeholder={strings.ordersPageSearchPlaceholder}
            sx={{ flex: 1, fontSize: 16, color: '#333' }}
            inputProps={{ 'aria-label': 'search order' }}
          />
        </Paper>
        <OrderList />
      </Box>
    </Box>
  );
}
