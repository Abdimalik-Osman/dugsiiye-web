import React from 'react'
import {Link} from 'react-router-dom';
import '../../App.css';
function Input(props) {
  return (
    
        <div className="form-group col-md-12">
          <label>{props.label}</label>
          <input
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={(e)=>props.onchange(e)}
            className="form-control shadow"
            placeholder={props.placeholder}
          />
          {props.error && <div className="alert alert-danger" role="alert">{props.error}</div>}
        </div>
        
  )
}

export default Input;