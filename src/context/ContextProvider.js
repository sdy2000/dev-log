import { createContext, useEffect, useState } from "react";
import { getInitialTheme } from "../utils/theme/getInitailTheme";

export const stateContext = createContext();

export const getFreshContext = () => {
  if (localStorage.getItem("context") === null) {
    localStorage.setItem(
      "context",
      JSON.stringify({
        userId: 0,
        userName: "",
      })
    );
  }

  return JSON.parse(localStorage.getItem("context"));
};

export const getFreshTheme = () => {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem(
      "theme",
      JSON.stringify({
        theme: getInitialTheme(),
      })
    );
  }

  return JSON.parse(localStorage.getItem("theme"));
};

const ContextProvider = ({ children }) => {
  const [context, setContext] = useState(getFreshContext());
  const [theme, setTheme] = useState(getFreshTheme());

  const checkTheme = (existing) => {
    const root = window.document.documentElement;
    const isDark = existing === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(existing);
  };

  useEffect(() => {
    checkTheme(theme.theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("context", JSON.stringify(context));
  }, [context]);

  return (
    <stateContext.Provider value={{ context, setContext, theme, setTheme }}>
      {children}
    </stateContext.Provider>
  );
};

export default ContextProvider;
