import { useNavigate } from "react-router-dom";
import { ENDPOINTS, createAPIEndpoint } from "../../../service/api";

export default function useHandleRetrievePasswordSubmit(
  values,
  setErrors,
  setLoader
) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const retrievePass = Object.fromEntries(formData);

    if (validate()) {
      createAPIEndpoint(ENDPOINTS.retrieve_pass)
        .post(retrievePass)
        .then((res) => {
          if (validate(res.data)) {
            setLoader(false);
            // navigate("/login/forgot-pass/success", { state: retrievePass });
          }
        })
        .catch((err) => {
          console.log(err);
          setLoader(false);
        });
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
    temp.password = !data?.is_success
      ? "Your Retrieve Password is failed !"
      : "";
    temp.password = data?.is_exist_user ? "This account is not exists !" : "";
    setErrors(temp);

    return Object.values(temp).every((x) => x === "");
  };

  return handleSubmit;
}
