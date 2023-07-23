import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AboutUs,
  ActiveAccount,
  ContactUs,
  EditPasswordPage,
  EditProfilePage,
  ForgotPassword,
  HomeIndex,
  Login,
  PostDitails,
  Profile,
  Register,
  RetrievePassword,
  SuccessForgotPassword,
  SuccessRegister,
  SuccessRetievePassword,
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
// import { Authenticate } from "./features";

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
            {/* //! Home */}
            <Route element={<HomeLayout />}>
              <Route path="*" element={<HomeIndex />} />
            </Route>

            {/* //! Blog */}
            <Route element={<BlogLayout />}>
              <Route path="blog/:slug" element={<PostDitails />} />
              <Route path="/blogs" element={<HomeIndex />} />
            </Route>

            {/* //! Account */}
            <Route element={<AccountLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="login/forgot-pass" element={<ForgotPassword />} />
              <Route
                path="login/forgot-pass/success"
                element={<SuccessForgotPassword />}
              />
              <Route
                path="login/retrieve-pass/:active_code"
                element={<RetrievePassword />}
              />
              <Route
                path="login/success-retrieve"
                element={<SuccessRetievePassword />}
              />
              <Route path="register" element={<Register />} />
              <Route path="register/:active_code" element={<ActiveAccount />} />
              <Route
                path="register/success-register"
                element={<SuccessRegister />}
              />
            </Route>

            {/* //! Oder */}
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            {/* //! User Panel */}
            <Route element={<Authenticate />}>
              <Route element={<UserPanelLayout />}>
                <Route path="user-panel/" element={<Profile />} />
                <Route path="user-panel/edit" element={<EditProfilePage />} />
                <Route
                  path="user-panel/edit-pass"
                  element={<EditPasswordPage />}
                />
              </Route>
            </Route>
          </Route>
          {/* <Route path="/AdminPanel" element={<AdminLaout />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
