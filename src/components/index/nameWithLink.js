import React from "react";
import { Link } from "react-router-dom";

function NameWithLink({ name, link }) {
  return (
    <React.Fragment>
      <h3 className="mb-25px">{name}</h3>
      <Link to="/category" className="btn btn-white mb-35px">
        Посмотреть <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </Link>
    </React.Fragment>
  );
}

export default NameWithLink;
