import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const root = css`
  display: grid;
  @media (min-width: ${theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${theme.breakpoints.values.lg}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
