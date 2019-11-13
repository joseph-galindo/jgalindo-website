import React, { useState, FunctionComponent } from 'react';

import { AppContext } from '../interfaces/appContext';
import { AppProps } from '../interfaces/appProps';
import { BioSection } from './sections/bio';
import { CareerSection } from './sections/career';
import { ContactSection } from './sections/contact';

export const AppComponent: FunctionComponent<AppProps> = (props): JSX.Element => {
  const [darkMode, setDarkMode] = useState(!!props.darkMode);
  const contextValue: AppContext = {
    darkMode,
    setDarkMode,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <BioSection />
      <CareerSection />
      <ContactSection />
    </AppContext.Provider>
  );
}