'use client';

import { useState, useRef } from 'react';
import { Box, Button, Typography, TextField, Paper } from '@mui/material';
import { useRouter } from 'next/navigation';

function OTPInput({ value, onChange }) {
  const inputs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (index, e) => {
    const digit = e.target.value.replace(/[^0-9]/g, '').slice(0, 1);
    let newValue = value.split('');
    newValue[index] = digit;
    onChange(newValue.join(''));
    if (digit && index < 3) {
      inputs[index + 1].current.focus();
    }
  };

  return (
    <Box display="flex" gap={2} mt={4} mb={2}>
      {[0, 1, 2, 3].map((i) => (
        <TextField
          key={i}
          inputRef={inputs[i]}
          value={value[i] || ''}
          onChange={(e) => handleChange(i, e)}
          inputProps={{
            maxLength: 1,
            style: { textAlign: 'center', fontSize: 24, width: 40 },
          }}
          variant="outlined"
        />
      ))}
    </Box>
  );
}

export default function VerifyPage() {
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const verifyOTP = async () => {
    if (otp.length === 4) {
      router.push('/dashboard');
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
        elevation={3}
        sx={{ p: 4, borderRadius: 4, width: '100%', maxWidth: 400 }}
      >
        <Typography variant="h5" fontWeight="bold" mb={1} align="center">
          Verify
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          mb={2}
          align="center"
        >
          Please enter the code sent to your number.
        </Typography>
        <OTPInput value={otp} onChange={setOtp} />
        <Button
          onClick={verifyOTP}
          disabled={otp.length !== 4}
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            mb: 1,
            fontWeight: 'bold',
            bgcolor: '#1B3557',
            '&:hover': { bgcolor: '#16294a' },
          }}
        >
          Verify
        </Button>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          mt={2}
        >
          Resend code{' '}
          <span style={{ color: '#1976d2', cursor: 'pointer' }}>00:30</span>
        </Typography>
        <Typography variant="body2" align="center" mt={1}>
          <a
            href="/login"
            style={{ color: '#1976d2', textDecoration: 'underline' }}
          >
            Change number
          </a>
        </Typography>
      </Paper>
    </Box>
  );
}
