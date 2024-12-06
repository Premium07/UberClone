/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState("");
  const [loading, setLoading] = useState(true);

  const value = {
    captain,
    setCaptain,
    loading,
    setLoading,
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
