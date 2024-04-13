import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

const navList = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/services",
    text: "Services",
  },
  {
    id: 3,
    path: "/rooms",
    text: "Rooms",
  },
  {
    id: 5,
    path: "/contact",
    text: "Contact",
  },
];

export default function Header() {
  const [navbarCollapse, setNavbarCollapse] = useState(true);

  // Function to toggle navbar collapse
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
  };

  return (
    <>
      <div className="container-fluid bg-dark px-0">
        <div className="row gx-0">
          <div className="col-lg-3 bg-dark d-none d-lg-flex align-items-center">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img src="assets/img/LOGO.jpeg" alt="" className="mr-2 ml-10" style={{ height: "45px", width: "45px" }} />
              <h1 className="m-0 text-primary text-uppercase ml-6">HONEYMOON VILLA</h1>
            </Link>
          </div>

          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
              <Link to="/" className="navbar-brand d-block d-lg-none flex items-center justify-center">
                <div className="flex items-center ml-2">
                  <img src="assets/img/LOGO.jpeg" alt="" className="mr-2 " style={{ height: "45px", width: "45px" }} />
                  <h1 className="m-0 text-primary text-uppercase">HONEYMOON VILLA</h1>
                </div>
              </Link>

              <button
                type="button"
                className="navbar-toggler"
                onClick={toggleNavbarCollapse}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`navbar-collapse justify-content-around ${navbarCollapse ? "collapse" : ""}`}
              >
                <div className="navbar-nav mr-auto py-0 items-center justify-center flex">
                  {navList.map((item) => (
                    <div key={item.id}>
                      <Link to={item.path} className="nav-item nav-link">
                        <div onClick={toggleNavbarCollapse}>{item.text}</div>
                      </Link>
                    </div>
                  ))}
                  <SocialIcons/>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
