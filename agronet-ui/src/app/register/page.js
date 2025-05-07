'use client';

import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import MuiButton from '@/app/components/MuiButton';
import MuiInput from '@/app/components/MuiInput';
import MuiRadioGroup from '@/app/components/MuiRadioGroup';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    stakeholderType: 'Farmer/FPO/SHG',
    specificType: 'Individual Farmer',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegistration = () => {
    console.log('Registering:', formData);
    // API call logic goes here
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" p={3} bgcolor="background.default">
      <Typography variant="h4" fontWeight="bold">
        Create an Account
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Register as an agricultural stakeholder
      </Typography>

      <MuiInput label="Full Name" type="text" value={formData.fullName} onChange={(e) => handleChange('fullName', e.target.value)} />
      
      <MuiInput label="Mobile Number" type="tel" value={formData.mobileNumber} onChange={(e) => handleChange('mobileNumber', e.target.value)} />
      <Typography variant="caption" color="text.secondary">
        Mobile number verified during login
      </Typography>

      <MuiInput label="Email Address (Optional)" type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} />

      <MuiRadioGroup label="I am a" options={['Farmer/FPO/SHG', 'Agri-business', 'NGO']} selected={formData.stakeholderType} onChange={(value) => handleChange('stakeholderType', value)} />

      {formData.stakeholderType === 'Farmer/FPO/SHG' && (
        <MuiRadioGroup label="Specifically, I am a" options={['Individual Farmer', 'Farmer Producer Organization (FPO)', 'Self-Help Group (SHG)']} selected={formData.specificType} onChange={(value) => handleChange('specificType', value)} />
      )}

      <MuiButton onClick={handleRegistration} sx={{ mt: 2, width: '100%' }}>
        Complete Registration
      </MuiButton>

      <Typography variant="body2" mt={2}>
        Already have an account? <a href="/login" style={{ color: 'blue' }}>Login</a>
      </Typography>
    </Box>
  );
}