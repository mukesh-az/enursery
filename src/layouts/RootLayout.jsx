import { Link, Routes, Route, Outlet, NavLink } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="homeBG">
        <Outlet />
    </div>
  );
};

export default RootLayout;
