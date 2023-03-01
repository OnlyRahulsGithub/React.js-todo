import React from 'react'

function Container(props) {
// console.log(props.todo)
  return (
    <ul>
        {
          props.todo.map((element,index)=>{
            return <li key={index} >{element}<button
            onClick={(event)=>{
              props.handleDelete(element)
            }}
            >Delete</button></li>
          })
        }
    </ul>
  )
}

export default Container