import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  height: 100%;
  padding: 48px;
  background-color: #f5f5f5;
`;

export const title = css`
  align-self: flex-start;
  font-size: 24px;
  font-weight: bold;
`;

export const cardContainer = css`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  gap: 64px;
  width: 100%;
`;

export const card = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 150px;
  height: 150px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
  background-color: #ffffff;
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }

  &:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.35);
  }
`;

export const cardIcon = css`
  width: 40px;
  height: 40px;
`;
