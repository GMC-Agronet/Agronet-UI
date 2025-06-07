import React from 'react';
import { Grid, TextField, InputAdornment } from '@mui/material';

export default function PersonalInfoSection({ form, errors, handleChange, loggedInMobile }) {
  return (
    <>
      <Grid container spacing={2} justifyContent="center" width="100%" maxWidth="none">
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            fullWidth
            required
            sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            fullWidth
            required
            sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField
            label="Mobile Number"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            error={!!errors.mobile}
            helperText={errors.mobile}
            fullWidth
            required
            type="tel"
            inputProps={{ maxLength: 10, pattern: '[0-9]{10}', inputMode: 'numeric' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ color: '#b0b0b0', fontWeight: 500 }}>+91</InputAdornment>
              ),
              style: { background: 'rgba(255,255,255,0.95)', borderRadius: 8 },
            }}
            disabled={!!loggedInMobile}
            sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField
            label="Email (optional)"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            type="email"
            sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
          />
        </Grid>
      </Grid>
      
    </>
  );
}
