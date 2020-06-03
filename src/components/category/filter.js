import React from "react";

function Filter() {
  return (
    <div class="mobile-filters d-block d-md-none">
      <button class="btn btn-filter-mobile">
        <div class="row align-items-center">
          <div class="col-6">Filtern</div>
          <div class="col-6">
            <i class="fa fa-sliders" aria-hidden="true"></i>
          </div>
        </div>
      </button>
      <div class="filter-carousel owl-carousel">
        <div class="item">
          <a href="#" class="fil-link">
            Kleider
          </a>
        </div>
        <div class="item">
          <a href="#" class="fil-link">
            Kleider
          </a>
        </div>
        <div class="item">
          <a href="#" class="fil-link">
            Kleider
          </a>
        </div>
      </div>
    </div>
  );
}

export default Filter;
