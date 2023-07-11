const AccountBox = ({ children, title }) => {
  return (
    <div className="mx-auto my-56 md:my-80 px-4 w-full max-w-lg">
      <div className="bg-lbp dark:bg-dbp w-full py-10 rounded-2xl shadow-lg flex flex-col justify-center items-center gap-8">
        <h1 className="text-lfp dark:text-dfp text-2xl font-bold">{title}</h1>
        {children}
      </div>
    </div>
  );
};
export default AccountBox;
