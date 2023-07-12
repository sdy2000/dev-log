import { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiUser, BiUserCircle } from "react-icons/bi";
import { BsCalendar2Date, BsGenderAmbiguous } from "react-icons/bs";
import { ENDPOINTS, createAPIEndpoint } from "../../service/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.user_info)
      .post(user)
      .then((res) => {
        if (res.data) {
          setUserInfo(res.data);
        } else {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      setUserInfo({});
    };
  }, [navigate, user]);

  return (
    <div>
      <h2 className="text-lg text-lfp dark:text-dfp font-bold border-b dark:border-lfp pb-2 px-2 md:px-4">
        Dashboard
      </h2>
      <div className="flex flex-col justify-start px-3 md:px-6 gap-2 md:gap-4 mt-6">
        <h3 className="text-lg font-bold text-accent mb-4">User Info</h3>
        {userInfo.first_name && userInfo.last_name && (
          <UserInfo
            title="Full Name"
            value={userInfo.first_name + " " + userInfo.last_name}
            children={<BiUserCircle />}
          />
        )}

        <UserInfo
          title="User Name"
          value={`@${userInfo.user_name}`}
          children={<BiUser />}
        />
        <UserInfo
          title="Email"
          value={userInfo.email}
          children={<AiOutlineMail />}
        />
        {userInfo.phone && (
          <UserInfo
            title="Phone Number"
            value={userInfo.phone}
            children={<AiOutlinePhone />}
          />
        )}
        <UserInfo
          title="Register Date"
          value={userInfo.register_date}
          children={<BsCalendar2Date />}
        />
        {userInfo.gender && (
          <UserInfo
            title={userInfo.gender}
            value="Man"
            children={<BsGenderAmbiguous />}
          />
        )}
      </div>
    </div>
  );
};

const UserInfo = ({ title, value, children }) => {
  return (
    <div className="flex justify-start items-center gap-2">
      <span className="md:text-xl text-lfp dark:text-dfp">{children}</span>
      <b className="text-lfp dark:text-dfp">{title} : </b>
      <i className="text-lfs dark:text-dfs">{value}</i>
    </div>
  );
};
export default Profile;
