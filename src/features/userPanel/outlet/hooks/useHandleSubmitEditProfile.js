import { useDispatch, useSelector } from "react-redux";
import { ENDPOINTS, createAPIEndpoint } from "../../../../service/api";
import {
  logoutUser,
  updateUser,
} from "../../../../context/features/user/user-slice";
import { useNavigate } from "react-router-dom";

export default function useHandleSubmitEditProfile(
  values,
  setErrors,
  setLoader
) {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("user_id", user.user_id);
    formData.append("user_name", user.user_name);
    formData.append("user_avatar", values.user_avatar);

    createAPIEndpoint(ENDPOINTS.user_edit)
      .post(formData)
      .then((res) => {
        setLoader(false);
        if (validate(res.data)) {
          dispatch(updateUser(res.data.user));
          if (res.data.is_send_active_code) {
            dispatch(logoutUser());
            navigate("/login");
          }
        }
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  const validate = (data) => {
    let temp = {};

    temp.email = data.is_exist_email ? "This Email Currently has Exist !" : "";
    temp.email = data.is_send_active_code
      ? "There was a problem sending the activation email, please try again later"
      : "";
    temp.email = !data.is_success
      ? "There was a problem , please try again later"
      : "";

    setErrors(temp);

    return Object.values(temp).every((x) => x === "");
  };

  return handleSubmit;
}
