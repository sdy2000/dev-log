import { useState } from "react";
import {
  AccountBox,
  AccountButton,
  AccountingInput,
  useHandleForgotPasswordSubmit,
} from "../../features/account";
import useForm from "../../hooks/useForm";
import { FiLogIn } from "react-icons/fi";

const getForgotPasswordModel = () => ({
  email: "",
});

const ForgotPassword = () => {
  const [loader, setLoader] = useState(false);
  const { values, errors, setErrors, handleInputChange } = useForm(
    getForgotPasswordModel
  );
  const handleSubmit = useHandleForgotPasswordSubmit(
    values,
    setErrors,
    setLoader
  );

  return (
    <AccountBox title={"Forgot Password"}>
      <form
        className="flex flex-col items-center gap-4 w-full px-12"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 w-full">
          <AccountingInput
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"Enter your email address..."}
            onChange={handleInputChange}
            value={values.email}
            errors={errors.email}
          />
          <p className="text-sm text-lft dark:text-dfs">
            * Password recovery email was sent to your email!
          </p>
        </div>

        <AccountButton
          value={"Accept and send "}
          loader={loader}
          setLoader={setLoader}
          children={<FiLogIn />}
        />
      </form>
    </AccountBox>
  );
};
export default ForgotPassword;
