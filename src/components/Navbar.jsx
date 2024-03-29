import React, { useContext } from "react";
import "./css/navbar.css"; // Importing the custom CSS file
import amazon from "./a.png";
import { Link } from "react-router-dom";
import { Context } from "./Context/ContextStore";

function Navbar() {
  const selectcat = useContext(Context);
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={amazon} alt="" style={{ width: "90px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <Link to={"/"} style={{textDecoration:"none", color:"white"}}>Home</Link>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => {
                    selectcat.setSelectedCategory(4);
                  }}
                >
                  <Link to={"/"} style={{textDecoration:"none", color:"white"}}>
                    Shooes
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => {
                    selectcat.setSelectedCategory(1);
                  }}
                >
                  <Link to={"/"} style={{textDecoration:"none", color:"white"}}>
                    Cloths
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => {
                    selectcat.setSelectedCategory(2);
                  }}
                >
                  <Link to={"/"} style={{textDecoration:"none", color:"white"}}>
                    Electronics
                  </Link>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        selectcat.setSelectedCategory();
                      }}
                    >
                      All
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        selectcat.setSelectedCategory(4);
                      }}
                    >
                      Shooes
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        selectcat.setSelectedCategory(2);
                      }}
                    >
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        selectcat.setSelectedCategory(1);
                      }}
                    >
                      Cloths
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to={"/cart"} style={{textDecoration:"none", color:"white",display:"flex", gap:"5px", alignItems:"center", justifyContent:"center",
                textAlign:"center", marginLeft:"20px"}}>
                    <i className="fa-solid fa-cart-shopping" />
                    Cart
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
