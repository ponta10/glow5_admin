import { createContext, useContext, useState, useEffect } from 'react';
import { setApiToken } from './axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      if (localStorage.getItem('access_token')) {
        const data = {
          // remember: localStorage.getItem('remember'),
          accessToken: localStorage.getItem('access_token'),
        };

        setApiToken(localStorage.getItem('access_token'));
        setUser(data)
      }
    }

    loadUser();
  }, []);

  async function loginFn(data) {
    const {
      accessToken,
    } = data;
    // localStorage.setItem('remember', remember);
    localStorage.setItem('access_token', accessToken);

    setApiToken(accessToken);
    setUser(data);

    return data;
  }

  async function logoutFn() {
    setUser(null);
    localStorage.setItem('access_token', '');
    window.location.assign(window.location.origin);
  }

  const value = {
    user,
    loginFn,
    logoutFn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

