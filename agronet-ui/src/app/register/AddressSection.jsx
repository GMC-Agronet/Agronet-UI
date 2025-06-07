import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';

export default function AddressSection({ form, handleChange }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      <Grid container spacing={2} justifyContent="center" width="100%" maxWidth="none">
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField label="Door No." name="door" value={form.door} onChange={handleChange} fullWidth sx={{ width: '100%', maxWidth: 600, mx: 'auto' }} />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField label="Street" name="street" value={form.street} onChange={handleChange} fullWidth sx={{ width: '100%', maxWidth: 600, mx: 'auto' }} />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField label="Village" name="village" value={form.village} onChange={handleChange} fullWidth sx={{ width: '100%', maxWidth: 600, mx: 'auto' }} />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField label="Mandal" name="mandal" value={form.mandal} onChange={handleChange} fullWidth sx={{ width: '100%', maxWidth: 600, mx: 'auto' }} />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField label="District" name="district" value={form.district} onChange={handleChange} fullWidth sx={{ width: '100%', maxWidth: 600, mx: 'auto' }} />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField label="State" name="state" value={form.state} onChange={handleChange} fullWidth sx={{ width: '100%', maxWidth: 600, mx: 'auto' }} />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField
            label="Pincode"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            fullWidth
            required
            type="tel"
            inputProps={{ maxLength: 6, pattern: '[0-9]{6}', inputMode: 'numeric' }}
            sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField label="Landmark" name="landmark" value={form.landmark} onChange={handleChange} fullWidth sx={{ width: '100%', maxWidth: 600, mx: 'auto' }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" color="text.secondary" align="center" display="block">
            Address is optional. You can add or edit it later during order placement.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
