import { css } from '@emotion/css';

export const root = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const rightContainer = css`
  display: flex;
  gap: 16px;
`;

export const link = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }
`;
