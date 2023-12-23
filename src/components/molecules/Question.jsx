import React from 'react'
import Options from './Options'
import "./Question.css"
import Questionimg from './Questionimg'

const Question = ({index=0,type="text",QuestionId=0,statement="",options=[]}) => {
  return (
    <div className='Question'>    
        <h2>Question {index}</h2>
      <hr className='row' />

    <div className='imgid'>
        <div id={QuestionId} className="statement">{statement}</div>  
        <div className='img'><Questionimg></Questionimg></div>
      </div>
        {   
          type==="image"? <img src="" alt="" /> :<></>
        }
        <Options OptionsForQ={options}/>
    </div>
  )
}

export default Question