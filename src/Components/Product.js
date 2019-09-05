import React from 'react'

export const Product = (props) => {
    return (
        <div className="release">
            <p>{props.name}</p>
            <img src={props.img} alt={props.name} />
            
            <p style={{textAlign: 'justify'}}>{props.desc}</p>
            <br />
            <p>Price: {props.price}</p>
            <button 
            className="add__cart"
            >Add to Cart
            </button>
          

        </div>
    )
}