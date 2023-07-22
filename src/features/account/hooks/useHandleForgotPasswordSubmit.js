import { useNavigate } from "react-router-dom";
import { ENDPOINTS, createAPIEndpoint } from "../../../service/api";

export default function useHandleForgotPasswordSubmit(
  values,
  setErrors,
  setLoader
) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const forgotPass = Object.fromEntries(formData);

    if (validate()) {
      createAPIEndpoint(ENDPOINTS.forgot_pass)
        .post(forgotPass)
        .then((res) => {
          if (validate(res.data)) {
            setLoader(false);
            navigate("/login/forgot-pass/success", { state: forgotPass });
          }
        })
        .catch((err) => {
          console.log(err);
          setLoader(false);
        });
    }
  };

  // Login Validation
  const validate = (data) => {
    let temp = {};

    // Before Submit form to service
    temp.email = /\S+@\S+\.\S+/.test(values.email)
      ? ""
      : "Email is not valid !";

    // After Submit form to service
    temp.user_name = !data?.is_success
      ? "Something is wrong, please try again later !"
      : "";
    temp.email = data?.is_exist_email ? "This Email not exist !" : "";
    temp.user_name = data?.is_send_edit_pass
      ? "Something is wrong, please try again later !"
      : "";
    setErrors(temp);

    return Object.values(temp).every((x) => x === "");
  };

  return handleSubmit;
}
