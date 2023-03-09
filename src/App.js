import { useStateTheme } from "./store/hooks/useStateContext";

function App() {
  const { theme, setTheme } = useStateTheme();
  // console.log(context);

  const chengeTheme = () => {
    setTheme({
      theme: theme.theme === 'dark' ? 'light' : 'dark'
    })
  }
  return (
    <>
      <button
        className="bg-blue-600 dark:bg-slate-700 text-white rounded-xl shadow-lg px-4 p-2"
        onClick={chengeTheme}>
        {theme.theme}
      </button>
    </>
  );
}

export default App;
