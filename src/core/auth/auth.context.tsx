import React from 'react';

interface AuthContextModel {
  isUserLogged: boolean;
  setIsUserLogged: (isUserLogged: boolean) => void;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextModel>({
  isUserLogged: false,
  setIsUserLogged: () => {},
  logout: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = React.useState<boolean>(false);

  const logout = () => {
    setIsUserLogged(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLogged,
        setIsUserLogged,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);
