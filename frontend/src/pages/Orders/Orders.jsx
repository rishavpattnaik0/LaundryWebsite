import React from 'react'
import './Orders.css'
import { useState,useEffect } from 'react';
import {ROUTES} from '../../routes/RouterConfig'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const  Orders = () => {
  const [hi,setHi]=useState(false);
  let value=0;
  const [products,setProducts]=useState();
  const navigate=useNavigate();
      let a= localStorage.getItem('userid');
      const shreyas123 =() =>{
      axios.post('http://localhost:1999/user/getClothes',{
      a
      }).then(res =>{
        setProducts(res.data.data.clothes);
        console.log(res.data.data.clothes); 
        console.log(products);
        setHi(true);
       }).catch(err =>{
        console.log(err);
       })
      }

      const shreyas1234 = () =>{
        navigate(ROUTES.Services);
      }

return (

    <div className='hmmok'>
    
    <div class="bootdey">
    <div class="row bootstrap snippets">
      <div class="col-lg-3 col-md-3 col-sm-12">
        
        <div class="col-lg-12 col-md-12 col-sm-12 hidden-xs">
        </div>
      </div>
      <div class="clearfix visible-sm"></div>
      <div class="col-lg-9 col-md-9 col-sm-12">
        <div class="col-lg-12 col-sm-12">
          <h1 class="title">WELCOME TO SHOPPING CART !</h1>
        </div>
        <div class="col-lg-12 col-sm-12 hero-feature">
          <div class="table-responsive">
            <table class="table table-bordered tbl-cart">
              <thead>
                <tr>

                  <td class="td-qty">Product Name</td>

                  <td class="td-qty" style={{marginleft:'2rem'}}>Quantity</td>
                  <td class="td-qty">Unit Price(Rupees)</td>
                  <td class="td-qty">Sub Total(Rupees)</td>
                </tr>
              </thead>
              <tbody>

              {
                products && products?.map((item,key)=>{
                  value+=(item?.price)*(item?.quantity);
                  return (
                    
                  <tr>
                  <td><p>{item?.name}</p>
                  </td>
                  <td>
                    <div class="input-group bootstrap-touchspin"><span class="input-group-btn"></span><span
                        class="input-group-addon bootstrap-touchspin-prefix" style={{display:'none'}}></span><input
                        type="text" name="" value={item?.quantity} class="input-qty form-control text-center"
                        style={{display:'block'}}/><span class="input-group-addon bootstrap-touchspin-postfix"
                        style={{display:'none'}}></span><span class="input-group-btn"></span></div>
                  </td>
                  <td class="price">{item?.price}</td>
                  <td>{(item?.price)*(item?.quantity)}</td>
                </tr>
                
                  );
                })
               }
                
                
                <tr>
                  <td colspan="6" align="center">Total</td>
                  <td class="total" colspan="2"><b>{value}</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {
            hi ? 
            <div class="btn-group btns-cart">
            <button type="button" class="btn btn-primary hello" onClick={() => shreyas1234()}><i class="fa fa-arrow-circle-left"></i>Continue Shopping</button>
              </div>: <div class="btn-group btns-cart">
              <button type="button" class="btn btn-primary" onClick={() => shreyas123()}><i class="fa fa-arrow-circle-left"></i>Show The Details of Cart</button>
              <button type="button" class="btn btn-primary checkout">Checkout <i class="fa fa-arrow-circle-right"></i></button>  
              </div>
          }
          </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Orders;