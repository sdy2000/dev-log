import { Link, useLocation } from "react-router-dom";
import { AccountBox, AccountButton } from "../../features/account";

const SuccessRetievePassword = () => {
  const location = useLocation();
  const register = location.state;

  return (
    <AccountBox title={"Success Register"}>
      <div className="flex flex-col px-8">
        <p className="text-xl text-lfp dark:text-dfp font-bold">
          Dear {register?.user_name}
        </p>
        <p className="text-lfs dark:text-dfs text-lg font-semibold mb-4 text-start">
          <br />
          Your password has been successfully changed
          <br />
          <br />
          Your Email :
          <span className="text-accent hover:text-daccent duration-300 cursor-pointer">
            {register?.email}
          </span>
          .
          <br />
          <br />
          Thank you for choosing our platform. If you have any questions or need
          assistance, please don't hesitate to contact our support team.
          <br />
          <br />
          <br />
          Best regards,
        </p>
      </div>
      <Link to="/login">
        <AccountButton value={"Log In"} />
      </Link>
    </AccountBox>
  );
};
export default SuccessRetievePassword;
