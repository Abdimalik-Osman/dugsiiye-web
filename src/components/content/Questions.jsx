import React from "react";
import '../../App.css';

function Questions(props) {
  return (
    <div className="py-2">
      <h5 className="my-2">{props.question}</h5>
      <p>{props.answer}</p>
    </div>
  );
}
export default Questions;
