import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ENDPOINTS, createAPIEndpoint } from "../../../service/api";
import { loginUser } from "../../../context/features/user/user-slice";

export default function useHandleLoginFormSubmit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const login = Object.fromEntries(formData);
    if (login.remember_me === undefined) {
      login.remember_me = false;
    } else {
      login.remember_me = true;
    }

    createAPIEndpoint(ENDPOINTS.login)
      .post(login)
      .then((res) => {
        dispatch(loginUser(res.data));
        navigate("/user-panel");
      })
      .catch((err) => console.log(err));
  };

  return handleSubmit;
}
