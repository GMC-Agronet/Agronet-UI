'use client';
import { useSelector } from 'react-redux';
import { Box, Typography, Paper } from '@mui/material';

export default function SettingsPage() {
  const user = useSelector((state) => state.auth.user);

  if (!user) return null;

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="#f6f8fa"
    >
      <Paper sx={{ p: 4, borderRadius: 4, minWidth: 320, boxShadow: 3 }}>
        <Typography variant="h6" fontWeight={700} mb={2} align="center">
          Settings
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary">
          (Demo) User: {user.name} <br /> Phone: {user.phone}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          mt={2}
        >
          More settings coming soon...
        </Typography>
      </Paper>
    </Box>
  );
}
