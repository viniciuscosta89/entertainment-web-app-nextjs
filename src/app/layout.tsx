import { ReactNode } from 'react';
import Providers from './providers';
import { Wrapper } from '@styles/Wrapper';
import Sidebar from '@components/Sidebar';
import '@smastrom/react-rating/style.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Wrapper>
            <Sidebar />
            {children}
          </Wrapper>
        </Providers>
      </body>
    </html>
  );
}
