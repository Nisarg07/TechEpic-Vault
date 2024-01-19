import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function BlogCards(props) {
  return (
    <center className="my-5 mx-5">
      <div
        className="card text-center text-white bg-dark"
        style={{ width: "50rem", overflow: "visible" }}
      >
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
          <Link to="/Blog" className="btn btn-primary">
            Click to Reaad!
          </Link>
        </div>
      </div>
    </center>
  );
}

BlogCards.defaultProps = {
  title: "Your blog title",
  content: "Content of the log",
};
BlogCards.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
