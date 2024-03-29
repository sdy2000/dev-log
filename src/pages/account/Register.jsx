import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import {
  AccountBox,
  AccountButton,
  AccountingInput,
  useHandleRegisterFormSubmit,
} from "../../features/account";
import { FiUserPlus } from "react-icons/fi";
import { useState } from "react";

const getRegisterModel = () => ({
  user_name: "",
  email: "",
  password: "",
  rules: "",
});

const Register = () => {
  const [loader, setLoader] = useState(false);
  const { values, errors, setErrors, handleInputChange } =
    useForm(getRegisterModel);
  const handleSubmit = useHandleRegisterFormSubmit(
    values,
    setErrors,
    setLoader
  );

  return (
    <AccountBox title={"Sign Up"}>
      <form
        className="flex flex-col items-center gap-6 w-full px-8"
        onSubmit={handleSubmit}
      >
        <AccountingInput
          type={"text"}
          name={"user_name"}
          id={"user_name"}
          placeholder={"Enter User Name..."}
          onChange={handleInputChange}
          value={values.user_name}
          errors={errors.user_name}
        />

        <AccountingInput
          type={"email"}
          name={"email"}
          id={"email"}
          placeholder={"Enter your Email..."}
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
          errors={errors.password}
          hasIcon={true}
        />
        <AccountingInput
          type={"password"}
          name={"re_password"}
          id={"re_password"}
          placeholder={"Enter your RePassword..."}
          onChange={handleInputChange}
          value={values.re_password}
          errors={errors.re_password}
          hasIcon={true}
        />

        <div className="flex justify-center items-center">
          <p className="text-lfs dark:text-dfs text-sm font-semibold">
            If you have an account,
          </p>
          <b className="text-accent hover:underline ml-2">
            <Link to="/login">Log in</Link>
          </b>
        </div>

        <AccountButton
          value={"Sing Up"}
          loader={loader}
          setLoader={setLoader}
          children={<FiUserPlus />}
        />
      </form>
    </AccountBox>
  );
};

export default Register;
