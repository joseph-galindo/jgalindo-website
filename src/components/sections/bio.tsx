import React, { useContext, FunctionComponent } from 'react';

import { AppContext } from '../../interfaces/appContext'; 

export const BioSection: FunctionComponent = () => {
  const context = useContext(AppContext);
  const {darkMode, setDarkMode} = context;

  return (
    <section onClick={() => setDarkMode(!darkMode)}>
      <h1>Bio section!</h1>
      <p>Dark mode is: {darkMode ? 'on' : 'off'}</p>
    </section>
  );
};