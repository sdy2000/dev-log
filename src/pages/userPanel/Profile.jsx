import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiUser, BiUserCircle } from "react-icons/bi";
import { BsCalendar2Date, BsGenderAmbiguous } from "react-icons/bs";

const Profile = () => {
  return (
    <div>
      <h2 className="text-lg text-lfp dark:text-dfp font-bold border-b dark:border-lfp pb-2 px-4">
        Dashboard
      </h2>
      <div className="flex flex-col justify-start px-6 gap-4 mt-6">
        <h3 className="text-lg font-bold text-accent mb-4">User Info</h3>
        <UserInfo
          title="Full Name"
          value="Sajad Darvish"
          children={<BiUserCircle />}
        />
        <UserInfo title="User Name" value="@sdy2000" children={<BiUser />} />
        <UserInfo
          title="Email"
          value="sajad@gamil.com"
          children={<AiOutlineMail />}
        />
        <UserInfo
          title="Phone Number"
          value="+98 9370776595"
          children={<AiOutlinePhone />}
        />
        <UserInfo
          title="Register Date"
          value="7/11/2023"
          children={<BsCalendar2Date />}
        />
        <UserInfo title="Gender" value="Man" children={<BsGenderAmbiguous />} />
      </div>
    </div>
  );
};

const UserInfo = ({ title, value, children }) => {
  return (
    <div className="flex justify-start items-center gap-2">
      <span className="text-xl text-lfp dark:text-dfp">{children}</span>
      <b className="text-lfp dark:text-dfp">{title} : </b>
      <i className="text-lfs dark:text-dfs">{value}</i>
    </div>
  );
};
export default Profile;
