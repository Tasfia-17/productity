import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { AuthClient } from '@dfinity/auth-client';

interface InternetIdentityContextType {
  authClient: AuthClient | null;
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const InternetIdentityContext = createContext<InternetIdentityContextType | null>(null);

export function InternetIdentityProvider({ children }: { children: ReactNode }) {
  const [authClient, setAuthClient] = useState<AuthClient | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    AuthClient.create().then(client => {
      setAuthClient(client);
      setIsAuthenticated(client.isAuthenticated());
    });
  }, []);

  const login = async () => {
    if (!authClient) return;
    await authClient.login({
      identityProvider: 'https://identity.ic0.app',
      onSuccess: () => setIsAuthenticated(true),
    });
  };

  const logout = async () => {
    if (!authClient) return;
    await authClient.logout();
    setIsAuthenticated(false);
  };

  return (
    <InternetIdentityContext.Provider value={{ authClient, isAuthenticated, login, logout }}>
      {children}
    </InternetIdentityContext.Provider>
  );
}

export function useInternetIdentity() {
  const context = useContext(InternetIdentityContext);
  if (!context) throw new Error('useInternetIdentity must be used within InternetIdentityProvider');
  return context;
}
