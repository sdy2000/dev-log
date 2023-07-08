import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AboutUs,
  ContactUs,
  HomeIndex,
  Login,
  PostDitails,
  Register,
} from "./pages";
import {
  HomeLayout,
  AccountLayout,
  Layout,
  BlogLayout,
  UserPanelLayout,
} from "./layouts";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Authenticate } from "./features";

function App() {
  const { theme } = useSelector((store) => store.theme);

  const checkTheme = (existing) => {
    const root = window.document.documentElement;
    const isDark = existing === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(existing);
  };

  useEffect(() => {
    checkTheme(theme);
  }, [theme]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* Home */}
            <Route element={<HomeLayout />}>
              <Route path="*" element={<HomeIndex />} />
            </Route>
            {/* Blog */}
            <Route element={<BlogLayout />}>
              <Route path="blog/:slug" element={<PostDitails />} />
              <Route path="/blogs" element={<HomeIndex />} />
            </Route>
            {/* Account */}
            <Route element={<AccountLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="Register" element={<Register />} />
            </Route>
            {/* Oder */}
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            {/* User Panel */}
            <Route element={<Authenticate />}>
              <Route path="user-panel" element={<UserPanelLayout />} />
            </Route>
          </Route>
          {/* <Route path="/AdminPanel" element={<AdminLaout />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
