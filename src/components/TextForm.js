import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase clicked" + text);
        let newText = text.toUpperCase();
        setText(newText); //correct way
        props.showAlert("Converted to uppercase","success");

    }
    const handleLoClick = ()=>{
        // console.log("uppercase clicked" + text);
        let newText = text.toLowerCase();
        setText(newText); //correct way
        props.showAlert("Converted to lowercase","success");


    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Audio stared","success");

      }
    
    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value); //correct way

    }
    const [text, setText] = useState('Enter Text Here');
// text="new text"; //wrong way
// setText("new text"); //correct way
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <div className="mb-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} rows="6"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={speak}>Speak</button>


    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text here</h1>
        <p>{text.trim().length === 0 ? 0 : text.trim().split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

    </div>
    </>
  )
}
