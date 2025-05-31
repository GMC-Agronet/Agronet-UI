'use client';

import {
  Box,
  Typography,
  Avatar,
  Button,
  Grid,
  Paper,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SecurityIcon from '@mui/icons-material/Security';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import CommonTopNav from '../components/CommonTopNav';

export default function ProfilePage() {
  const user = useSelector((state) => state.auth.user) || {
    name: 'Agro User',
    phone: '9123456789',
    email: 'user@agronet.com',
    role: 'Farmer',
  };
  const dispatch = useDispatch();

  // Example agri stats
  const stats = [
    {
      label: 'My Farms',
      value: 4,
      icon: <AgricultureIcon color="success" />,
      sub: 'active',
    },
    {
      label: 'Orders',
      value: 12,
      icon: <LocalOfferIcon color="primary" />,
      sub: 'this year',
    },
    {
      label: 'Wallet',
      value: '₹2,500',
      icon: (
        <Image
          src="/assets/images/rupee.png"
          width={24}
          height={24}
          alt="Rupee"
          style={{ verticalAlign: 'middle' }}
        />
      ),
      sub: 'balance',
    },
  ];

  return (
    <Box sx={{ bgcolor: '#f7faf7', minHeight: '100vh', pb: 4 }}>
      <CommonTopNav />
      <Box sx={{ px: { xs: 2, sm: 3 }, pt: 3, pb: 1 }}>
        <Typography variant="h5" fontWeight={700} color="#183a1d" mb={2}>
          Profile
        </Typography>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            p: 2.5,
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            bgcolor: 'white',
            boxShadow: '0 2px 12px #e6f7e0',
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              width: 64,
              height: 64,
              mr: 2,
              bgcolor: '#e6f7e0',
              fontSize: 32,
              color: '#357a38',
            }}
          >
            {user.name?.[0] || 'A'}
          </Avatar>
          <Box flex={1}>
            <Typography
              variant="h6"
              fontWeight={700}
              color="#183a1d"
              sx={{ mb: 0.2 }}
            >
              {user.name}
            </Typography>
            <Typography
              variant="body2"
              color="#357a38"
              sx={{ fontWeight: 600 }}
            >
              {user.phone}
            </Typography>
            <Typography variant="body2" color="#888" sx={{ fontWeight: 500 }}>
              {user.email}
            </Typography>
          </Box>
          <Chip
            label={user.role || 'Farmer'}
            color="primary"
            sx={{
              fontWeight: 600,
              bgcolor: '#e6f7e0',
              color: '#357a38',
              fontSize: 15,
            }}
          />
        </Paper>
        {/* Agri stats */}
        <Grid container spacing={2} mb={2}>
          {stats.map((stat, idx) => (
            <Grid item xs={4} key={stat.label}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  textAlign: 'center',
                  bgcolor: '#fdf6ee',
                  boxShadow: '0 1px 6px #e6f7e0',
                }}
              >
                <Box mb={0.5}>{stat.icon}</Box>
                <Typography variant="h6" fontWeight={700} color="#183a1d">
                  {stat.value}
                </Typography>
                <Typography variant="caption" color="#888" fontWeight={500}>
                  {stat.label}
                </Typography>
                <Typography
                  variant="caption"
                  color="#357a38"
                  fontWeight={600}
                  display="block"
                >
                  {stat.sub}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 2 }} />
        {/* Profile menu */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            bgcolor: 'white',
            boxShadow: '0 2px 12px #e6f7e0',
          }}
        >
          <List>
            <ListItem button>
              <ListItemIcon>
                <GroupAddIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Refer a friend" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <NotificationsIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Notification" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HelpOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Help center" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SecurityIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Security & privacy" />
            </ListItem>
            <ListItem button onClick={() => dispatch(logout())}>
              <ListItemIcon>
                <LogoutIcon color="error" />
              </ListItemIcon>
              <ListItemText
                primary="Log out"
                primaryTypographyProps={{
                  color: '#b91c1c',
                  fontWeight: 700,
                }}
              />
            </ListItem>
          </List>
        </Paper>
        {/* Agri-specific section: My Crops */}
        <Box mt={4}>
          <Typography variant="h6" fontWeight={700} color="#183a1d" mb={1}>
            My Crops
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 3,
              bgcolor: '#fdf6ee',
              boxShadow: '0 1px 6px #e6f7e0',
            }}
          >
            <Typography color="#357a38" fontWeight={600}>
              Wheat, Rice, Maize
            </Typography>
            <Typography variant="body2" color="#888">
              Track your crop progress, yields, and market prices here.
            </Typography>
          </Paper>
        </Box>
        {/* Agri-specific section: Support */}
        <Box mt={3}>
          <Typography variant="h6" fontWeight={700} color="#183a1d" mb={1}>
            Support
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 3,
              bgcolor: '#fdf6ee',
              boxShadow: '0 1px 6px #e6f7e0',
            }}
          >
            <Typography color="#357a38" fontWeight={600}>
              Need help with your farm or orders?
            </Typography>
            <Typography variant="body2" color="#888">
              Contact our agri-experts for advice, order issues, or technical
              support.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
