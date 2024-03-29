import AccountLoader from "./AccountLoader";

const AccountButton = ({ children, value, loader, setLoader }) => {
  return (
    <button
      onClick={() => setLoader(true)}
      className={`bg-accent text-white border-accent px-8 mt-6 text-sm
       font-semibold md:text-lg md:font-bold rounded-3xl py-2 border-2 flex items-center justify-center 
       ${
         loader
           ? "cursor-wait gap-6"
           : "transition-all duration-300 hover:bg-daccent hover:-translate-y-2 hover:scale-x-110 gap-4"
       }`}
      type="submit"
    >
      {children}
      {loader ? <AccountLoader /> : value}
    </button>
  );
};
export default AccountButton;
