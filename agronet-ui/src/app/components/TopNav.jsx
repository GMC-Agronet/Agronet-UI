import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNav from '@/app/components/SideNav';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import Next.js router

export default function TopNav() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter(); // Initialize router

  return (
    <>
      <AppBar position="static" className="bg-secondary" color="secondary">
        <Toolbar>
          <Typography
            variant="h6" 
            sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 'bold' }} 
            onClick={() => router.push('/dashboard')}
          >
            AgroNet
          </Typography>

          <IconButton onClick={() => setSidebarOpen(true)} color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <SideNav isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}