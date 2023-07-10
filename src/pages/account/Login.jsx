import React from "react";
import { AccountingInput } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { ENDPOINTS, createAPIEndpoint } from "../../service/api";
import { useDispatch } from "react-redux";
import { loginUser } from "../../context/features/user/user-slice";

const getLoginModel = () => ({
  email: "",
  password: "",
  remember_me: true,
});
const Login = () => {
  const { values, handleInputChange } = useForm(getLoginModel);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
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
  return (
    <div className="mx-auto my-56 md:my-80 px-4 w-full max-w-lg">
      <div className="bg-lbp dark:bg-dbp w-full py-10 rounded-2xl shadow-lg flex flex-col justify-center items-center gap-8">
        <h1 className="text-lfp dark:text-dfp text-2xl font-bold">Login</h1>
        <form
          className="flex flex-col items-center gap-8 w-full px-12"
          onSubmit={handleFormSubmit}
        >
          <AccountingInput
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"Enter your email address..."}
            onChange={handleInputChange}
            value={values.email}
          />

          <AccountingInput
            type={"password"}
            name={"password"}
            id={"password"}
            placeholder={"Enter your password..."}
            onChange={handleInputChange}
            value={values.password}
            hasIcon={true}
          />
          <div className="flex justify-start items-center gap-2 w-full">
            <input
              name="remember_me"
              onChange={handleInputChange}
              value={values.remember_me}
              type="checkbox"
              className="w-4 h-4"
              id="rules"
            />
            <label
              className="text-lfp dark:text-dfp text-sm font-semibold"
              htmlFor="rules"
            >
              I agree to{" "}
              <Link
                to="#"
                className="text-accent hover:text-daccent duration-300 mx-1 font-bold text-lg"
              >
                rules
              </Link>{" "}
              from ECrypto
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-start items-center">
              <p className="text-lfs dark:text-dfs text-sm font-semibold">
                If forgot your password click here
              </p>
              <b className="text-accent hover:underline ml-2">
                <Link to="#">Forgot Password</Link>
              </b>
            </div>
            <div className="flex justify-start items-center">
              <p className="text-lfs dark:text-dfs text-sm font-semibold">
                If you do not have an account,
              </p>
              <b className="text-accent hover:underline ml-2">
                <Link to="/register">Create One Here</Link>
              </b>
            </div>
          </div>

          <input
            className="bg-accent text-white hover:bg-daccent border-accent px-8 mt-6 text-sm font-semibold md:text-lg md:font-bold hover:-translate-y-2 hover:scale-x-110 rounded-3xl py-2 transition-all duration-300 border-2 flex items-center justify-center"
            type="submit"
            value="Log In"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
