import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';

export default function Shoe(props){
    const {shoe}=props;
    return(
        <div key={shoe._id} className="card">
            <Link to={`/shoe/${shoe._id}`}><img className="shoe-img" src={shoe.image} alt={shoe.name}></img></Link>
            <div className="card-body">
                <Link style={{textDecoration:"none"}} to={`/shoe/${shoe._id}`}>
                    <h2>{shoe.name}</h2>
                </Link>
                <Rating rating={shoe.rating} numReviews={shoe.numReviews}></Rating>
                <div className="price">{shoe.price} Rs.</div>
            </div>
        </div>
    );
}
 