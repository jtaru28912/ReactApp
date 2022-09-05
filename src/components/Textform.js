import React, { useState } from "react";

export default function Textform(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        //console.log("Lowercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        //console.log("Lowercase was clicked"+text);
        let newText = " ";
        setText(newText);

    }
    const handleOnChange=(event) => {
        console.log("On change");
        setText(event.target.value);

    }

    const handleCopy=()=> {
        
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ")) 
    }

    
    

    const [text, setText]= useState(' ');
   // setText("New Text");

  return (
    <>
    <div className="container"  style={{color: props.mode==='dark'? 'white' : '#042743'}}>
    <h1>{props.heading}  </h1>
    <div className="mb-3">
          
          <textarea className="form-control" id="MyBox"  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'Grey' : 'white',color:props.mode=== 'dark'?'white': '#042743'}} value={text} rows="8"></textarea>
    </div>

    <div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
    </div>
      

      <div className="container my-3"  style={{color: props.mode==='dark'? 'white' : '#042743'}}>
          <h1>
              your text summary
          </h1>
          <p>{text.split(" ").length} words and {text.length} character</p>
          <p>{ 0.008* text.split(" ").length} Minutes read</p>
          <h3>preview</h3>
          <p>{text.length>0?text:"Enter something in the Textbox to preview"}</p>
      </div>
      </>
    
  );
}
