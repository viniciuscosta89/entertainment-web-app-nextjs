import styled from 'styled-components';

export const GoUp = styled.button`
  background-color: ${({ theme }) => theme.colors.red[400]};
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 8px ${({ theme }) => theme.colors.red[350]};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  transition: all 0.3s ease-in-out;

  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 10;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 4px 16px ${({ theme }) => theme.colors.gray[50]};
    color: ${({ theme }) => theme.colors.darkBlue[900]};
    transform: translateY(-0.5rem);
  }
`;
