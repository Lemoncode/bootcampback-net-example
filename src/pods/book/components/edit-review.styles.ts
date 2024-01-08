import { css } from '@emotion/css';
import { paperClasses, backdropClasses } from '@mui/material';

export const root = css`
  & .${paperClasses.root} {
    width: 600px;
  }

  & .${backdropClasses.root} {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const dialogContent = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
