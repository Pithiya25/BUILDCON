import React from 'react'

function Servicescard(props) {
  return (
    <div className="container">
      <div className="card-body">
        
            <div className="card-body bg-dark p-4 mt-5 text-white text-center">
            <i className="bi bi-back fs-3"></i>
            <h3> {props.title}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea dicta repudiandae hic est eaque possimus aliquam fuga illum rem, at, quaerat  aliquam? Cum modi quisquam illum perferendis nesciunt? Corrupti, distinctio excepturi?</p>
            <a href="#" className='btn btn-warning'>Read More</a>
            </div>
    
      </div>
    </div>
  )
}

export default Servicescard