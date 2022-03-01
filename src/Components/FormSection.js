import React from "react";

export default function Form(){
    return(
       <main className="page">
        <form action="index.php" method="POST" id="form-sign-in">
            <h3 className="form-heading">project inovation center <br></br> log in</h3>
            <div className="member-information">
                <div className="member-sign-in">
                    <h4 className="join">join</h4>
                    <label htmlFor="sign-in">Not a PIC VIP member ? </label> 
                    <a href="#sign-in" className="log-in-link">log in</a>
                </div>
                
                {/* email  */}
                <input type="email" placeholder="user email" required maxLength="50"></input>
                {/* <!-- password --> */}
                <input type="password" name="password" id="password" placeholder="password" maxLength="30"></input>
                {/* <!-- confirm password --> */}
                <input type="password" name="confirmpassword" id="confirmpassword" placeholder="confirm password" maxLength="30"></input>
            </div>
            <div className="member-log-in">
                <a href="#database" className="signing-in">sign up now</a>
                <p>By joining PIC, <span>you agree to our membership aggrements, 
                    <br></br> private policy</span> and <span>terms use.</span></p>
            </div>
        </form>
    </main>
    )
}