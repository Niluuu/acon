import React from "react";

function Filter() {
  return (
    <div className="mobile-filters d-block d-md-none">
      <span className="btn btn-filter-mobile">
        <div className="row align-items-center">
          <div className="col-6">Filtern</div>
          <div className="col-6">
            <i className="fa fa-sliders" aria-hidden="true"></i>
          </div>
        </div>
      </span>
    </div>
  );
}

export default Filter;
