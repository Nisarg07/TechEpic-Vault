import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark my-1">
      <img
        className="mx-3"
        src="../vault-solid.svg"
        alt="Vault Logo"
        // style={{ height: "50px", width: "50px" }}
      />
      <a className="navbar-brand" href="/">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline ml-auto">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
            style={{ fontSize: "25px", borderRadius: "20px" }}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

Navbar.defaultProps = { title: "Set your title here" };
Navbar.propsTypes = {
  title: PropTypes.string.isRequired,
};
