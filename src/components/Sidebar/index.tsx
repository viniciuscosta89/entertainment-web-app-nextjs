'use client';

import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import {
  SidebarStyle,
  SidebarContent,
  SidebarLink,
  SidebarSession,
  SidebarButton,
  SidebarName,
  SidebarUser,
} from './Sidebar.styles';
import Icons from '@components/icons';
import Avatar from '@components/Avatar';
import router from 'next/router';
import Link from 'next/link';

enum Links {
  TRENDING = '/',
  MOVIES = '/movies',
  TV_SERIES = '/tv-series',
  BOOKMARKED = '/bookmarked',
}

const sidebarLinks = [
  {
    label: 'Trending',
    icon: <Icons.Trending />,
    url: Links.TRENDING,
  },
  {
    label: 'Movies',
    icon: <Icons.Movie />,
    url: Links.MOVIES,
  },
  {
    label: 'TV Series',
    icon: <Icons.TV />,
    url: Links.TV_SERIES,
  },
  {
    label: 'Bookmarked',
    icon: <Icons.Bookmark hasFill />,
    url: Links.BOOKMARKED,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession({ required: true });

  return (
    <SidebarStyle
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.25, type: 'spring', stiffness: 100 }}
    >
      <Link href="/" aria-label="Home" title="Home">
        <Icons.Logo
          color="var(--primary-color)"
          desktopWidth="2rem"
          desktopHeight="1.6rem"
          tabletWidth="2rem"
          tabletHeight="1.6rem"
          width="1.5625rem"
          height="1.25rem"
        />
      </Link>

      <SidebarContent>
        {sidebarLinks.map(({ icon, label, url }) => {
          const isActive = pathname === url;

          return (
            <SidebarLink key={label} href={url} $active={isActive} arial-label={label} title={label}>
              {icon}
            </SidebarLink>
          );
        })}
      </SidebarContent>

      <SidebarSession>
        {session ? (
          <>
            <SidebarButton onClick={() => signOut()} type="button" aria-label="Sign out button" title="Sign out">
              <span className="material-symbols-outlined">logout</span>
            </SidebarButton>
            <SidebarUser>
              <SidebarName>{session.user?.name}</SidebarName>
              <Avatar image={session?.user?.image} />
            </SidebarUser>
          </>
        ) : (
          <>
            <SidebarButton onClick={() => router.push('/')} type="button" aria-label="Sign in button">
              Sign In
            </SidebarButton>
            <SidebarUser>
              <SidebarName>Not signed in</SidebarName>
              <Avatar image="http://placekitten.com/g/40" />
            </SidebarUser>
          </>
        )}
      </SidebarSession>
    </SidebarStyle>
  );
}
