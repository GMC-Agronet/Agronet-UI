'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  InputAdornment,
} from '@mui/material';
import { useRouter } from 'next/navigation';

// Check icon SVG
const CheckIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [valid, setValid] = useState(false);
  const router = useRouter();

  const validatePhone = (value) => {
    const isValid = /^[6-9]\d{9}$/.test(value);
    setValid(isValid);
    setPhone(value);
  };

  const requestOTP = async () => {
    if (valid) {
      // TODO: API call to request OTP
      router.push('/verify');
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      className="bg-green-500"
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 4,
          bgcolor: 'transparent',
          boxShadow: 'none',
          width: '100%',
          maxWidth: 400,
        }}
      >
        <Typography
          variant="h4"
          color="white"
          fontWeight="bold"
          mb={1}
          align="center"
        >
          Welcome!
        </Typography>
        <Typography
          variant="subtitle1"
          color="white"
          mb={3}
          align="center"
          sx={{ opacity: 0.8 }}
        >
          Let us get you onboarded
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          value={phone}
          onChange={(e) => validatePhone(e.target.value)}
          placeholder="9123456789"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{ color: '#b0b0b0', fontWeight: 500 }}
              >
                +91
              </InputAdornment>
            ),
            style: { background: 'rgba(255,255,255,0.8)', borderRadius: 8 },
          }}
          sx={{
            mb: 3,
            input: { color: '#1B3557', fontWeight: 600, letterSpacing: 1 },
            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            '& .MuiInputBase-input::placeholder': {
              color: '#b0b0b0',
              opacity: 1,
            },
          }}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          disabled={!valid}
          sx={{
            bgcolor: '#1B3557',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: 2,
            py: 1.5,
            mb: 2,
            boxShadow: 3,
            textTransform: 'none',
            fontSize: '1.1rem',
            '&:hover': { bgcolor: '#16294a' },
          }}
          onClick={requestOTP}
        >
          Get OTP
        </Button>
        <Typography
          variant="body2"
          color="white"
          align="center"
          sx={{ opacity: 0.85 }}
        >
          By clicking you agree to our{' '}
          <a href="#" style={{ color: '#e3e3ff', textDecoration: 'underline' }}>
            Terms of Service
          </a>{' '}
          &{' '}
          <a href="#" style={{ color: '#e3e3ff', textDecoration: 'underline' }}>
            Privacy Policy
          </a>
        </Typography>
      </Paper>
    </Box>
  );
}
