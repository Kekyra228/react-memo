import React, { createContext, useState } from "react";

export const ModContext = createContext(null);

export const ModProvider = ({ children }) => {
  const [isEasyMod, setIsEasyMod] = useState(false);

  const chooseEasyMod = () => {
    setIsEasyMod(isEasyMod => !isEasyMod);
  };

  const [alahomoraMod, setAlahomoraMod] = useState(false);

  return (
    <ModContext.Provider value={{ isEasyMod, chooseEasyMod, alahomoraMod, setAlahomoraMod }}>
      {children}
    </ModContext.Provider>
  );
};
