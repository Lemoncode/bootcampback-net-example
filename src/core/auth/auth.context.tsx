import React from 'react';
import * as api from './api';
import { User } from '.';

interface AuthContextModel {
  user: User;
  isUserLogged: boolean;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextModel>({
  user: null,
  isUserLogged: false,
  logout: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = React.useState<boolean>(false);

  const [user, setUser] = React.useState<User>();

  const logout = () =>
    api
      .logout()
      .then(() => setIsUserLogged(false))
      .finally(() => setUser(null));

  React.useEffect(() => {
    api
      .whoami()
      .then(setUser)
      .then(() => setIsUserLogged(true))
      .catch(() => setIsUserLogged(false));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isUserLogged,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
