import { useState } from "react";
import { ROUTERS } from "./utils/router";
import HomePage from "./pages/users/HomePage";
import ProfilePage from "./pages/users/ProfilePage";
import LoginPage from "./pages/users/LoginPage";
import SignUpPage from "./pages/users/SignUpPage";
import AboutUsPage from "./pages/users/AboutUsPage";
import ContactPage from "./pages/users/ContactPage";
import BlogPage from "pages/users/BlogPage/BlogPage";
import MBTIPage from "./pages/users/MBTIPage";
import MBTIQuestions from "./pages/users/MBTIQuestions";
import { Route, Routes, Navigate } from "react-router-dom";
import MasterLayout from "./pages/users/theme/masterLayout";

const RounterCustom = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const userRoutes = [
    { path: ROUTERS.USER.HOME, component: <HomePage /> },
    {
      path: ROUTERS.USER.PROFILE,
      component: isAuthenticated ? (
        <ProfilePage />
      ) : (
        <Navigate to={ROUTERS.USER.LOGIN} />
      ),
    },
    {
      path: ROUTERS.USER.LOGIN,
      component: <LoginPage onLogin={handleLogin} />,
    },
    { path: ROUTERS.USER.SIGNUP, component: <SignUpPage /> },
    { path: ROUTERS.USER.CONTACT, component: <ContactPage /> },
    { path: ROUTERS.USER.ABOUTUS, component: <AboutUsPage /> },
    { path: ROUTERS.USER.MBTI, component: <MBTIPage /> },
    { path: ROUTERS.USER.MBTIQuestions, component: <MBTIQuestions /> },
    { path: ROUTERS.USER.BLOG, component: <BlogPage /> },
  ];

  return (
    <MasterLayout isAuthenticated={isAuthenticated}>
      <Routes>
        {userRoutes.map(({ path, component }, index) => (
          <Route key={index} path={path} element={component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

export default RounterCustom;
