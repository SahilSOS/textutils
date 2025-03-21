import React, {useState} from 'react'


export default function Textform(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!", "success");
  }
  const handleLoClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase!", "success");
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Cleared!", "success");
  }
  const handleOnChange = (event)=>{
    //console.log("OnChange");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  // text = "new text"; // Wrong way to change the state
  //setText("new text"); // Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode=== 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white', color: props.mode=== 'dark'?'white':'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>CLear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Perview</h2>
      <p>{text.length>0?text:"Enter Something....."}</p>
    </div>
    </>
  )
}
