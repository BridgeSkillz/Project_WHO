import React from 'react'
import Options from './Options'
import "./Question.css"

const Question = ({index=0,QuestionId=0,statement="",options=[]}) => {
  return (
    <div className='Question'>
        <h2>Question {index}</h2>
      <hr className='row' />
        <div id={QuestionId} className="statement">{statement}</div>
        <Options OptionsForQ={options}/>
    </div>
  )
}

export default Question