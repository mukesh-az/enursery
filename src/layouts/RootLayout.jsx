import { Link, Routes, Route, Outlet, NavLink } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="homeBG rootBG">
        <Outlet />
    </div>
  );
};

export default RootLayout;
