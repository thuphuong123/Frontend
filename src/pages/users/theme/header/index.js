import { memo, useState } from "react";
import "./style.scss";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ROUTERS } from "utils/router";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo.svg";
import { useAuth } from "../../../../AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const [menus] = useState([
    { name: "Home", path: ROUTERS.USER.HOME },
    { name: "Quiz", path: ROUTERS.USER.MBTI },
    { name: "About", path: ROUTERS.USER.ABOUTUS },
    { name: "Pricing", path: ROUTERS.USER.PRICING },
    { name: "Contact", path: ROUTERS.USER.CONTACT },
    { name: "Blog", path: ROUTERS.USER.Blog },
  ]);

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <div className="header_top">
      <div className="container">
        <div className="row-banner">
          <div className="text">Join it now</div>
          <div className="icon">
            <IoIosArrowRoundForward className="arrow-icon" />
          </div>
        </div>
        <div className="row-navbar">
          <div className="col-6 header_top_left">
            <h1 className="logo">
              <img src={Logo} alt="This is a Logo" />
            </h1>

            <nav className="header-menu">
              <ul>
                {menus.map((menu, menuKey) => (
                  <li key={menuKey}>
                    <NavLink
                      to={menu.path}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {menu.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-6 header_top_right">
            {isAuthenticated ? (
              <div className="auth-options">
                <span className="welcome-user" onClick={toggleUserMenu}>
                  Hi, User !!!
                </span>

                <div className={`user-menu ${showUserMenu ? "show" : ""}`}>
                  <Link to={""} className="user-menu-item">
                    Profile
                  </Link>
                  <button onClick={logout} className="logout-btn">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link to={ROUTERS.USER.SIGNUP} className="signup-btn">
                  Sign Up
                </Link>
                <Link to={ROUTERS.USER.LOGIN} className="login-btn">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
