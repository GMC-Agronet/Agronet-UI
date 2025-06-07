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
  FormControl,
  Select,
  MenuItem,
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
import { useLanguage } from '../hooks/useLanguage.js';
import SideNav from '../components/SideNav';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function RegisterPage() {
  const { strings, language, setLanguage } = useLanguage();
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
    const { name, value } = e.target;
    let newValue = value;
    // Only allow numbers for mobile, pincode, aadhar
    if (['mobile', 'pincode', 'aadhar'].includes(name)) {
      newValue = newValue.replace(/[^0-9]/g, '');
    }
    setForm({ ...form, [name]: newValue });
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

  const steps = [
    strings.registerStepPersonalInfo,
    strings.registerStepAddress,
    strings.registerStepFPO,
    strings.registerStepAadhar,
    strings.registerStepPayment,
  ];

  const sectionDescriptions = [
    strings.registerSectionPersonalInfoDesc,
    strings.registerSectionAddressDesc,
    strings.registerSectionFPODesc,
    strings.registerSectionAadharDesc,
    strings.registerSectionPaymentDesc,
  ];

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

  const handleStepClick = (idx) => {
    setActiveStep(idx);
  };

  const stepIcons = [
    PersonIcon,
    HomeIcon,
    GroupsIcon,
    CreditCardIcon,
    AccountBalanceWalletIcon,
  ];

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
      {/* Logo at the top left */}
      <Box sx={{ position: 'absolute', top: 18, left: 18, zIndex: 10 }}>
        <Image
          src="/assets/images/gmclogo.svg"
          alt="GMC AgroNet Logo"
          width={152}
          height={72}
          style={{ objectFit: 'contain' }}
          priority
        />
      </Box>
      {/* Language dropdown at top right */}
      <Box sx={{ position: 'absolute', top: 18, right: 18, zIndex: 10 }}>
        <FormControl
          size="small"
          sx={{
            minWidth: 120,
            bgcolor: 'white',
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            displayEmpty
            inputProps={{ 'aria-label': 'Language' }}
          >
            <MenuItem value="en">{strings.English || 'English'}</MenuItem>
            <MenuItem value="te">{strings.Telugu || 'Telugu'}</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* Overlay for darkening the background image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0,0,0,0.18)',
          zIndex: 1,
        }}
      />
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
            {strings.registerPageTitle}
          </Typography>
        </Box>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{ mb: 2, width: '100%' }}
        >
          {steps.map((label, idx) => {
            const Icon = stepIcons[idx];
            return (
              <Step key={label} completed={!!completed[idx]}>
                <StepLabel
                  StepIconComponent={(props) => (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor:
                          props.active || props.completed
                            ? '#357a38'
                            : '#e0e0e0',
                        color:
                          props.active || props.completed ? 'white' : '#757575',
                        borderRadius: '50%',
                        width: 36,
                        height: 36,
                        boxShadow: props.active
                          ? '0 0 0 4px #c8e6c9'
                          : undefined,
                        transition: 'all 0.2s',
                        fontSize: 0,
                      }}
                    >
                      <Icon sx={{ fontSize: 22 }} />
                    </Box>
                  )}
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
            );
          })}
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
            {strings.registerBtnBack}
          </Button>
          {activeStep < steps.length - 1 && (
            <>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ ml: 2, minWidth: 110 }}
              >
                {strings.registerBtnNext}
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
                  {strings.registerBtnSkip}
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
              {strings.registerBtnFinish}
            </Button>
          )}
        </Box>
        <Box sx={{ width: '100%', textAlign: 'center', mt: 2, mb: 1 }}>
          <a
            href="/login"
            style={{
              color: '#1976d2',
              textDecoration: 'underline',
              fontWeight: 500,
              fontSize: 18,
              // background: 'rgba(255,255,255,0.85)',
              borderRadius: 8,
              padding: '6px 18px',
              // boxShadow: '0 2px 8px #0001',
              display: 'inline-block',
            }}
          >
            {strings.registerLoginLink}
          </a>
        </Box>
      </Paper>
    </Box>
  );
}
