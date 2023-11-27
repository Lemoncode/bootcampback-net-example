import React from 'react';
import { AppBarComponent } from '@/common-app/components/app-bar';
import * as classes from './app.layout.styles';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = props => {
  const { children } = props;

  return (
    <div className={classes.root}>
      <AppBarComponent />
      {children}
    </div>
  );
};
