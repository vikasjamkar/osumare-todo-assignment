import React from "react";
import logo from "../../assets/images/todo-logo.png";

const Navbar = () => {
  return (
    <header className="py-md-1 py-0">
      <div className="container">
        <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="javascript:void(0)">
            <img src={logo} alt="logo" className="w-75 h-75" loading="lazy" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <i className="ri-menu-3-line"></i>{" "}
          </button>
          <div className="d-none d-lg-flex justify-content-between align-items-center gap-4">
            <ul className="navbar-nav d-flex flex-row gap-4 mb-0">
              {
                ["About Us", "Features", "More Option", "Contact"].map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link" href="javascript:void(0)">
                      {item}
                    </a>
                  </li>
                ))
              }
            </ul>
            <div className="d-flex gap-4">
              <button className="custom-outline-btn">Login</button>
              <button className="custom-btn">Sign Up</button>
            </div>
          </div>
          <div
            className="offcanvas offcanvas-end d-lg-none d-block"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {
                ["About Us", "Features", "More Option", "Contact"].map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link" href="javascript:void(0)">
                      {item}
                    </a>
                  </li>
                ))
              }
              </ul>
              <div className="mt-3 d-flex gap-2">
                <button className="custom-outline-btn w-100">Login</button>
                <button className="custom-btn w-100">Sign Up</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
