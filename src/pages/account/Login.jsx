import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import {
  AccountBox,
  AccountButton,
  AccountingInput,
  useHandleLoginFormSubmit,
} from "../../features/account";
import { FiLogIn } from "react-icons/fi";

const getLoginModel = () => ({
  email: "",
  password: "",
  remember_me: true,
});
const Login = () => {
  const { values, errors, setErrors, handleInputChange } =
    useForm(getLoginModel);
  const handleSubmit = useHandleLoginFormSubmit(values, setErrors);

  return (
    <AccountBox title={"Log In"}>
      <form
        className="flex flex-col items-center gap-4 w-full px-12"
        onSubmit={handleSubmit}
      >
        <AccountingInput
          type={"email"}
          name={"email"}
          id={"email"}
          placeholder={"Enter your email address..."}
          onChange={handleInputChange}
          value={values.email}
          errors={errors.email}
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
            from DevLog
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

        <AccountButton value={"Log In"} children={<FiLogIn />} />
      </form>
    </AccountBox>
  );
};

export default Login;
