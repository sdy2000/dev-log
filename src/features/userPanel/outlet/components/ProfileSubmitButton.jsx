import AccountLoader from "./ProfileLoader";

const ProfileSubmitButton = ({ children, value, loader, setLoader }) => {
  return (
    <button
      onClick={() => setLoader(true)}
      className={`bg-accent text-white border-accent px-8 mt-6 text-sm
       font-semibold md:text-lg md:font-bold rounded-lg shadow-lg py-2 flex items-center justify-center 
       ${
         loader
           ? "cursor-wait gap-6"
           : "duration-300 hover:bg-blue-500 hover:scale-105 gap-4"
       }`}
      type="submit"
    >
      {children}
      {loader ? <AccountLoader /> : value}
    </button>
  );
};
export default ProfileSubmitButton;
