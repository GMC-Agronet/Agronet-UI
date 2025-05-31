'use client';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Grid,
  TextField,
  MenuItem,
  IconButton,
  Chip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CommonTopNav from '../components/CommonTopNav';

const cropOptions = [
  'Wheat',
  'Rice',
  'Maize',
  'Cotton',
  'Sugarcane',
  'Soybean',
  'Pulses',
  'Vegetables',
  'Fruits',
];

export default function MyCropPage() {
  const [crops, setCrops] = useState([]);
  const [form, setForm] = useState({
    crop: '',
    area: '',
    variety: '',
    date: '',
    location: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddCrop = () => {
    if (
      !form.crop ||
      !form.area ||
      !form.variety ||
      !form.date ||
      !form.location
    ) {
      setError('Please fill all fields.');
      return;
    }
    if (crops.length >= 4) {
      setError('You can register up to 4 crops per season.');
      return;
    }
    setCrops([...crops, form]);
    setForm({ crop: '', area: '', variety: '', date: '', location: '' });
    setError('');
  };

  const handleDelete = (idx) => {
    setCrops(crops.filter((_, i) => i !== idx));
  };

  return (
    <Box
      minHeight="100vh"
      sx={{
        background: 'linear-gradient(135deg, #e6f7e0 0%, #fdf6ee 100%)',
        pb: 6,
      }}
    >
      <CommonTopNav />
      <Box sx={{ maxWidth: 1100, mx: 'auto', mt: 4, p: { xs: 1, sm: 2 } }}>
        <Typography variant="h4" fontWeight={800} color="#183a1d" mb={3} pl={1}>
          My Crops
        </Typography>
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          display={'grid'}
          p={2}
        >
          {/* Form Card */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 4,
                mb: 2,
                bgcolor: 'white',
                boxShadow: '0 4px 24px #e6f7e0',
                transition: 'box-shadow 0.2s',
                '&:hover': { boxShadow: '0 8px 32px #c8e6c9' },
              }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                mb={2}
                color="#357a38"
                sx={{ fontSize: { xs: 20, sm: 22 } }}
              >
                Register a Crop{' '}
                <Chip
                  label="up to 4 per season"
                  size="small"
                  sx={{
                    ml: 1,
                    bgcolor: '#e6f7e0',
                    color: '#357a38',
                    fontWeight: 700,
                  }}
                />
              </Typography>
              <Grid container spacing={2} display={'grid'} alignItems="stretch">
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'stretch',
                  }}
                >
                  <TextField
                    select
                    label="Crop"
                    name="crop"
                    value={form.crop}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{ height: '100%' }}
                  >
                    {cropOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        <AgricultureIcon
                          sx={{ mr: 1, color: '#357a38' }}
                          fontSize="small"
                        />{' '}
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'stretch',
                  }}
                >
                  <TextField
                    label="Area (acres)"
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    type="number"
                    fullWidth
                    required
                    inputProps={{ min: 0, step: 0.01 }}
                    sx={{
                      bgcolor: '#f7faf7',
                      borderRadius: 2,
                      boxShadow: '0 1px 4px #e6f7e0',
                      height: '100%',
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'stretch',
                  }}
                >
                  <TextField
                    label="Variety"
                    name="variety"
                    value={form.variety}
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{
                      bgcolor: '#f7faf7',
                      borderRadius: 2,
                      boxShadow: '0 1px 4px #e6f7e0',
                      height: '100%',
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'stretch',
                  }}
                >
                  <TextField
                    label="Date of Sowing"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    fullWidth
                    required
                    InputLabelProps={{ shrink: true }}
                    helperText={!form.date ? 'Select date (yyyy-mm-dd)' : ''}
                    sx={{ height: '100%' }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'stretch',
                  }}
                >
                  <TextField
                    label="Location"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    fullWidth
                    required
                    InputProps={{
                      startAdornment: (
                        <PlaceIcon
                          sx={{ color: '#357a38', mr: 1 }}
                          fontSize="small"
                        />
                      ),
                    }}
                    sx={{
                      bgcolor: '#f7faf7',
                      borderRadius: 2,
                      boxShadow: '0 1px 4px #e6f7e0',
                      height: '100%',
                    }}
                  />
                </Grid>
              </Grid>
              {error && (
                <Typography color="error" mt={2}>
                  {error}
                </Typography>
              )}
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                sx={{
                  mt: 3,
                  fontWeight: 700,
                  borderRadius: 2,
                  px: 3,
                  py: 1.2,
                  fontSize: 17,
                  background:
                    'linear-gradient(90deg, #357a38 60%, #7ec850 100%)',
                  boxShadow: '0 2px 8px #c8e6c9',
                  transition: 'box-shadow 0.15s, transform 0.1s',
                  '&:hover': {
                    background:
                      'linear-gradient(90deg, #27632a 60%, #5fae2e 100%)',
                    boxShadow: '0 4px 16px #b2dfdb',
                  },
                  '&:active': {
                    boxShadow: '0 1px 2px #e6f7e0',
                    transform: 'scale(0.98)',
                  },
                }}
                onClick={handleAddCrop}
                disabled={crops.length >= 4}
              >
                Add Crop
              </Button>
            </Paper>
          </Grid>
          {/* Registered Crops Card Grid */}
          <Grid item xs={12} md={12}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 4,
                bgcolor: 'white',
                boxShadow: '0 4px 24px #e6f7e0',
                minHeight: 320,
                height: '100%',
                display: 'grid',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                transition: 'box-shadow 0.2s',
                '&:hover': { boxShadow: '0 8px 32px #c8e6c9' },
              }}
            >
              <Typography variant="h6" fontWeight={700} color="#357a38" mb={2}>
                Registered Crops
              </Typography>
              {/* Use hr for divider to avoid import issues */}
              <Box
                component="hr"
                sx={{ border: 0, borderTop: '1px solid #e6f7e0', mb: 2 }}
              />
              {crops.length === 0 ? (
                <Typography color="#888" mb={2}>
                  No crops registered yet.
                </Typography>
              ) : (
                <Grid container spacing={2}>
                  {crops.map((crop, idx) => (
                    <Grid item xs={12} sm={12} key={idx}>
                      <Paper
                        sx={{
                          p: 2,
                          borderRadius: 3,
                          display: 'grid',
                          flexDirection: 'column',
                          gap: 1.5,
                          bgcolor: '#fdf6ee',
                          boxShadow: '0 2px 12px #e6f7e0',
                          position: 'relative',
                          transition: 'box-shadow 0.15s, transform 0.1s',
                          cursor: 'pointer',
                          '&:hover': {
                            boxShadow: '0 6px 24px #c8e6c9',
                            transform: 'translateY(-2px) scale(1.02)',
                          },
                          '&:active': {
                            boxShadow: '0 1px 4px #e6f7e0',
                            transform: 'scale(0.98)',
                          },
                        }}
                      >
                        <Box
                          display="flex"
                          alignItems="center"
                          gap={1}
                          mb={0.5}
                        >
                          <AgricultureIcon
                            sx={{ color: '#357a38', fontSize: 22 }}
                          />
                          <Typography
                            fontWeight={700}
                            color="#183a1d"
                            fontSize={18}
                          >
                            {crop.crop}
                          </Typography>
                          <Chip
                            label={crop.variety}
                            size="small"
                            sx={{
                              ml: 1,
                              bgcolor: '#e6f7e0',
                              color: '#357a38',
                              fontWeight: 600,
                            }}
                          />
                        </Box>
                        <Typography
                          variant="body2"
                          color="#357a38"
                          fontWeight={600}
                        >
                          {crop.area} acres
                        </Typography>
                        <Box display="flex" alignItems="center" gap={1}>
                          <CalendarMonthIcon
                            sx={{ color: '#888', fontSize: 18 }}
                          />
                          <Typography variant="body2" color="#888">
                            {crop.date}
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap={1}>
                          <PlaceIcon sx={{ color: '#888', fontSize: 18 }} />
                          <Typography variant="body2" color="#888">
                            {crop.location}
                          </Typography>
                        </Box>
                        <IconButton
                          color="error"
                          onClick={() => handleDelete(idx)}
                          sx={{ position: 'absolute', top: 8, right: 8 }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
