import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { Menu, Space,Spin } from 'antd';
import {
  Nav,
  NavLink,
  NavMenu
} from './NavbarElements';
import "./Navbar.scss";
import Login from "../Login/Login";
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import {ROUTES} from '../../routes/RouterConfig'
let b;
const Navbar = () => {

  const [a,setA]=useState(localStorage.getItem('login'));

  const logout = (e) =>{
    localStorage.setItem('login',false);
    setA(false);
    navigate(e);
  }

  const update = () =>{
        navigate(ROUTES.Details);
  }
  const update1 = () =>{
    navigate(ROUTES.Password);
  }

   b=localStorage.getItem('name');
   const [isModalVisible, setIsModalVisible] = useState(false);
   const navigate=useNavigate();

  return (
    <div>
      <Nav>
        <NavMenu>
          <NavLink className='hi' to={ROUTES.Services}  activeStyle>
            Services
          </NavLink>
          <NavLink to={ROUTES.About} activeStyle>
            About Us
          </NavLink>
          <NavLink to={ROUTES.Testimonials} activeStyle>
            Testimonials
          </NavLink>
          <NavLink to={ROUTES.Contact} activeStyle >
            Contact Us
          </NavLink>
          <NavLink className='hi' to={ROUTES.Orders}  activeStyle>
           🛒 View Cart
          </NavLink>
          {
            !a ? <NavLink  to='' visible={!a} onClick={() => {setIsModalVisible(true)}} activeStyle>
            Sign Up/Login
          </NavLink>
          :
          <div>
          <div class="dropdown">
  <button class="btn hiii btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <h4>👦</h4>{b} 
  </button>
  <ul class="dropdown-menu">
    <li className='li'><a class="dropdown-item" onClick={(e) => update(e)}>Update Personal Details</a></li>
    <li className='li'><a class="dropdown-item" href="#" onClick={(e) => update1(e)}>Update Password</a></li>
    <li className='li'><a class="dropdown-item" onClick={() => logout(ROUTES.Home)}>Logout</a></li>
  </ul>
</div>
     </div>
          }

        </NavMenu>
      </Nav>
      <Modal
          visible={isModalVisible && !a}
          onOk={() => {
            setIsModalVisible(false);
          }}
          onCancel={() => {
            setIsModalVisible(false);
          }}>
          <Login/>
        </Modal>
    </div>
  );
};
  
export default Navbar;