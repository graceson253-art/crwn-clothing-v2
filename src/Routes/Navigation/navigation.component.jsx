import { React, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crownlogo } from "../../assets/crown.svg";
import "./navigation.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to={"/"}>
          <div className="logo-container">
            <Crownlogo />
          </div>
        </Link>

        <div className="nav-links-container">
          <div className="nav-link">
            <Link to={"/shop"}>Shop</Link>
          </div>
          <div className="nav-link">
            <Link to={"/sign-in"}>SIGN IN</Link>
          </div>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
