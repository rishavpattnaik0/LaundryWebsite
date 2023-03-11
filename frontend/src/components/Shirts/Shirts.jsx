import React from 'react'
import { useState } from 'react';
import {  notification } from 'antd';
import axios from 'axios';
import rupee from '../../assets/images/rupee_img.png'
import './Shirts.css'
const Shirts = () => {

  const [scount,setScount] =useState(0);
  const [pcount,setPcount]=useState(0);
  const [kcount,setKcount]=useState(0);
  
  const shreyas = () =>{
    if(scount!=0){
    let userid=localStorage.getItem('userid');
    console.log(userid);
    axios.post('http://localhost:1999/user/add1',{
        userid,
        name:'Shirts',
        count:scount,
        price:70
}).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
}
  }

const shreyas1 = () =>{

    if(pcount!=0){
    let userid=localStorage.getItem('userid');
    console.log(userid);
    axios.post('http://localhost:1999/user/add1',{
    userid,
    name:'Pants',   
    count:pcount,
    price:70
    
}).then(res=>{
        console.log(res);

    }).catch(err=>{
        console.log(err);
    })
}
}

const shreyas2 = () =>{
    if(kcount!=0){
    let userid=localStorage.getItem('userid');
    console.log(userid);
    axios.post('http://localhost:1999/user/add1',{
    userid,
    name:'Kurtas',
    count:kcount,
    price:70
    
}).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
}
}

  return (
    <div>
    <div class="container1234 second1234">

    <div class="item1234">
        <div class="img1234 img-first1"></div>
        <div class="card1234">
            <h3>TShirts | Shirts</h3>
            <h2><img class="ruppee" src={rupee} alt="" />70/-</h2>
        </div>
    <div class="cartitems1234">  
        <div class="cart1234">
            <input type="button" id="minus" value="-" onClick={() => scount>0 ? setScount(scount-1) : setScount(0)}/>
            <input type="text" value={scount} id="text" />
            <input type="button" id="plus" value="+" onClick={() => setScount(scount+1)}/>
        </div>
        <div>
            <button class="addtocart1234" onClick={() =>shreyas()}>🛒 Add to Cart</button>
        </div>
    </div>
</div>


    <div class="item1234">
        <div class="img1234 img-second2"></div>
        <div class="card1234">
            <h3>Pants | Trousers</h3>
            <h2 ><img class="ruppee" src={rupee} alt="" />70/-</h2>
        </div>
    <div class="cartitems1234">  
        <div class="cart1234">
            <input type="button" id="minus" value="-" onClick={() => pcount>0 ? setPcount(pcount-1) : setPcount(0)} />
            <input type="text" value={pcount} id="text" />
            <input type="button" id="plus" value="+" onClick={() => setPcount(pcount+1)}/>
        </div>
        <div>
            <button class="addtocart1234" onClick={() =>shreyas1()}>🛒 Add to Cart</button>
        </div>
    </div>
</div>


<div class="item1234">
        <div class="img1234 img-third3"></div>
        <div class="card1234">
            <h3>Kurtas | Lehangas</h3>
            <h2 ><img class="ruppee" src={rupee} alt="" />70/-</h2>
        </div>
    <div class="cartitems1234">  
        <div class="cart1234">
            <input type="button" id="minus" value="-" onClick={() => kcount>0 ? setKcount(kcount-1) : setKcount(0)}/>
            <input type="text" value={kcount} id="text" />
            <input type="button" id="plus" value="+" onClick={() => setKcount(kcount+1)}/>
        </div>
        <div>
            <button class="addtocart1234" onClick={() =>shreyas2()}>🛒 Add to Cart</button>
        </div>
    </div>

    </div>
    </div>
    </div>
  )
}

export default Shirts;