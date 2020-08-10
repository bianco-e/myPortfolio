import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import App from "./App";

const Main = () => {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
};

export default Main;
