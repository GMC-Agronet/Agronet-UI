import { Drawer, Box, List, ListItem, ListItemText, ListItemIcon, IconButton, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LogoutIcon from '@mui/icons-material/Logout';
import FlagIcon from '@mui/icons-material/Flag';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../hooks/useLanguage.js';

const menuItems = [
  { label: 'Profile', icon: <PersonIcon /> },
  { label: 'My Crop', icon: <AgricultureIcon /> },
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
  const { language, setLanguage, strings } = useLanguage();

  const handleLogout = () => {
    dispatch(logout());
    onClose();
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose} PaperProps={{ sx: { bgcolor: 'primary.main', borderTopLeftRadius: 40, borderBottomLeftRadius: 40, width: 340, boxShadow: 8 } }}>
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 3, pt: 2 }}>
          <Box sx={{ }}>
          </Box>
          <IconButton onClick={onClose} sx={{ color: 'white', bgcolor: 'rgba(0,0,0,0.08)', ml: 1 }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ px: 3, pt: 1 }}>
          <FormControl fullWidth size="small" variant="outlined">
            <InputLabel sx={{ color: 'white' }}>{strings['Language'] || 'Language'}</InputLabel>
            <Select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              label={strings['Language'] || 'Language'}
              sx={{
                color: 'white',
                bgcolor: 'primary.light',
                borderRadius: 2,
                mt: 1,
                '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                '& .MuiSvgIcon-root': { color: 'white' },
              }}
            >
              <MenuItem value="en">{strings['English'] || 'English'}</MenuItem>
              <MenuItem value="te">{strings['Telugu'] || 'Telugu'}</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* User info */}
        {isLoggedIn && user && (
          <Box sx={{ display: 'flex', alignItems: 'center', px: 3, pt: 3, pb: 2 }}>
            <Box sx={{ width: 54, height: 54, borderRadius: '50%', overflow: 'hidden', bgcolor: '#e0e0e0', mr: 2, border: '3px solid #fff', boxShadow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PersonIcon sx={{ fontSize: 38, color: 'primary.main' }} />
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
        <Box sx={{ flex: 1, bgcolor: '#fff', borderTopLeftRadius: 36, borderTopRightRadius: 0, borderBottomLeftRadius: 36, borderBottomRightRadius: 0, mt: 2, pt: 2, pb: 2, px: 0 }}>
          <List sx={{ px: 0 }}>
            {isLoggedIn ? (
              menuItems.map((item, idx) => (
                <ListItem
                  button
                  key={item.label}
                  onClick={item.label === 'Logout' ? handleLogout : item.label === 'Profile' ? () => { onClose(); router.push('/profile'); } : item.label === 'My Crop' ? () => { onClose(); router.push('/mycrop'); } : undefined}
                  sx={{
                    py: 2.1,
                    px: 4,
                    borderRadius: 3,
                    mb: idx === menuItems.length - 1 ? 0 : 0.5,
                    color: 'primary.light',
                    fontWeight: 600,
                    fontSize: 18,
                    '&:hover': { bgcolor: 'primary.light', color: '#fff' },
                    transition: 'all 0.15s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <ListItemIcon sx={{ color: 'primary.light', minWidth: 36, fontSize: 22, '&:hover': { bgcolor: 'primary.light', color: '#fff' } }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={strings[item.label] || item.label} primaryTypographyProps={{ fontWeight: 600, fontSize: 18 }} />
                </ListItem>
              ))
            ) : (
              <ListItem button onClick={() => { onClose(); window.location.href = '/login'; }} sx={{ py: 2.1, px: 4, borderRadius: 3, color: 'primary.light', fontWeight: 600, fontSize: 18 }}>
                  <ListItemIcon sx={{ color: 'primary.light', minWidth: 36, fontSize: 22 }}><LogoutIcon /></ListItemIcon>
                <ListItemText primary={strings['Login'] || 'Login'} primaryTypographyProps={{ fontWeight: 600, fontSize: 18 }} />
              </ListItem>
            )}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
}