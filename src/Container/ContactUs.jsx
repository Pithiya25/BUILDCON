import React from "react";

function ContactUs() {
  return (
    <div className="conainer text-center vhm" id="cntct">
      <div className="row">
        <div className="col-md-12">
          <h2>Contact Us</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 col-md-8 m-auto">
          <div className="mb-3">
           
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Your Full Name"
            />
            <input
              type="email"
              className="form-control mt-2"
              id="exampleFormControlInput1"
              placeholder="Enter Your Mail"
            />
          </div>
          <div className="mb-3">
            
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <a href="#" className="btn btn-warning">Send Now</a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
