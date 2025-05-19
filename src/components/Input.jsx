import React from 'react'

function Input(props) {
  return (
    <>
    <label class="input" style={{width:'21.4vw',padding:'0 2%'}}>
        
        <input type={`${props.type}`} class="grow w-full" placeholder={`${props.placeholder}`}  draggable={true}/>
      </label>
    </>
  )
}

export default Input