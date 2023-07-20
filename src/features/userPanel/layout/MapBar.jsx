import { Link, useLocation } from "react-router-dom";

const MapBar = () => {
  const location = useLocation();
  const map = location.pathname.replace(new RegExp("/user-panel", "g"), "");

  function getMapBarName(map) {
    switch (map) {
      case "/edit":
        return "Edit Profile";
      case "/edit-pass":
        return "Edit Password";
      default:
        return "";
    }
  }

  return (
    <div className="my-8 text-lfp dark:text-dfp text-lg font-bold flex justify-start items-center gap-4">
      <Link className="hover:text-accent duration-300" to="/user-panel">
        User Panel
      </Link>
      {map && (
        <>
          <span>/</span>

          <Link
            className="hover:text-accent duration-300"
            to={location.pathname}
          >
            {getMapBarName(map)}
          </Link>
        </>
      )}
    </div>
  );
};
export default MapBar;
