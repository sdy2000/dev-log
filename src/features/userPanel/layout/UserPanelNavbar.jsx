import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const panelBar = [
  { title: "Profile", slug: "user-panel" },
  { title: "Edit Profile", slug: "user-panel/edit" },
  { title: "Edit Password", slug: "user-panel/edit-pass" },
  { title: "Sing Out", slug: "sing-out" },
];

const UserPanelNavbar = () => {
  return (
    <div className="col-span-2 relative w-full py-8 bg-lbp dark:bg-dbp rounded-xl shadow-lg overflow-hidden h-fit">
      <img
        className="absolute top-0 left-0 w-full h-36 object-cover"
        src="./assets/img/blog-7.png"
        alt="Profile background IMG"
      />
      <div className="relative flex flex-col justify-start gap-3 mt-36 px-6">
        <Link to={"user-panel/edit"} className="relative w-full">
          <img
            className="absolute left-[30%] -top-24 rounded-full w-28 h-28 object-cover"
            src="./assets/img/sdy2000.jpg"
            alt="Profile IMG"
          />
          <BiEdit className="absolute left-[32%] -top-[5.5rem] text-opacity-0 rounded-full text-white hover:bg-white hover:text-opacity-80 hover:bg-opacity-50 text-8xl duration-300" />
        </Link>
        <ul className="text-lfp dark:text-dfp font-semibold text-lg w-full">
          {panelBar.map((bar) => (
            <li
              key={bar.slug}
              className="border-b-2 dark:border-lfs pb-1 mt-5 hover:text-accent duration-300"
            >
              <Link className="block" to={bar.slug} title={bar.title}>
                {bar.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default UserPanelNavbar;
