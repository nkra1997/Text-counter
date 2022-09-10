import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper Was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");

    }

    const handleLoClick = () => {
        // console.log("Upper Was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");

    }
    const handleClearClick = () => {
        // console.log("Upper Was Clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("box cleared!", "success");

    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied!", "success");

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove all extra space", "success");

    }


    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    } 


    const [text, setText] = useState('');


    return (
        <>
        <div className=' container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange}style={{backgroundColor: props.mode==='dark'? '#13466e': 'white', color:props.mode=== 'dark'? 'white': '#042743'}} id="myBox" rows="8"></textarea>

            </div>
            <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick} >Convert to Uppercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summery</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
        </div>
        </>
    )
}
