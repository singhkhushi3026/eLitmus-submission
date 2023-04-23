import React, { useState } from 'react';
import "../styles/level31.css";
import Card from "../component/Card"
import Door1 from "../images/door1.jpg"
import {Link} from "react-router-dom";
import Footer from "../component/Footer"
import { useNavigate } from 'react-router-dom';

const Level31 = ()=>{
   const [key, setkey] = useState("");
   const [result1, setresult1] = useState("");
   const onInput = (event)=>{
       setkey(event.target.value);
   }
   const navigate = useNavigate();
   const onClick1=(event)=>{
        navigate("/level41");
   }
   const onClick2=(event)=>{
      navigate("/error");
 }

   return (
    <>
     <div className='container-level31'>
     
        <div className='inner-container-level31'>
        <center><h3>Welcome to Stage-3 of the game</h3></center>
        <center><h4>Open the door to the next hint. Do not open the wrong one!!</h4></center>
       // <center><p className='hint'>Scroll down to get some hint!!</p></center>//
         {/* <div className='overlay'></div> */}
        <div className='cards-level31'>
                  <div className='cd'>
                  <Card ans="8"
                  link="/level41"
                  image={Door1}
                  message="Wrong lock"
                  title=""
                  content={<Link to="https://drive.google.com/file/d/1LUMJHPQyQ9jDznhkskGKooeL1xoCcHdc/view?usp=sharing">Download Image</Link>}/>
                  </div>
                  <div className='cd'>
                  <Card ans="7"
                  link="/level41"
                  message="Wrong lock"
                  image={Door1}
                  title=""
                  content={<Link to="https://drive.google.com/file/d/1jU-9EVwt2-L7GJk2LRjrgzWB5vAtWVEc/view?usp=sharing">Download Image</Link>} />
                  </div>
                  
            </div>
            
        </div>
        
     </div>
    </>
   )
}
export default Level31;