import React from "react";
import Zoom from "../components/single/zoom";
import Description from "../components/single/description";
import TabsRow from "../components/single/tabs";
import Cart from "../components/single/cart";

function SinglePage() {
  return (
    <section id="content">
      <div className="container">
        <div className="top-single-container mb-45px">
          <div className="row">
            <Zoom />
            <Description />
            <TabsRow />
          </div>
        </div>
      </div>
      <Cart />
    </section>
  );
}

export default SinglePage;
