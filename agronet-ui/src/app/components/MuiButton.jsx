import { Button } from '@mui/material';

export default function MuiButton({ onClick, children, sx = {}, disabled = false }) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={disabled}
      sx={{ borderRadius: 2, py: 1.5, px: 4, textTransform: 'none', ...sx }}
    >
      {children}
    </Button>
  );
}