import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { useLanguage } from '../hooks/useLanguage.js';

export default function AddressSection({ form, handleChange }) {
  const { strings } = useLanguage();
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      <Grid container spacing={2} justifyContent="center" width="100%" maxWidth="none">
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField
            label={strings.registerFieldDoor}
            name="door"
            value={form.door}
            onChange={handleChange}
            fullWidth
            required
            sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField
            label={strings.registerFieldStreet}
            name="street"
            value={form.street}
            onChange={handleChange}
            fullWidth
            sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField
            label={strings.registerFieldVillage}
            name="village"
            value={form.village}
            onChange={handleChange}
            fullWidth
            required
            sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField
            label={strings.registerFieldMandal}
            name="mandal"
            value={form.mandal}
            onChange={handleChange}
            fullWidth
            required
            sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField
            label={strings.registerFieldDistrict}
            name="district"
            value={form.district}
            onChange={handleChange}
            fullWidth
            required
            sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField
            label={strings.registerFieldState}
            name="state"
            value={form.state}
            onChange={handleChange}
            fullWidth
            required
            sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField
            label={strings.registerFieldPincode}
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
          <TextField
            label={strings.registerFieldLandmark}
            name="landmark"
            value={form.landmark}
            onChange={handleChange}
            fullWidth
            sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" color="text.secondary" align="center" display="block">
            {strings.registerAddressFooter}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
