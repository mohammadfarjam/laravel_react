import React, { useState } from 'react';
import styles from './register.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function Register(props) {
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [nameValid, setNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
    const [completeFeild, setCompleteFeild] = useState(false);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const handlerName = (event) => {
        event.preventDefault();
        if ((event.target.value).length < 2) {
            setNameValid(false)
        } else {
            setNameValid(true)
        }
        if ((event.target.value).length > 0) {
            setCompleteFeild(false);
        }
        setName(event.target.value);
    }

    const handlerEmail = (event) => {
        event.preventDefault();
        if (validateEmail(event.target.value)) {
            setEmailValid(true)
        } else {
            setEmailValid(false)
        }
        if ((event.target.value).length > 0) {
            setCompleteFeild(false);
        }
        setEmail(event.target.value);
    }

    const handlerpassword = (event) => {
        event.preventDefault();
        if ((event.target.value).length < 8) {
            setPasswordValid(false)
        } else {
            setPasswordValid(true)
        }
        if ((event.target.value).length > 0) {
            setCompleteFeild(false);
        }
        setPassword(event.target.value);
    }

    const handlerConfirmPassword = (event) => {
        event.preventDefault();
        if ((event.target.value).length < 8) {
            setConfirmPasswordValid(false)
        } else if (event.target.value === password) {
            setConfirmPasswordValid(true)
        } else {
            setConfirmPasswordValid(false)
        }
        if ((event.target.value).length > 0) {
            setCompleteFeild(false);
        }
        setConfirmPassword(event.target.value);
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\                     .[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }




    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!name || !email || !password || !confirmPassword) {
            setCompleteFeild(true);
        }
        if (!nameValid || !emailValid || !passwordValid || !confirmPasswordValid) {
            return
        }


        try {
            const response = await axios.post('/reg', {
                name: name,
                email: email,
                password: password,
                password_confirmation: confirmPassword,
            }).then(response => {
                if (response.request.status == 201) {
                    history.push("/login");
                   }
            });


        } catch (err) {
            setErrors(err.response.data.errors);
        }

    }
    return (
        <div>

            <div className='col-lg-6 mx-auto text-center mt-3 bg-danger' style={{ direction: 'rtl' }}>
                {completeFeild && 'لطفا تمام فیلد ها را تکمیل نمایید'}
                {Object.keys(errors).map((key, index) => { return <span className='d-block text-light text-right' key={index}>{errors[key][0]}</span> })}
            </div>
            <div className={styles.Login}>
                <h5>ثبت نام</h5>
                <form onSubmit={handleSubmit}>
                    <span className="line" />
                    <p>نام کاربری</p>
                    <input className="input" type="text" name="name" defaultValue="" placeholder=" نام کاربری "
                        onChange={handlerName} />
                    <div className='text-center' style={{ color: '#EA2027' }}>
                        {name && name.length < 3 && 'نام کاربری باید بیش از 3 کاراکتر باشد'}
                    </div>
                    <p>ایمیل</p>
                    <input id="email" type="text" className="input" name="email"
                        autoComplete="email" placeholder="ایمیل"
                        onChange={handlerEmail} />
                    <div className='text-center' style={{ color: '#EA2027' }}>
                        {email && !validateEmail((email)) && 'ایمیل خود را صحیح وارد نمایید '}
                    </div>
                    <p>رمز عبور</p>
                    <input className="input" type="password" name="password" placeholder="  رمز عبور "
                        onChange={handlerpassword} />

                    <div className='text-center' style={{ color: '#EA2027' }}>
                        {password && password.length < 8 && 'پسورد باید بیش از 8 کاراکتر باشد'}
                    </div>
                    <p>تکرار رمز عبور</p>
                    <input className="input" type="password" name="password_confirmation"
                        placeholder=" تکرار رمز عبور "
                        onChange={handlerConfirmPassword} />
                    <div className='text-center' style={{ color: '#EA2027' }}>
                        {confirmPassword && confirmPassword !== password && 'تکرار رمز عبور وارد شده همخوانی ندارد'}
                    </div>
                    <button type="submit" className=" btn2 btn btn-success">ثبت نام</button>

                </form>
            </div>
        </div>


    )

}
