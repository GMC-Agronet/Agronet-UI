'use client';

import {
  Box, Grid, Typography, TextField, InputAdornment, IconButton, Chip, Paper, Avatar, Button, BottomNavigation, BottomNavigationAction
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ListAltIcon from '@mui/icons-material/ListAlt';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TopNav from '@/app/components/TopNav';
import SearchBar from '@/app/components/Searchbar';
import DashboardTile from '@/app/components/DashboardTile';
import Image from 'next/image';
import ProductCard from '@/app/products/page';
import PromoSlider from '@/app/components/PromoSlider';

const dashboardTiles = [
  { name: "Buy Inputs", image: "/assets/images/landingPage/tractor.png", action: "/inputs" },
  { name: "Sell Produce", image: "/assets/images/landingPage/rice.png", action: "/produce" },
  { name: "Mandi Prices", image: "/assets/images/landingPage/balance.png", action: "/prices" },
  { name: "Credit", image: "/assets/images/landingPage/money.png", action: "/credit" },
];

const topSellingProducts = [
  { image: '/assets/images/inputs/wheatseeds.png', title: 'Wheat Seeds', price: 450, unit: 'per kg', discount: '10% off' },
  { image: '/assets/images/inputs/organic.png', title: 'Organic Fertilizer', price: 350, unit: 'per kg', discount: '5% off' },
  { image: '/assets/images/inputs/drip.png', title: 'Drip Irrigation Kit', price: 1200, unit: 'per set', discount: '8% off' },
  // Add more products as needed
];

export default function Dashboard() {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', pb: 8 }}>
      {/* Header */}
      <Box sx={{
        bgcolor: 'secondary.main',
        color: 'white',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        p: 2,
        pb: 4,
        position: 'relative'
      }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Image src="/assets/images/landingPage/logo.svg" alt="GMC AgroNet Logo" width={120} height={40} />
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            {/* <Chip label="50" color="warning" icon={<span>⭐</span>} /> */}
            <IconButton color="inherit"><NotificationsIcon /></IconButton>
            <IconButton color="inherit"><ShoppingCartIcon /></IconButton>
          </Box>
        </Box>
        {/* Search Bar */}
        <Box mt={3}>
          <TextField
            fullWidth
            placeholder="Search products here"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <MicIcon />
                  </IconButton>
                </InputAdornment>
              ),
              sx: { bgcolor: 'white', borderRadius: 4 }
            }}
          />
        </Box>
      </Box>

      <Grid container spacing={2} p={1} wrap="nowrap">
        {[ // Example data for 5 cards
          { img: "/assets/images/tractor.png", label: "Inputs" },
          { img: "/assets/images/paddy.png", label: "Produce" },
          { img: "/assets/images/prices.png", label: "Prices" },
          { img: "/assets/images/credit.png", label: "Credit" },
        ].map((card, idx) => (
          <Grid item key={idx} sx={{ width: '100%' }}>
            <Paper
              sx={{
                height: 120, // Set a fixed height for all cards
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 1,
                textAlign: 'center',
                borderRadius: 3,
              }}
            >
              <Box
                component="img"
                src={card.img}
                sx={{ width: 150, height:90, objectFit: 'contain', mb: 1 }}
              />
              <Typography variant="subtitle2" fontWeight="bold" color="primary">
                {card.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
     
      <Box sx={{ bgcolor: '#eee', p: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold">Select Your Crop</Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
          <Chip label="Tomato" icon={<span>🍅</span>} />
          <Chip label="Red Chilli" icon={<span>🌶️</span>} />
          <Chip label="Green Chilli" icon={<span>🌶️</span>} />
          <IconButton color="primary"><span>+</span></IconButton>
        </Box>
      </Box>

      <PromoSlider />

      {/* Feature Cards */}
      
      
      <Box p={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="subtitle1" fontWeight="bold">Top selling products</Typography>
          <Button size="small">View All</Button>
        </Box>
        <Grid container spacing={2}>
          {topSellingProducts.map((product, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx} display="flex" justifyContent="center">
              <ProductCard {...product} onAddToCart={() => alert(`Added ${product.title} to cart!`)} />
            </Grid>
          ))}
        </Grid>
      </Box>

      



      {/* Bottom Navigation */}
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, bgcolor: 'white', borderTop: '1px solid #eee' }}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Support" icon={<SupportAgentIcon />} />
          <BottomNavigationAction label="My Orders" icon={<ListAltIcon />} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </Box>
    </Box>
  );
}