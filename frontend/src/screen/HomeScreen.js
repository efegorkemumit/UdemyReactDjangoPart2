import React from 'react'
import ProductList from '../component/ProductList'
import Slider from '../component/Slider'
import '../my.css'

function HomeScreen() {
  return (
    <div> 
        <Slider></Slider>

        <div className='container '>
                    <div className='row'>
                     <div className='col-sm-3 m-top25'> 
                        <div className="mb-20"> <i className="fa-solid fa-truck-fast fa-2xl s1"></i></div>
                        <h6>FREE SHIPING</h6>
                        <p>Free delivery worldwide</p>
                     </div>
                     <div className='col-sm-3 m-top25 '> 
                     <div className="mb-20"> <i  className="fa-solid fa-envelope fa-2xl s2"></i> </div>
                        <h6>Order Onlivne</h6>
                        <p>Free delivery worldwide</p>
                     </div>
                     <div className='col-sm-3 m-top25'> 
                     <div className="mb-20"> <i className="fa-solid fa-star fa-2xl s3"></i></div>
                        <h6>Shop And Save</h6>
                        <p>Free delivery worldwide</p>
                     </div>
                     <div className='col-sm-3 m-top25'> 
                     <div className="mb-20"> <i className="fa-solid fa-phone fa-2xl s4"></i></div>
                        <h6>Safe Shoping</h6>
                        <p>Free delivery worldwide</p>
                     </div>
          </div>
       </div>
    <ProductList></ProductList>
  </div>

  )
}

export default HomeScreen