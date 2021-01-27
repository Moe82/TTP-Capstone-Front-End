import React from 'react';
import './styles/login.css'


const TeacherLogingView = (props) => {
  return (
  
  
  <div class="container">
  <div>
   
      {!props.clickLogin && <div class="form form--signup">
        <div class="form--heading">Welcome! Sign Up</div>
        <form autocomplete="off">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button class="button">Sign Up</button>
        </form>
      </div>}

      {props.clickLogin && <div class="form form--login">
        <div class="form--heading">Welcome back! </div>
        <form autocomplete="off">
          <input type="text" placeholder="Name" />
          <input type="password" placeholder="Password" />
          <button class="button">Login</button>
        </form>
      </div>}

 </div>
</div>
  );
};


export default TeacherLogingView;