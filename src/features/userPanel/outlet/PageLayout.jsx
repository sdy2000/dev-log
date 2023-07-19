const PageLayout = ({ title, children }) => {
  return (
    <>
      <h2 className="text-lg text-lfp dark:text-dfp font-bold border-b dark:border-lfp pb-2 px-2 md:px-4">
        {title}
      </h2>
      {children}
    </>
  );
};
export default PageLayout;
