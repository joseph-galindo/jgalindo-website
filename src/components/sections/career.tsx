import React, { useContext, FunctionComponent } from 'react';

import { AppContext } from '../../interfaces/appContext'; 

export const CareerSection: FunctionComponent = () => {
  const context = useContext(AppContext);
  const {darkMode} = context;

  return (
    <section>
      <h1>Career section!</h1>
      <p>Dark mode is: {darkMode ? 'on' : 'off'}</p>
    </section>
  );
};