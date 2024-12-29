import { memo, useState } from "react";
import { useAuth } from "../../../AuthContext";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import Logo from "./Icon.svg";
import { ROUTERS } from "utils/router";
import showPass from "./showPass.svg";
import hidePass from "./hidePass.svg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    if (email === "user@example.com" && password === "password123") {
      login(email);
      navigate(ROUTERS.USER.HOME);
    } else {
      alert("Sai mật khẩu hoặc email, hãy thử lại");
    }
  };

  // Lấy dữ liệu từ database thì dùng cái dưới
  /*
  const handleLoginWithDB = async () => {
    try {
      // Gửi yêu cầu đăng nhập đến API backend, truyền email và password
      const response = await fetch('/api/login', {
        method: 'POST', // Phương thức HTTP là POST (gửi dữ liệu)
        headers: {
          'Content-Type': 'application/json', // Định dạng dữ liệu gửi đi là JSON
        },
        body: JSON.stringify({ email, password }), // Dữ liệu gửi đi gồm email và mật khẩu
      });
      
      // Chờ phản hồi từ API và chuyển đổi dữ liệu trả về thành JSON
      const data = await response.json();
      
      // Kiểm tra kết quả từ API (trả về thông tin đăng nhập)
      if (data.success) {
        // Nếu đăng nhập thành công, gọi hàm login và chuyển hướng đến trang Home
        login(email); // Gọi hàm login để lưu trạng thái đăng nhập
        navigate(ROUTERS.USER.HOME); // Chuyển hướng đến trang Home sau khi đăng nhập thành công
      } else {
        // Nếu đăng nhập không thành công, hiển thị thông báo lỗi
        alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      // Nếu có lỗi xảy ra khi gửi yêu cầu (ví dụ: lỗi kết nối), hiển thị thông báo lỗi
      console.error('Error logging in:', error);
      alert("There was an error logging in. Please try again.");
    }
  };
*/

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="Container">
      {/* <div className="CustomSection">
        <h2>Custom Section</h2>
        <p>This is a custom section you can edit later.</p>
      </div> */}

      <div className="Login">
        <div className="TextContainer">
          <h1 className="Heading">Login</h1>
          <p className="Paragraph">
            Welcome back! Please log in to access your account.
          </p>
        </div>

        <div className="Form">
          <div className="InputContainer">
            <div className="InputField">
              <label className="Label">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="EmailInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="InputField">
              <label className="Label">Password</label>
              <div className="PasswordField">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  className="PasswordInput"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="ShowPasswordIcon" onClick={toggleShowPassword}>
                  <img
                    src={showPassword ? hidePass : showPass}
                    alt={showPassword ? "Hide Password" : "Show Password"}
                  />
                </span>
              </div>
              <a href="#" className="ForgotPassword">
                Forgot Password?
              </a>
            </div>

            <div className="CheckboxContainer">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <button className="LoginButton" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(LoginPage);
