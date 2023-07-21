import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AccountBox } from "../../features/account";
import { ENDPOINTS, createAPIEndpoint } from "../../service/api";

const ActiveAccount = () => {
  const [activeAccountRes, setActiveAccountRes] = useState({});
  const { active_code } = useParams();

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.active_account)
      .fetchById(active_code)
      .then((res) => {
        setActiveAccountRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      setActiveAccountRes({});
    };
  }, [active_code]);

  return (
    <AccountBox title={"Activation Account"}>
      {!activeAccountRes ? (
        <div className="py-8 text-2xl font-bold text-accent">
          In Processing ...
        </div>
      ) : activeAccountRes.is_exits_user && activeAccountRes.is_active ? (
        <div className=" px-16 flex flex-col gap-4 my-8">
          <h2 className="font-bold text-2xl text-accent">
            {activeAccountRes.user_name} dear
          </h2>
          <p className="text-lg text-lfs dark:text-dfs flex-nowrap">
            Your account by email {activeAccountRes.email} was successfully
            activated. You can now Log In you account!
          </p>
          <Link
            to="/login"
            className="bg-accent text-white border-accent px-8 mt-6 text-sm font-semibold md:text-lg md:font-bold rounded-3xl py-2 border-2 flex items-center justify-center "
          >
            Log In
          </Link>
        </div>
      ) : (
        <div className="text-red-600 text-lg">
          <p className="text-xl font-bold">Bad Request / Not found user</p>
        </div>
      )}
    </AccountBox>
  );
};
export default ActiveAccount;
