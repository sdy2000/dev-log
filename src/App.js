import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeLayout } from "./parts";
import { HomeIndex } from "./pages";

function App() {
  // const { theme, setTheme } = useStateTheme();
  // // console.log(context);

  // const chengeTheme = () => {
  //   setTheme({
  //     theme: theme.theme === 'dark' ? 'light' : 'dark'
  //   })
  // }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<HomeIndex />} />
          </Route>
          {/* <Route path="UserPanel" element={<UserLayout />} /> */}
          {/* <Route path="/AdminPanel" element={<AdminLaout />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
