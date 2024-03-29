import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiEditAlt, BiUserCircle } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";
import { BsGenderAmbiguous } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  ProfileInput,
  ProfileSubmitButton,
  useHandleSubmitEditProfile,
} from ".";
import useForm from "../../../hooks/useForm";
import { BASE_URL } from "../../../service/api";

const getEditProfileModel = () => ({
  user_id: 0,
  user_name: "",
  email: "",
  user_avatar: null,
  first_name: "",
  last_name: "",
  phone: "",
  gender: "",
});

const EditProfile = () => {
  const user = useSelector((store) => store.user);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loader, setLoader] = useState(false);
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(getEditProfileModel);

  const handleSubmit = useHandleSubmitEditProfile(values, setErrors, setLoader);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let imageFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          ...values,
          imageFile,
        });
      };
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImage(imageUrl);
      reader.readAsDataURL(imageFile);
    } else {
      setValues({
        ...values,
        imageFile: null,
      });
    }
  };

  useEffect(() => {
    setValues({
      ...values,
      user_id: user.user_id,
      user_name: user.user_name,
      email: user.email,
      first_name: user.first_name || "",
      last_name: user.last_name || "",
      phone: user.phone || 0,
      gender: user.gender || "DF",
    });

    return () => {
      setValues({});
    };
  }, []);

  return (
    <form
      className="flex flex-col justify-start px-3 md:px-6 gap-4 mt-6"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-bold text-accent mb-4">User Info</h3>

      <div className="flex flex-col md:flex-row-reverse justify-start md:justify-between items-end gap-6 mb-4">
        <img
          className="rounded-lg self-center md:self-end w-32 h-32 object-cover"
          src={
            selectedImage
              ? selectedImage
              : BASE_URL + "wwwroot/UserAvatar/ThumbSize/" + user.user_avatar
          }
          alt="Profile IMG"
        />

        <ProfileInput
          type="file"
          name="user_avatar"
          id="user_avatar"
          placeholder="Set Your Avatar ..."
          isRequired={false}
          children={<CiImageOn />}
          onChange={handleImageChange}
          errors={errors.user_avatar}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
        <ProfileInput
          type="text"
          name="first_name"
          id="first_name"
          placeholder="First Name ..."
          isRequired={false}
          children={<BiUserCircle />}
          onChange={handleInputChange}
          value={values.first_name}
          errors={errors.first_name}
        />
        <ProfileInput
          type="text"
          name="last_name"
          id="last_name"
          placeholder="last Name ..."
          isRequired={false}
          children={<BiUserCircle />}
          onChange={handleInputChange}
          value={values.last_name}
          errors={errors.last_name}
        />
      </div>

      <ProfileInput
        type="number"
        name="phone"
        id="phone"
        placeholder="Phone Number ..."
        isRequired={false}
        children={<AiOutlinePhone />}
        onChange={handleInputChange}
        value={values.phone}
        errors={errors.phone}
      />

      <div className="flex flex-col gap-2">
        <ProfileInput
          type="email"
          name="email"
          id="email"
          placeholder="Email ..."
          isRequired={false}
          children={<AiOutlineMail />}
          onChange={handleInputChange}
          value={values.email}
          errors={errors.email}
        />
        <i className="text-lft dark:text-dft text-sm">
          * If them mail is changed, the activation email will be send to new
          email !
        </i>
      </div>

      <div className="flex flex-col justify-start gap-2 w-60">
        <div className="flex justify-start items-center border-2 border-lfs rounded-md bg-lbs dark:bg-dbs hover:border-accent duration-300 shadow-sm hover:shadow-accent overflow-hidden w-full">
          <span className="text-dfp text-xl bg-accent px-2 py-[6px]">
            <BsGenderAmbiguous />
          </span>
          <select
            name="gender"
            id="gender"
            className="bg-lbs dark:bg-dbs placeholder:text-lft dark:placeholder:text-dft text-lfp dark:text-dfp w-full outline-none px-4"
            onChange={handleInputChange}
            value={values.gender}
          >
            <option value="DF">Choose a Gender</option>
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
            <option value="prefer">Prefer not say</option>
          </select>
        </div>

        {errors.gender && <p className="text-red-600">{errors.gender}</p>}
      </div>

      <div className="w-fit">
        <ProfileSubmitButton
          value="Edit Profile"
          loader={loader}
          setLoader={setLoader}
          children={<BiEditAlt />}
        />
      </div>
    </form>
  );
};
export default EditProfile;
