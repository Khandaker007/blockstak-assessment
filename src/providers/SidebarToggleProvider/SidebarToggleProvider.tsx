'use client';

import React, { createContext, useState } from 'react';

import { ISidebarToggle } from './SidebarToggleProvider.types';

export const SidebarToggleContext = createContext<ISidebarToggle>({} as ISidebarToggle);

export const SidebarToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <SidebarToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </SidebarToggleContext.Provider>
  );
};
