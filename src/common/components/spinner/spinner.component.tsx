import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Modal from '@mui/material/Modal';
import Loader from 'react-spinners/ScaleLoader';
import * as classes from './spinner.styles';

interface Props {
  delay?: number;
}

export const SpinnerComponent: React.FunctionComponent<Props> = props => {
  const { delay } = props;
  const { promiseInProgress } = usePromiseTracker({ delay });

  return (
    <Modal open={promiseInProgress} className={classes.modal}>
      <div className={classes.loaderContainer}>
        <Loader />
      </div>
    </Modal>
  );
};

SpinnerComponent.defaultProps = {
  delay: 500,
};
