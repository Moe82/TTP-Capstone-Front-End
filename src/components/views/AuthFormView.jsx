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
        {error ? 
        <h2 className="text-center">Sorry, please try again.</h2> :
        isLoggedIn ? <div></div> : null}
      </div>
  );
};

export default AuthFormView;