import { Outlet } from "react-router-dom";
import { MapBar, UserPanelNavbar } from "../features";

const UserPanelLayout = () => {
  return (
    <div className="container">
      <MapBar />
      <div className="flex flex-col justify-center items-center md:items-start md:grid md:grid-cols-6 gap-5 my-8">
        <UserPanelNavbar />
        <div className="col-span-4 w-full px-3 py-6 md:p-6 md:pb-12 bg-lbp dark:bg-dbp rounded-xl shadow-lg h-fit">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default UserPanelLayout;
