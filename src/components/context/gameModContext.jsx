import React, { createContext, useState } from "react";

export const ModContext = createContext(null);

export const ModProvider = ({ children }) => {
  const [isEasyMod, setIsEasyMod] = useState(false);

  const chooseEasyMod = () => {
    setIsEasyMod(isEasyMod => !isEasyMod);
  };

  return <ModContext.Provider value={{ isEasyMod, chooseEasyMod }}>{children}</ModContext.Provider>;
};
