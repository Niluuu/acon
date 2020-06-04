import React from "react";
import List from "../components/whyWe/list";
import Vacancy from "../components/whyWe/vacancy";

function WhyWePage() {
  return (
    <section id="content">
      <div class="container">
        <div class="page-title text-center">
          <h1>К чему мы стремимся?</h1>
        </div>
        <div class="row">
          <div class="offset-sm-2 col-sm-8">
            <div class="page-subtitle text-center">
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
