import React from "react";

function NameWithLink({ name, link }) {
  return (
    <React.Fragment>
      <h3 className="mb-25px">{name}</h3>
      <a href={link} className="btn btn-white mb-35px">
        Посмотреть <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </a>
    </React.Fragment>
  );
}

export default NameWithLink;
