import React from 'react';
import { Grid, TextField } from '@mui/material';

export default function KYCSection({ form, errors, handleChange }) {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sx={{ width: '100%' }}>
        <TextField
          label="Aadhar Number"
          name="aadhar"
          value={form.aadhar}
          onChange={handleChange}
          error={!!errors?.aadhar}
          helperText={errors?.aadhar}
          fullWidth
          required
          type="tel"
          inputProps={{ maxLength: 12, pattern: '[0-9]{12}', inputMode: 'numeric' }}
          sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
        />
      </Grid>
    </Grid>
  );
}
