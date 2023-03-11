import React from 'react'
import './Services.css'
import img1 from "../../assets/images/header.jpg"
import { useState } from 'react'
import {ROUTES} from '../../routes/RouterConfig'
import Navbar1 from '../../components/Navbar/Navbar'
import Shirt from '../../components/Shirts/Shirts'
import Beddings from '../../components/Beddings/Beddings'
import Shoes from '../../components/Shoes/Shoes'
const  Services = () => {

    const [clothes,setClothes]=useState(false);
    const [beddings,setBeddings]=useState(false);
    const [shoes,setShoes]=useState(false);
    
    const shreyas = () =>{
    setClothes(true);
    setBeddings(false);
    setShoes(false);
    }

    const shreyas1 = () =>{
        setClothes(false);
        setBeddings(true);
        setShoes(false);
    }
    
    const shreyas2 = () =>{
        setClothes(false);
        setBeddings(false);
        setShoes(true);
    }
  return (
    <div className='main'>
    <div class="header-outer">
    <div class="header-inner responsive-wrapper">
    <div class="header-logo">
    <img src={img1} />
    </div>
    <div className='header-navigation'>
    <Navbar1/>
    </div>
    </div>
    </div>
    <div class="container1 second">
    <h3><a href={ROUTES.Home} class="previous round abc">&#8249;</a></h3>
    <div class="item">
        <div class="img img-first"></div>
        <div class="card">
            <h3>Clothes</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minima ratione esse sequi sit et, consequatur corporis quia eligendi, iste amet dolor consectetur ducimus perferendis architecto saepe nulla commodi officia.</p>
        <a className='hdlink' onClick={() => shreyas()}>Place</a>
        </div>
    </div>


    <div class="item">
        <div class="img img-second"></div>
        <div class="card">
            <h3>Beddings & Pillow covers</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minima ratione esse sequi sit et, consequatur corporis quia eligendi, iste amet dolor consectetur ducimus perferendis architecto saepe nulla commodi officia.</p>
        <a className='hdlink' onClick={() => shreyas1()}>Add</a>
        </div>
    </div>

    <div class="item">
        <div class="img img-third"></div>
        <div class="card">
            <h3>Shoes & Suites</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minima ratione esse sequi sit et, consequatur corporis quia eligendi, iste amet dolor consectetur ducimus perferendis architecto saepe nulla commodi officia.</p>
        <a className='hdlink' onClick={() => shreyas2()}>Add</a>
        </div>
    </div>
  </div>
{
    clothes ? <Shirt/> : beddings ? <Beddings/> : shoes ? <Shoes/>:null

}
  </div>
  )
}
export default Services;