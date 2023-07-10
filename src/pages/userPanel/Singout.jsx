import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logoutUser } from "../../context/features/user/user-slice";

const Singout = () => {
  const dispatch = useDispatch();
  dispatch(logoutUser());

  return <Navigate to={"/login"} />;
};
export default Singout;
