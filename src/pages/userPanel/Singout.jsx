import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../context/features/user/user-slice";
import { ProfileAlertModal } from "../../features/userPanel/outlet";
import { closeModal } from "../../context/features/modal/modal-slice";

const Singout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <ProfileAlertModal>
      <aside className="flex flex-col gap-6">
        <h4 className="text-lg font-bold font-mono text-lfp dark:text-dfp">
          Are you want sign out as your account ?
        </h4>
        <div className="flex justify-end items-center gap-4 md:gap-8">
          <button
            className="md:text-xl font-bold font-mono rounded-lg shadow-lg px-6 md:px-12 py-1 md:py-2 text-dfp bg-amber-600"
            onClick={() => {
              dispatch(logoutUser());
              dispatch(closeModal(""));
              navigate("/login");
            }}
          >
            confirm
          </button>
          <button
            className="md:text-xl font-bold font-mono rounded-lg shadow-lg px-6 md:px-12 py-1 md:py-2 text-dfp bg-red-700"
            onClick={() => dispatch(closeModal(""))}
          >
            cancel
          </button>
        </div>
      </aside>
    </ProfileAlertModal>
  );
};
export default Singout;
