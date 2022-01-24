import React, { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    color: "white",
    backgroundColor: "#570ddd",
  });

  const Colorit = () => {
    if (myStyle.color === "white") {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      setmyStyle({
        color: "white",
        backgroundColor: "#570ddd",
      });
    }
  };

  return (
    <div style={myStyle}>
      <h1>This is it</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              My Name
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Siddhant Paikra</strong> Hello! My name is suzie, that
              suzie with a zeee
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Phone Number
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>7804938392</strong> It is Bharti Airtel Limited, also
              known as Airtel, is an Indian multinational telecommunications
              services company based in New Delhi, India. It operates in 18
              countries across South Asia and Africa, as well as the Channel
              Islands.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              City
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Korba</strong> It is Korba is a city and an industrial
              area in Korba District in the Indian state of Chhattisgarh. Korba
              was erstwhile part of Bilaspur District before 25 May 1998 later
              that Korba was made a separate District for ease of administration
              but it is still under Bilaspur Division.
            </div>
          </div>
        </div>
      </div>
      <div className="my-3  ">
        <button
          onClick={Colorit}
          type="button"
          className="btn btn-primary  mx-2"
        >
          Mode
        </button>
      </div>
    </div>
  );
}
