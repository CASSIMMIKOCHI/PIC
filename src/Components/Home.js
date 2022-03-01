import React from "react";
import logo from './pexels-cottonbro-4065864.jpg'

export default function Home(){
    return(
        <section className="home-section page" id="updates">
          <p>
             "People who get up on this world are the ones who get up and look for circumstances they want, if they cant find them, they make them". _George Bernard_.

          This is what we do at Project Innovation Centre Malawi. 
          As entrepreneurs, we are always creating new useful ideas that solves problems and challenges people face every day.  
          </p> 

          <div className="stake-holders">
             <figure>
                 <img src={logo}  alt="logo" ></img>
                 <img src={logo}  alt="logo" ></img>
             </figure>
         </div> 
        </section>
    )
}