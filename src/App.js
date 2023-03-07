import { useContext } from "react";
import { ThemeContext } from "./store/theme/themeContext";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <button
      className="bg-blue-600 dark:bg-slate-700 text-white rounded-xl shadow-lg px-4 p-2"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme}
      </button>
    </>
  );
}

export default App;
