import React from 'react';
import { Grid, TextField } from '@mui/material';
import { useLanguage } from '../hooks/useLanguage.js';

export default function KYCSection({ form, errors, handleChange }) {
  const { strings } = useLanguage();
  return (
    <Grid container spacing={2} justifyContent="center" width="100%" maxWidth="none">
      <Grid item xs={12} sx={{ width: '100%' }}>
        <TextField
          label={strings.registerFieldAadhar}
          name="aadhar"
          value={form.aadhar}
          onChange={handleChange}
          error={!!errors?.aadhar}
          helperText={errors?.aadhar && strings.registerValidationAadhar}
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
