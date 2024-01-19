import React from "react";
import BlogCards from "./BlogCards";
// import PropTypes from "prop-types";

export default function BlogList(props) {
  return (
    <div className="card-list">
      {props.data.map((item, index) => (
        <BlogCards key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}
