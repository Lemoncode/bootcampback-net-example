import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const root = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const paper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  padding: ${theme.spacing(4)};
  max-width: 400px;
  margin: 0 auto;

  & > form {
    align-self: center;
  }
`;

export const input = css`
  margin-bottom: ${theme.spacing(2)};
`;
