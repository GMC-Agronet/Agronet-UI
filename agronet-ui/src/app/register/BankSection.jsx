import React from 'react';
import { Grid, TextField } from '@mui/material';

export default function BankSection({ form, errors, handleChange }) {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sx={{ width: '100%' }}>
        <TextField
          label="UPI ID"
          name="upi"
          value={form.upi}
          onChange={handleChange}
          error={!!errors.upi}
          helperText={errors.upi || 'You can add or edit UPI later during payment.'}
          fullWidth
          sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
        />
      </Grid>
    </Grid>
  );
}
