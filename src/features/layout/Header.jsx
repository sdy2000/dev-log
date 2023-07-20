import React from "react";
import { IconButton, ThemeButton } from "../../components";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../assets/global.css";
import useScrollDirection from "../../utils/windowEvent/useScrollDirection";
import { topBar } from "./data/header-data";
import useWidthListener from "./hooks/useWidthListener";
import HiddenHeaderBar from "./HiddenHeaderBar";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../context/features/modal/modal-slice";
import { Singout } from "../../pages";
import { BASE_URL } from "../../service/api";

const Header = () => {
  const user = useSelector((store) => store.user);
  const modal = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  const scrollDirection = useScrollDirection();
  useWidthListener();

  return (
    <header
      className={`sticky ${scrollDirection === "down" ? "-top-24" : "top-0"}
         h-14 transition-all duration-500 bg-lbp dark:bg-dbp z-30`}
    >
      <div className="container">
        <nav className="navbar flex justify-between items-start gap-3 p-3 md:pb-1">
          <div className="flex justify-center items-center gap-6">
            <Link
              className="logo text-lfp dark:text-dfp text-xl xl:text-3xl font-black"
              to="/"
            >
              <span className="text-accent">DEV</span>
              Log
            </Link>
            <ul className="desktop-nav  hidden lg:flex justify-center items-center gap-6 ml-12">
              {topBar.map((bar) => (
                <li key={bar.slug}>
                  <Link title={bar.title} to={bar.slug}>
                    {bar.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="btn-group flex items-center gap-3 lg:hidden">
            <ThemeButton />
            <span onClick={() => dispatch(openModal("hidden_header_bar"))}>
              <IconButton value={<BsList />} />
            </span>
          </div>

          <div className="flex-wrapper hidden lg:flex justify-center items-center gap-4">
            <span className="hidden lg:inline-block">
              <ThemeButton />
            </span>

            <ul className="accounting flex justify-start items-center gap-2">
              {user.user_id === 0 ? (
                <>
                  <li>
                    <Link to="/Login">Log in</Link>
                  </li>
                  <li>\</li>
                  <li>
                    <Link to="/Register">Sign up</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/user-panel"
                      className="flex justify-center items-center gap-2"
                    >
                      <img
                        className="rounded-full w-8 h-8 object-cover"
                        src={
                          BASE_URL +
                          "wwwroot/UserAvatar/IconSize/" +
                          user.user_avatar
                        }
                        alt="Profile IMG"
                      />
                      <span>{user.user_name}</span>
                    </Link>
                  </li>
                  <li>\</li>
                  <li>
                    <Link
                      onClick={() =>
                        dispatch(openModal("profile_logout_alert_modal"))
                      }
                    >
                      Sing out
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <HiddenHeaderBar />
          {modal.modalId === "profile_logout_alert_modal" &&
            modal.isOpen === true && <Singout />}
        </nav>
      </div>
    </header>
  );
};

export default Header;
