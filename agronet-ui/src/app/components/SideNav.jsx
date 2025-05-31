import { Drawer, Box, List, ListItem, ListItemText, ListItemIcon, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LogoutIcon from '@mui/icons-material/Logout';
import FlagIcon from '@mui/icons-material/Flag';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { useRouter } from 'next/navigation';

const menuItems = [
  { label: 'Profile', icon: <PersonIcon /> },
  { label: 'Settings', icon: <SettingsIcon /> },
  { label: 'Saved items', icon: <FavoriteBorderIcon /> },
  { label: 'Purchases', icon: <ShoppingBagIcon /> },
  { label: 'Help & Support', icon: <SupportAgentIcon /> },
  { label: 'Logout', icon: <LogoutIcon /> },
];

export default function SideNav({ isOpen, onClose }) {
  const user = useSelector(state => state.auth.user);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    onClose();
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose} PaperProps={{ sx: { bgcolor: 'secondary.main', borderTopLeftRadius: 40, borderBottomLeftRadius: 40, width: 340, boxShadow: 8 } }}>
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 0 }}>
        {/* Top section with logo and close */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 3, pt: 2 }}>
          {/* <Box sx={{ bgcolor: 'white', borderRadius: '0 0 18px 0', px: 2.5, py: 0.7, fontWeight: 900, fontSize: 26, color: '#222', boxShadow: 2, letterSpacing: 0.5, display: 'flex', alignItems: 'center', height: 44 }}> */}
          <Box sx={{ }}>
            {/* <img src="/assets/images/gmclogo.svg" alt="GMC AgroNet Logo" style={{ height: 32, width: 'auto', display: 'block' }} /> */}
          </Box>
          <IconButton onClick={onClose} sx={{ color: 'white', bgcolor: 'rgba(0,0,0,0.08)', ml: 1 }}>
            <CloseIcon />
          </IconButton>
        </Box>
        {/* User info */}
        {isLoggedIn && user && (
          <Box sx={{ display: 'flex', alignItems: 'center', px: 3, pt: 3, pb: 2 }}>
            <Box sx={{ width: 54, height: 54, borderRadius: '50%', overflow: 'hidden', bgcolor: '#e0e0e0', mr: 2, border: '3px solid #fff', boxShadow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PersonIcon sx={{ fontSize: 38, color: 'secondary.main' }} />
            </Box>
            <Box>
              <Typography sx={{ color: 'white', fontWeight: 700, fontSize: 18, lineHeight: 1.1 }}>
                {user.name}
              </Typography>
              <Typography sx={{ color: 'white', fontWeight: 400, fontSize: 15, opacity: 0.9 }}>
                {user.phone}
              </Typography>
            </Box>
          </Box>
        )}
        {/* Menu */}
        <Box sx={{ flex: 1, bgcolor: 'secondary.light', borderTopLeftRadius: 36, borderTopRightRadius: 0, borderBottomLeftRadius: 36, borderBottomRightRadius: 0, mt: 2, pt: 2, pb: 2, px: 0 }}>
          <List sx={{ px: 0 }}>
            {isLoggedIn ? (
              menuItems.map((item, idx) => (
                <ListItem
                  button
                  key={item.label}
                  onClick={item.label === 'Logout' ? handleLogout : item.label === 'Profile' ? () => { onClose(); router.push('/profile'); } : undefined}
                  sx={{
                    py: 2.1,
                    px: 4,
                    borderRadius: 3,
                    mb: idx === menuItems.length - 1 ? 0 : 0.5,
                    color: 'white',
                    fontWeight: 600,
                    fontSize: 18,
                    '&:hover': { bgcolor: 'secondary.dark', color: '#222' },
                    transition: 'all 0.15s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <ListItemIcon sx={{ color: 'white', minWidth: 36, fontSize: 22 }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600, fontSize: 18 }} />
                </ListItem>
              ))
            ) : (
              <ListItem button onClick={() => { onClose(); window.location.href = '/login'; }} sx={{ py: 2.1, px: 4, borderRadius: 3, color: 'white', fontWeight: 600, fontSize: 18 }}>
                <ListItemText primary="Login" primaryTypographyProps={{ fontWeight: 600, fontSize: 18 }} />
              </ListItem>
            )}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
}