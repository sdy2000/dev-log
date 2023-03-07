import { createContext, useEffect, useState } from "react";

const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
        const storedPrefs = window.localStorage.getItem("current-theme");
        if (typeof storedPrefs === "string") {
            return storedPrefs;
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return "light";
        }
    }
    return "light";
}

export const ThemeProvoder = ({ initialTheme, children }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    const checkTheme = (existing) => {
        const root = window.document.documentElement;
        const isDark = existing === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(existing);
    }

    if (theme) {
        checkTheme(theme)
    }

    useEffect(() => {
        checkTheme(theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const ThemeContext = createContext();