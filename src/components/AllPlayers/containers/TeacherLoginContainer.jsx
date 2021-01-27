import React, { Component } from 'react';
//import axios from "axios";
import { TeacherLoginView} from '../views'

class TeacherLoginContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            clickLogin:false
        }
    }

    handleSignup(){
       this.setState({
        clickLogin: false
       })
    }
    handleLogin(){
        this.setState({
         clickLogin: true
        })
     }
    render(){
        return(
        <di>
            <button onClick={()=>this.handleSignup()}>Sign Up</button>
            <button onClick={()=>this.handleLogin()}> Login</button> 
            <TeacherLoginView clickLogin={this.state.clickLogin} />
        </di>
        )
    }
}


export default TeacherLoginContainer;