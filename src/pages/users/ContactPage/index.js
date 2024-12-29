import { memo } from "react";
import "./style.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const buttonData = [
  { iconClass: "subtract-icon", text: "support@skillbridge.com" },
  { iconClass: "vector-icon", text: "+91 00000 00000" },
  { iconClass: "subtract-icon-alt", text: "Some Where in the World" },
];

// Data for social icons
const socialIcons = [
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

const ContactPage = () => {
  return (
    <>
      <div className="ContactSection">
        <div className="Form">
          <h2>Contact Us</h2>
          <form>
            <div className="FormElements">
              <div className="FormField">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="FormField">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="FormField">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="FormField">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter message subject"
                  required
                />
              </div>
              <div className="FormField">
                <label htmlFor="message">Message Content</label>
                <textarea
                  id="message"
                  placeholder="Enter your message content"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="buttons-container">
          {buttonData.map((button, index) => (
            <div className="button" key={index}>
              <div className="button-inner">
                <div className="icon">
                  <div className={button.iconClass}></div>
                </div>
              </div>
              <div className="text">{button.text}</div>
            </div>
          ))}
          <div className="social-profiles">
            <div className="social-buttons">
              {socialIcons.map((icon, index) => (
                <a
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                  key={index}
                >
                  <div className="icon">{icon.icon}</div>
                </a>
              ))}
            </div>
            <div className="text">Social Profiles</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ContactPage);
