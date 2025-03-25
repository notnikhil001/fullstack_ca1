import React from 'react'

const Testimonials = (props) => {
  return (
    <div>

      <h1>Testimonials:</h1>

      <div style={{border:"solid 3px white",borderRadius:"15px"}}>
        <h4>Name : {props.name}</h4>
        <p>Review : {props.text}</p>
      </div>
      
    </div>
  )
}

export default Testimonials
