import React, { FunctionComponent } from 'react';
import { CarrierApp } from '@shipengine/integration-platform-sdk';
import { default as useAppHook } from '../hooks/use-app';

interface AppContextProps {
  app: CarrierApp | undefined;
  error: Error | undefined;
  isValidating: boolean;
}

const AppContext = React.createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: FunctionComponent<AppProviderProps> = ({ children }) => {
  const { app, error, isValidating } = useAppHook();

  return (
    <AppContext.Provider value={{ app, error, isValidating }}>
      {children}
    </AppContext.Provider>
  );
};

function useApp(): AppContextProps {
  const context = React.useContext(AppContext);

  if (context === undefined) {
    throw new Error('useApp must be used within a AppProvider');
  }
  return context;
}

export { useApp, AppProvider };
