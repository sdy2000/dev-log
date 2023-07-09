import { Outlet } from "react-router-dom";
import { MapBar, UserPanelNavbar } from "../features";

const UserPanelLayout = () => {
  return (
    <div className="container">
      <MapBar />
      <div className="grid grid-cols-6 gap-5 my-8">
        <UserPanelNavbar />
        <div className="col-span-4 w-full py-8 bg-lbp dark:bg-dbp rounded-xl shadow-lg text-white text-4xl font-bold">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default UserPanelLayout;
