import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';

export default function Shirt(props){
    const {shirt}=props;
    return(
        <div key={shirt._id} className="card">
            <Link to={`/shirt/${shirt._id}`}><img className="shirt-img" src={shirt.image} alt={shirt.name}></img></Link>
            <div className="card-body">
                <Link to={`/shirt/${shirt._id}`} style={{textDecoration:"none"}}>
                    <h2>{shirt.name}</h2>
                </Link>
                <Rating rating={shirt.rating} numReviews={shirt.numReviews}></Rating>
                <div className="price">{shirt.price} Rs.</div>
            </div>
        </div>
    );
}