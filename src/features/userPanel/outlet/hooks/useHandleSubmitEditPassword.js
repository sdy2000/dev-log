import { useDispatch, useSelector } from "react-redux";
import { ENDPOINTS, createAPIEndpoint } from "../../../../service/api";

export default function useHandleSubmitEditPassword() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("user_id", user.user_id);
    formData.append("user_name", user.user_name);
    const pass = Object.fromEntries(formData);

    if (!validation(pass)) {
      createAPIEndpoint(ENDPOINTS.user_pass)
        .post(pass)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const validation = (data) => {
    let temp = {};

    temp.old_password = "";
    temp.new_password =
      data.new_password.length < 6
        ? "Your password must have at least 6 characters !"
        : "";
    temp.re_new_password =
      data.new_password !== data.re_new_password
        ? "The entered RePassword is incorrect !"
        : "";
  };

  return handleSubmit;
}
