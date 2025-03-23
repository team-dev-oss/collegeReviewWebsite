"use client";
import { createContext, useState, useContext } from "react";

const EmailContext = createContext({
  isEmpty: "",
  setIsEmpty: () => "",
});

export default function EmailFunction({ children }) {
  const [isEmpty, setIsEmpty] = useState("");

  return (
    <EmailContext.Provider value={{ isEmpty, setIsEmpty }}>
      {children}
    </EmailContext.Provider>
  );
}

export const useEmailContext = () => useContext(EmailContext);
