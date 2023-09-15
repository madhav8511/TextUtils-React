import React, { useState } from 'react'

export default function TextForms (props) {

    const handleUPclick = ()=>{
        setText(text.toUpperCase());
        props.show_alert("Converted To UpperCase","success");
    };

    const handleLOWclick = ()=>{
      setText(text.toLowerCase());
      props.show_alert("Converted To LowerCase","success");
    }

    const handleONchange = (event)=>{
        setText(event.target.value);
    };

    const handleclearclick = ()=>{
      setText("");
      props.show_alert("Your Text has been cleared","success");
    }

    const [text, setText] = useState('');
    //text = "new" wrong way to change the state....
  return (
    <>
    <div className='container'>
        <h1 style={{color : props.mode === "light"?"#042743":"white"}}>{props.heading}</h1>
        <div className='mb-3'>
        <textarea className='form-control' value={text} onChange = {handleONchange}id='myBox' rows={8} style={{backgroundColor: props.mode === "light"? "white":"#13466e",color : props.mode === "light"?"#042743":"white"}}></textarea>
        </div>
        <button disabled={text.length === 0}className='btn btn-primary my-1' onClick={handleUPclick}>Convert To UpperCase</button>
        <button disabled={text.length === 0}className='btn btn-primary mx-2 my-1' onClick={handleLOWclick}>Convert To LowerCase</button>
        <button disabled={text.length === 0}className='btn btn-primary mx-1 my-1' onClick={handleclearclick}>Clear Text</button>
    </div>
    <div className='container my-3'>
      <h2 style={{color : props.mode === "light"?"#042743":"white"}}>Your text Summary</h2>
      <li style={{color : props.mode === "light"?"#042743":"white"}}>{text.split(" ").length-1} words and {text.length} characters</li>
      <li style={{color : props.mode === "light"?"#042743":"white"}}>{0.008 * text.length} Minute it take to read</li>
      <h2 style={{color : props.mode === "light"?"#042743":"white"}}>Preview</h2>
      <p style={{color : props.mode === "light"?"#042743":"white"}}>{text}</p>
    </div>
    </>
    
  );
}
