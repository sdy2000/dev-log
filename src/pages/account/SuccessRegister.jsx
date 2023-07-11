import { Link, useLocation } from "react-router-dom";
import { AccountBox, AccountButton } from "../../features/account";

const SuccessRegister = () => {
  const location = useLocation();
  const register = location.state;

  return (
    <AccountBox title={"Success Register"}>
      <div className="flex flex-col px-8">
        <p className="text-xl text-lfp dark:text-dfp font-bold">
          Dear {register.user_name}
        </p>
        <p className="text-lfs dark:text-dfs text-lg font-semibold mb-4 text-start">
          <br />
          We are delighted to inform you that your registration has been
          successfully completed. An activation email has been sent to your
          provided email address{" "}
          <span className="text-accent hover:text-daccent duration-300 cursor-pointer">
            {register.email}
          </span>
          .
          <br />
          <br />
          To activate your account, please follow the instructions provided in
          the email and click on the activation link. This will enable you to
          access all the features and benefits of our website.
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
      <Link to="/">
        <AccountButton value={"Back to Home"} />
      </Link>
    </AccountBox>
  );
};
export default SuccessRegister;
