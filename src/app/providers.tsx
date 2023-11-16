'use client';

import { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import StyledComponentsRegistry from '@lib/registry';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/GlobalStyles';
import { theme } from '@styles/Theme';
import { BookmarkProvider } from '@contexts/BookmarkContext';

const queryClient = new QueryClient();

export default function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider refetchInterval={60}>
      <BookmarkProvider>
        <QueryClientProvider client={queryClient}>
          <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              {children}
            </ThemeProvider>
          </StyledComponentsRegistry>
        </QueryClientProvider>
      </BookmarkProvider>
    </SessionProvider>
  );
}
