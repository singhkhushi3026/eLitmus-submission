import React, { useState } from 'react';
import bg from '../images/bg5.jpg';
import '../styles/level5.css'
import {Link} from 'react-router-dom'

const Level5=()=>{
    const [key, setkey] = useState("");
   const [result1, setresult1] = useState("");
   const onInput = (event)=>{
       setkey(event.target.value);
   }

   
   const onSubmit=(event)=>{
       event.preventDefault();
       if(key==="Swastik")
         setresult1(<>
           <p style={{color:"white"}}>Correct!!!Swastik is a symbol of auspiciousness and is considered to bring good fortune. The power of the Swastika symbol lies in its balance and simplicity.  <br />
           Yoooo!!! You Won. Congratulations.</p>
         </>);
       else setresult1(<p>Oops Wrong key!!</p>)
          
   }
    return(
        <>
        <div className='container-level5'>
           <div className='inner-container-level5'>
              <h3>Welcome to the final destination..</h3>
               <h4>Run the code to get your final answer</h4>
               <div className='content'>
                <p><Link to='https://drive.google.com/file/d/1z6057HENXpxcLkiPFytfRWTgPxLWHKXd/view?usp=sharing'>https://drive.google.com/file/d/1z6057HENXpxcLkiPFytfRWTgPxLWHKXd/view?usp=sharing</Link></p>
                <div className='answer2'>
                  <form onSubmit={onSubmit}>
                      <center><input type="text"
                              placeholder='Enter your Key'
                              onChange={onInput}
                              value={key}/></center> <br />
                      <center><button className='btn btn-primary'>Submit</button></center>
                   </form>
                   <p>{result1}</p>
            </div>
               </div>
           </div>
        </div>
        </>
    )
}
export default Level5;