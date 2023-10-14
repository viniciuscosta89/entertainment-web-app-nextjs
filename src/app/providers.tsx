'use client';

import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import StyledComponentsRegistry from '@lib/registry';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/GlobalStyles';
import { theme } from '@styles/Theme';

const queryClient = new QueryClient();

export default function Providers({ children }: PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </StyledComponentsRegistry>
  );
}
