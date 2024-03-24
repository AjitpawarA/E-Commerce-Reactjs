import React, { useContext } from "react";
import "./css/navbar.css";
import amazon from "./a.png";
import { Link } from "react-router-dom";
import { Context } from "./Context/ContextStore";

function Navbar() {
  const selectcat = useContext(Context);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                <a className="nav-link active" aria-current="page" href="#" style={{
                    border: "1px solid black",
                    width: "100px",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    borderRadius: "15px",
                    backgroundColor: "rgb(11, 0, 168)",
                    color: "white",
                    marginLeft:"10px",
                    marginRight:"10px"
                  }}>
                  <Link
                    to={"/"}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </a>
              </li>
              
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => {
                    selectcat.setSelectedCategory(4);
                  }}
                  style={{
                    border: "1px solid black",
                    width: "100px",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    borderRadius: "15px",
                    backgroundColor: "rgb(11, 0, 168)",
                    color: "white",
                    marginLeft:"10px",
                    marginRight:"10px"
                  }}
                >
                  Shooes
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => {
                    selectcat.setSelectedCategory(1);
                  }}

                  style={{
                    border: "1px solid black",
                    width: "100px",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    borderRadius: "15px",
                    backgroundColor: "rgb(11, 0, 168)",
                    color: "white",
                    marginLeft:"10px",
                    marginRight:"10px"
                  }}
                >
                  Cloths
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => {
                    selectcat.setSelectedCategory(2);
                  }}

                  style={{
                    border: "1px solid black",
                    width: "100px",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    borderRadius: "15px",
                    backgroundColor: "rgb(11, 0, 168)",
                    color: "white",
                    marginLeft:"10px",
                    marginRight:"10px"
                  }}
                >
                  Electronics
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    border: "1px solid black",
                    width: "100px",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    borderRadius: "15px",
                    backgroundColor: "rgb(107, 5, 250)",
                    color: "white",
                    marginLeft:"10px",
                    marginRight:"10px"
                  }}
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
                  <i classname="fa-solid fa-shoe-prints" />

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
                  <i className="fa-solid fa-laptop-medical" />
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
                    ><i className="fa-solid fa-shirt"/>
                      Cloths
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{
                    border: "1px solid black",
                    width: "100px",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    borderRadius: "15px",
                    backgroundColor: "rgb(250, 107, 5)",
                    color: "white",
                    marginLeft:"10px",
                    marginRight:"10px"
                  }}>
                    <i className="fa-solid fa-cart-shopping" style={{marginRight:"10px"}} />

                  <Link
                    to={"/cart"}
                    style={{ color: "black", textDecoration: "none" }}
                    
                  >
                    Cart
                  </Link>
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
