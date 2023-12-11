import { css } from '@emotion/css';
import { cardMediaClasses, cardActionsClasses } from '@mui/material';
import { theme } from '@/core/theme';

export const root = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  padding: ${theme.spacing(2)};
  padding-bottom: ${theme.spacing(8)};
  border: 1px solid ${theme.palette.primary.main};
`;

export const title = css`
  align-self: flex-start;
  font-size: 24px;
  font-weight: bold;
`;

export const cardContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
  justify-content: center;
  max-width: 1280px;
`;

export const card = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 350px;
  height: 500px;
  padding: ${theme.spacing(2)};

  .${cardMediaClasses.root} {
    height: 70%;
    width: 100%;
    border-radius: 8px;
    background-position: top center;
  }

  .${cardActionsClasses.root} {
    width: 100%;
    justify-content: space-between;
  }
`;

export const link = css`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  padding: ${theme.spacing(0.5)} ${theme.spacing(0.75)};
  border-radius: 4px;

  :visited {
    color: inherit;
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
