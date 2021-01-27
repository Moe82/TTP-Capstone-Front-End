import React, {Component} from 'react'

import '../../../App/App.css'
//import {Link} from 'react-router-dom'



class Navbar extends Component {    

    render(){
        
        return(
         
            <div className="navbar">
         
                <div className="homebutton"> 
                   Home 
                </div>
                <div className="identification"> 
                 
                 <button className="buttonlogin" > Login</button>
                 <button className="buttonlogin" > Signup</button>
                
                </div>
                 
            </div>

        );
    }
}


export default Navbar;