import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const root = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${theme.palette.secondary.main};
`;
