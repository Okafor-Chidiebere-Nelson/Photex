import React from 'react'
// import orangeGirl from "../images/orangeGirl.jpg"
import "./Contact.css"

function Contact({img, name, number, email}) {
    console.log({img, name,number,email})

  return (
    <div className="main-container">

<div className="contact-card">
    <div className="contact-card-container">
        <div className="contact-image-container">
            <img src={img} alt="" className="contact-image" />
        </div>
      </div>

      <div className="contact-description-container">
        <span className="contact-name">{name}</span>
        <span className="contact-number"> {number} </span>
        <span className="contact-email"> {email} </span>
      </div>
</div>

      
    </div>
  )
}

export default Contact


