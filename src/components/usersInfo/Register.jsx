import React,{useState} from "react";
import {Link} from 'react-router-dom';
import  Joi  from "joi-browser";
import Input from '../common/input';

function Register(props){
  const [users,setUsers] = useState({
    username:"",
    password:"",
    email:"",
    phone:""
  })
  const [errors,setError] = useState({
    error:""
  })
  
  // joi validation
  const schema={
    username:Joi.string().required().label("Username"),
    password:Joi.string().required().min(5).label("Password"),
    email: Joi.string().required().email().label("Email"),
    phone: Joi.string().required().label("Phone")
  };
  
  // validate function
  const validate =()=>{
    const options = {abortEarly:false};
    const result = Joi.validate(users, schema,options);
    console.log(result);
  
  // joi validation
    if(!result.error)
      return null;
    
    const errors = {};
    for(let item of result.error.details)
      errors[item.path[0]] = item.message;
    return errors;
  
  
    // javascript validation
  
    // const errors ={};
    // if(users.username.trim()==='')
    //   errors.username = 'username required';
    // if(users.password.trim()==='')
    //   errors.password = 'password required';
    // return Object.keys(errors).length===0 ? null : errors;
  }
  
  // handle submit
      const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(users)
        const errors = validate();
        console.log(errors);
        setError(errors || {});
        if(errors) return;
        // call the server
        console.log("Submitted....")
      }
    // validate  property
    const validateProperty=(input)=>{
      // joi validation way
      const obj = {[input.name]:input.value};
      const newSchema = {[input.name]:schema[input.name]};
      const result = Joi.validate(obj, newSchema);
      return result.error ?result.error.details[0].message: null;
  
  
      // javascript validation way
      // check username field
      // if(input.name === "username"){
      //   if(input.value.trim() ==="")
      //     return "username required"
      // }
      // check password field 
      // if(input.name === "password"){
      //   if(input.value.trim() ==="")
      //     return "Password required"
      // }
    }
      
  // handle change
  const handleChange=({currentTarget:input})=>{
    let error = {...errors};
    let errorMessage = validateProperty(input);
    if(errorMessage) error[input.name] = errorMessage;
    else delete error[input.name];
    // const {name,value} = e.target;
    setUsers(prevUsers=>{
      return{
        ...prevUsers,
        [input.name]:input.value
      }
  
    })
    setError(error);
    
  }
    return(
    <div className="bg-light my-1 py-5">
      <form  className="register-form shadow-lg bg-white">
        <div className="row">
        <Input type="text" label="UserName" 
        name="username" value={users.username}
        onchange={handleChange}
        error={errors.username}
        placeholder="Enter your username" />

        <Input type="phone" label="Phone"
        name="phone" value={users.phone}
        onchange={handleChange}
        error={errors.phone}
         placeholder="Enter your phone number" />
        <Input type="email" label="Email" 
        name="email" value={users.email}
        onchange={handleChange}
        error={errors.email}
        placeholder="Enter your email" />
        <Input type="password" label="Password"
        name="password" value={users.password}
        onchange={handleChange}
        error={errors.password}
         placeholder="Enter your Password" />
       </div>      
        <button type="submit" disabled={validate()}
                onClick={handleSubmit}
                 className="btn btn-signup my-3 shadow-lg rounded">
                Register
        </button>
        <p>Already Registered ? <Link to="/login" className="text-primary">Login</Link></p>
      </form>
        </div>
    )
}
export default Register;