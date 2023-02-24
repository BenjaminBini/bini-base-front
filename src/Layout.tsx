import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>Layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
