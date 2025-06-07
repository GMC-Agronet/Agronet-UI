import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';

export default function FPOSection({ form, handleChange }) {
  return (
    <Grid container spacing={2} justifyContent="center" width="100%" maxWidth="none">
      <Grid item xs={12} sx={{ width: '100%' }}>
        <TextField label="FPO ID" name="fpoId" value={form.fpoId} onChange={handleChange} fullWidth sx={{ width: '100%', maxWidth: 600, mx: 'auto' }} />
      </Grid>
      <Grid item xs={12} sx={{ width: '100%' }}>
        <TextField label="FPO Name" name="fpoName" value={form.fpoName} onChange={handleChange} fullWidth sx={{ width: '100%', maxWidth: 600, mx: 'auto' }} />
      </Grid>
      <Grid item xs={12} sx={{ width: '100%' }}>
        <TextField label="Village" name="fpoVillage" value={form.fpoVillage} onChange={handleChange} fullWidth sx={{ width: '100%', maxWidth: 600, mx: 'auto' }} />
      </Grid>
      <Grid item xs={12} sx={{ width: '100%' }}>
        <TextField label="Mandal" name="fpoMandal" value={form.fpoMandal} onChange={handleChange} fullWidth sx={{ width: '100%', maxWidth: 600, mx: 'auto' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption" color="text.secondary" align="center" display="block">
          FPO details are optional. Fill if you are part of an FPO.
        </Typography>
      </Grid>
    </Grid>
  );
}
