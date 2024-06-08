import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ViewAll = () => {
    const [product,changeProduct] = useState([])
    const fecthData = ()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (response)=>{
                changeProduct(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fecthData()},[])
  return (
    <div>
        <Navbar/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {product.map(
                            (value,index) => {
                                return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.image} class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.title}</h5>
                                                <p class="card-text">{value.price}</p>
                                                <Link to='' class="btn btn-primary">Add to cart</Link>
                                            </div>
                                            </div>
                                    </div>
                            }
                        )}
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll