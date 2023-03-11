import React, { useState,useEffect,useRef } from 'react'
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/images/header.jpg"
import axios from 'axios';
import './Login.css'
import { Spin } from 'antd';
import {ROUTES} from '../../routes/RouterConfig.js'
const Login = () => {
    const navigate=useNavigate();
    const form = useRef(null)
    const [login,setLogin] =useState(false);
    const [signup1,setSignup1]=useState(false);
    const [login1,setLogin1] = useState(true);
    const [loginerr,setLoginerr]=useState("");
    const [signuperr,setSignuperr]=useState("");
    const  initialValues = {  uname1: "",uemail1: "", upass1: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [inputs,setInputs]=useState({
        uemail:"",
        upass:""
      });
    const [formErrors, setsignupFormErrors] = useState({});
    const [formErrors1, setloginFormErrors] = useState({});
    const [signup,setSignup]=useState(false);
      const shreyas = (e) => {
        e.preventDefault();
        const newdata={...inputs};
        newdata[e.target.name]=e.target.value;
        setInputs(newdata);
        console.log(inputs);
      };
      const shreyas1=(e) =>{
        e.preventDefault();
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value});
        console.log(formValues);
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        setloginFormErrors(validate1(inputs));
        axios.post("http://localhost:1999/user/login",{
            email:inputs.uemail,
            password:inputs.upass
        }).then(res=>{
            console.log(res);
            setLogin(true);
            localStorage.setItem('login',true);
            setLoginerr('');
            localStorage.setItem('name',res.data.data.username);
            localStorage.setItem('userid',res.data.data._id);
            window.location.reload(false);
            navigate(ROUTES.Home);
        }).catch(err=>{
            console.log(err);
            setLoginerr(err.response.data.message);
        })
    }

    const handleSubmit1 =(e) =>{
        e.preventDefault();
        setsignupFormErrors(validate(formValues));
        
        axios.post("http://localhost:1999/user/createUser",{
            username:formValues.uname1,
            email:formValues.uemail1,
            password:formValues.upass1
        }).then(res=>{
            console.log(res);
            setSignup1(true);
            localStorage.setItem('login',true);
            localStorage.setItem('signup',true);
            setSignuperr('');
            // navigate(e);
        }).catch(err =>{
            console.log(err);
            setSignuperr(err.response.data.message);
        });
    }
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.uname1) {
          errors.username = "Username is required!";
        }
        if (!values.uemail1) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.uemail1)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.upass1) {
          errors.password = "Password is required";
        }
        if(values.upass1.length<6)
        {
          errors.password='Password should be atleast 6 characters'
        }
        return errors;
      };

      const validate1 = (values) => {
        const errors = {};
        console.log(values.uemail);
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.uemail) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.uemail)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.upass) {
          errors.password = "Password is required";
        }
        return errors;
      };

      const shreyas2 = () =>{
        
      };
      
      const hitman = () =>{
        setSignup(true);
        setLogin1(false);
      }

      const hitman1 = () =>{
        setLogin1(true);
        setSignup(false);
      }
  return (
    <div class="box">
        <img src={img1}/>
        <div class="page">
            <div class="header">
                <a id='login' href="#login12" class={login1 ? 'active' : null} onClick={(e) => hitman1(e)}>login</a>
                <a id='signup' href="#signup12" class={signup ? 'active' : null} onClick={(e) => hitman(e)}>signup</a>
            </div>
            <div class="content">
            <form class="login" id='login12' ref={form} name="loginForm">
            <input type="text" className='a' name="uemail" required autoComplete='off' placeholder="Username" onChange={(e) => shreyas(e)}/>
            <p style={{color:"red"}}>{formErrors1.email}</p>
            <input type="password" className='a' name="upass" id="logPassword" required autoComplete='off' placeholder="Password" onChange={(e) => shreyas(e)}/>
            <p style={{color:"red"}}>{formErrors1.password}</p>
            <p style={{color:"red"}}>{loginerr}</p>
            <div id="check">
                <input type="checkbox"   id="remember" />
                <label for="remember">Remember me</label>
            </div>
            <br/><br/>
            <input type="submit" className='a' value="Login" onClick={(e) => handleSubmit(e)}/>
            <a onClick={shreyas2()}>Forgot Password?</a>
        </form>

        <form class="signup" id='signup12' name="signupForm">
        <input type="email" className='a' name="uemail1" id="signEmail" placeholder="Email" onChange={(e) => shreyas1(e)}/>
        <p style={{color:"red"}}>{formErrors.email}</p>
        <input type="text" className='a' name="uname1" id="signName" placeholder="Username" onChange={(e) => shreyas1(e)}/>
        <p style={{color:"red"}}>{formErrors.username}</p>
        <input type="password" className='a' name="upass1" id="signPassword" placeholder="Password" onChange={(e) => shreyas1(e)}/><br />
        <p style={{color:"red"}}>{formErrors.password}</p>
        <p style={{color:"red"}}>{signuperr}</p>
        <input type="submit" value="SignUp" onClick={(e) => handleSubmit1(e)}/>
    </form>
    {
       login ? <Spin/> : null
    }
            </div>
        </div>
    </div>
  )
}
export default Login;