import React from "react";


function Teamcard(props) {
  return (
    <div className="con">
      <div className="card-team justify-content-center">
        <div className="card-img w-50 mx-auto">
          <img src={props.img} alt="" className="w-100 h-100  rounded-circle" />
        </div>
        <div className="text text-dark text-center">
          <h2>{props.name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus perspiciatis corporis ea omnis illum suscipit saepe est
            harum voluptates deserunt aut magnam exercitationem mollitia ipsam
            voluptate veniam!
          </p>

          <div className="socials m-3 ">
            <i role="button" className="bi bi-twitter p-2"></i>
            <i role="button" className="bi bi-facebook"></i>
            <i role="button" className="bi bi-linkedin p-2"></i>
            <i role="button" className="bi bi-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teamcard;
