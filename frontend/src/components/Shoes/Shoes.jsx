import React from 'react'
import './Shoes.css'
import rupee from '../../assets/images/rupee_img.png'
import axios from 'axios'
import { useState } from 'react'    
import {  notification } from 'antd';
const Shoes = ()  => {

    const [shcount,setShcount] = useState(0);
    const [sh1count,setSh1count] = useState(0);

    const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Added !',
      description:
        'Successfully Added this item to your cart.',
    });
  };

    const shreyas = () =>{
    
        if(shcount!=0){
        let userid=localStorage.getItem('userid');
        console.log(userid);
        axios.post('http://localhost:1999/user/add1',{
            userid,
            name:'Shoes',
            count:shcount,
            price:100
    }).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
        openNotificationWithIcon('success')
    }
      }
    
    const shreyas1 = () =>{
        if(sh1count!=0){
        let userid=localStorage.getItem('userid');
        console.log(userid);
        axios.post('http://localhost:1999/user/add1',{
        userid,
        name:'Suits',   
        count:sh1count,
        price:70
        
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
            <h3>Shoes | Sneakers</h3>
            <h2><img class="ruppee" src={rupee} alt="" />100/-</h2>
        </div>
    <div class="cartitems1234" >  
        <div class="cart1234">
            <input type="button" id="minus" value="-" onClick={() => shcount>0 ? setShcount(shcount-1) : setShcount(0)}/>
            <input type="text" value={shcount} id="text" />
            <input type="button" id="plus" value="+" onClick={() => setShcount(shcount+1)}/>
        </div>
        <div>
            <button class="addtocart1234" onClick={() => shreyas()}>🛒 Add to Cart</button>
        </div>
    </div>
</div>


    <div class="item1234">
        <div class="img1234 img-second2"></div>
        <div class="card1234">
            <h3>Suits</h3>
            <h2 ><img class="ruppee" src={rupee} alt="" />70/-</h2>
        </div>
    <div class="cartitems1234" >  
        <div class="cart1234">
            <input type="button" id="minus" value="-" onClick={() => sh1count>0 ? setSh1count(sh1count-1) : setSh1count(0)}/>
            <input type="text" value={sh1count} id="text" />
            <input type="button" id="plus" value="+" onClick={() => setSh1count(sh1count+1)}/>
        </div>
        <div>
            <button class="addtocart1234" onClick={() => shreyas1()}>🛒 Add to Cart</button>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Shoes;