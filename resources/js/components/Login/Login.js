import React from 'react';
import style from './Login.css';
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const history = useHistory();

  function NewUser(){
    history.push("/register");
  }
  return (

    <div className="login">
      <h5>ورود</h5>
      <form>

        <span className="line" />
        <p>  ایمیل / نام کاربری</p>
        <input className="input" type="text" name="user" placeholder=" نام کاربری" />
        
        <p>رمز عبور</p>
        <input className="input" type="password" name="password" placeholder="  رمز عبور " />
  
        <button type="submit" className=" btn2 btn btn-success">ورود</button>
      </form>
      <span className="a" onClick={NewUser}>ثبت نام کاربر جدید </span>
    </div>


  )
}


