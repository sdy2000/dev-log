import { BsKey } from "react-icons/bs";
import { GoKey } from "react-icons/go";
import useForm from "../../hooks/useForm";
import {
  ProfileInput,
  ProfileSubmitButton,
} from "../../features/userPanel/outlet";
import { CiEdit } from "react-icons/ci";

const getEditPasswordModel = () => ({
  user_id: 0,
  user_name: "",
  email: "",
  old_password: "",
  new_password: "",
  re_new_password: "",
});

const EditPassword = () => {
  const { values, errors, handleInputChange } = useForm(getEditPasswordModel);

  return (
    <div>
      <h2 className="text-lg text-lfp dark:text-dfp font-bold border-b dark:border-lfp pb-2 px-2 md:px-4">
        Edit Password
      </h2>
      <form className="flex flex-col justify-start px-3 md:px-6 gap-4 mt-6">
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
          <ProfileSubmitButton value="Edit Password" children={<CiEdit />} />
        </div>
      </form>
    </div>
  );
};
export default EditPassword;
