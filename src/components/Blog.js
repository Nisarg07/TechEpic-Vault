import React from "react";
import PropTypes from "prop-types";

function Blog(props) {
  return (
    <div className="blog-content my-3 mx-3" style={{ color: "white" }}>
      <h1>{props.blogTitle}</h1>
      <h5>
        <p>
          React is a declarative, efficient, and flexible JavaScript library for
          building user interfaces. It lets you compose complex UIs from small
          and isolated pieces of code called "components." These components can
          be reused throughout your application, making your code more modular
          and maintainable.
        </p>
      </h5>
    </div>
  );
}

export default Blog;

Blog.defaultProps = { blogTitle: "Heading for the Blog" };
Blog.propTTypes = { blogTitle: PropTypes.string.isRequired };
