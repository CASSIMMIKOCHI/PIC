import React from "react";

export default function foottcassim(){
    const showForm = (TSE) => {
        console.log("hey");
    }
    return(
       <section className="services-wrapper page" id="updates">
            <h2 className="section-heading">Bussiness available for partnership</h2>
            <div className="services">

                <div className="service" onClick={showForm}>
                    <i className="fa-solid fa-tractor"></i>
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
                    <i className="fa-regular fa-lightbulb"></i>
                    <h4 className="service-heading">Filling station</h4>
                    <p>    
                       20 people needed to Contribute MK 250000.00 and partner in filling statiion establishment.
                        Malawians who are willing to come togther and contribute the little they have from there salaries and other 
                        inccome generating activities and plant their own filling stationery.
                    </p>
                </div>

                <div className="service" onClick={showForm}>
                    <i className="fa-solid fa-industry"></i>
                    <h4 className="service-heading">Fertilixer manufacturing.</h4>
                    <p>
                      300 people needed to Contribute MK300000.00 each other  and partner  in fertilizer manufacturing
                       Understand that the more we come together the less the amount to contribute for one business..
                    </p>
                </div>

                <div className="service" onClick={showForm}>
                    <i className="fa-solid fa-solar-panel"></i>
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
    )
}

