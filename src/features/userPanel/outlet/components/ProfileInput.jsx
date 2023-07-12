import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const ProfileInput = ({
  children,
  type,
  name,
  id,
  placeholder,
  onChange,
  value,
  isRequired = true,
  errors = "",
  hasIcon = false,
  onInput,
}) => {
  const [isShowPass, setIsShowPass] = useState(false);
  return (
    <div className="flex flex-col justify-start gap-2 max-w-sm w-full">
      <div className="flex justify-start items-center border-2 border-lfs rounded-md bg-lbs dark:bg-dbs hover:border-accent duration-300 shadow-sm hover:shadow-accent overflow-hidden w-full text-lfp dark:text-dfp pr-3">
        <span className="text-dfp text-xl bg-accent px-2 py-[6px]">
          {children}
        </span>
        <input
          className="bg-lbs dark:bg-dbs placeholder:text-lft dark:placeholder:text-dft placeholder:text-sm md:placeholder:text-base text-sm md:text-base text-lfp dark:text-dfp w-full outline-none px-4"
          type={isShowPass ? "text" : type}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required={isRequired}
          onInput={onInput}
        />
        {hasIcon &&
          (!isShowPass ? (
            <BsEye
              onClick={() => {
                setIsShowPass(true);
              }}
              size={32}
            />
          ) : (
            <BsEyeSlash
              onClick={() => {
                setIsShowPass(false);
              }}
              size={32}
            />
          ))}
      </div>
      {errors && <p className="text-red-600">{errors}</p>}
    </div>
  );
};

export default ProfileInput;
