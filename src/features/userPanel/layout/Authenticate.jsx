import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Authenticate = () => {
  const { user_id } = useSelector((store) => store.user);

  return user_id === 0 ? <Navigate to="/login" /> : <Outlet />;
};
export default Authenticate;
