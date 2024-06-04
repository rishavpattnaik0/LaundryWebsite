import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import "./Home.scss"
import img1 from "../../assets/images/header.jpg"
import Login from '../../components/Login/Login';
import mainimg from '../../assets/images/1.jpg'
import mainimg1 from '../../assets/images/2.jpg'
import mainimg2 from '../../assets/images/3.jpg'
import mainimg3 from '../../assets/images/4.jpg'
import Navbar1 from "../../components/Navbar/Navbar";
const Home = () => {
    const navigate = useNavigate()

    const changeDir = (dir) =>{
        navigate(dir)
    }
    
  return (
    <div className='main'>
    <div class="header-outer">
    <div class="header-inner responsive-wrapper">
    <div class="header-logo">
    <img src={img1} className='starter'/>
    </div>
    <div className='header-navigation'>
    <Navbar1/>
    </div>
    </div>
    </div>
<div class="container first">
    <h1 class="logo"> GoLaundry</h1>
    <p><h2>NOTE</h2>This website is a developmental prototype and only build during learning of the process .</p>
    <a>Welecome folks!!</a>
    </div>
    <div class="blank"></div>
    
    <div class="container third" id="services1">
    <section class="services-area pt-top border-bottom pb-20 mb-60">
        <div class="container">
            <div class="row justify-content-center">
                <div class="">
                    <div class="section-tittle text-center mb-55">
                        <span class="element" style={{color: "#db7c00db"}}><h2>Our Process</h2></span>
                        <h4>This is how we work</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center">
                        <div class="cat-icon">
                            <img class="tslogo" src={mainimg} alt="" />
                        </div>
                        <div class="cat-cap">
                            <h2 style={{color: "#e1942fdc"}}> We collect your clothes</h2>
                            <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center">
                        <div class="cat-icon">
                            <img class="washlogo" src={mainimg1} alt="" />
                        </div>
                        <div class="cat-cap">
                            <h2 style={{color: "#e1942fdc"}}>Wash your clothes</h2>
                            <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center">
                        <div class="cat-icon">
                            <img class="dlv_logo" src={mainimg2} alt="" />
                        </div>
                        <div class="cat-cap">
                            <h2 style={{color: "#e1942fdc"}}>Press clothes</h2>
                            <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cat text-center">
                        <div class="cat-icon">
                            <img class="dlv_logo" src={mainimg3} alt="" />
                        </div>
                        <div class="cat-cap">
                            <h2 style={{color: "#e1942fdc"}}>Get fast Delivery</h2>
                            <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<iframe
    allow="microphone;"
    width="3500"
    height="4300"
    src="https://console.dialogflow.com/api-client/demo/embedded/a0dd81f3-cc74-42f7-a1e4-c0c3da6a2c08">
</iframe>
</div>
  )
}
export default Home;
