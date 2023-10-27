import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const root = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(3)};
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: ${theme.spacing(3)};
`;

export const title = css`
  font-size: 28px;
  font-weight: bold;
`;

export const textFieldsContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing(3)};

  & > :nth-child(n) {
    width: 100%;
  }
`;

export const chipsContainer = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing(1)};
  min-width: 100%;
`;

export const goBack = css`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${theme.palette.primary.main};

  & > span {
    font-size: 16px;
    font-weight: bold;
  }
`;
