import { ReactNode } from 'react';
import Providers from '../providers';
import { Wrapper } from '@styles/Wrapper';
import Sidebar from '@components/Sidebar';
import '@smastrom/react-rating/style.css';
import { getServerSession } from 'next-auth';
import { authOptions } from 'app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session || !session?.user) {
    redirect('/signin');
  }

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />

        <link rel="icon" href="favicon.png" />
      </head>
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
