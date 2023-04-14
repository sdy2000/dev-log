import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeLayout, Layout } from "./parts";
import { HomeIndex, PostDitails } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<HomeLayout />}>
              <Route path="/" element={<HomeIndex />} />
              <Route path="/:slug" element={<PostDitails />} />
            </Route>
          </Route>
          {/* <Route path="UserPanel" element={<UserLayout />} /> */}
          {/* <Route path="/AdminPanel" element={<AdminLaout />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
