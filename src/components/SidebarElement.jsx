import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFont, faShapes, faRectangleList } from '@fortawesome/free-solid-svg-icons'

function SidebarElement(props) {
  var icon;
    function handleSubmit(){
        if(props.type==="Elements"){
        props.setShowElements(true)
        props.setShowText(false)
        props.setShowForms(false)
    }
    else if(props.type==="Forms"){
        props.setShowForms(true)
        props.setShowElements(false)
        props.setShowText(false)
    }
    else{
        props.setShowText(true)
        props.setShowForms(false)
        props.setShowElements(false)
        
        
    }
    }
  return (
    <div className='sidebarElement' onClick={handleSubmit}>
      {props.type==='Text' && <FontAwesomeIcon icon={faFont} /> }
      {props.type==='Elements' && <FontAwesomeIcon icon={faShapes} /> }
      {props.type==='Forms' && <FontAwesomeIcon icon={faRectangleList} /> }
      
      </div>
  )
}

export default SidebarElement