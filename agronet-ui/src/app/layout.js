'use client';
import React, { useState, useEffect } from 'react';
import '@fontsource/mulish/400.css';
import '@fontsource/mulish/700.css';
import '../app/styles/globals.css';

import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Container from './container';
import { useParams, usePathname } from 'next/navigation';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';
import BottomNavBar from './components/BottomNavBar';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  // Move all hooks and logic inside the component, but outside the Provider wrappers
  return (
    <html lang="en">
      <head>
        <style>{`
          html, body, * {
            font-family: 'Mulish', sans-serif !important;
          }
        `}</style>
      </head>
      <body>
        <div className="agronet-gradient-bg">
          <ReduxProvider store={store}>
            <QueryClientProvider client={queryClient}>
              <ThemeProvider theme={theme}>
                <LayoutContent>{children}</LayoutContent>
              </ThemeProvider>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}

function LayoutContent({ children }) {
  const params = useParams();
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';
  const [componentKey, setComponentKey] = React.useState('home');
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const router = useRouter();
  const [showLoginDialog, setShowLoginDialog] = React.useState(false);
  const protectedRoutes = React.useMemo(
    () => ['/profile', '/settings', '/orders', '/my-orders'],
    [],
  );

  React.useEffect(() => {
    if (params && params.component) {
      setComponentKey(params.component);
    }
  }, [params]);

  // Determine if BottomNavBar should be shown
  const showBottomNav =
    typeof window !== 'undefined'
      ? !(pathname === '/landing' || pathname === '/' || pathname === '/login')
      : true;

  // Optionally, block rendering of protected content if not logged in
  const isProtected =
    typeof window !== 'undefined' &&
    protectedRoutes.some((r) => pathname === r);

  // Only show login dialog if on a protected route and not logged in
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (!isLoggedIn && protectedRoutes.some((r) => path === r)) {
        setShowLoginDialog(true);
      } else {
        setShowLoginDialog(false);
      }
    }
  }, [isLoggedIn, router, pathname, protectedRoutes]);

  // Fix: If login dialog is open and user cancels, redirect to a safe public page (dashboard)
  const handleLoginDialogClose = () => {
    setShowLoginDialog(false);
    if (isProtected && !isLoggedIn) {
      // Instead of router.push, use window.location.replace to force reload
      window.location.replace('/dashboard');
    }
  };

  return (
    <>
      <Box sx={{ pb: 8 }}>
        <Container componentKey={componentKey}>
          {/* Only block protected content if on exact protected route and not logged in */}
          {!isLoggedIn && protectedRoutes.some((r) => pathname === r)
            ? null
            : children}
        </Container>
        {showBottomNav && <BottomNavBar />}
      </Box>
      <Dialog open={showLoginDialog} onClose={handleLoginDialogClose}>
        <DialogTitle>Login Required</DialogTitle>
        <DialogContent>
          You need to be logged in to access this page.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLoginDialogClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              setShowLoginDialog(false);
              router.push('/login');
            }}
            color="primary"
            variant="contained"
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
