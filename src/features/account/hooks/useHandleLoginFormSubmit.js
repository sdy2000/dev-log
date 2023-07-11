import { useDispatch } from "react-redux";
import { ENDPOINTS, createAPIEndpoint } from "../../../service/api";
import { loginUser } from "../../../context/features/user/user-slice";
import { useNavigate } from "react-router-dom";

export default function useHandleLoginFormSubmit(values, setErrors) {
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

    if (validate()) {
      createAPIEndpoint(ENDPOINTS.login)
        .post(login)
        .then((res) => {
          console.log(res.data);
          if (validate(res.data)) {
            dispatch(loginUser(res.data));
            navigate("/user-panel");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  // Login Validation
  const validate = (data) => {
    let temp = {};
    temp.email = /\S+@\S+\.\S+/.test(values.email)
      ? ""
      : "Email is not valid !";
    temp.email =
      data?.user_id === 0 ? "Your Email or Password is not valid !" : "";
    setErrors(temp);

    return Object.values(temp).every((x) => x === "");
  };

  return handleSubmit;
}
