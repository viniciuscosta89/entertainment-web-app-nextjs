import { ReactNode } from 'react';
import Providers from '../providers';
import { Wrapper } from '@styles/Wrapper';

export default function SignInLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.png" />
      </head>
      <body>
        <Providers>
          <Wrapper $isSignInPage>{children}</Wrapper>
        </Providers>
      </body>
    </html>
  );
}
