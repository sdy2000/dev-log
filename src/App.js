import { HashRouter, Route, Routes } from "react-router-dom";
import { AccountLayout, HomeLayout, Layout } from "./parts";
import { HomeIndex, Login, PostDitails, Register } from "./pages";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<HomeLayout />}>
              <Route path="/" element={<HomeIndex />} />
              <Route path="/blog/:slug" element={<PostDitails />} />
            </Route>
            <Route element={<AccountLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
            </Route>
          </Route>
          {/* <Route path="UserPanel" element={<UserLayout />} /> */}
          {/* <Route path="/AdminPanel" element={<AdminLaout />} /> */}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
