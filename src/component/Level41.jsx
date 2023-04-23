import React, { Component , useState} from 'react';
import ist1 from "../images/inst1.jpg";
import ist2 from "../images/ins2.jpg";
import ist3 from "../images/inst3.jpg";
import ist4 from "../images/inst4.jpg";
import ist5 from "../images/inst5.jpeg";
import ist6 from "../images/inst6.jpg";
// import music from "../images/music.jpg"
import "../styles/level41.css"
import { Link , useNavigate} from 'react-router-dom';

 const Level41 =()=>{
    const [key, setkey] = useState("");
   const [result1, setresult1] = useState("");
   const onInput = (event)=>{
       setkey(event.target.value);
   }
   const navigate = useNavigate();
   const onClick1=(event)=>{
        navigate("/level51");
   }
   const onClick2=(event)=>{
      navigate("/error");
 }
   const onSubmit=(event)=>{
       event.preventDefault();
       if(key==="Data Structures")
         setresult1(<>
           <p>Correct!!!Let's go to the next stage</p>
        <button className='btn btn-success' onClick={onClick1}>Let's Go---&gt;</button>
         </>);
       else setresult1(<p>Oops Wrong key!!</p>)
          
   }
  return (
    <>
      <div className='container-level41'>
            <div className='inner-container-level41'>
                <center><h3>Welcome to Level 4 of the game</h3></center>
                <center><h4>Select the correct tile to get the next hint</h4></center>
                <table>
                    <tr>
                        <td><Link to="/error"><img src={ist1}/></Link></td>
                        <td><Link to="/error"><img src={ist2}/></Link></td>
                        <td><Link to="https://youtu.be/5_5oE5lgrhw"><img src={ist3}/></Link></td>
                    </tr>
                    <tr>
                        <td><Link to="/error"><img src={ist4}/></Link></td>
                        <td><Link to="/error"><img src={ist5}/></Link></td>
                        <td><Link to="/error"><img src={ist6}/></Link></td>
                    </tr>
                </table>
            </div>
            <div className='answer1'>
                  <form onSubmit={onSubmit}>
                      <input type="text"
                              placeholder='Enter your Key'
                              onChange={onInput}
                              value={key}/>
                      <button className='btn btn-primary'>Submit</button>
                   </form>
                   <p>{result1}</p>
            </div>
      </div>
      
            
    </>
  )
 }
 export default Level41;