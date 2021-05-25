import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';  
import { detailsShoe } from '../actions/shoeActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating'; 

export default function ShoeScreen(props){  
    const dispatch=useDispatch();
    const shoeId=props.match.params.id;
    const [qty,setQty] = useState(1);
    const shoeDetails = useSelector((state) => state.shoeDetails);
    const {loading, error, shoe} = shoeDetails; 

    useEffect(()=>{
        dispatch(detailsShoe(shoeId));
    },[dispatch, shoeId]);
    const addToCartHandler=()=>{
        props.history.push(`/cart/${shoeId}?qty=${qty}`);
    };
    return (
        <div> 
        {loading? (<LoadingBox></LoadingBox>
        ):
        error ? (
          <MessageBox variants="danger">{error}</MessageBox>
        ):( 
            <div>
            <Link style={{textDecoration: "none" ,paddingLeft:"46%", fontSize:"2.1rem"}} to="/">Back to Result</Link>
            <div className="row cntr">
                <div className="col-sm-2 col2">
                    <img src={shoe.image} className="large" alt={shoe.name}></img>
                </div>
                <div className="col-sm-1 col1">
                    <ul>
                        <li>
                            <h1>{shoe.name}</h1>
                        </li>
                        <li>
                            <Rating rating={shoe.rating} numReviews={shoe.numReviews}></Rating>
                        </li>
                        <li><b>Price :</b> {shoe.price} Rs</li>
                        <li><b>Description :</b> 
                            <p>{shoe.descriptn}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-1 col1">
                    <div className="card card-body"><ul>
                        <li>
                            <div className="row">
                                <div>Price</div>
                                <div>{shoe.price} Rs</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Status</div> 
                                <div>{shoe.countInStock>0?<span className="success">In Stock</span>:
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
                                {shoe.countInStock > 0 && (
                                  <>
                                    <li>
                                      <div className="row">
                                        <div>Qty</div>
                                        <div>
                                          <select
                                            value={qty}
                                            onChange={(e) => setQty(e.target.value)}
                                          >
                                            {[...Array(shoe.countInStock).keys()].map(
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
            )}

        </div>
        
    );
}