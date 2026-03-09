import React, { createContext, useState, ReactNode } from "react";

interface AppContextType {
  soundEnabled: boolean;
  setSoundEnabled: (value: boolean) => void;
}

export const AppContext = createContext<AppContextType>({
  soundEnabled: true,
  setSoundEnabled: () => { },
});

interface Props {
  children: ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  return (
    <AppContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </AppContext.Provider>
  );
};