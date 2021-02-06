import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../../redux/teacher";
import { AuthFormView } from "../views";


// Smart container;
class AuthFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordVerify: "",
      typing: false,
      passwordMatchError: false
    }
  }

  handleChange = (event) => {
    this.setState({ typing: true })
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = async (event) => {
    this.setState({ typing: false})
    event.preventDefault();
    const formName = event.target.name;
    if (formName == "signup") {
      if (!(this.state.passwordVerify === this.state.password)) {
        this.setState({passwordMatchError: true})
      } else {
        this.setState({passwordMatchError: false})
        await this.props.loginOrSignup(this.state.email, this.state.password, formName)
      }
    } else {
    this.props.loginOrSignup(this.state.email, this.state.password, formName);
  }
}

  render() {
    return (
      <div>
        {!this.props.isLoggedIn ?  
          <AuthFormView
            name={this.props.name}
            displayName={this.props.displayName}
            error={this.props.error}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            isLoggedIn={this.props.isLoggedIn}
            userEmail={this.props.userEmail}
            userIsTyping={this.state.typing}
            history={this.props.history}
            passwordMatchError={this.state.passwordMatchError}
          />
        : this.props.history.push("/course")}
      </div>
    );
  }
};

// Map state to props;
const mapLogin = state => {
  return {
    name: "login",
    displayName: "Login",
    error: state.teacher.error,
    isLoggedIn: !!state.teacher.id,
    userEmail: state.teacher.email
  };
};

// Map state to props;
const mapSignup = state => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.teacher.error,
    isLoggedIn: !!state.teacher.id,
    userEmail: state.teacher.email
  };
};

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    loginOrSignup: (email, password, formName) => dispatch(auth(email, password, formName))
  }
};

export const Login = connect(mapLogin, mapDispatch)(AuthFormContainer);
export const Signup = connect(mapSignup, mapDispatch)(AuthFormContainer);