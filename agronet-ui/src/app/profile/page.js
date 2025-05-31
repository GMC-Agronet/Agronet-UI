'use client';
import { useSelector } from 'react-redux';
import { Box, Typography, Paper, Avatar } from '@mui/material';

export default function ProfilePage() {
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
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <Avatar
            sx={{
              width: 72,
              height: 72,
              bgcolor: 'secondary.main',
              fontSize: 36,
              mb: 2,
            }}
          >
            {user.name?.[0]}
          </Avatar>
          <Typography variant="h6" fontWeight={700}>
            {user.name}
          </Typography>
          <Typography color="text.secondary">{user.phone}</Typography>
        </Box>
        <Typography variant="body1" align="center" color="text.secondary">
          Welcome to your profile page!
        </Typography>
      </Paper>
    </Box>
  );
}
