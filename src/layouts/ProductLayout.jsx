import { Link, Routes, Route, Outlet, NavLink } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import '../../ProductList.css'; // Ensure styles are applied

const ProductLayout = () => {
  return (
    <div className="homeBG productBG">
      <NavMenu />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; Paradise Nursery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductLayout;
