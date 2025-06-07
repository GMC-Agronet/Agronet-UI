'use client';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  Paper,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import PersonalInfoSection from './PersonalInfoSection';
import AddressSection from './AddressSection';
import FPOSection from './FPOSection';
import KYCSection from './KYCSection';
import BankSection from './BankSection';
import Image from 'next/image';
import Link from 'next/link';

const steps = ['Personal Info', 'Address', 'FPO', 'Aadhar', 'Payment'];

export default function RegisterPage() {
  const router = useRouter();
  // If user is already logged in via phone, get mobile from redux/auth
  const loggedInMobile = useSelector((state) => state.auth?.mobileNumber || '');
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  // Form state
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    mobile: loggedInMobile,
    email: '',
    // Address
    door: '',
    street: '',
    village: '',
    mandal: '',
    district: '',
    state: '',
    pincode: '',
    landmark: '',
    // FPO
    fpoId: '',
    fpoName: '',
    fpoVillage: '',
    fpoMandal: '',
    // KYC
    aadhar: '',
    // Bank/UPI
    upi: '',
  });
  const [errors, setErrors] = useState({});

  // Validation logic for each step
  const validateStep = () => {
    let errs = {};
    if (activeStep === 0) {
      if (!form.firstName) errs.firstName = 'First name required';
      if (!form.lastName) errs.lastName = 'Last name required';
      if (!form.mobile || !/^\d{10}$/.test(form.mobile))
        errs.mobile = 'Valid mobile required';
      if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
        errs.email = 'Invalid email';
    }
    if (activeStep === 3 && form.aadhar && !/^\d{12}$/.test(form.aadhar)) {
      errs.aadhar = 'Aadhar must be 12 digits';
    }
    if (activeStep === 4 && form.upi && !/^\S+@\S+$/.test(form.upi)) {
      errs.upi = 'Invalid UPI ID';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCompleted({ ...completed, [activeStep]: true });
      setActiveStep((prev) => prev + 1);
    }
  };
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSkip = () => {
    setCompleted({ ...completed, [activeStep]: false });
    setActiveStep((prev) => prev + 1);
  };
  const handleSubmit = () => {
    // TODO: Submit registration data
    alert('Registration complete!');
    router.push('/dashboard');
  };

  const sectionCards = [
    {
      label: 'Personal Info',
      done: completed[0],
    },
    {
      label: 'Address',
      done: completed[1],
    },
    {
      label: 'FPO',
      done: completed[2],
    },
    {
      label: 'Aadhar',
      done: completed[3],
    },
    {
      label: 'Payment',
      done: completed[4],
    },
  ];

  const sectionDescriptions = [
    'Enter your personal details to get started. Mobile number is required for registration.',
    'Add your delivery address now or skip and add it later during order placement.',
    'If you are part of an FPO, enter your association details. Otherwise, skip this step.',
    'Provide your Aadhar number for KYC. This is required to place orders, but can be added later.',
    'Add your UPI ID for payments. You can add or edit this later during checkout.',
  ];

  const handleStepClick = (idx) => {
    setActiveStep(idx);
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: 'url(/assets/images/farm.jpg) center/cover no-repeat',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0,0,0,0.18)',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <Image
          src="/assets/images/gmclogo.svg"
          alt="GMC AgroNet Logo"
          width={160}
          height={48}
          style={{ objectFit: 'contain' }}
        />
      </Box>
      <Paper
        elevation={3}
        sx={{
          maxWidth: 540,
          width: '96vw',
          mt: { xs: 16, sm: 14 },
          mb: { xs: 4, sm: 6 },
          p: { xs: 2.5, sm: 4 },
          borderRadius: 4,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 2,
          minHeight: 'auto',
          pb: 18,
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
          <Typography
            variant="h5"
            fontWeight={700}
            color="primary"
            align="center"
            sx={{ letterSpacing: 0.5, paddingBottom: 4 }}
          >
            Registration
          </Typography>
        </Box>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{ mb: 2, width: '100%' }}
        >
          {steps.map((label, idx) => (
            <Step key={label} completed={!!completed[idx]}>
              <StepLabel
                onClick={() => handleStepClick(idx)}
                sx={{
                  cursor: 'pointer',
                  '& .MuiStepLabel-label': {
                    color: idx === activeStep ? '#357a38' : undefined,
                    fontWeight: idx === activeStep ? 700 : 500,
                    textDecoration:
                      idx !== activeStep ? 'underline dotted' : 'none',
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          align="center"
          mb={2}
        >
          {sectionDescriptions[activeStep]}
        </Typography>
        <Box mb={2} width="100%">
          {activeStep === 0 && (
            <PersonalInfoSection
              form={form}
              errors={errors}
              handleChange={handleChange}
              loggedInMobile={loggedInMobile}
              inputProps={{ sx: { width: '100%' } }}
            />
          )}
          {activeStep === 1 && (
            <AddressSection
              form={form}
              handleChange={handleChange}
              inputProps={{ sx: { width: '100%' } }}
            />
          )}
          {activeStep === 2 && (
            <FPOSection
              form={form}
              handleChange={handleChange}
              inputProps={{ sx: { width: '100%' } }}
            />
          )}
          {activeStep === 3 && (
            <KYCSection
              form={form}
              errors={errors}
              handleChange={handleChange}
              inputProps={{ sx: { width: '100%' } }}
              label="Aadhar Number"
            />
          )}
          {activeStep === 4 && (
            <BankSection
              form={form}
              errors={errors}
              handleChange={handleChange}
              inputProps={{ sx: { width: '100%' } }}
              label="Payment"
            />
          )}
        </Box>

        <Box display="flex" justifyContent="space-between" mt={2} width="100%">
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<ArrowBackIcon />}
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{ minWidth: 110 }}
          >
            Back
          </Button>
          {activeStep < steps.length - 1 && (
            <>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ ml: 2, minWidth: 110 }}
              >
                Next
              </Button>
              {(activeStep === 1 ||
                activeStep === 2 ||
                activeStep === 3 ||
                activeStep === 4) && (
                <Button
                  onClick={handleSkip}
                  sx={{ ml: 1, minWidth: 110 }}
                  color="secondary"
                >
                  Skip
                </Button>
              )}
            </>
          )}
          {activeStep === steps.length - 1 && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ minWidth: 110 }}
            >
              Finish
            </Button>
          )}
        </Box>
        <div style={{ width: '100%', marginTop: 24, textAlign: 'center' }}>
          <Link
            href="/login"
            style={{
              color: '#1976d2',
              textDecoration: 'underline',
              fontWeight: 500,
            }}
          >
            Already have an account? Login
          </Link>
        </div>
      </Paper>
    </Box>
  );
}
