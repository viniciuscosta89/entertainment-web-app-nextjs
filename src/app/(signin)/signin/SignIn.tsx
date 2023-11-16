'use client';

import { Container } from '@components/Container';
import { signIn } from 'next-auth/react';
import { LoginButton, LoginButtons, LoginContainer, LoginBox, LoginTitle } from './SignIn.styles';
import Icons from '@components/icons';
import { useTheme } from 'styled-components';

export default function SignIn() {
  const theme = useTheme();

  return (
    <Container $paddingInline="1.5rem">
      <LoginContainer>
        <Icons.Logo color={theme.colors.red[400]} width="2rem" />

        <LoginBox>
          <LoginTitle>Login</LoginTitle>

          <LoginButtons>
            <LoginButton onClick={() => signIn()}>Login</LoginButton>
          </LoginButtons>
        </LoginBox>
      </LoginContainer>
    </Container>
  );
}
