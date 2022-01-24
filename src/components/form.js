import React, { useState } from "react";

export default function Form(Submit) {
  const handleUp = () => {
    console.log("click ho giya");
    setText(text.toUpperCase());
  };
  const [text, setText] = useState("Enter your value");
  const handleOn = (event) => {
    setText(event.target.value);
    
  };

  return (
    <>
      <div className="my-3">
        <textarea
          placeholder={text}
          className="form-control"
          onChange={handleOn}
          id="mybox"
          rows="3"
          style={{backgroundColor: Submit.usethis==='light'?'white':'grey',color: Submit.usethis==='light'?'black':'white'}}
          
        />
      </div>

      <button onClick={handleUp} className="btn btn-primary  mx-2">
        {Submit.oho}
      </button>
      
      <p style={{color: Submit.usethis==='light'?'black':'white'}}>{text.split(" ").length}</p>
      <a style={{color: Submit.usethis==='light'?'black':'white'}}>What is up</a>
    </>
  );
}
