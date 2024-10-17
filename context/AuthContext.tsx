import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

interface AuthState {
  token: string | null;
  authenticated: boolean | null;
}

interface AuthProps {
  authState?: AuthState;
  onRegister?: (
    userName: string,
    email: string,
    password: string
  ) => Promise<any>;
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const TOKEN_KEY = "jwt-token";

const AuthContext = createContext<AuthProps>({});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    token: null,
    authenticated: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);

      if (!token) {
        //Hacer algo
        return;
      }

      setAuthState({
        token: token,
        authenticated: true,
      });
    };
    loadToken();
  }, []);

  const login = async (emai: string, password: string) => {
    alert("loginin");

    const token = "1234abcd";
    setAuthState({
      token: token,
      authenticated: true,
    });

    await SecureStore.setItemAsync(TOKEN_KEY, token);
  };

  const register = async (
    userName: string,
    email: string,
    password: string
  ) => {
    //Hacer algo

    await login(email, password);
  };

  const logout = async () => {
    //Hacer algo
    await SecureStore.deleteItemAsync(TOKEN_KEY);

    setAuthState({
      authenticated: false,
      token: null,
    });
  };

  const value: AuthProps = {
    authState: authState,
    onLogin: login,
    onRegister: register,
    onLogout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
