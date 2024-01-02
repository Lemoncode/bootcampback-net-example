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
  flex-direction: column;
  gap: ${theme.spacing(3)};
`;

export const button = css`
  width: 15rem;
`;

export const fieldContainer = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1)};
`;

export const hiddeLabel = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
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

export const error = css`
  color: ${theme.palette.error.main};
  font-size: 14px;
`;
