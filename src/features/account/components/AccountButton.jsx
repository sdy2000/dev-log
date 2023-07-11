const AccountButton = ({ children, value }) => {
  return (
    <button
      className="bg-accent text-white hover:bg-daccent border-accent px-8 mt-6 text-sm font-semibold md:text-lg md:font-bold hover:-translate-y-2 hover:scale-x-110 rounded-3xl py-2 transition-all duration-300 border-2 flex items-center justify-center gap-4"
      type="submit"
    >
      {children}
      {value}
    </button>
  );
};
export default AccountButton;
