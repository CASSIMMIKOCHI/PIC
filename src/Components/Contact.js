import React from "react";

export default function Contact(){
    return(
       <div className=" contact-page page" id="contact">
                <h3 className="contact-heading">Not a PIC VIP member and interested to work with us? <br></br>
                <span>Get In touch</span></h3>
                
                 <div className="contact-wrapper">
                        <div className="contact-info">
                        <h2>Contact Info</h2>
                        <div className="contact-details">
                            <p><i className="fas fa-phone-alt"></i><span>+265994004597 / +265883456713</span></p>
                            <p><i className="far fa-envelope"></i><span>cassimmikochi@gmail.com</span></p>
                            <p><i className="fa-solid fa-location-dot"></i><span>Blantyre, Malawi</span></p>
                            
                            <div className="direct-links">
                                <a href="http://facebook.com"><i className="fab fa-facebook"></i></a>
                                <a href="http://wa.me/+2654351384"><i className="fab fa-whatsapp"></i></a>
                                <a href="http://facebook.com/"><i className="fab fa-instagram"></i></a>   
                                            
                            </div>
                        
                        </div> 
                        </div>
                    
                        <div className="form-container">
                            <form action="https://formspree.io/f/xjvlgljk" method="POST" id="my-form"  >
                                <h3 className="heading">Send Message</h3>
                                <div className="form-input">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Full Name"
                                    required autoComplete="off" maxLength="50"></input>
                                </div>

                                <div className="form-input">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="Email Adress" 
                                    required autoComplete="off" maxLength="70"></input>
                                </div>

                                <div className="form-input">
                                    <label htmlFor="email">Subject</label>
                                    <input type="text" id="subject" name="subject" placeholder="Subject" 
                                    autoComplete="off" maxLength="70"></input>
                                </div>

                                <div className="form-input">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                                </div>

                                <input type="submit" value={"submit"}></input>
                            </form>
                        </div>
                </div>
        </div>
    )
}