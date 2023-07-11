import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const AccountingInput = ({
  type,
  name,
  id,
  placeholder,
  onChange,
  value,
  isRequired = true,
  hasIcon = false,
  errors = "",
}) => {
  const [isShowPass, setIsShowPass] = useState(false);
  return (
    <div className="flex flex-col justify-start gap-2 w-full">
      <div className="accounting-input-div">
        <input
          type={isShowPass ? "text" : type}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required={isRequired}
        />
        {hasIcon &&
          (!isShowPass ? (
            <BsEye
              onClick={() => {
                setIsShowPass(true);
              }}
              size={40}
            />
          ) : (
            <BsEyeSlash
              onClick={() => {
                setIsShowPass(false);
              }}
              size={40}
            />
          ))}
      </div>
      {errors && <p className="text-red-600">{errors}</p>}
    </div>
  );
};
export default AccountingInput;
