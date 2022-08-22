import React from "react";
import Servicescard from "../Components/Servicescard";



function Services() {
  return (
    <div id="srs" className="container ">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            eaque.
          </p>
        </div>
      </div>
      <div className="row mt-2 mb-5">
        <div className="col-lg-4 col-md-12 col-12">
          <Servicescard title="Best Qaulity" />
        </div>
        <div className="col-lg-4 col-md-12 col-12">
          <Servicescard title="Integrity" />
        </div>
        <div className="col-lg-4 col-md-12 col-12">
          <Servicescard title="Sustainability" />
        </div>
      </div>
    </div>
  );
}

export default Services;
