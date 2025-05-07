import { Drawer, Box, List, ListItem, ListItemText, ListItemIcon, Divider, IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const menuItems = [
  'My Profile',
  'Logout',
  'Settings',
];

export default function SideNav({ isOpen, onClose }) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box width={320} sx={{ bgcolor: 'background.paper', height: '100%' }}>
        <Box display="flex" justifyContent="flex-end" p={2}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((text, idx) => (
            <Box key={text}>
              <ListItem
                button
                sx={{
                  py: 2,
                  px: 2,
                  '&:hover': { bgcolor: 'grey.100' },
                }}
              >
                <ListItemText primary={text} primaryTypographyProps={{ fontSize: 18 }} />
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <AddIcon />
                </ListItemIcon>
              </ListItem>
              {idx < menuItems.length - 1 && <Divider />}
            </Box>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}