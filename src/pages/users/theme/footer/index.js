import { memo, useState } from "react";
import "./style.scss";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Logo from "./Logo.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [HomeMenus, setMenus] = useState([
    {
      name: "Benefits",
      //path: "/benefits",
    },
    {
      name: "Our Services",
      //path: "/services",
    },
    {
      name: "Our Pricing",
      //path: "/pricing",
    },
    {
      name: "News and Blog",
      //path: "/blog",
    },
    {
      name: "Our FAQs",
      //path: "/faqs",
    },
  ]);

  const [AboutMenus, setAboutMenus] = useState([
    {
      name: "Company",
      //path: "/company",
    },
    {
      name: "Achievements",
      //path: "/achievements",
    },
    {
      name: "Our Goals",
      //path: "/goals",
    },
  ]);

  const socialProfiles = [
    {
      name: "Facebook",
      icon: <FaFacebookSquare />,
      url: "https://www.facebook.com",
    },
    {
      name: "Twitter",
      icon: <FaTwitterSquare />,
      url: "https://www.twitter.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com",
    },
  ];

  return (
    <footer>
      <div>
        <div className="footer_bot">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="footer-info">
                  <h1>
                    <img src={Logo} alt="This is a Logo" />
                  </h1>
                  <ul>
                    <li>
                      <IoMail />
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=pathcarrer746@gmail.com"
                        className="mail"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        pathcarrer746@gmail.com
                      </a>
                    </li>
                    <li>
                      <FaPhone />
                      +84 123456789
                    </li>
                    <li>
                      <FaLocationDot /> Da Nang, Viet Nam
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col"></div>
              <div className="col">
                <div className="footer_home">
                  <h1>Home</h1>
                  <ul className="ul-footer-home">
                    {HomeMenus.map((menu, menuKey) => (
                      <li key={menuKey}>
                        <NavLink
                          to={menu.path}
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          {menu.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="footer_about">
                  <h1>About Us</h1>
                  <ul className="ul-footer-about">
                    {AboutMenus.map((menu, menuKey) => (
                      <li key={menuKey}>
                        <NavLink
                          to={menu.path}
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          {menu.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="footer_social">
                  <h1>Social Profiles</h1>
                  <ul className="ul-footer-social">
                    {socialProfiles.map((profile, profileKey) => (
                      <li key={profileKey}>
                        <a href={profile.url}>{profile.icon}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer_copyright">
              <hr className="custom-hr"></hr>
              &copy; 2024 CarrerPath. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
