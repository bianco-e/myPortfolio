import React, { useState } from "react";

const Context = React.createContext({});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  return (
    <Context.Provider value={{ language, setLanguage }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
