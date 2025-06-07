import React from 'react';
import { Grid, TextField } from '@mui/material';
import { useLanguage } from '../hooks/useLanguage.js';

export default function BankSection({ form, errors, handleChange }) {
  const { strings } = useLanguage();
  return (
    <Grid container spacing={2} justifyContent="center" width="100%" maxWidth="none">
      <Grid item xs={12} sx={{ width: '100%' }}>
        <TextField
          label={strings.registerFieldUPI}
          name="upi"
          value={form.upi}
          onChange={handleChange}
          error={!!errors?.upi}
          helperText={errors?.upi && strings.registerValidationUPI}
          fullWidth
          required
          sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
        />
      </Grid>
    </Grid>
  );
}
