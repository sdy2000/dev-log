import { FiUserPlus } from "react-icons/fi";
import {
  AccountBox,
  AccountButton,
  AccountingInput,
  useHandleRetrievePasswordSubmit,
} from "../../features/account";
import useForm from "../../hooks/useForm";
import { useState } from "react";
import { useParams } from "react-router-dom";

const getRetrieveModel = () => ({
  active_code: "",
  password: "",
  re_password: "",
});

const RetrievePassword = () => {
  const { active_code } = useParams();
  const [loader, setLoader] = useState(false);
  const { values, errors, setErrors, handleInputChange } =
    useForm(getRetrieveModel);
  const handleSubmit = useHandleRetrievePasswordSubmit(
    values,
    active_code,
    setErrors,
    setLoader
  );

  return (
    <AccountBox title={"Retrieve Password"}>
      <form
        className="flex flex-col items-center gap-6 w-full px-8"
        onSubmit={handleSubmit}
      >
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
export default RetrievePassword;
