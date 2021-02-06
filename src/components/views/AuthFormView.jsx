import React from "react";

import 'bootstrap/dist/css/bootstrap.css'
import './styles/Login.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const AuthFormView = props => {
  const { name, displayName, handleSubmit, error, handleChange, isLoggedIn, userEmail, userIsTyping, passwordMatchError } = props;
  return (
    <div>
      <Form className="login-form" onSubmit={handleSubmit} name={name}>
        {/* {isLoggedIn ? `The current logged in user is: ${userEmail}` : ""} */}
        <h1 className="text-center">
          <span className="font=weight-bold">
            {displayName}
          </span>
        </h1>
        <FormGroup>
          <Label htmlFor="email"> Email </Label>
          <Input name="email" type="email" onChange={handleChange} style={{border: "1px solid #AE81FF"}} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password"> Password </Label>
            <Input name="password" type="password" onChange={handleChange} style={{border: "1px solid #AE81FF"}} />
        </FormGroup>
        {name == "signup" ? 
        <FormGroup>
          <Label htmlFor="password"> Reenter Password </Label>
            <Input name="passwordVerify" type="password" onChange={handleChange} style={{border: "1px solid #AE81FF"}} />
        </FormGroup> : null}
        <Button style={{backgroundColor:'#AE81FF', color:'black'}} className="btn-lg btn-dark btn-block" type="submit">{displayName}</Button>
      </Form>
      {console.log(passwordMatchError)}
      {
        (error && userIsTyping == false && passwordMatchError != true) ? 
        <div style={{ color: "red" ,textAlign: 'center' }}>
          {name == "signup" ? 
          <span>Email is already regisiterd to a user. Please try again</span> :
          <span>Incorrect email or password. Please try again</span>}
        </div> : null
      }
      {
        (passwordMatchError ?
        <div style={{ color: "red" ,textAlign: 'center' }}>
          <span>Passwords don't match. Please try again.</span>
        </div> : null)
      }
      
      {
        name == "signup" ? 
        <div style={{textAlign: 'center'}}>
          <div style={{ color: "black" }}>Already have an account?</div>
          <div className="click-here" onClick={()=>{ props.history.push("/login")}}>Sign in!</div>
        </div> :
        <div style={{ color: "black", textAlign: 'center' }}>
          <div >Need an account?</div>
          <div className="click-here" onClick={()=>{ props.history.push("/signup")}}>Sign up today!</div>
        </div>
      }
      </div>
  );
};

export default AuthFormView;