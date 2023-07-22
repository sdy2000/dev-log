import { useDispatch, useSelector } from "react-redux";
import { ENDPOINTS, createAPIEndpoint } from "../../../../service/api";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../../../context/features/user/user-slice";

export default function useHandleSubmitEditPassword(setErrors, setLoader) {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("user_id", user.user_id);
    formData.append("user_name", user.user_name);
    const pass = Object.fromEntries(formData);

    if (validation(pass)) {
      createAPIEndpoint(ENDPOINTS.user_pass)
        .post(pass)
        .then((res) => {
          setLoader(false);
          if (validation(res.data)) {
            dispatch(logoutUser());
            navigate("/login");
          }
        })
        .catch((err) => {
          setLoader(false);
          console.log(err);
        });
    } else {
      setLoader(false);
    }
  };
  const validation = (data) => {
    let temp = {};

    if (data.is_old_pass_true !== undefined) {
      temp.old_password = !data.is_old_pass_true
        ? "Old Password is incorrect"
        : "";
    }
    temp.new_password =
      data?.new_password?.length < 6
        ? "Your password must have at least 6 characters !"
        : "";
    temp.re_new_password =
      data.new_password !== data?.re_new_password
        ? "The entered RePassword is incorrect !"
        : "";

    setErrors(temp);

    return Object.values(temp).every((x) => x === "");
  };

  return handleSubmit;
}
