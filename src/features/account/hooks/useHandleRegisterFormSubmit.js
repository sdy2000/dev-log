import { useNavigate } from "react-router-dom";
import { ENDPOINTS, createAPIEndpoint } from "../../../service/api";

export default function useHandleRegisterFormSubmit(
  values,
  setErrors,
  setLoader
) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const register = Object.fromEntries(formData);

    if (validate()) {
      createAPIEndpoint(ENDPOINTS.register)
        .post(register)
        .then((res) => {
          if (validate(res.data)) {
            setLoader(false);
            navigate("/register/success-register", { state: register });
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
    temp.password =
      values.password.length < 6
        ? "Your password must have at least 6 characters !"
        : "";
    temp.re_password =
      values.password !== values.re_password
        ? "The entered RePassword is incorrect !"
        : "";

    // After Submit form to service
    temp.user_name = !data?.is_success ? "Your Register id failed !" : "";
    temp.email = data?.is_exist_email ? "This Email already exists !" : "";
    temp.user_name = data?.is_exist_user_name
      ? "This UserName already exists !"
      : "";
    setErrors(temp);

    return Object.values(temp).every((x) => x === "");
  };

  return handleSubmit;
}
