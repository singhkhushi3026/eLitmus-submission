import React, { useState } from 'react';
import "../styles/startclue.css"
import { useNavigate} from 'react-router-dom';

const Startclue = ()=>{
    const [ans, setAns] = useState("");
    const [result, setResult]= useState("");
    const navigate = useNavigate();
    const inputEvent=(event)=>{
        setAns(event.target.value);
    }
    const onSubmit=(event)=>{
        
        event.preventDefault();
        const onClick=(event)=>{
            navigate('/level2');
        }
        if(ans==="push_back()")
         setResult(<>
         <h4>Correct!!! Let's go to the next stage.</h4>
         <button className='btn btn-success' onClick={onClick}>Let's Go---&gt;</button>
         </>)
         else setResult(<h4>Oops Wrong!! Think more about it.</h4>)
    }
    return(
        <>
         <div className='cont-start'>
            <div className='overlay'></div>
            <div className='incont-start'>
                <p>
                    <h3>“What function is used to append a character at the back of a string in C++?”</h3>
                </p>
                <br />
                <p><h5>Decode the given below line to get your answer : &gt;</h5></p>
                <br />
                <p>
                
                  It is used to insert data or elements at the end of a vector.
                </p>
                <form onSubmit={onSubmit}>
                <input type='text'
                        placeholder='Enter your answer'
                        name='ans'
                        onChange={inputEvent}
                        value={ans}
                     /><br />

                     <button className='btn btn-primary'>Submit</button>
                </form>
                <div>{result}</div>
            </div>
         </div>
        </>
    )
}

export default Startclue;