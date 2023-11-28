import React from 'react';
import * as api from './api';

export const EditAuthorListContainer: React.FC = () => {
  React.useEffect(() => {
    api.getEditAuthorList(2, 10).then(authorList => {
      console.log(authorList);
    });
  }, []);
  return <div>EditAuthorListContainer: React.FC</div>;
};
