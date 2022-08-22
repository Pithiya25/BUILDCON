import React from "react";
import img from "../project-1-img/about.jpg";

function Aboutus() {
  return (
    <div id="abt" className="container m-5 p-2">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, ipsum!</p>
        </div>
      </div>
      <div className="row mt-5 abt">
        <div className="col-lg-4 col-md-12 col-12">
            <div className="img"> 
          <img src={img} alt="" className="container" />
            </div>
        </div>
        <div className="col-lg-8 col-md-12 col-12">
            <div className="text ">

          <h2 className="text-capitalize">
            We provide best quality
            <br />
            service ever
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium, rerum minima, cupiditate tempore deserunt atque, cum
            harum ipsum quae dolorem eaque at nihil officiis? Aut dolore ea
            ipsa. Voluptatem nulla quam non rerum laboriosam aut, fuga qui,
            adipisci ab perferendis beatae itaque soluta. Ipsa voluptatum
            laboriosam maxime provident cumque rem!
          </p>
          <a href="#"className="btn btn-warning">Learn More</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
 

