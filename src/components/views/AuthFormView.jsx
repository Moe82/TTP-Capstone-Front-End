import React from "react";

import 'bootstrap/dist/css/bootstrap.css'
import './styles/Login.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const AuthFormView = props => {
  const { name, displayName, handleSubmit, error, handleChange, isLoggedIn, userEmail } = props;

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
            <Input name="email" type="text" onChange={handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password"> Password </Label>
              <Input name="password" type="password" onChange={handleChange}/>
          </FormGroup>
          <Button className="btn-lg btn-dark btn-block" type="submit">{displayName}</Button>
        </Form>
        {/* /* {isLoggedIn ? `The current logged in user is: ${userEmail}` : ""} */}
        {(error && props.typing == false) ? 
        <div style={{ color: "red" }}>
          <span>Incorrect email or password. Please try again</span>
        </div> : null}
        {name == "signup" ? 
        <div>
          <div style={{ color: "white" }}>Already have an account?</div>
          <div className="click-here" onClick={()=>{ props.history.push("/login")}}>Sign in!</div>
        </div> :
        <div>
          <div style={{ color: "white" }}>Need an account?</div>
          <div className="click-here" onClick={()=>{ props.history.push("/signup")}}>Sign up today!</div>
        </div>}
        </div>
  );
};

export default AuthFormView;