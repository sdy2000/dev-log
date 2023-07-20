import { BsKey } from "react-icons/bs";
import {
  ProfileInput,
  ProfileSubmitButton,
  useHandleSubmitEditPassword,
} from ".";
import { GoKey } from "react-icons/go";
import useForm from "../../../hooks/useForm";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";

const getEditPasswordModel = () => ({
  user_id: 0,
  user_name: "",
  old_password: "",
  new_password: "",
  re_new_password: "",
});

const EditPassword = () => {
  const { values, errors, setErrors, handleInputChange } =
    useForm(getEditPasswordModel);
  const [load, setLoad] = useState(true);

  const handleSubmit = useHandleSubmitEditPassword(setErrors, load, setLoad);

  return (
    <form
      className="flex flex-col justify-start px-3 md:px-6 gap-4 mt-6"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-bold text-accent mb-4">Password Info</h3>
      <ProfileInput
        type="password"
        name="old_password"
        id="old_password"
        placeholder="Enter Old Password ..."
        children={<BsKey />}
        onChange={handleInputChange}
        value={values.old_password}
        errors={errors.old_password}
        hasIcon={true}
      />
      <ProfileInput
        type="password"
        name="new_password"
        id="new_password"
        placeholder="Enter New Password ..."
        children={<GoKey />}
        onChange={handleInputChange}
        value={values.new_password}
        errors={errors.new_password}
        hasIcon={true}
      />
      <ProfileInput
        type="password"
        name="re_new_password"
        id="re_new_password"
        placeholder="Enter RePassword ..."
        children={<GoKey />}
        onChange={handleInputChange}
        value={values.re_new_password}
        errors={errors.re_new_password}
        hasIcon={true}
      />

      <div className="w-fit">
        <ProfileSubmitButton
          value="Edit Password"
          isLoader={load}
          children={<CiEdit />}
        />
      </div>
    </form>
  );
};
export default EditPassword;
