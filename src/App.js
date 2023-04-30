import { HashRouter, Route, Routes } from "react-router-dom";
import { AccountLayout, HomeLayout, Layout } from "./parts";
import {
  AboutUs,
  ContactUs,
  HomeIndex,
  Login,
  PostDitails,
  Register,
} from "./pages";

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
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
          {/* <Route path="UserPanel" element={<UserLayout />} /> */}
          {/* <Route path="/AdminPanel" element={<AdminLaout />} /> */}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
