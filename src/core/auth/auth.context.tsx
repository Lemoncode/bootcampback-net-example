import React from 'react';
import * as api from './api';
import { User } from '.';

interface AuthContextModel {
  user: User;
  isUserLogged: boolean;
  setIsUserLogged: (isUserLogged: boolean) => void;
  onLogin: (user: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextModel>({
  user: null,
  isUserLogged: false,
  onLogin: () => Promise.resolve(false),
  setIsUserLogged: () => {},
  logout: () => {},
});

interface Props {
  children: React.ReactNode;
  BookList: React.FC;
}

export const AuthProvider: React.FC<Props> = ({ children, BookList }) => {
  const [isUserLogged, setIsUserLogged] = React.useState<boolean>(false);
  const [ready, setReady] = React.useState(false);
  const [user, setUser] = React.useState<User>(null);

  const logout = () => {
    setIsUserLogged(false);
    setUser(null);
  };

  const handleLogin = (email: string, password: string) => {
    if (email === 'admin@email.com' && password === 'test') {
      setIsUserLogged(true);
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  };

  React.useEffect(() => {
    api
      .whoami()
      .then(setUser)
      .then(() => setIsUserLogged(true))
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isUserLogged,
        setIsUserLogged,
        logout,
        onLogin: handleLogin,
      }}
    >
      {user ? <>{children}</> : ready && <BookList />}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
