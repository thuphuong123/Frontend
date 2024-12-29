import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTERS } from "utils/router";
import "./style.scss";
import Logo from "./Icon.svg";
import showPass from "./showPass.svg";
import hidePass from "./hidePass.svg";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); // Toggle the password visibility state
  };

  return (
    <div className="container-signup">
      {/* Custom section on the left */}
      {/* <div className="custom-section-signup">
        <h2>Custom Section</h2>
        <p>This is a custom section you can edit later.</p>
      </div> */}

      {/* Sign Up section on the right */}
      <div className="SignUp">
        <div className="TextContainer-signup">
          <h1 className="heading-signup">Sign Up</h1>
          <p className="Paragraph">Please enter your registration details.</p>
        </div>

        <div className="FormContainer-signup">
          <div className="formContainer">
            {/* Input for Full Name */}
            <div className="inputField">
              <label htmlFor="full-name">Full Name:</label>
              <div className="NameField">
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="NameInput"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            {/* Input for Email */}
            <div className="inputField">
              <label htmlFor="email" className="label">
                Email:
              </label>
              <div className="EmailField">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="EmailInput"
                  required
                />
              </div>
            </div>

            {/* Input for Password */}
            <div className="inputField">
              <label htmlFor="password" className="label">
                Password:
              </label>
              <div className="passwordField">
                <input
                  type={showPassword ? "text" : "password"} // Change type based on state
                  id="password"
                  name="password"
                  placeholder="Enter your Password"
                  className="PasswordInput"
                  required
                />
                <span className="showPasswordIcon" onClick={toggleShowPassword}>
                  <img
                    src={showPassword ? hidePass : showPass}
                    alt={showPassword ? "Hide Password" : "Show Password"}
                  />
                </span>
              </div>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="checkboxContainer">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">
                I agree to the{" "}
                <a
                  href="/terms-of-use"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Use
                </a>{" "}
                and{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Sign Up Button */}
            <button className="SignUp-Button">Sign Up</button>
          </div>

          {/* Divider for alternative sign-up */}
          <div className="Divider">
            <hr className="Line" />
            <span className="OrText">OR</span>
            <hr className="Line" />
          </div>

          {/* Sign Up with Google Button */}
          <button className="GoogleSignUpButton">
            <img src={Logo} alt="Google Logo" />
            <span className="GoogleSignUpText">Sign Up with Google</span>
          </button>

          {/* Login Prompt */}
          <div className="LoginPrompt">
            <span>Already have an account? </span>
            <NavLink to="/login" className="LoginLink">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SignUpPage);
