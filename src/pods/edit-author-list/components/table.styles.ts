import { css } from '@emotion/css';

export const table = css`
  display: flex;
  flex-direction: column;

  & :last-child {
    text-align: center;
  }
`;

export const pagination = css`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
