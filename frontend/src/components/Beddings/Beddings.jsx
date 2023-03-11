import React from 'react'
import './Beddings.css'
import axios from 'axios'
import {  notification } from 'antd';
import { useState } from 'react'
import rupee from '../../assets/images/rupee_img.png'
const  Beddings = () => {

    const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Added !',
      description:
        'Successfully Added this item to your cart.',
    });
  };

    const [bedcount,setBedcount] = useState(0);
    const [pillowcount,setPillowcount] = useState(0);
    const [blanketcount,setBlanketcount] = useState(0);
    
    const shreyas = () =>{

        if(bedcount){
        let userid=localStorage.getItem('userid');
        console.log(userid);
        axios.post('http://localhost:1999/user/add1',{
            userid,
            name:'Bedsheets',
            count:bedcount,
            price:90
    }).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
        openNotificationWithIcon('success')
    }
}

    const shreyas1 = () =>{

        if(pillowcount!=0){
        let userid=localStorage.getItem('userid');
        console.log(userid);
        axios.post('http://localhost:1999/user/add1',{
        userid,
        name:'Pillow Covers',   
        count:pillowcount,
        price:50
        
    }).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
        openNotificationWithIcon('success')
    }
}   

    const shreyas2 = () =>{
        if(blanketcount!=0){
        let userid=localStorage.getItem('userid');
        console.log(userid);
        axios.post('http://localhost:1999/user/add1',{
        userid,
        name:'Blankets',
        count:blanketcount,
        price:150
        
    }).then(res=>{
            console.log(res);
            
        }).catch(err=>{
            console.log(err);
        })
    openNotificationWithIcon('success')
    }
}
  return (
    <div>
    {contextHolder}
    <div class="container1234 second1234">
        <div class="item1234">
            <div class="img1234 img-first1"></div>
            <div class="card1234">
                <h3 id='bed'>Bedsheets</h3>
                <h2><img class="ruppee" src={rupee} alt="" />90/-</h2>
            </div>
        <div class="cartitems1234">  
            <div class="cart1234">
                <input type="button" id="minus" value="-" onClick={() => bedcount>0 ? setBedcount(bedcount-1) : setBedcount(0)}/>
                <input type="text" value={bedcount} id="text" />
                <input type="button" id="plus" value="+" onClick={() => setBedcount(bedcount+1)}/>
            </div>
            <div>
                <button class="addtocart1234" onClick={() => shreyas()}>🛒 Add to Cart</button>
            </div>
        </div>
    </div>
    
        <div class="item1234">
            <div class="img1234 img-second2"></div>
            <div class="card1234">
                <h3 id='pillow'>Pillow covers</h3>
                <h2 ><img class="ruppee" src={rupee} alt="" />50/-</h2>
            </div>
        <div class="cartitems1234" >  
            <div class="cart1234">
                <input type="button" id="minus" value="-" onClick={() => pillowcount > 0 ? setPillowcount(pillowcount-1) : setPillowcount(0)}/>
                <input type="text" value={pillowcount} id="text" />
                <input type="button" id="plus" value="+" onClick={() => setPillowcount(pillowcount+1)}/>
            </div>
            <div>
                <button class="addtocart1234" onClick={() => shreyas1()}>🛒 Add to Cart</button>
            </div>
        </div>
</div>
    
    
    <div class="item1234">
            <div class="img1234 img-third3"></div>
            <div class="card1234">
                <h3 id='Blanket'>Blankets</h3>
                <h2 ><img class="ruppee" src={rupee} alt="" />150/-</h2>
            </div>
        <div class="cartitems1234" >  
            <div class="cart1234">
                <input type="button" id="minus" value="-"  onClick={() => blanketcount>0 ? setBlanketcount(blanketcount-1): setBlanketcount(0)}/>
                <input type="text" value={blanketcount} id="text" />   
                <input type="button" id="plus" value="+" onClick={() => setBlanketcount(blanketcount+1)}/>
            </div>
            <div>
                <button class="addtocart1234" onClick={() => shreyas2()}>🛒 Add to Cart</button>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Beddings;