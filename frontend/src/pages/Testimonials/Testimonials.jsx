import React from 'react'
import './Testimonials.css'
import img from "../../assets/images/header.jpg"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState,useEffect } from 'react'
import Navbar1 from '../../components/Navbar/Navbar'
import { notification, Space } from 'antd';
import { Button, Divider  } from 'antd';
import  { NotificationPlacement } from 'antd/es/notification/interface';
import { ROUTES } from '../../routes/RouterConfig';
const Testimonials = ()  => {
    const navigate=useNavigate();
    const initialValues={
    name:'',
    email:'',
    password:'',
    rating:'',
    feedback:''
    }

    const [formValues, setFormValues] = useState(initialValues);
    const [formerr,setFormerr]=useState('');
    const [formerr1,setFormerr1] = useState();
    const [submitted,setIsSubmitted]=useState(false);
    const [stars,setStar]=useState();

    const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: 'Success',
      description:
        'Thanks For providing review.',
      placement,
    });
  };

  const openNotification1 = (placement: WarningPlacement) => {
    api.info({
      message: 'Failure',
      description:
        'Please Login First',
      placement,
    });
  };

    const shreyas = (e) =>{
    e.preventDefault();
    const {name,value}=e.target;
    setFormValues({...formValues,[name]:value});
    console.log(formValues);
    }
    const shreyas1 = (e) =>{
      setStar(e.target.value);
      console.log(stars);
    }
    const handelSubmit = (e) =>{
      e.preventDefault();
      if(!localStorage.getItem('login'))
      {
        openNotification1('top');
      }
      else{
      setFormerr(validate(formValues));
      console.log(formerr)
      axios.post("http://localhost:1999/user/add",{
      name:formValues.name,
      email:formValues.email,
      password:formValues.password,
      rating:stars,
      feedback:formValues.feedback
      }).then(res =>{
        console.log(res);
        setFormerr1('');
        setIsSubmitted(true);
        navigate(ROUTES.Services);
      }).catch(err =>{
        console.log(err);
        setFormerr1(err.response.data.message);
      });
      if(!formerr1)
      {
        openNotification('top')
      }
    }
    }
    

    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.name) {
        errors.username = "Username is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      if(!values.feedback)
      {
        errors.feedback='Please fill the feedback sections'
      }
      return errors;
    };

    const hitman = (e) =>{
      navigate(e);
    }

  return (

    <div className='main1'>
    {contextHolder}
    <div class="header-outer">
    <div class="header-inner responsive-wrapper">
    <div class="header-logo">
    <img src={img} className='starter'/>
    </div>
    <div className='header-navigation1'>
    <Navbar1/>
    </div>
    </div>
    </div>
    <div className='section'>
    <h2 id="fh2">WE APPRECIATE YOUR REVIEW!</h2>
    <h6 id="fh6">Your review will help us to improve our web hosting quality skills, and customer services.</h6>
    
    <form className='form row-span-2' id="feedback" action="">
    <div className='personal col-lg-2'>
      <div class="pinfo">Your personal info</div>
      
    <div class="form-group">
      <div class="col-md-4 inputGroupContainer">
      <div class="input-group">
      <span class="input-group-addon"><i class="fa fa-user"></i></span>
      <input  name="name" autoComplete='off' class="form-control"  type="text" onChange={(e) => shreyas(e)}/>
        </div>
      </div>
      <p style={{color:'red'}}>{formerr.username}</p>
    </div>
    <div class="form-group">
      <div class="col-md-4 inputGroupContainer">
      <div class="input-group">
      <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
        <input name="email" type="email" class="form-control" autoComplete='off' onChange={(e) => shreyas(e)}/>
        </div>
      </div>
      <p style={{color:'red'}}>{formerr.email}</p> 
    </div>
    
    <div class="form-group">
      <div class="col-md-4 inputGroupContainer">
      <div class="input-group">
      <span class="input-group-addon"><i class="fa fa-globe"></i></span>
      <input name="password" type="password" autoComplete='off' class="form-control"  onChange={(e) => shreyas(e)}/> 
      </div>
      </div>
      <p style={{color:'red'}}>{formerr.password}</p>  
    </div>
    
     <div class="pinfo">Rate our overall services.</div>
      
    
    <div class="form-group">
      <div class="col-md-4 inputGroupContainer">
      <div class="input-group">
      <span class="input-group-addon"><i class="fa fa-heart"></i></span>
       <select class="form-control" id="rate" onChange={(e) => shreyas1(e)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        </div>
      </div>
    </div>
    
     <div class="pinfo">Write your feedback.</div>
      
    
    <div class="form-group">
      <div class="col-md-4 inputGroupContainer">
      <div class="input-group">
      <span class="input-group-addon"><i class="fa fa-pencil"></i></span>
      <textarea class="form-control" name='feedback' id="review" rows="3" onChange={(e) =>shreyas(e)}></textarea> 
      </div>
      </div>
      <p style={{color:'red'}}>{formerr.feedback}</p> 
    </div>
    <p style={{color:'red',marginleft:'2%'}}>{formerr1}</p>
     <button type="submit" class="btn btn-primary submit" onClick={(e) => handelSubmit(e)}>Submit</button>
     </div>
    </form>
    </div>
    {
      submitted ? <button type='button' className='btn ok btn-primary btn-lg' onClick={(e) => hitman(ROUTES.Reviews)}>
        View All User Reviews
      </button>
      : <button type='button' className='btn ok btn-primary btn-lg' onClick={(e) => hitman(ROUTES.Reviews)}>
        View All User Reviews
      </button>
    }
    </div>
  )
}

export default Testimonials;