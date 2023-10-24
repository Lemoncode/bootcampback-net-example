import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const root = css`
  align-self: center;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: ${theme.spacing(2)};
  height: 100%;
  max-width: 1280px;
  padding: ${theme.spacing(4)};

  & > :last-child {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-grow: 1;
    gap: ${theme.spacing(2)};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const title = css`
  font-size: 42px;
  font-weight: bold;
`;

export const reviewsContainer = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${theme.spacing(2)};
  justify-content: flex-end;
`;

export const reviewContainer = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1)};
  padding: ${theme.spacing(2)};
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);

  &:last-child {
    border-bottom: none;
  }

  & > :first-child {
    font-size: 14px;
  }

  & > :nth-child(2) {
    font-size: 14px;
    font-weight: 500;
  }

  & > :last-child {
    font-size: 14px;
    font-style: oblique;

    &:before {
      content: '"';
    }

    &:after {
      content: '"';
    }
  }
`;
