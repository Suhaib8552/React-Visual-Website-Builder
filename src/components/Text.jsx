import React from 'react'

function Text(props) {
  const Tag = props.type || 'p';
  return (
    <div style={{ width: "21.4vw", backgroundColor: "#fff", padding: "2%",border:'1px solid black' }}>
        <Tag style={{fontSize:`${props.fs}`,fontWeight:`${props.fw}`,outline:'none'}} contentEditable={true} >{props.txt}</Tag>
    </div>
  )
}

export default Text