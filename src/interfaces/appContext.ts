import React from 'react';

// Export both the TS interface and the actual React context object as the same alias 'AppContext'
export interface AppContext {
  darkMode: boolean;
  setDarkMode: (newState: boolean) => void;
}

const defaultContext: AppContext = {
  darkMode: false,
  setDarkMode: () => null,
};
export const AppContext = React.createContext<AppContext>(defaultContext);