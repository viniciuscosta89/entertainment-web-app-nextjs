'use client';

import CookieConsent from 'react-cookie-consent';
import { useTheme } from 'styled-components';

export default function Cookie() {
  const theme = useTheme();

  return (
    <CookieConsent
      cookieName="Entertainment Web App with Next cookie consent"
      style={{ backgroundColor: theme.colors.darkBlue[400], color: theme.colors.darkBlue[900], padding: '1rem' }}
      buttonStyle={{
        backgroundColor: theme.colors.red[400],
        borderRadius: '0.375rem',
        color: theme.colors.white,
        fontWeight: '300',
        margin: 0,
        padding: '1rem 2rem',
      }}
      contentStyle={{
        color: theme.colors.white,
        margin: 0,
      }}
      overlay
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
}
