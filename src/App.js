import { HashRouter, Route, Routes } from "react-router-dom";
import {
  AboutUs,
  ContactUs,
  HomeIndex,
  Login,
  PostDitails,
  Register,
} from "./pages";
import { HomeLayout, AccountLayout, Layout, BlogLayout } from "./layouts";

function App() {
  return (
    <>
      <HashRouter>
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
          </Route>
          {/* <Route path="UserPanel" element={<UserLayout />} /> */}
          {/* <Route path="/AdminPanel" element={<AdminLaout />} /> */}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
