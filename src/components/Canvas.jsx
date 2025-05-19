import React from "react";
import Input from "./Input";
import Form from "./Form";
import Signupform from "./Signupform";
import Text from "./Text";

function Canvas({ elements,setElements }) {

  function handleDragOver(e){
    e.preventDefault();  

  }
  function handleDrop(e){
    e.preventDefault();
    const items=e.dataTransfer.getData("Dragdata");
    if(items){
      const parsedItems=JSON.parse(items);
      setElements((prev)=>[...prev,parsedItems])
    }

  }
  
  function handleRender(el,index){
    
      if(el.type==='Text'){
        return <Text key={index}{...el.props}></Text>;
      }
      else if(el.type==='Input'){
        return <Input key={index} {...el.props} />;
      }
      else if(el.type==='Form'){
        return <Form key={index} />;
      }
      else if(el.type==='Signupform'){
        return <Signupform key={index} />;
      }
      else{
        return null;
      }
         
  }
  return (
    <div className="mid-canvas-outer">
      <div className="mid-canvas" onDragOver={handleDragOver} onDrop={handleDrop}>
      {elements.map((el, index) => {
        return handleRender(el,index);
      })}
    </div>
    <div className="mid-canvas-btn">
      <button>Preview</button>
    </div>
    </div>
  );
}

export default Canvas;
