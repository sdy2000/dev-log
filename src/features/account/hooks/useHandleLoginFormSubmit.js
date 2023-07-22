import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../../context/features/user/getUser";
import { useEffect } from "react";

export default function useHandleLoginFormSubmit(values, setErrors, setLoader) {
  const user = useSelector((store) => store.user);
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
      dispatch(getUser(login)).then((res) => {
        setLoader(false);
        validate(res.payload);
      });
    }
  };

  useEffect(() => {
    if (validate(user)) {
      navigate("/user-panel");
    }
  }, [user, navigate]);

  // Login Validation
  const validate = (data) => {
    let temp = {};
    temp.email = /\S+@\S+\.\S+/.test(values?.email)
      ? ""
      : "Email is not valid !";
    temp.email =
      data?.user_id === 0 ? "Your Email or Password is not valid !" : "";
    setErrors(temp);

    return Object.values(temp).every((x) => x === "");
  };

  return handleSubmit;
}
