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
  onInput,
}) => {
  return (
    <div className="flex flex-col justify-start gap-2 max-w-sm w-full">
      <div className="flex justify-start items-center border-2 border-lfs rounded-md bg-lbs dark:bg-dbs hover:border-accent duration-300 shadow-sm hover:shadow-accent overflow-hidden w-full">
        <span className="text-dfp text-xl bg-accent px-2 py-[6px]">
          {children}
        </span>
        <input
          className="bg-lbs dark:bg-dbs placeholder:text-lft dark:placeholder:text-dft text-lfp dark:text-dfp w-full outline-none px-4"
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required={isRequired}
          onInput={onInput}
        />
      </div>
      {errors && <p className="text-red-600">{errors}</p>}
    </div>
  );
};

export default ProfileInput;
