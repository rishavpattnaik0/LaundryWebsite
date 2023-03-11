import React from 'react'
import './Review.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import {ROUTES} from '../../routes/RouterConfig.js'
const Review = () => {
  const [reviews,setReviews]=useState([]);
  const navigate=useNavigate();
     useEffect (() =>{
      axios.get('http://localhost:1999/user/getUser').then(res =>{
        setReviews(res.data.data);
       }).catch(err =>{
        console.log(err);
       })
    });

    const shreyas = () =>{
      navigate(ROUTES.Testimonials)
    }

  return (
    <div>
     
    <div class="outerdiv1234">
        <div class="innerdiv1234">
        <div className='go'>
        <button className='btn btn-lg btn-primary' onClick={(e) => shreyas(e)}>Go Back</button>
        <h1 className='intro' >All User Reviews</h1>
        </div>
            <div class="">
                {
                  reviews && reviews?.map((item,key) =>{
                    return(
                      <div className='div1 eachdiv'>
                      <div class="userdetails">
                    <div class="imgbox">
                        <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg"
                            alt="" className='imagebro' />
                    </div>
                    <div class="detbox">
                        <p class="name">{item.username}</p>
                    </div>
                </div>
                <div class="review">
                    <h4>{item.reviews}</h4>
                </div>
                <p></p>
                </div>  
                    )
                  })
                }
            </div>
        </div>
    </div>
    </div>
  )
}

export default Review;