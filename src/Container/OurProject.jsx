import React from "react";
import Projectcard from "../Components/Projectcard";
import img1 from "../project-1-img/project-1.jpg";
import img2 from "../project-1-img/project-2.jpg";
import img3 from "../project-1-img/project-3.jpg";


function OurProject() {
  return (
    <div id="prtfl" className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>Our Projects</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            eaque.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-12 col-12">
          <Projectcard img={img1} />
        </div>
        <div className="col-lg-4 col-md-12 col-12">
          <Projectcard img={img2} />
        </div>
        <div className="col-lg-4 col-md-12 col-12">
          <Projectcard img={img3} />
        </div>
      </div>
    </div>
  );
}

export default OurProject;
