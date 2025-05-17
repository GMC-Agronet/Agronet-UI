'use client';
import React, { useState, useEffect } from 'react';
import '@fontsource/mulish/400.css';
import '@fontsource/mulish/700.css';
import '../app/styles/globals.css';

import { Provider as ReduxProvider } from 'react-redux';
import store from '../app/redux/store';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Container from './container';
import { useParams } from 'next/navigation';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  const params = useParams();
  const [componentKey, setComponentKey] = useState('home');

  useEffect(() => {
    if (params && params.component) {
      setComponentKey(params.component);
    }
  }, [params]);

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
        <ReduxProvider store={store}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <Container componentKey={componentKey}>{children}</Container>
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
