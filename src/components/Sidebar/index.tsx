'use client';

import { usePathname } from 'next/navigation';
import { SidebarStyle, SidebarContent, SidebarLink } from './Sidebar.styles';
import Icons from '@components/icons';
import Avatar from '@components/Avatar';
import { Container } from '@components/Container';

const sidebarLinks = [
  {
    label: 'Trending',
    icon: <Icons.Trending />,
    url: '/',
  },
  {
    label: 'Movies',
    icon: <Icons.Movie />,
    url: '/movies',
  },
  {
    label: 'TV Series',
    icon: <Icons.TV />,
    url: '/tv-series',
  },
  {
    label: 'Bookmarked',
    icon: <Icons.Bookmark hasFill />,
    url: '/bookmarked',
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <SidebarStyle>
      <Icons.Logo
        color="var(--primary-color)"
        desktopWidth="2rem"
        desktopHeight="1.6rem"
        tabletWidth="2rem"
        tabletHeight="1.6rem"
        width="1.5625rem"
        height="1.25rem"
      />

      <SidebarContent>
        {sidebarLinks.map(link => {
          const isActive = pathname === link.url;

          return (
            <SidebarLink key={link.label} href={link.url} title={link.label} $active={isActive}>
              {link.icon}
            </SidebarLink>
          );
        })}
      </SidebarContent>

      <Avatar />
    </SidebarStyle>
  );
}
