import React, { Component } from 'react';
import "../styles/level2.css";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import Card from "./Card";
import DennisImage from "../images/dennis.jpg"
import Jamesimage from "../images/james_gosling.jpg";
import elonimage from "../images/elon_musk.jpg"

const Level2 =()=>{
    return(
        <>
         <div className='con-level2'>
             <div className='innercont-level2'>
                <h2>Welcome to Stage-2 of the game</h2>
                <hr />
                <br />
                  <p>Follow the given clue to choose the correct tile for the next stage...</p>
            </div>
            <div className='cards'>
                  <div className='cd'>
                  <Card ans="Dennis Ritchie"
                  link="/level31"
                  message="Use your visual intelligence."
                  image={DennisImage}
                  title="Guess from who I am?"
                  content="He is best known as the creator of the C programming language, one of the developers of the Unix operating system, and co-author of the book The C Programming Language; he was the 'R' in K&R. He worked together with Ken Thompson, who is credited with writing the original version of Unix; one of his most important contributions to Unix was its porting to different machines and platforms."/>
                  </div>
                  <div className='cd'>
                  <Card ans="James Gosling"
                  link="/level32"
                  message="Use your visual intelligence."
                  image={Jamesimage}
                  title="Guess from who I am?"
                  content="He is a Canadian computer scientist, best known as the founder and lead designer behind the Java programming language.He was elected a member of the National Academy of Engineering in 2004 for the conception and development of the architecture for the Java programming language and for contributions to window systems. He also developed several compilers and mail systems." />
                  </div>
                  <div className='cd'>
                  <Card ans="Elon Musk"
                  link="/error"
                  message="Use your visual intelligence."
                  image={elonimage}
                  title="Guess from who I am?"
                  content="He is a business magnate and investor. He is the founder, CEO and chief engineer of SpaceX; angel investor, CEO and product architect of Tesla, owner and CEO of Twitter; founder of the Boring Company; co-founder of Neuralink and OpenAI; and president of the philanthropic Musk Foundation.He is the second-wealthiest person in the world, according to both the Bloomberg Billionaires Index and Forbes's real-time billionaires list." />
                  </div>
            </div>
            
          </div>
          <Footer 
          content ="Information technology and business are becoming inextricably interwoven. I don't think anybody can talk meaningfully about one without talking about the other.-
                    
      
           Bill Gates" 
         />
        </>
    )
}

export default Level2;