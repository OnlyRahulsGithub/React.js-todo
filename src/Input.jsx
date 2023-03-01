import React from 'react'

function Input(props) {

  return (
    <>
        <input
        value={props.currentState}

        onChange={(event)=>{
          props.handleCurrentState(event.currentTarget.value)
        }}
        onKeyDown={(event)=>{
          if(event.key === "Enter"){
            props.moveTodo()
          }
        }}
         type="input"/>
    </>
  )
}

export default Input