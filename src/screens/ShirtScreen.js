import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { detailsShirt } from '../actions/shirtActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating'; 

export default function ShirtScreen(props){ 
    const dispatch=useDispatch();
    const shirtId=props.match.params.id;
    const [qty,setQty] = useState(1);
    const shirtDetails = useSelector((state) => state.shirtDetails);
    const {loading, error, shirt} = shirtDetails; 

    useEffect(()=>{
        dispatch(detailsShirt(shirtId));
    },[dispatch, shirtId]);
    const addToCartHandler=()=>{
        props.history.push(`/cart/${shirtId}?qty=${qty}`);
    };
    return (
        <div> 
            {loading? (<LoadingBox></LoadingBox>
            ):
            error ? (
              <MessageBox variants="danger">{error}</MessageBox>
            ):( 
                <div>
                    <Link className="backto" style={{textDecoration: "none" , fontSize:"2.1rem"}} to="/">Back to Result</Link>
                    <div className="row cntr">
                        <div className="col-sm-2 col2">
                            <img src={shirt.image} className="large" alt={shirt.name}></img>
                        </div>
                        <div className="col-sm-1 col1">
                            <ul>
                                <li>
                                    <h1>{shirt.name}</h1>
                                </li>
                                <li>
                                    <Rating rating={shirt.rating} numReviews={shirt.numReviews}></Rating>
                                </li>
                                <li><b>Price :</b> {shirt.price} Rs</li>
                                <li><b>Description :</b> 
                                    <p>{shirt.descriptn}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-1 col1">
                            <div className="card card-body"><ul>
                                <li>
                                    <div className="row">
                                        <div>Price</div>
                                        <div>{shirt.price} Rs</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Status</div> 
                                        <div>{shirt.countInStock>0?<span className="success">In Stock</span>:
                                            <span className="error">Unavailable</span>}</div>   
                                    </div>    
                                </li> 
                                <li>
                                    <div className="row">
                                        <div>Size</div>
                                        <div style={{fontSize:"1.8rem"}}><select name="size" id="sizeNo" style={{borderRadius:"0.7rem", background:"whitesmoke"}}>
                                        <option value="">--select--</option>
                                        <option value="X">X</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option></select>
                                        </div>
                                    </div>
                                </li>  
                                {shirt.countInStock > 0 && (
                                  <>
                                    <li>
                                      <div className="row">
                                        <div>Qty</div>
                                        <div>
                                          <select
                                            value={qty}
                                            onChange={(e) => setQty(e.target.value)}
                                          >
                                            {[...Array(shirt.countInStock).keys()].map(
                                              (x) => (
                                                <option key={x + 1} value={x + 1}>
                                                  {x + 1}
                                                </option>
                                              )
                                            )}
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <button
                                        onClick={addToCartHandler}
                                        className="primary block"
                                        style={{fontSize:"1.8rem"}}
                                      >
                                        Add to Cart
                                      </button>
                                    </li>
                                  </>
                                )}
                            </ul></div>
                        </div>
                    </div>
                </div>
               )
            
            }</div>
        
    );
}