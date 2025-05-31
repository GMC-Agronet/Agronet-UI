'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import Image from 'next/image';

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
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    // Prevent scroll on login page
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
    };
  }, []);

  const validatePhone = (value) => {
    const isValid = /^[6-9]\d{9}$/.test(value);
    setValid(isValid);
    setPhone(value);
  };

  const handleSendOtp = () => {
    setOtpSent(true);
  };

  const handleLogin = () => {
    // Dummy login: set isLoggedIn true and store user info
    dispatch(login({ name: 'Demo User', phone, avatar: null }));
    router.push('/dashboard');
  };

  return (
    <Box
      minHeight="100vh"
      width="100vw"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        //background: 'linear-gradient(135deg, #6ee7b7 0%, #3b82f6 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Full-page background overlay image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          opacity: 0.18,
        }}
      >
        <Image
          src="/assets/images/harvest.jpg"
          alt="Harvest Field"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </Box>
      {/* Floating login form, no card */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 400,
          px: { xs: 2, sm: 0 },
          py: { xs: 4, sm: 0 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Logo at the top */}
        <Box
          sx={{
            mb: 2,
            mt: { xs: 1, sm: 2 },
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Image
            src="/assets/images/gmclogo.svg"
            alt="GMC AgroNet Logo"
            width={152}
            height={72}
            style={{
              position: 'absolute',
              top: -200,
              left: '5%',
              // objectFit: 'contain',
              // borderRadius: 18,
              // boxShadow: '0 2px 8px #0002',
              // background: 'rgba(255,255,255,0.7)',
            }}
            priority
          />
        </Box>
        <Typography
          variant="h4"
          color="#1B3557"
          fontWeight="bold"
          mb={1}
          align="center"
          sx={{ letterSpacing: 1 }}
        >
          Grow Something Legendary 🌱
        </Typography>
        <Typography
          variant="subtitle1"
          color="#1B3557"
          mb={3}
          align="center"
          sx={{ opacity: 0.8, fontWeight: 500 }}
        >
          Login to join the harvest.
        </Typography>
        <TextField
          type="tel"
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
            style: { background: 'rgba(255,255,255,0.95)', borderRadius: 8 },
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
          disabled={otpSent}
        />
        {otpSent && (
          <TextField
            type="tel"
            label="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{
              style: { background: 'rgba(255,255,255,0.95)', borderRadius: 8 },
            }}
          />
        )}
        {!otpSent ? (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{
              fontWeight: 700,
              fontSize: 17,
              py: 1.2,
              borderRadius: 2,
              boxShadow: '0 2px 8px #3b82f655',
              letterSpacing: 1,
            }}
            onClick={handleSendOtp}
            disabled={!valid}
          >
            Send OTP
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{
              fontWeight: 700,
              fontSize: 17,
              py: 1.2,
              borderRadius: 2,
              boxShadow: '0 2px 8px #3b82f655',
              letterSpacing: 1,
            }}
            onClick={handleLogin}
            disabled={otp.length !== 6}
          >
            Login
          </Button>
        )}
        <Typography
          variant="body2"
          color="#1B3557"
          align="center"
          sx={{ opacity: 0.85, mt: 2 }}
        >
          By clicking you agree to our{' '}
          <a href="#" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            Terms of Service
          </a>{' '}
          &{' '}
          <a href="#" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            Privacy Policy
          </a>
        </Typography>
      </Box>
    </Box>
  );
}
