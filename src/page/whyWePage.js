import React from "react";
import List from "../components/whyWe/list";
import Vacancy from "../components/whyWe/vacancy";

function WhyWePage() {
  return (
    <section id="content">
      <div className="container">
        <div className="page-title text-center">
          <h1>К чему мы стремимся?</h1>
        </div>
        <div className="row">
          <div className="offset-sm-2 col-sm-8">
            <div className="page-subtitle text-center">
              Ориентиры, которые помогают нам принимать верные решения в любых
              ситуациях:
            </div>
          </div>
        </div>
        <List />
        <Vacancy />
      </div>
    </section>
  );
}

export default WhyWePage;
