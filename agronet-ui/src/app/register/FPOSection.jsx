import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import { useLanguage } from '../hooks/useLanguage.js';

export default function FPOSection({ form, handleChange }) {
  const { strings } = useLanguage();
  return (
    <Grid container spacing={2} justifyContent="center" width="100%" maxWidth="none">
      <Grid item xs={12} sx={{ width: '100%' }}>
        <TextField
          label={strings.registerFieldFPOId}
          name="fpoId"
          value={form.fpoId}
          onChange={handleChange}
          fullWidth
          sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
        />
      </Grid>
      <Grid item xs={12} sx={{ width: '100%' }}>
        <TextField
          label={strings.registerFieldFPOName}
          name="fpoName"
          value={form.fpoName}
          onChange={handleChange}
          fullWidth
          sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
        />
      </Grid>
      <Grid item xs={12} sx={{ width: '100%' }}>
        <TextField
          label={strings.registerFieldFPOVillage}
          name="fpoVillage"
          value={form.fpoVillage}
          onChange={handleChange}
          fullWidth
          sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
        />
      </Grid>
      <Grid item xs={12} sx={{ width: '100%' }}>
        <TextField
          label={strings.registerFieldFPOMandal}
          name="fpoMandal"
          value={form.fpoMandal}
          onChange={handleChange}
          fullWidth
          sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption" color="text.secondary" align="center" display="block">
          {strings.registerFPOFooter}
        </Typography>
      </Grid>
    </Grid>
  );
}
