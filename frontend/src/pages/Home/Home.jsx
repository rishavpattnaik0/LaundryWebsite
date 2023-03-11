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
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facere odit, sed fugit id magnam quas esse? Animi, eaque aliquam! Quo, laborum harum? Suscipit assumenda voluptate ipsa quia maxime illum.</p>
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
  

<div class="container second">
    <div class="item">
        <div class="img img-first"></div>
        <div class="card">
            <h3>Services</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minima ratione esse sequi sit et, consequatur corporis quia eligendi, iste amet dolor consectetur ducimus perferendis architecto saepe nulla commodi officia.</p>
        <a className="otherpage" href={ROUTES.Services}>Visit</a>
        </div>
    </div>

    <div class="item">
        <div class="img img-second"></div>
        <div class="card">
            <h3>Testimonials</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minima ratione esse sequi sit et, consequatur corporis quia eligendi, iste amet dolor consectetur ducimus perferendis architecto saepe nulla commodi officia.</p>
        <a className='otherpage' href={ROUTES.Testimonials}>View</a>
        </div>
    </div>

    <div class="item">
        <div class="img img-third"></div>
        <div class="card">
            <h3>Stores</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minima ratione esse sequi sit et, consequatur corporis quia eligendi, iste amet dolor consectetur ducimus perferendis architecto saepe nulla commodi officia.</p>
        <a class="otherpage" href={ROUTES.Stores}>Find</a>
        </div>
    </div>
  </div>


</div>
  )
}
export default Home;