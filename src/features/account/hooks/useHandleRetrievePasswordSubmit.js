import { useNavigate } from "react-router-dom";
import { ENDPOINTS, createAPIEndpoint } from "../../../service/api";

export default function useHandleRetrievePasswordSubmit(
  values,
  active_code,
  setErrors,
  setLoader
) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("active_code", active_code);
    const retrievePass = Object.fromEntries(formData);

    if (validate()) {
      createAPIEndpoint(ENDPOINTS.retrieve_pass)
        .post(retrievePass)
        .then((res) => {
          if (validate(res.data)) {
            setLoader(false);
            navigate("/login/success-retrieve", { state: res.data });
          } else {
            setLoader(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoader(false);
        });
    } else {
      setLoader(false);
    }
  };

  // Retrieve Password Validation
  const validate = (data) => {
    let temp = {};

    // Before Submit form to service
    temp.password =
      values.password.length < 6
        ? "Your password must have at least 6 characters !"
        : "";
    temp.re_password =
      values.password !== values.re_password
        ? "The entered RePassword is incorrect !"
        : "";

    // After Submit form to service
    if (data?.is_success !== undefined) {
      temp.password = !data?.is_exist_user
        ? "This account is not exists !"
        : "";
      if (!temp)
        temp.password = !data?.is_success
          ? "Your Retrieve Password is failed !"
          : "";
    }

    setErrors(temp);

    return Object.values(temp).every((x) => x === "");
  };

  return handleSubmit;
}
