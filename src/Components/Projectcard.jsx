import React from "react";


function Projectcard(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="card">
        
            <img src={props.img} alt="." className="pt-2" />
          
          <div className="text pb-2 text-dark text-center">
            <h2>Bulding Make</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis tempora vero eaque, eius quibusdam inventore sunt
              consequatur assumenda mollitia ea?
            </p>
            <a href="#" className="btn btn-warning">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectcard;
