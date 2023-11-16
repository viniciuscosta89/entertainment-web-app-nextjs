import NextAuth, { Session, NextAuthOptions } from 'next-auth';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { AdapterUser } from 'next-auth/adapters';
import EmailProvider from 'next-auth/providers/email';

interface SessionProps {
  session: Session;
  user: AdapterUser;
}

export const authOptions = {
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
  }),
  providers: [
    EmailProvider({
      server: {
        host: process.env.SENDGRID_SERVER,
        port: process.env.SENDGRID_PORT,
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      },
      from: process.env.EMAIL_ADDRESS,
      maxAge: 24 * 60 * 60,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    session: async ({ session, user }: SessionProps) => {
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  theme: {
    colorScheme: 'dark',
    brandColor: '#fc4545',
  },
} satisfies NextAuthOptions;

export const nextAuth = NextAuth(authOptions);
export const handler = nextAuth;

export { handler as GET, handler as POST };
