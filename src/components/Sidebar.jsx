import React, { useState } from "react";
import Input from "./Input";
import Form from "./Form";
import SidebarElement from "./SidebarElement";
import Signupform from "./Signupform";
import Text from "./Text";

function Sidebar({ setElements }) {
  const [showText, setShowText] = useState(true);
  const [showElements, setShowElements] = useState(false);
  const [showForms, setShowForms] = useState(false);

  const handleAddElement = (type, props = {}) => {
    setElements((prev) => [...prev, { type, props }]);
  };

  const handleDragStart = (e, type, props = {}) => {
  e.dataTransfer.setData("Dragdata", JSON.stringify({ type, props }));
};

  return (
    <div className="sidebar">
      <div className="sidebar-heading">
        <h1>Select elements...</h1>
      </div>
      <div className="sidebar-bottom">
        <div className="sidebar-left ">
          <SidebarElement
            type="Text"
            setShowText={setShowText}
            setShowElements={setShowElements}
            setShowForms={setShowForms}
          />
          <SidebarElement
            type="Elements"
            setShowText={setShowText}
            setShowElements={setShowElements}
            setShowForms={setShowForms}
          />
          <SidebarElement
            type="Forms"
            setShowText={setShowText}
            setShowElements={setShowElements}
            setShowForms={setShowForms}
          />
        </div>

        <div style={{ maxWidth: "22vw" }}>
          <ul className="menu text-base-content min-h-full w-full p-4">
            {showText && (
              <>
                <li
                draggable={true}
                onDragStart={(e)=>handleDragStart(e,"Text",{type: "h1",fs: "32px",fw: "600",txt: "Add a heading",})}
                
                  onClick={() =>
                    handleAddElement("Text", {
                      type: "h1",
                      fs: "32px",
                      fw: "600",
                      txt: "Add a heading",
                    })
                  }
                >
                  <Text type="h1" fs="32px" fw="600" txt="Add a heading"></Text>
                </li>
                <li
                draggable={true}
                onDragStart={(e)=>handleDragStart(e,"Text",{type: "h2",fs: "24px",fw: "300",txt: "Add a Subheading",})}
                
                  onClick={() =>
                    handleAddElement("Text", {
                      type: "h2",
                      fs: "24px",
                      fw: "300",
                      txt: "Add a Subheading",
                    })
                  }
                >
                  <Text
                    type="h2"
                    fs="24px"
                    fw="300"
                    txt="Add a Subheading"
                  ></Text>
                </li>
                <li
                draggable={true}
                onDragStart={(e)=>handleDragStart(e,"Text",{type: "p",fs: "16px",fw: "200",txt: "Add a paragraph",})}
                
                  onClick={() =>
                    handleAddElement("Text", {
                      type: "p",
                      fs: "16px",
                      fw: "200",
                      txt: "Add a paragraph",
                    })
                  }
                >
                  <Text
                    type="p"
                    fs="16px"
                    fw="200"
                    txt="Add a paragraph"
                  ></Text>
                </li>
              </>
            )}

            {showElements && (
              <>
                <li
                draggable={true}
                onDragStart={(e)=>handleDragStart(e,"Input",{type: "text",placeholder: "Enter the text",})}
                
                  onClick={() =>
                    handleAddElement("Input", {
                      type: "text",
                      placeholder: "Enter the text",
                    })
                  }
                >
                  <Input type="text" placeholder="Enter the text" />
                </li>
                <li
                draggable={true}
                onDragStart={(e)=>handleDragStart(e,"Input",{type: "date",placeholder: "Enter the date",})}
                
                  onClick={() =>
                    handleAddElement("Input", {
                      type: "date",
                      placeholder: "Enter the date",
                    })
                  }
                >
                  <Input type="date" placeholder="Enter the date" />
                </li>
                <li
                draggable={true}
                onDragStart={(e)=>handleDragStart(e,"Input",{type: "number",placeholder: "Enter the number",})}
                
                  onClick={() =>
                    handleAddElement("Input", {
                      type: "number",
                      placeholder: "Enter the number",
                    })
                  }
                >
                  <Input type="number" placeholder="Enter the number" />
                </li>
              </>
            )}

            {showForms && (
              <>
                <li
                draggable={true}
                onDragStart={(e)=>handleDragStart(e,"Form",{})}
                
                 onClick={() => handleAddElement("Form")}>
                  <Form />
                </li>
                <li
                draggable={true}
                onDragStart={(e)=>handleDragStart(e,"Signupform",{})}
                
                 onClick={() => handleAddElement("Signupform")}>
                  <Signupform />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
