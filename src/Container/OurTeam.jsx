import React from "react";
import Teamcard from "../Components/Teamcard";
import img1 from "../project-1-img/team-1.jpg";
import img2 from "../project-1-img/team-2.jpg";
import img3 from "../project-1-img/team-3.jpg";
import img4 from "../project-1-img/team-4.jpg";

function OurTeam() {
  return (
    <div className="container" id="team">
      <div className="row m-5">
        <div className="col-md-12 text-center text-dark ">
          <h2>Our Team</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, at.
          </p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-3 col-md-6 col-12">
            <Teamcard img={img1} name="Jack Dohrey" />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <Teamcard img={img2} name="Jack Dohrey" />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <Teamcard img={img3} name="Mily Gobeh" />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <Teamcard img={img4} name="Anna Andrew" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
