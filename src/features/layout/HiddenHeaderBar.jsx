import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IconButton, SocialBox } from "../../components";
import { IoMdClose } from "react-icons/io";
import { categories, topBar } from "./data/header-data";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../context/features/modal/modal-slice";

const HiddenHeaderBar = () => {
  const [clickStates, setClickStates] = useState({});
  const { isOpen, modalId } = useSelector((store) => store.modal);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleOnClick = (id) => {
    if (clickStates[id] === true) {
      setClickStates({
        [id]: false,
      });
    } else {
      setClickStates({
        [id]: !false,
      });
    }
  };

  return (
    <div
      className={`mobile-nav fixed inset-0 bg-lbp dark:bg-dbp py-16 px-5 overflow-auto
                     overscroll-contain z-10 border-l-2 border-l-las dark:border-l-lft lg:hidden
                     ${
                       !isOpen && modalId !== "hidden_header_bar"
                         ? "translate-x-[100%] invisible"
                         : "translate-x-[20%] visible"
                     }`}
    >
      <span
        onClick={() => dispatch(closeModal(""))}
        className="nav-close-btn absolute top-5 right-[25%]"
      >
        <IconButton value={<IoMdClose />} />
      </span>
      <div className="mobile-nav-wrapper">
        <div className="flex flex-col gap-5 ml-[20%]">
          <img
            className="rounded-full border-2 border-lfp dark:border-lft"
            src="./assets/img/sdy2000.jpg"
            alt="User Avatar"
            width="120"
            height="120"
          />
          <ul className="flex justify-start items-center gap-2">
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
                  <Link to="/user-panel">{user.user_name}</Link>
                </li>
                <li>\</li>
                <li>
                  <Link to="/sing-out">Sing out</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      <div className="mobile-nav-wrapper">
        <h3 className="title">Main Menu</h3>
        <ul>
          {topBar.map((bar) => (
            <li key={bar.slug}>
              <Link
                title={bar.title}
                to={bar.slug}
                onClick={() => dispatch(closeModal(""))}
              >
                {bar.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mobile-nav-wrapper">
        <h3 className="title">Topics</h3>
        <ul className="header-bar flex flex-col justify-center items-start gap-2 text-lfp dark:text-dfp">
          {categories.map((cat) => (
            <li onClick={() => handleOnClick(cat.id)} key={cat.id} id={cat.id}>
              <Link to="#">
                {cat.category} {cat.subCategores && <BsChevronDown />}
              </Link>
              {cat.subCategores && (
                <ul
                  className={`${
                    !clickStates[cat.id] && "hidden"
                  } header-sub-bar`}
                >
                  {cat.subCategores.map((subCat, idx) => (
                    <li key={idx}>
                      <Link to="/#">{subCat}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="ml-[10%] md:mr-[50%]">
        <SocialBox
          styles={"socail-icons flex items-center justify-center gap-3"}
        />
      </div>
    </div>
  );
};
export default HiddenHeaderBar;
