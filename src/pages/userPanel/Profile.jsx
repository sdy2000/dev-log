import { useEffect } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiUser, BiUserCircle } from "react-icons/bi";
import { BsCalendar2Date, BsGenderAmbiguous } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.user_id === 0) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>
      <h2 className="text-lg text-lfp dark:text-dfp font-bold border-b dark:border-lfp pb-2 px-2 md:px-4">
        Dashboard
      </h2>
      <div className="flex flex-col justify-start px-3 md:px-6 gap-2 md:gap-4 mt-6">
        <h3 className="text-lg font-bold text-accent mb-4">User Info</h3>
        {user.first_name && user.last_name && (
          <UserInfo
            title="Full Name"
            value={user.first_name + " " + user.last_name}
            children={<BiUserCircle />}
          />
        )}

        <UserInfo
          title="User Name"
          value={`@${user.user_name}`}
          children={<BiUser />}
        />
        <UserInfo
          title="Email"
          value={user.email}
          children={<AiOutlineMail />}
        />
        {user.phone && (
          <UserInfo
            title="Phone Number"
            value={user.phone}
            children={<AiOutlinePhone />}
          />
        )}
        <UserInfo
          title="Register Date"
          value={user.register_date}
          children={<BsCalendar2Date />}
        />
        {user.gender && (
          <UserInfo
            title={user.gender}
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
