import { getServerSession } from 'next-auth';
import SignIn from './SignIn';
import { redirect } from 'next/navigation';
import { authOptions } from 'app/api/auth/[...nextauth]/route';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Entertainment Web App | Frontend Mentor Challenge',
  description: 'Created for a Frontend Mentor Challenge by Vinicius Costa',
};

export default async function SignInPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  return <SignIn />;
}
