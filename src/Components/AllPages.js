import Logo from './LOGO.png';
import React, {useRef}from "react";
import Stake from './pexels-cottonbro-4065864.jpg'

export default function Home(){
    // for showing the navoigation menu
    const navMenu = useRef(null);
        const signIn = useRef(null);
        const showMenu = (TSE) => {
            navMenu.current.classList.toggle('active');
        }
        // for directing to the sign in page 
        const showForm = (TSE) => {
        console.log("hey");
        }
    return(
       <div>

           {/* navigation header */}
            <header>
                <div className="logo">
                    <img src={Logo}  alt="Our Logo"/>
                </div>
                <li className="create-account"><a to='form' className="sign-link">sign in</a></li>
                <nav className="navigation-wrapper">
                    <ul className="navigation-menu" ref={navMenu}>
                        <li><a href="#updates" className="link">updates</a></li>
                        {/* <li><a href="#apply" class="link">apply</a></li> */}
                        <li><a href="#about" className="link">about us</a></li>
                        <li><a href="#contact" className="link">contact</a></li>
                    </ul>

                    <div className="mobile-menu" id="menu-btn" onClick={showMenu}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                    </div>
                </nav>
            </header>

            {/* home section with updates */}
            <section className="home-section page" id="updates">
                <p>
                    "People who get up on this world are the ones who get up and look for 
                    circumstances they want, if they cant find them, they make them". _George Bernard_.
                    This is what we do at Project Innovation Centre Malawi. As entrepreneurs, we are 
                    always creating new useful ideas that solves problems and challenges people face every day.  
                </p> 

                {/* <div className="stake-holders">
                    <figure>
                        <img src={Stake}  alt="logo" ></img>
                        <img src={Stake}  alt="logo" ></img>
                    </figure>
                </div>  */}
            </section>

            {/* running businesses */}
            <section className="services-wrapper page" id="updates">
            <h2 className="section-heading">Bussiness available for partnership</h2>
            <div className="services">

                <div className="service" onClick={showForm}>
                    <i className="fa-solid fa-tractor change"></i>
                    <h4 className="service-heading">Revolutionary Farming.</h4>
                    <p>
                        20 people who are interested and willing to contributed MK 200000.00 and start a joint business 
                        of farming atleast 25 heacters . Live stock farming as well as crops..
                    </p>
                </div>

                <div className="service" onClick={showForm}>
                    <i className="fa-solid fa-sun"></i>
                    <h4 className="service-heading">Cooking oil production .</h4>
                    <p> 
                        100 people needed to Contribution MK 250000.00 . Take down 500 thousand hectors and 
                        grow sunflower for cooking oil.
                        Understand that the more we come together the less the amount to contribute for one business. .
                    </p>
                </div>

                <div className="service" onClick={showForm}>
                    <i className="fa-solid fa-gas-pump"></i>
                    <h4 className="service-heading">Filling station</h4>
                    <p>    
                       20 people needed to Contribute MK 250000.00 and partner in filling statiion establishment.
                        Malawians who are willing to come togther and contribute the little they have from there salaries and other 
                        inccome generating activities and plant their own filling stationery.
                    </p>
                </div>

                <div className="service" onClick={showForm}>
                    <i className="fa-solid fa-industry change"></i>
                    <h4 className="service-heading">Fertilixer manufacturing.</h4>
                    <p>
                      300 people needed to Contribute MK300000.00 each other  and partner  in fertilizer manufacturing
                       Understand that the more we come together the less the amount to contribute for one business..
                    </p>
                </div>

                <div className="service" onClick={showForm}>
                    <i className="fa-solid fa-solar-panel change"></i>
                    <h4 className="service-heading">solar assembling</h4>
                    <p>  
                    50 people needed to  contribute  MK 200000.00 to partner for  solar assembilng production bussiness.
                    These people will create a joint bussiness acount where the money shall be deposited and later 
                    be used for preparations and manufacturing process. 
                    </p>
                </div>

                <div className="service" onClick={showForm}>
                    <i className="fa-solid fa-car"></i>
                    <h4 className="service-heading">Car Dealership.</h4>
                    <p>
                        15  people are to contributed MK 500000.00 and start a car dealership joint bussiness .
                        These people shpould be willing to work togther and contribute effort to suppoly people with janese used car across malawi..
                    </p>
                </div>
            </div>
            </section>

                {/* about PIC */}
            <div className="about-pic page" id="about"> 
                <h2 className="section-heading">About PIC</h2>       
                <p className="about-moto">
                  We are project innovation centre (PIC).
                 A registered organisation which focuses on establishment of entrepreneurship in Malawi.
                  Founded by bed-com-41-19 in 2018. Its main focus is to bring grass root people together
                   and contribute small money and establish joint business which cannot be handled
                    and run by a single individual. Members are supposed to apply for a business of one 
                    choice posted on the forum and contribute as per prescribed fee to partner in that
                     business upon reaching the specified number of members to partner no any other 
                     member is supposed to apply for that business. Therefore, they are asked to work
                      hand in hand in building the business with the help of the CEO in terms of business 
                      registration .
                </p>
                <p className="about-moto">
                The organisation has two categories of members the mere members and the VIP members.
                 Only the VIP members are supposed to partner in the fore mentioned businesses, 
                 the other embers will need to upgrade to VIP with a fee to become VIP project innovation 
                 centre members..
                </p>
            </div>

                {/* get in touch */}
            <div className=" contact-page page" id="contact">
                <h3 className="contact-heading">Not a PIC VIP member and interested to work with us? <br></br>
                <span>Get In touch</span></h3>
                
                 <div className="contact-wrapper">
                        <div className="contact-info">
                        <h2>Contact Info</h2>
                        <div className="contact-details">
                            <p><i className="fa-solid fa-phone-volume"></i><span>+265994004597 / +265883456713</span></p>
                            <p><i className="fa-regular fa-envelope"></i><span>cassimmikochi@gmail.com</span></p>
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

                {/* footer */}
            <footer>
                <small>copyright©bed-com-41-19. All Rights Reserved 2022.</small>
            </footer>
       </div>
    )
}