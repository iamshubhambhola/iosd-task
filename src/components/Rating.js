import React from 'react'

export default function Rating(props){
    const {rating,numReviews}=props;
    return( 
        <div>
        <div class="rating">
            <span><i class={rating>=1?"fa fa-star": rating>=0.5 ? "fa fa-star-half-o":"fa fa-star-o"}></i></span>
            <span><i class={rating>=2?"fa fa-star": rating>=1.5 ? "fa fa-star-half-o":"fa fa-star-o"}></i></span>
            <span><i class={rating>=3?"fa fa-star": rating>=2.5 ? "fa fa-star-half-o":"fa fa-star-o"}></i></span>
            <span><i class={rating>=4?"fa fa-star": rating>=3.5 ? "fa fa-star-half-o":"fa fa-star-o"}></i></span>
            <span><i class={rating>=5?"fa fa-star": rating>=4.5 ? "fa fa-star-half-o":"fa fa-star-o"}></i></span>
        </div>        
        <span style={{color:"black"}}>{numReviews + ' reviews'}</span>
        </div>
    );
}